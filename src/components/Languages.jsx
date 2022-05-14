import styled from "@emotion/styled"
import { useContext } from "react"
import { searchCountryContext } from "../context/searchCountryContext"
import { useCountries } from "../graphql/custom-hooks"
import { Countries } from "./Countries"
import { Spinner } from "./Spinner"

const Section = styled.section`
    display: flex;
    flex-direction: column;
`

export const Languages = ({ languages }) => {

    const { data, error, loading } = useCountries()

    const { searchCountry } = useContext(searchCountryContext)

    const showLanguage = (LanguageName) => {
        if (loading) {
            return <Spinner />
        } else {
            let countriesByLanguage = data.countries.filter(({ languages }) => languages.find(({ name }) => name === LanguageName))

            if (searchCountry !== '') {
                countriesByLanguage = countriesByLanguage.filter(({ name }) =>
                    name.toLowerCase().includes(searchCountry.toLowerCase())
                )

                if (countriesByLanguage.length === 0) {
                    return ''
                }
            }

            return (
                <>
                    <h2>{LanguageName}</h2>

                    {
                        <Countries
                            countries={countriesByLanguage}
                        />
                    }
                </>
            )
        }
    }

    return (
        <>
            {languages.map(({ name, code }) => {
                return (
                    <Section key={code}>
                        {showLanguage(name)}
                    </Section>
                )
            })}
        </>
    )
}
