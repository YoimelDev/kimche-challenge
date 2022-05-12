import styled from "@emotion/styled"

const Container = styled.div`
    display: flex;
`

const Select = styled.div`
    width: 9rem;
    margin: 1.5625rem 1.5625rem;
    padding: 1.25rem .625rem;
    outline: none;
    border: none;
    border-radius: .3125rem;
    background-color: #fff;
    box-shadow: 0px 5px 10px -7px rgba(0,0,0,0.75);
`

const Title = styled.h4`
    margin: 0;
    text-align: center;
    font-weight: 600;
`


export const Filter = () => {
    return (
        <Container>
            <Select>
                <Title>Continent</Title>
            </Select>

            <Select>
                <Title>Language</Title>
            </Select>
        </Container>


    )
}
