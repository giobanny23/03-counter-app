import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

import PrimeraApp from '../PrimeraApp';

describe('Pruebas de PrimeraApp ', () => {
  

    test('debe de mostrar <PrimeraApp/> Correctamente', () => {
    
        
        const saludo = 'Hola soy goku';
        const wrapper = shallow(<PrimeraApp  saludo={saludo}/>)

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el subtitulo enviado por Props', () => {

        const saludo = 'Hola soy goku';
        const subTitulo = 'Soy un  Subtitulo';

        const wrapper = shallow(
        <PrimeraApp  
        saludo={subTitulo}
        />
        );

        const textoParrafo = wrapper.find('p').text();
        console.log(textoParrafo);
        
    })
    
    
    
    
})
