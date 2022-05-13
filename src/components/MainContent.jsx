import styled from "@emotion/styled"
import { useContinents, useLanguages } from "../graphql/custom-hooks"
import { Continents } from "./Continents"
import { Languages } from "./Languages"
import { Spinner } from "./Spinner"

const Container = styled.div`
    width: min(85%, 75rem);
    margin: 0 auto;
`

export const MainContent = ({ filter }) => {

    const { data, error, loading } = useContinents()
    const { data: dataL, error: errorL, loading: loadingL } = useLanguages()

    return (
        <Container>
            {
                loading || loadingL
                    ? <Spinner />
                    : filter === 'continent'
                        ? <Continents continents={data.continents} />
                        : <Languages languages={dataL.languages} />
            }
        </Container>
    )
}
