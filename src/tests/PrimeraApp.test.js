import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

import PrimeraApp from '../PrimeraApp';

describe('Pruebas de PrimeraApp ', () => {
  

    test('debe de mostrar <PrimeraApp/> Correctamente', () => {
    
        
        const saludo = 'Hola soy goku';
        const wrapper = shallow(<PrimeraApp  saludo={saludo}/>)

        expect(wrapper).toMatchSnapshot();
    })
    
    
    
})
