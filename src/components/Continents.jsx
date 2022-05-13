import styled from "@emotion/styled"
import { useCountries } from "../graphql/custom-hooks"
import { Countries } from "./Countries"

const Section = styled.section`
    display: flex;
    flex-direction: column;
`

export const Continents = ({ continents }) => {

    const { data, error, loading } = useCountries()

    return (
        <Section>
            {continents.map(({ name, code }) => {
                return (
                    <Section key={code}>
                        <h2>{name}</h2>

                        <Countries
                            countries={data.countries}
                            continentName={name}
                        />
                    </Section>
                )
            })}
        </Section>
    )
}
