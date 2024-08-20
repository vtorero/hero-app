const { render,screen } = require("@testing-library/react");
import { MemoryRouter, Route,Routes} from 'react-router-dom';
import { PrivateRoute } from '../../src/router/PrivateRoute';
const { AuthContext } = require("../../src/auth");

describe('Pruebas en el <PrivateRoute/>', () => {



    test('debe de mostrar el children si esta autenticado', () => {

        Storage.prototype.setItem = jest.fn();

        const contextValue ={
            logged:true,
            user:{
                name:'Juan Carlos',
                id:'ABCE'
            }
        }

        render(
            <AuthContext.Provider  value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
            <PrivateRoute>
                <h1>Ruta privada</h1>
            </PrivateRoute>
            </MemoryRouter>
            </AuthContext.Provider>
        );

         expect(screen.getByText('Ruta privada')).toBeTruthy();
         expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
     })



 })

