import styled from "@emotion/styled"
import { useContinents } from "../graphql/custom-hooks"
import { Continents } from "./Continents"

const Container = styled.div`
    width: min(85%, 75rem);
    margin: 0 auto;
`

export const MainContent = () => {

    const { data, error, loading } = useContinents()

    return (
        <Container>
            <Continents continents={data.continents} />
        </Container>
    )
}
