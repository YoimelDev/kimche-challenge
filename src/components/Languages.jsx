import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { searchCountryContext } from '../context/searchCountryContext'
import { useCountries } from '../graphql/custom-hooks'
import { Countries } from './Countries'
import { Spinner } from './Spinner'

const Section = styled(motion.section)`
	display: flex;
	flex-direction: column;
`

export const Languages = ({ languages }) => {
	const { data, loading } = useCountries()

	const { searchCountry } = useContext(searchCountryContext)

	const showLanguage = LanguageName => {
		if (loading) {
			return <Spinner />
		} else {
			let countriesByLanguage = data.countries.filter(({ languages }) =>
				languages.find(({ name }) => name === LanguageName)
			)

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
					<motion.h2 layout>{LanguageName}</motion.h2>

					{<Countries countries={countriesByLanguage} />}
				</>
			)
		}
	}

	return (
		<>
			{languages.map(({ name, code }) => {
				return (
					<Section key={code} layout>
						{showLanguage(name)}
					</Section>
				)
			})}
		</>
	)
}
