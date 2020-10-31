import { ComponentRegister, ComponentRegistry, ComponentType } from '@core/pipeline';
import { Data, RootObject } from '../../income';
import { forEachSeries, mapSeries } from 'p-iteration';

export interface IPipeline {
  Run(): Promise<any>;
}

/**
 * Represents a Pipeline which runs multiple components
 */
export abstract class Pipeline implements IPipeline {
  protected name: string;
  protected input: RootObject;
  protected _components: ComponentRegister[];
  protected parsedInput: Data[];
  private sortedComponents: ComponentRegister[];
  private visitedComponents: Object;

  /**
   * Creates a new pipeline and parses the input by calling
   * `isItemTemplate`
   * @param input The GAME_MASTER data
   * @param name The name of the pipeline
   */
  constructor(input: RootObject, name: string) {
    this.input = input;
    this.name = name;
    this.parsedInput = this.Parse();
    console.log('Items for ', name, this.parsedInput.length);
  }

  public get Components() {
    if (!this._components) {
      this._components = ComponentRegistry.Instance.Components.filter(component => component.settings.pipeline === this.name);
    }
    return this._components;
  }

  abstract isItemTemplate(item: Data): boolean;

  Parse(): Data[] {
    if (!this.input.template) {console.log("template.parse", this.input);}
    return this.input.template
        .filter(p => this.isItemTemplate(p))
        .map(p => {
         if (!p.data.templateId) {
           p.data.templateId = p.templateId;
         }
         return p.data;
        });
  }

  /**
   * Checks the dependencies of the given component-register
   * @param component The component-register to check the dependencies
   * @param ancestors (optional) Its parent ids
   */
  private visitComponent(component: ComponentRegister, ancestors?: string[]) {
    if (ancestors === undefined) {
      ancestors = [];
    }
    ancestors.push(component.id);
    this.visitedComponents[component.id] = true;

    component.dependencies.forEach(dependency => {
      // @ts-ignore
      const dependencyId = dependency.constructor.name;
      if (ancestors.indexOf(dependencyId) >= 0)  // if already in ancestors, a closed chain exists.
        throw new Error(`Circular dependency "${dependencyId}'" is required by "${component.id}": ${ancestors.join(' -> ')}`);

      // if already exists, do nothing
      if (this.visitedComponents[component.id]) return;
      this.visitComponent(dependency, ancestors.slice(0)); // recursive call
    });

    this.sortedComponents.push(component);
  }

  /**
   * Sorts the components so it is executed with correct dependency relation.
   * Will be stored inside `this.sortedComponents`
   */
  private resolveDependencyResolution() {
    this.sortedComponents = [];
    this.visitedComponents = {};

    this.Components.forEach(component => this.visitComponent(component));
  }

  private async process(component: ComponentRegister, output: any, input: any, additionalInput?: Map<String, any>): Promise<any> {
    return new Promise((resolve, reject) => {
      let callback;

      try {
        // Synchronous
        callback = component.component.Process(output, input, additionalInput);
      } catch (error) {
        reject(error);
      }

      if (callback && callback.then) {
        // Is async
        callback.then(resolve).catch(reject)
      } else {
        resolve(callback);
      }

    });
  }

  private shouldComponentBeProcessed(component: ComponentRegister, input: Data) {
    // console.log(component, " [should process] ", input.templateId, " ===> ", !component.settings.templateId || input.templateId === component.settings.templateId);
    // No templateId settings was set (= allow every item template)
    return !component.settings.templateId ||
        // or is actually correct template id
        input.templateId === component.settings.templateId;
  }

  private async processSimpleMapComponent(component: ComponentRegister, output: any[], additionalInput?: Map<String, any>) {
    return await mapSeries(this.parsedInput, async (input, index) => {
      const processedItem = output[index] || {};
      if (this.shouldComponentBeProcessed(component, input)) {
        return await this.process(component, processedItem, input, additionalInput);
      } else {
        // Skip component processing
        return processedItem;
      }
    });
  }

  /**
   * Runs the components of its Pipeline
   */
  public async Run(): Promise<Object[]> {
    this.resolveDependencyResolution();
    let output = [];
    await forEachSeries(this.sortedComponents, async component => {
      console.log("Run", component);
      console.log("Input: ", this.input);
      let additionalInput = (component.settings.requiresGameMaster ? {'gameMaster': this.input} : {}) as Map<String, any>
      if (component.settings.type === ComponentType.SIMPLE_MAP) {
        output = await this.processSimpleMapComponent(component, output, additionalInput);
      } else if (component.settings.type === ComponentType.ADVANCED_MAP) {
        output = await this.process(component, output, this.parsedInput, additionalInput);
      }
    });
    return output;
  }
}
