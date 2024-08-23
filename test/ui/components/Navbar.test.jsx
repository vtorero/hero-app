import { fireEvent, render,screen } from '@testing-library/react';
import { MemoryRouter} from 'react-router-dom';
import { AuthContext } from "../../../src/auth"

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:() =>mockedUseNavigate,
}))


import { Navbar } from '../../../src/ui';

describe('Pruebas en el <Navbar/>', () => {

    const initialValue={
        logged:true,
        user:{
            name:'Victor',
            id:'123'
        },
        logout:jest.fn()
    }

    beforeEach(()=>jest.clearAllMocks());

    test('debe de mostrar el nombre del usuario', () => {


     render(
        <AuthContext.Provider  value={initialValue}>
        <MemoryRouter>
            <Navbar/>
          </MemoryRouter>
    </AuthContext.Provider>
        );
        //screen.debug()
        //console.log(screen.getByLabelText('name-user').innerHTML)
        expect(screen.getByLabelText('name-user').innerHTML).toEqual(initialValue.user.name);

     })

     test('debe de llamar el logout y el navigate cuando se hace click en el boton', () => {


    render(
        <AuthContext.Provider  value={initialValue}>
        <MemoryRouter>
            <Navbar/>
          </MemoryRouter>
    </AuthContext.Provider>
        );

      const logoutBtn = screen.getByRole('button');
      fireEvent.click(logoutBtn);
      expect(initialValue.logout).toHaveBeenCalled();
      expect(mockedUseNavigate).toHaveBeenCalledWith("/login",{replace:true});

      })
 })