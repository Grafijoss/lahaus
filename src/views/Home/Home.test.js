import axios from 'axios';
import { render, act } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import Home from './Home'
import { fullResponse } from './__fixtures__'

jest.mock("axios");

describe('Home', () => {
    test('Should render correctly with data', async () => {
        axios.mockResolvedValue({ data: fullResponse });
        const promise = Promise.resolve() 
        const container = render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        )

        await act(async () => { await promise })

        const cardsEstates = container.getAllByTestId('listcard');
        expect(cardsEstates).toHaveLength(fullResponse.data.length)

        expect(cardsEstates[0].textContent).toContain(fullResponse.data[0].attributes.name);

        expect(cardsEstates[1].textContent).toContain(fullResponse.data[1].attributes.name);

        expect(cardsEstates[2].textContent).toContain(fullResponse.data[2].attributes.name);

        expect(cardsEstates[3].textContent).toContain(fullResponse.data[3].attributes.name);
    })
})