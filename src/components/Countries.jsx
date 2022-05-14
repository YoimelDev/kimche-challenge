import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const variants = {
	hidden: {
		opacity: 0
	},
	show: ({ delay }) => ({
		opacity: 1,
		transition: {
			delay,
			duration: 1
		}
	})
}

const CountriesContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	justify-items: stretch;
	gap: 1.25rem;
`

const CountryCard = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	max-width: 20rem;
	background-color: #fff;
	border-radius: 0.3125rem;
	overflow: hidden;
`

const CountryCardInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 2rem 1.5rem;

	h2,
	p {
		margin: 0;
	}

	p {
		font-weight: 600;
	}

	span {
		font-weight: 300;
	}
`

export const Countries = ({ countries }) => {
	return (
		<CountriesContainer>
			{countries.map(({ name, code, phone, capital, currency }, index) => {
				return (
					<CountryCard
						key={code}
						custom={{ delay: (index + 1) * 0.2 }}
						initial="hidden"
						animate="show"
						variants={variants}
					>
						<div>
							<img
								src={`https://flagcdn.com/w320/${code.toLowerCase()}.webp`}
								alt='Flag'
							/>
						</div>

						<CountryCardInfo>
							<h2>{name}</h2>
							<p>
								Capital: <span>{capital}</span>
							</p>
							<p>
								Currency: <span>{currency}</span>
							</p>
							<p>
								Phone: <span>+{phone}</span>
							</p>
						</CountryCardInfo>
					</CountryCard>
				)
			})}
		</CountriesContainer>
	)
}
