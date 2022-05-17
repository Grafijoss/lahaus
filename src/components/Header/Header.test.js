import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
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
       const container = render(
           <MemoryRouter>
               <Header />
           </MemoryRouter>
        );
       const header = container.getByTestId('header-container');
       expect(header).toBeInTheDocument();
   })

   test('Should open the profile dropdown menu when clicked', async () => {
    const {getByTestId} = render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
     );
    
    const headerContainer = getByTestId('header-container');
    
    const openProfile = getByTestId('open-perfil');
    expect(openProfile).toBeInTheDocument();
    
    expect(headerContainer.textContent).not.toContain('Cerrar sesión');

    fireEvent.click(openProfile);

    expect(headerContainer.textContent).toContain('Cerrar sesión');

   })
})