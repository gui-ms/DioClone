import React from 'react'
import { BuscarInputContainer, Container, Input, Menu, MenuRight, Row, UserPicture, Wrapper } from './styles'
import Button from '../Button'

export default function Header({autenticado}) {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={''} alt='Logo da DIO'/>
          {autenticado ? (<>
            <BuscarInputContainer>
              <Input placeholder='Buscar...'/>
            </BuscarInputContainer>
            <Menu>Live Code</Menu>
            <Menu>Global</Menu>
          </>
          ): null}
        </Row>
        <Row>
        {autenticado ? (<>
            <UserPicture/>
          </>
          ): (<>
            <MenuRight href='/'>Home</MenuRight>
            <Button title="Entrar"/>
            <Button title="Cadastrar"/>
          </>)}
        </Row>
      </Container>
    </Wrapper>
  )
}
