import React from 'react'
import Button from '../../components/Button'
import Header from '../../components/Header'
import { Column, Container, CreateText, ForgotText, Row, SubitleLogin, Title, TitleLogin, Wrapper } from './styles'
import Input from '../../components/Input'
import { MdEmail, MdLock } from 'react-icons/md'
import { useForm } from 'react-hook-form'
import { api } from '../../services/api' 
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useNavigate } from 'react-router-dom'

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(3, 'Mínimo de 3 caracteres!').required(),
  })
  .required()

export function Login() {
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors, isValid } } = useForm(
    {resolver: yupResolver(schema),
      mode: 'onChange'
    }
  );

  console.log(isValid, errors);

  const onSubmit = async formData => {
    try {
      const {data} = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
      if(data.length){
        navigate('/feed')
      } else {
        alert("Email não encontrado no banco de dados")
      }
    } catch {
      alert("Deu ruim!")
    }
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input 
              control={control} 
              name="email" 
              placeholder='Email' 
              leftIcon={<MdEmail/>}
              errorMessage={errors?.email?.message}
              />

            <Input 
              control={control} 
              name="password" 
              placeholder='Senha' 
              type="password" 
              leftIcon={<MdLock/>}
              errorMessage={errors?.password?.message}
              />
            <Button title="Entrar" variant='secondary' type="submit"/>
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
