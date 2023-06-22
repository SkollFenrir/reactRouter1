import React from 'react'
import { Container } from 'react-bootstrap'
import Formulario from '../componets/Formulario'

const Contacto = () => {
  return (
    <>
    <Container className='pt-5 text-center '>
        <h1>Cuentanos, ¿En que te podemos ayudar?</h1>
        <Formulario />
    </Container>
    </>
  )
}

export default Contacto