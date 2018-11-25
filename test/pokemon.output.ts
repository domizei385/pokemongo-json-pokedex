import { Move } from '@outcome/move';
import { Pokemon } from '@outcome/pokemon';
import { expect } from 'chai';
import { uniqBy } from 'lodash';

describe('Pokemon Output', () => {
    let input: Pokemon[];
    let moves: Move[];
    beforeEach(() => {
        input = require('../output/pokemon.json');
        moves = require('../output/move.json');
    });

    it('should have pokemons', () => {
        expect(input.length).to.not.equal(0);
    });

    it('should have unique id', () => {
        expect(uniqBy(input, 'id').length).to.equal(input.length)

    });

    it('should have unique moves for each pokemon', () => {
        input.forEach((pokemon) => {
            expect(uniqBy(pokemon.cinematicMoves, 'id').length, `cinematicMoves[x].id of ${pokemon.id} is not unique`).to.equal(pokemon.cinematicMoves.length)
        });
        input.forEach((pokemon) => {
            expect(uniqBy(pokemon.quickMoves, 'id').length, `quickMoves[x].id of ${pokemon.id} is not unique`).to.equal(pokemon.quickMoves.length)
        });
    });

    it('should have values', () => {
        const testFunctions = [
            item => expect(Array.isArray(item.animationTime), 'animationTime type').to.equal(true),
            item => expect(item.animationTime.length, 'animationTime length').to.not.equal(0),
            item => expect(item.id, 'id').to.not.equal(undefined),
            item => expect(item.name, 'name').to.not.equal(undefined),
            item => expect(item.dex, 'dex').to.be.within(1, 809),
            item => expect(Array.isArray(item.cinematicMoves), 'cinematicMoves type').to.equal(true),
            item => expect(item.cinematicMoves.length, 'cinematicMoves length').to.not.equal(0),
            item => expect(Array.isArray(item.quickMoves), 'quickMoves array').to.equal(true),
            item => expect(item.quickMoves.length, 'quickMoves length').to.not.equal(0),
            item => expect(typeof item.family, 'family type').to.equal('object'),
            item => expect(item.family.id, 'family.id').to.not.equal(undefined),
            item => expect(item.family.name, 'family.name').to.not.equal(undefined),
            item => expect(item.height, 'height').to.not.equal(undefined),
            item => expect(item.modelHeight, 'modelHeight').to.not.equal(undefined),
            item => expect(item.kmBuddyDistance, 'kmBuddyDistance').to.not.equal(undefined),
            item => expect(item.weight, 'weight').to.not.equal(undefined),
            item => expect(typeof item.stats, 'stats type').to.equal('object'),
            item => expect(item.stats.baseAttack, 'stats.baseAttack').to.not.equal(undefined),
            item => expect(item.stats.baseDefense, 'stats.baseDefense').to.not.equal(undefined),
            item => expect(item.stats.baseDefense, 'stats.baseDefense').to.not.equal(undefined),
            item => expect(Array.isArray(item.types), 'types type').to.equal(true),
            item => item.types.forEach(type => expect(type.id, 'type id').to.not.equal(undefined)),
            item => item.types.forEach(type => expect(type.name, 'type name').to.not.equal(undefined)),
            item => expect(typeof item.encounter, 'encounter type').to.equal('object'),
            item => expect(item.encounter.attackTimer, 'encounter.attackTimer').to.not.equal(undefined),
            item => expect(item.encounter.cameraDistance, 'encounter.cameraDistance').to.not.equal(undefined),
            item => expect(item.encounter.collisionRadius, 'encounter.collisionRadius').to.not.equal(undefined),
            item => expect(item.encounter.dodgeDistance, 'encounter.dodgeDistance').to.not.equal(undefined),
            item => expect(item.encounter.maxPokemonActionFrequency, 'encounter.maxPokemonActionFrequency').to.not.equal(undefined),
            item => expect(item.encounter.minPokemonActionFrequency, 'encounter.minPokemonActionFrequency').to.not.equal(undefined),
            item => expect(typeof item.camera, 'camera type').to.equal('object'),
            item => expect(item.camera.cylinderRadius, 'camera.cylinderRadius').to.not.equal(undefined),
            item => expect(item.camera.diskRadius, 'camera.diskRadius').to.not.equal(undefined),
            item => expect(item.name === 'Caterpie' || item.camera.shoulderModeScale !== undefined, 'camera.shoulderModeScale').to.equal(true),
            item => expect(Array.isArray(item.nextEvolutionBranches || []), 'nextEvolutionBranches type').to.equal(true),
        ];

        input.forEach(item => {
            testFunctions.forEach(func => {
                func(item);
            });
        });
    });

    it('should have specific properties for specific pokemon', () => {
        const expectations = {
            'BULBASAUR': [
                item => expect(item.evolution.futureBranches[0].costToEvolve.candyCost, 'Bulbasaur should require 25 candies to evolve into Ivysaur').to.equal(25),
                item => expect(item.dex, 'Bulbasaur\'s dex number should be correct').to.equal(1),
                item => expect(item.buddySize.id, 'Bulbasaur\'s buddy size should be medium').to.equal('BUDDY_MEDIUM')
            ],
            'EEVEE': [
                item => expect(item.evolution.futureBranches.length, 'should have 5 nextEvolutionBranches for Eevee').to.equal(5),
                item => expect(item.evolution.pastBranch, 'Eevee should not have past evolutions').to.equal(undefined),
                item => expect(item.evolution.futureBranches, 'Eevee should have future evolutions defined').to.not.equal(undefined),
                item => expect(item.evolution.futureBranches, 'Eevee should have future evolutions').to.not.be.undefined,
                item => expect(item.evolution.futureBranches[0].futureBranches, 'Eevee\'s future evolutions should not evolve').to.be.undefined
            ],
            'UMBREON': [
                item => expect(item.evolution.pastBranch, 'Umbreon should have past evolution').to.not.be.empty,
                item => expect(item.evolution.pastBranch.pastBranch, 'Umbreon should only have one pastEvolution').to.be.undefined,
                item => expect(item.evolution.pastBranch.id, 'Umbreon\'s only pastEvolution should be Eevee').to.equal('EEVEE'),
                item => expect(item.evolution.futureBranches, 'Umbreon should not evolve').to.be.undefined,
                item => expect(item.evolution.costToEvolve.candyCost, 'Umbreon should require 25 candies to evolve from Eevee').to.equal(25)
            ],
            'FLAREON': [
                item => expect(item.evolution.pastBranch, 'Flareon should have past evolution').to.not.be.empty,
                item => expect(item.evolution.pastBranch.pastBranch, 'Flareon should only have one pastEvolution').to.be.undefined,
                item => expect(item.evolution.pastBranch.id, 'Flareon\'s only pastEvolution should be Eevee').to.equal('EEVEE'),
                item => expect(item.evolution.futureBranches, 'Flareon should not evolve').to.be.undefined
            ],
            'SNORLAX': [
                item => expect(item.evolution.pastBranch, 'Snorlax should have past evolution').to.not.be.undefined,
                item => expect(item.evolution.futureBranches, 'Snorlax should not evolve').to.be.undefined
            ],
            'SEADRA': [
                item => expect(item.evolution.pastBranch, 'Seadra should have past evolution').to.not.be.undefined,
                item => expect(item.evolution.futureBranches, 'Seadra should have a defined future evolution tree').to.not.equal(undefined),
                item => expect(item.evolution.futureBranches[0], 'Seadra should evolve').to.be.not.be.undefined,
                item => expect(item.evolution.futureBranches[0].costToEvolve.candyCost, 'Seadra should require 100 candies to evolve into Kingdra').to.equal(100),
                item => expect(item.evolution.futureBranches[0].costToEvolve.evolutionItem.id, 'Evolution item ID').to.equal('ITEM_DRAGON_SCALE'),
                item => expect(item.evolution.futureBranches[0].costToEvolve.evolutionItem.name, 'Seadra should require Dragon Scale to evolve into Kingdra').to.equal('Dragon Scale')
            ],
            'KINGDRA': [
                item => expect(item.evolution.pastBranch.pastBranch, 'Kingdra should have 2 past evolutions').to.be.not.be.undefined,
                item => expect(item.evolution.pastBranch.costToEvolve.candyCost, 'Seadra should require 25 candies to be evolved from Horsea').to.equal(25),
                item => expect(item.evolution.futureBranches, 'Kingdra should not evolve').to.be.undefined,
                item => expect(item.evolution.costToEvolve.candyCost, 'Kingdra should require 100 candies to be evolved from Seadra').to.equal(100),
                item => expect(item.evolution.costToEvolve.evolutionItem.id, 'Evolution item ID').to.equal('ITEM_DRAGON_SCALE'),
                item => expect(item.evolution.costToEvolve.evolutionItem.name, 'Kingdra should require Dragon Scale to be evolved from Seadra').to.equal('Dragon Scale')
            ],
            'FEEBAS': [
                item => expect(item.evolution.pastBranch, 'Feebas should not have past evolution').to.equal(undefined),
                item => expect(item.evolution.futureBranches, 'Feebas should have a defined future evolution tree').to.not.equal(undefined),
                item => expect(item.evolution.futureBranches.length, 'Feebas should evolve').to.equal(1),
                item => expect(item.evolution.futureBranches[0].costToEvolve.candyCost, 'Feebas should require 100 candies to evolve into Milotic').to.equal(100),
                item => expect(item.evolution.futureBranches[0].costToEvolve.kmBuddyDistance, 'Feebas should require 20 km as buddy to evolve into Milotic').to.equal(20)
            ],
            'MILOTIC': [
                item => expect(item.evolution.pastBranch, 'Milotic should have past evolution').to.not.be.undefined,
                item => expect(item.evolution.futureBranches, 'Milotic should not evolve').to.be.undefined,
                item => expect(item.evolution.costToEvolve.candyCost, 'Milotic should require 100 candies to be evolved from Feebas').to.equal(100),
                item => expect(item.evolution.costToEvolve.kmBuddyDistance, 'Milotic should require 20 km as buddy to be evolved from Feebas').to.equal(20)
            ],
            'MAGMAR': [
                item => expect(item.evolution.pastBranch, 'Magmar should have past evolution').to.not.be.empty,
                item => expect(item.evolution.pastBranch.pastBranch, 'Magmar should only have one pastEvolution').to.be.undefined,
                item => expect(item.evolution.pastBranch.id, 'Magmar\'s only pastEvolution should be Magby').to.equal('MAGBY'),
                item => expect(item.evolution.futureBranches[0].id, 'Magmar should evolve into MAGMORTAR').to.be.equal('MAGMORTAR')
            ],
            'GOLDUCK': [
                item => expect(item.evolution.pastBranch, 'Golduck should have past evolution').to.not.be.empty,
                item => expect(item.evolution.pastBranch.pastBranch, 'Golduck should only have one pastEvolution').to.be.undefined,
                item => expect(item.evolution.pastBranch.id, 'Golduck\'s pastEvolution should be Psyduck').to.equal('PSYDUCK'),
                item => expect(item.evolution.futureBranches, 'Golduck should not evolve').to.be.undefined
            ],
            'CHARIZARD': [
                item => expect(item.evolution.pastBranch.pastBranch, 'Charizard should have 2 pastEvolutions').to.not.be.empty,
                item => expect(item.evolution.pastBranch.id, 'Charizard\'s first pastEvolution should be CHARMELEON').to.equal('CHARMELEON'),
                item => expect(item.evolution.pastBranch.pastBranch.id, 'Charizard\'s second pastEvolution should be CHARMANDER').to.equal('CHARMANDER'),
                item => expect(item.evolution.futureBranches, 'Charizard should not evolve').to.be.undefined,
                item => expect(item.buddySize.id, 'Charizard\'s buddy size should be big').to.equal('BUDDY_BIG')
            ],
            'CHARMANDER': [
                item => expect(item.evolution.pastBranch, 'Charmander should not have past evolution').to.equal(undefined),
                item => expect(item.evolution.futureBranches, 'Charmander should have future evolutions').to.not.equal(undefined),
                item => expect(item.evolution.futureBranches[0], 'Charmander should have a future evolution').to.not.be.empty,
                item => expect(item.evolution.futureBranches[0].id, 'Charmander\'s first futureEvolution should be Charmeleon').to.equal('CHARMELEON'),
                item => expect(item.evolution.futureBranches[0].futureBranches, 'Charmander should have two future evolutions').to.not.be.empty,
                item => expect(item.evolution.futureBranches[0].futureBranches[0].id, 'Charmander\'s second futureEvolution should be Charizard').to.equal('CHARIZARD'),
                item => expect(item.buddySize.id, 'Charmander\'s buddy size should be medium').to.equal('BUDDY_MEDIUM')
            ],
            'TYROGUE': [
                item => expect(item.evolution.futureBranches.length, 'should have 3 nextEvolutionBranches for Tyrogue').to.equal(3),
                item => expect(item.evolution.pastBranch, 'Tyrogue should not have past evolutions').to.equal(undefined),
                item => expect(item.evolution.futureBranches.length, 'Tyrogue should have 3 evolutions').to.equal(3),
                item => expect(item.evolution.futureBranches[0].futureBranches, 'Tyrogue\'s future evolutions should not evolve').to.be.undefined,
                item => expect(item.dex, 'Tyrogue\'s dex number should be correct').to.equal(236)
            ],
            'HITMONLEE': [
                item => expect(item.evolution.pastBranch, 'Hitmonlee should have past evolution').to.not.be.empty,
                item => expect(item.evolution.pastBranch.pastBranch, 'Hitmonlee should only have one pastEvolution').to.be.undefined,
                item => expect(item.evolution.pastBranch.id, 'Hitmonlee\'s only pastEvolution should be Tyrogue').to.equal('TYROGUE'),
                item => expect(item.evolution.futureBranches, 'Hitmonlee should not evolve').to.be.undefined
            ],
            'HITMONTOP': [
                item => expect(item.evolution.pastBranch, 'Hitmontop should have past evolution').to.not.be.empty,
                item => expect(item.evolution.pastBranch.pastBranch, 'Hitmontop should only have one pastEvolution').to.be.undefined,
                item => expect(item.evolution.pastBranch.id, 'Hitmontop\'s only pastEvolution should be Tyrogue').to.equal('TYROGUE'),
                item => expect(item.evolution.futureBranches, 'Hitmontop should not evolve').to.be.undefined
            ],
            'MR_MIME': [
                item => expect(item.name, 'MR_MIME should have the name Mr. Mime').to.equal('Mr. Mime'),
            ],
            'FARFETCHD': [
                item => expect(item.name, 'FARFETCHD should have the name Farfetch\'d').to.equal('Farfetch\'d'),
            ],
            'RATTATA_ALOLA': [
                item => expect(item.evolution.futureBranches[0].id, 'Alolan Rattata past first evolution Id should be RATICATE_ALOLA').to.equal('RATICATE_ALOLA'),
                item => expect(item.evolution.futureBranches[0].name, 'Alolan Rattata past first evolution Name should be Raticate Alola').to.equal('Raticate Alola'),
                item => expect(item.evolution.futureBranches[0].costToEvolve.candyCost, 'Alolan Rattata should cost 25 candy to evolve').to.equal(25)
            ],
            'RATICATE_ALOLA': [
                item => expect(item.evolution.pastBranch.id, 'Alolan Raticate first past evolution Id should be RATICATE_ALOLA').to.equal('RATTATA_ALOLA'),
                item => expect(item.evolution.pastBranch.name, 'Alolan Raticate first past evolution Name should be Raticate Alola').to.equal('Rattata Alola'),
                item => expect(item.evolution.costToEvolve.candyCost, 'Alolan Raticate should cost 25 candy to evolve').to.equal(25)
            ],
            'HO_OH': [
                item => expect(item.name, 'HO_OH should have the name Ho-Oh').to.equal('Ho-Oh')
            ]

        };

        input.forEach(mon => {
            if (mon.id in expectations) {
                let testFunctions = expectations[mon.id];
                testFunctions.forEach(func => {
                    func(mon);
                });
            }
        });
    });

    it('should have malePercent / femalePercent when the Pokémon has a gender', () => {
        input.forEach(pokemon => {
            if (pokemon.encounter.gender) {
                expect(pokemon.encounter.gender.femalePercent, `pokemon.encounter.gender.femalePercent ${pokemon.id}`).not.to.equal(undefined);
                expect(pokemon.encounter.gender.malePercent, `pokemon.encounter.gender.malePercent ${pokemon.id}`).not.to.equal(undefined);
            }
        });
    });

    it('should have multiple forms for certain pokemon, like alolan', () => {
        const expectations = {
            'RATTATA': [
                item => expect(item.forms.length, 'Rattata should have 2 forms').to.equal(2),
                item => expect(item.forms[0].id, 'Rattata first form id should be RATTATA').to.equal('RATTATA'),
                item => expect(item.forms[0].name, 'Rattata first form name should be Rattata').to.equal('Rattata'),
                item => expect(item.forms[1].id, 'Rattata second form id should be RATTATA_ALOLA').to.equal('RATTATA_ALOLA'),
                item => expect(item.forms[1].name, 'Rattata second form name should be Rattata Alola').to.equal('Rattata Alola')
            ],
            'RATTATA_ALOLA': [
                item => expect(item.forms.length, 'Rattata should have 2 forms').to.equal(2),
                item => expect(item.forms[0].id, 'Rattata first form id should be RATTATA').to.equal('RATTATA'),
                item => expect(item.forms[0].name, 'Rattata first form name should be Rattata').to.equal('Rattata'),
                item => expect(item.forms[1].id, 'Rattata second form id should be RATTATA_ALOLA').to.equal('RATTATA_ALOLA'),
                item => expect(item.forms[1].name, 'Rattata second form name should be Rattata Alola').to.equal('Rattata Alola')
            ]
        }

        input.forEach(mon => {
            if (mon.id in expectations) {
                let testFunctions = expectations[mon.id];
                testFunctions.forEach(func => {
                    func(mon);
                });
            }
        });
    });

    // it('should match moves', () => {
    //     input.forEach(item => {
    //         if (item.quickMoves) {
    //             item.quickMoves.forEach(quickMove => {
    //                 let filteredMoves = moves.filter(move => move.id == quickMove.id);
    //                 expect(filteredMoves.length).to.not.equal(0, quickMove.id);
    //             });
    //         }
    //         if (item.cinematicMoves) {
    //             item.cinematicMoves.forEach(cinematicMove => {
    //                 let filteredMoves = moves.filter(move => move.id == cinematicMove.id);
    //                 expect(filteredMoves.length).to.not.equal(0, cinematicMove.id);
    //             });
    //         }
    //     });
    // });
});
