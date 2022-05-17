import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppLayout from './AppLayout';

describe('AppLayout', () => {

    window.matchMedia = window.matchMedia || function() {
        return {
            matches: false,
            addListener: function() {},
            removeListener: function() {}
        };
    };
    
    test('Should render correctly', () => {
        
        const container = render(
            <MemoryRouter>
                <AppLayout>
                    <div data-testid="children">CHILDREN</div>
                </AppLayout>
            </MemoryRouter>
        )
        const children = container.getByTestId('children');

        expect(children).toBeInTheDocument();
        expect(children.textContent).toEqual('CHILDREN');
    })
})

