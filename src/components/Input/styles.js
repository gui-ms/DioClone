import styled from "styled-components";

export const InputContainer = styled.div`
    border-bottom: 1px solid #383450;
    height: 30px;
    max-width: 275px;
    width: 100%;

    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const IconContainer = styled.div`
    margin-right: 10px;
`

export const InputText = styled.input`
    background-color: transparent;
    color: #FFFFFF;
    border: 0;
    height: 30px;
    width: 100%;
`

export const ErrorText = styled.p`
    color: #FF0000;
    font-size: 12px;
    margin: 5px 0;
`