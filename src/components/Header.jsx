import styled from "@emotion/styled"

const HeaderStyled = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;   
    background-color: #fff;
    box-shadow: 0px -10px 20px 0px rgb(0 0 0 / 75%);
`

const Title = styled.h1`  
    width: min(85%, 75rem);
    font-size: 1.125rem;
    font-weight: 800;

    @media (min-width: 768px) { 
        font-size: 1.5rem;
    }
`

export const Header = () => {
    return (
        <HeaderStyled>
            <Title>Country Search</Title>
        </HeaderStyled>
    )
}
