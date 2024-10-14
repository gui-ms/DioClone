import React from 'react'
import Button from '../../components/Button'
import Header from '../../components/Header'
import { ClickLogin, Column, Container, Disclaimer, GoLogin, SubitleLogin, Title, TitleLogin, Wrapper } from './styles'
import Input from '../../components/Input'
import { MdEmail, MdLock } from 'react-icons/md'
import { useForm } from 'react-hook-form'
import { api } from '../../services/api' 
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useNavigate } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(3, 'Mínimo de 3 caracteres!').required(),
  })
  .required()

export function Signup() {
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
          A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
        </Title>
      </Column>
      <Column>
        <Wrapper>
          <TitleLogin>Comece agora grátis</TitleLogin>
          <SubitleLogin>Crie sua conta e make the change._</SubitleLogin>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input 
              control={control} 
              name="nome" 
              placeholder='Nome Completo' 
              leftIcon={<FaUser/>}
              />

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
            <Button title="Criar minha conta" variant='secondary' type="submit"/>
          </form>
          <Disclaimer>
            Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
          </Disclaimer>
          <GoLogin>
            Já tenho conta. <ClickLogin>Fazer login</ClickLogin>
          </GoLogin>
        </Wrapper>
      </Column>
    </Container>
  </>
  )
}
