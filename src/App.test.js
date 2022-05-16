import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
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
        const history = createMemoryHistory();
        history.push('/')

        render(
            <Router location={history.location}>
                <App />
            </Router>
        )
        expect(screen.getByText(/Listas de favoritos/i)).toBeInTheDocument()
    })

    test('Error Page', () => {
        const history = createMemoryHistory();
        history.push('/bad-route')

        render(
            <Router location={history.location}>
                <App />
            </Router>
        )
        expect(screen.getByText(/¡Oops! La página no existe/i)).toBeInTheDocument()
    })
})

