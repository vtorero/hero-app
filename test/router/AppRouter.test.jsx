import { render,screen } from '@testing-library/react';
import { MemoryRouter} from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';

describe('Pruebas en <AppRouter/>', () => {

    test('debe de mostrar el login si no está autenticado', () => {

        const contextValue = {
            logged: false
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>);

            expect(screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1);



    })


        test('debe de mostrar marvel si está autenticado', () => {

            const contextValue = {
                logged: true,
                user:{
                    name:'victor',
                    id:'123',
                }
            }

            render(
                <MemoryRouter initialEntries={['/marvel']}>
                    <AuthContext.Provider value={ contextValue }>
                        <AppRouter />
                    </AuthContext.Provider>
                </MemoryRouter>);
                //screen.debug();
               // console.log(screen.getAllByText('Marvel').length).

                expect(screen.getAllByText('victor').length).toBe(1);
                expect(screen.getAllByText('Marvel').length).toBe(2);



        })

})