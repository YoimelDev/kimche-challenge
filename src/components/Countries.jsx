import styled from "@emotion/styled"
import { useContinents } from "../graphql/custom-hooks"

const Container = styled.div`
    width: min(85%, 75rem);
    margin: 0 auto;
`

const CountryCard = styled.div`
    width: 100%;
    max-width: 20rem;
    background-color: #fff;
    border-radius: .3125rem;
    overflow: hidden;
`

const CountryCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 1.5rem;

    h2, p {
        margin: 0;
    }

    p {
        font-weight: 600;
    }

    span {
        font-weight: 300;
    }
`

const Section = styled.section`
    display: flex;
    flex-direction: column;
`

const CountriesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.25rem;
`

export const Countries = () => {

    const { data, error, loading } = useContinents()

    return (
        <Container>
            <Section>
                <h2>South America</h2>

                <CountriesContainer>
                    <CountryCard>
                        <div>
                            <img src="https://flagcdn.com/w320/cl.png" alt="Flag" />
                        </div>

                        <CountryCardInfo>
                            <h2>Chile</h2>
                            <p>Capital: <span>Santiago</span></p>
                            <p>Currency: <span>CLF, CLP</span></p>
                            <p>Phone: <span>+56</span></p>
                        </CountryCardInfo>
                    </CountryCard>
                </CountriesContainer>
            </Section>
        </Container>
    )
}
