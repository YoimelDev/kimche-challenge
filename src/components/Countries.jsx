import styled from "@emotion/styled"
import { useState } from "react"

const CountriesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.25rem;
`

const CountryCard = styled.div`
    width: 100%;
    max-width: 20rem;
    background-color: #fff;
    border-radius: .3125rem;
    overflow: hidden;
`

const CountryImg = styled.img`
    width: 100%;
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

export const Countries = ({ countries, continentName, lenguageName }) => {

    const [countriesByContinent, setCountriesByContinent] = useState(
        countries.filter(({ continent }) => continent.name === continentName)
    )

    const [countriesByLanguage, setCountriesByLanguage] = useState(
        countries.filter(({ languages }) => languages.find(({ name }) => name === lenguageName))
    )

    return (
        <CountriesContainer>
            {
                continentName
                    ? countriesByContinent.map(({ name, code, phone, capital, currency }) => {
                        return (
                            <CountryCard
                                key={code}
                            >
                                <div>
                                    <img src={`https://flagcdn.com/w320/${code.toLowerCase()}.webp`} alt="Flag" />
                                </div>

                                <CountryCardInfo>
                                    <h2>{name}</h2>
                                    <p>Capital: <span>{capital}</span></p>
                                    <p>Currency: <span>{currency}</span></p>
                                    <p>Phone: <span>+{phone}</span></p>
                                </CountryCardInfo>
                            </CountryCard>
                        )
                    })
                    : countriesByLanguage.map(({ name, code, phone, capital, currency }) => {
                        return (
                            <CountryCard
                                key={code}
                            >
                                <div>
                                    <img src={`https://flagcdn.com/w320/${code.toLowerCase()}.webp`} alt="Flag" />
                                </div>

                                <CountryCardInfo>
                                    <h2>{name}</h2>
                                    <p>Capital: <span>{capital}</span></p>
                                    <p>Currency: <span>{currency}</span></p>
                                    <p>Phone: <span>+{phone}</span></p>
                                </CountryCardInfo>
                            </CountryCard>
                        )
                    })
            }
        </CountriesContainer>
    )
}
