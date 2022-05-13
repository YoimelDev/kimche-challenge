import styled from "@emotion/styled"
import { useCountries } from "../graphql/custom-hooks"
import { Countries } from "./Countries"
import { Spinner } from "./Spinner"

const Section = styled.section`
    display: flex;
    flex-direction: column;
`

export const Languages = ({ languages, searchCountry }) => {

    const { data, error, loading } = useCountries()

    return (
        <>
            {languages.map(({ name, code }) => {
                return (
                    <Section key={code}>
                        <h2>{name}</h2>

                        {
                            loading
                                ? <Spinner />
                                : <Countries
                                    countries={data.countries}
                                    continentName={false}
                                    lenguageName={name}
                                    searchCountry={searchCountry}
                                />
                        }
                    </Section>
                )
            })}
        </>
    )
}
