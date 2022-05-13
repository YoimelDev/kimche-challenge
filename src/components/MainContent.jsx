import styled from "@emotion/styled"

const Container = styled.div`
    width: min(85%, 75rem);
    margin: 0 auto;
`

export const MainContent = () => {
    return (
        <Container>
            <h2>Main</h2>
        </Container>
    )
}
