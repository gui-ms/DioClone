import React from 'react'
import Button from '../../components/Button'
import Header from '../../components/Header'
import { Column, Container, CreateText, ForgotText, Row, SubitleLogin, Title, TitleLogin, Wrapper } from './styles'
import Input from '../../components/Input'
import { MdEmail, MdLock } from 'react-icons/md'

export function Login() {
  return (<>
    <Header/>
    <Container>
      <Column>
        <Title>
          O seu futuro Global agora!O seu futuro Global agora! O seu futuro Global agora! O seu futuro Global agora! O seu futuro Global agora!
          O seu futuro Global agora! O seu futuro Global agora! O seu futuro Global agora! O seu futuro Global agora!
        </Title>
      </Column>
      <Column>
        <Wrapper>
          <TitleLogin>Faça seu cadastro</TitleLogin>
          <SubitleLogin>Faça seu login e make the change._</SubitleLogin>
          <form>
            <Input placeholder='Email' leftIcon={<MdEmail/>}/>
            <Input placeholder='Senha' type="password" leftIcon={<MdLock/>}/>
            <Button title="Entrar" variant='secondary'/>
          </form>
          <Row>
            <ForgotText>Esqueci Minha senha</ForgotText>
            <CreateText>Criar conta</CreateText>
          </Row>
        </Wrapper>
      </Column>
    </Container>
  </>
  )
}
