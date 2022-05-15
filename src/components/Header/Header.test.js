import { render, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {

    window.matchMedia = window.matchMedia || function() {
        return {
            matches: true,
            addListener: function() {},
            removeListener: function() {}
        };
    };

   test('Should render correctly', () => {
       const container = render(<Header />);
       const header = container.getByTestId('header-container');
       expect(header).toBeInTheDocument();
   })

   test('Should open the profile dropdown menu when clicked', async () => {
    const {getByTestId} = render(<Header />);
    
    const headerContainer = getByTestId('header-container');
    
    const openProfile = getByTestId('open-perfil');
    expect(openProfile).toBeInTheDocument();
    
    expect(headerContainer.textContent).not.toContain('Cerrar sesión');

    fireEvent.click(openProfile);

    expect(headerContainer.textContent).toContain('Cerrar sesión');

   })
})