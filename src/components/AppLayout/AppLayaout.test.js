import { render } from '@testing-library/react';
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
        
        const container = render(<AppLayout><div data-testid="children">CHILDREN</div></AppLayout>)
        const children = container.getByTestId('children');

        expect(children).toBeInTheDocument();
        expect(children.textContent).toEqual('CHILDREN');
    })
})

