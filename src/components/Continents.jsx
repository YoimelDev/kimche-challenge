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

export const Continents = ({ continents }) => {
	const { data, loading } = useCountries()

	const { searchCountry } = useContext(searchCountryContext)

	const showContinent = name => {
		if (loading) {
			return <Spinner />
		} else {
			let countriesByContinent = data.countries.filter(
				({ continent }) => continent.name === name
			)

			if (searchCountry !== '') {
				countriesByContinent = countriesByContinent.filter(({ name }) =>
					name.toLowerCase().includes(searchCountry.toLowerCase())
				)

				if (countriesByContinent.length === 0) {
					return ''
				}
			}

			return (
				<>
					<motion.h2 layout>{name}</motion.h2>

					{<Countries countries={countriesByContinent} />}
				</>
			)
		}
	}

	return (
		<>
			{continents.map(({ name, code }) => {
				return (
					<Section key={code} layout>
						{showContinent(name)}
					</Section>
				)
			})}
		</>
	)
}
