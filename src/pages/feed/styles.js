import styled from "styled-components";

export const Container = styled.main`
    max-width: 80%;
    width: 100%;
    margin: 0 auto;
    margin-top: 120px;
    
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`

export const Title = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 24px;
    line-height: 25px;
    color: #FFFFFF;
`

export const TitleHighlight = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 24px;
    line-height: 25px;
    color: #FFFFFF70;
`

export const Column = styled.div`
    flex:${({flex}) => flex};
    padding-right: 24px;
`
