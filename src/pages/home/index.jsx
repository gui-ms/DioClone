import React from 'react'
import Button from '../../components/Button'
import Header from '../../components/Header'
import { Container, TextContent, Title, TitleHighlight } from './styles'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/login')
  }

  return (<>
    <Header/>
    <Container>
      <div>
        <Title>
          <TitleHighlight>
            Implemente
            <br/>
          </TitleHighlight>
          O seu futuro Global agora!
        </Title>
        <TextContent>
          Ergo sum ipsis literis Ergo sum ipsis literis Ergo sum ipsis literis Ergo sum ipsis literis Ergo sum ipsis
           literisv Ergo sum ipsis literis
        </TextContent>
        <Button title="Começar agora" variant='secondary' onClick={handleClickSignIn}/>
      </div>
      <div>
        <img  alt='Imagem principal'/>
      </div>
    </Container>
  </>
  )
}
