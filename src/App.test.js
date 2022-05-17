import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import '@testing-library/jest-dom';

import App from './App'

describe('App', () => {
    window.matchMedia = window.matchMedia || function() {
        return {
            matches: false,
            addListener: function() {},
            removeListener: function() {}
        };
    };

    test('full app rendering/navigating', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>,
        )
        expect(screen.getByText(/Listas de favoritos/i)).toBeInTheDocument()
    })

    test('estate detail should render correctly', () => {
        render(
            <MemoryRouter initialEntries={['/estates/12345']}>
                <App />
            </MemoryRouter>
        )
        expect(screen.getByTestId('estate-detail')).toBeInTheDocument()
    })

    test('Error Page', () => {
        render(
            <MemoryRouter initialEntries={['/bad-route']}>
                <App />
            </MemoryRouter>,
        )
        expect(screen.getByText(/¡Oops! La página no existe/i)).toBeInTheDocument()
    })
})

