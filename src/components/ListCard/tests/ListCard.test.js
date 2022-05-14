import { render, cleanup } from '@testing-library/react';
import {collection} from './__fixtures__'
import ListCard from '../ListCard';

afterEach(cleanup);

describe('ListCard', () => {
    test('should render with 0 entries', async () => {
      const { queryByTestId, queryAllByTestId } = render(<ListCard />);
      const name = queryByTestId('name') 
      expect(name).toBeInTheDocument();
      // if name was not passed as prop the name should be empty
      expect(name).toHaveTextContent('');
      const entries = queryByTestId('entries') 
      expect(entries).toBeInTheDocument();
      // if the entries were not passed as a prop, the length of the estates should be 0
      expect(entries).toHaveTextContent('0 propiedades guardadas');
      const images = queryAllByTestId('image-galery');
      expect(images).toHaveLength(0);
    });

    test('should render with number of estates', () => {

        const collectionName = collection.name;
        const collectionEntries = collection.entries;

        const { queryByTestId, queryAllByTestId } = render(<ListCard {...collection} />);
        const name = queryByTestId('name') 
        expect(name).toBeInTheDocument();
        // if name was passed as prop the name should be name
        expect(name).toHaveTextContent(collectionName);
        const entries = queryByTestId('entries') 
        expect(entries).toBeInTheDocument();
        // if the entries were passed as a prop, the length of the estates should be entries length
        expect(entries).toHaveTextContent(`${collectionEntries.length} propiedades guardadas`);
        const images = queryAllByTestId('image-galery');
        // if the length of the entries is 3 or more, the images must have a length of 3
        expect(images).toHaveLength(3);
      });
})
