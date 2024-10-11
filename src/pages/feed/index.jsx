import React from 'react'
import Header from '../../components/Header'
import { Column, Container, Title, TitleHighlight } from './styles'
import Card from '../../components/Card'
import UserInfo from '../../components/UserInfo'

export function Feed() {
  return (<>
    <Header autenticado={true}/>
    <Container>
      <Column flex={3}>
        <Title>Feed</Title>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Column>
      <Column flex={1}>
        <TitleHighlight># RANKING TOP 5 DA SEMANA</TitleHighlight>
        <UserInfo percentual={80} nome="Guilherme Martins"/>
        <UserInfo percentual={10} nome="Guilherme Martins"/>
        <UserInfo percentual={70} nome="Guilherme Martins"/>
        <UserInfo percentual={20} nome="Guilherme Martins"/>
      </Column>
    </Container>
  </>
  )
}
