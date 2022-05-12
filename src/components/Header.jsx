import styled from "@emotion/styled"

const HeaderStyled = styled.header`
    background-color: #fafafa;
`

const Title = styled.h1`
    display: flex;
    align-items: center;
    height: 15vh;
    margin: 0;
    padding: 0 1.5625rem;
    background-color: #fff;
    font-size: 1.5rem;
    font-weight: 800;
`

export const Header = () => {
    return (
        <HeaderStyled>
            <Title>Country Search</Title>
        </HeaderStyled>
    )
}
