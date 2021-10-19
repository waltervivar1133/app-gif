import React from 'react';
import { shallow } from "enzyme"
import { ListGif } from "../../components/ListGif/ListGif"

describe('Prueba en GridItem' , () => {

  const props = {
    title : 'un titulo',
     url : 'https://localhost/data.png'
  }

  test('debe mostrar el componente correctamente', () => {

    const wrapper = shallow( <ListGif {...props}/> )
    expect( wrapper).toMatchSnapshot();
  })

})