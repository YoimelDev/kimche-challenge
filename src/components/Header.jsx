import styled from "@emotion/styled"

const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    height: 10vh;
    margin: 0;
    padding: 0 1.5625rem;
    background-color: #fff;
    box-shadow: 0px -10px 20px 0px rgb(0 0 0 / 75%);
`

const Title = styled.h1`  
    font-size: 1.125rem;
    font-weight: 800;
`

export const Header = () => {
    return (
        <HeaderStyled>
            <Title>Country Search</Title>
        </HeaderStyled>
    )
}
