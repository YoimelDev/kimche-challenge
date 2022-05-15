import styled from '@emotion/styled'
import { Country } from './Country'

const CountriesContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	justify-items: stretch;
	gap: 1.25rem;
`

export const Countries = ({ countries }) => {
	return (
		<CountriesContainer>
			{countries.map(({ name, code, phone, capital, currency }, index) => {
				return (
					index <= 7 && (
						<Country
							key={code}
							name={name}
							code={code}
							phone={phone}
							capital={capital}
							currency={currency}
							index={index}
						/>
					)
				)
			})}
		</CountriesContainer>
	)
}
