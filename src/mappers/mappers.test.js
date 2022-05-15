import { fullResponse } from './__fixtures__'
import { mapCollections, mapEntries } from './'

describe('Mappers', () => {
    describe('mapCollections', () => {

        test('Data should be correctly mapped', () => {
            const collections = mapCollections(fullResponse);

            expect(collections.length).toEqual(4);
            expect(collections[0].name).toEqual(fullResponse.data[0].attributes.name);
            expect(collections[1].id).toEqual(fullResponse.data[1].id);
            expect(typeof collections[3].entries).toBe('object');
        })

        test('Entries should be correctly mapped', () => {

            const collectionsIds = [
                152541,
                196196,
                196494,
                195723
             ];

             const estates = fullResponse.included;

             const entries = mapEntries({
                collectionsIds,
                estates
              });

              expect(entries.length).toEqual(collectionsIds.length);

              for(let i =0; i < entries.length; i++) {
                expect(collectionsIds.includes(parseInt(entries[i].id, 10))).toBe(true)
              }
        })

    })
})