import styled from "@emotion/styled"

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.25rem;
`

const CountryCard = styled.div`
    
`

export const Countries = () => {
    return (
        <Container>
            <CountryCard>
                <div>
                    <h2>Chile</h2>
                </div>
            </CountryCard>
        </Container>
    )
}
