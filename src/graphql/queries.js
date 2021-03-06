import { gql } from '@apollo/client'

export const LIST_CONTINENTS = gql`
	{
		continents {
			name
			code
		}
	}
`

export const LIST_LANGUAGES = gql`
	{
		languages {
			name
			code
		}
	}
`

export const LIST_COUNTRIES = gql`
	{
		countries {
			name
			code
			phone
			capital
			currency
			continent {
				name
			}
			languages {
				name
			}
		}
	}
`
