import React from 'react'
import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles'
import { FiThumbsUp } from 'react-icons/fi'

export default function Card() {
  return (
    <CardContainer>
        <ImageBackground/>
        <Content>
            <UserInfo>
                <UserPicture/>
                <div>
                    <h4>Guilherme Martins</h4>
                    <p>Projeto DIOClone</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de React e styled components</h4>
                <p>Projeto para curso de React e styled components da DIO no bootcamp para fullstack... <stong>Saiba mais</stong></p>
            </PostInfo>
            <HasInfo>
                <h4>#React #Node #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp/> 16
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}


