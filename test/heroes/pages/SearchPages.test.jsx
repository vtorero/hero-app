import { fireEvent, render,screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:() =>mockedUseNavigate,
}))


beforeEach(()=>jest.clearAllMocks())

describe('Pruebas en el <SearchPage/>', () => {

    test('debe de mostrarse correctamente con los valores por defecto', () => {

        const container = render(
            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>

        );
        expect(container).toMatchSnapshot();


    })

    test('debe de mostrar a Batman y el input con el valor del querystring', () => {

        const container = render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage/>
            </MemoryRouter>

        );
      //  screen.debug()
        const inputValue = screen.getByRole('textbox');
        expect(inputValue.value).toBe('batman')

        const img = screen.getByRole('img');
        expect(img.src).toContain('/assets/heroes/dc-batman.jpg')

        const alert = screen.getByLabelText('div-search');
        expect(alert.style.display).toBe('none')


        expect(container).toMatchSnapshot();


    })

    test('debe de mostrar un error sino encuentra a batman', () => {

        const container = render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage/>
            </MemoryRouter>

        );
      //  screen.debug()

        const alert = screen.getByLabelText('div-alert');
        //console.log(alert.style.display).toBe('');
        expect(alert.style.display).toBe('')


        expect(container).toMatchSnapshot();


    })



     test('debe de llamar una pantalla nueva', () => {

       const inputValue='superman';
        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage/>
            </MemoryRouter>);

        const input= screen.getByRole('textbox');
        const form= screen.getByLabelText('form');
        fireEvent.change(input,{target:{name:'searchText',value:inputValue}})
console.log(input.value)
fireEvent.submit(form);
expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`);

    //console.log(form)


      })

 })