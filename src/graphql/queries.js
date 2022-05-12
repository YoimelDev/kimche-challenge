import { gql } from "@apollo/client"

const LIST_CONTINENTS = gql`
	{
		continents {
			name
		}
	}
`

const LIST_LANGUAGES = gql`
	{
		languages {
			name
		}
	}
`

const LIST_COUNTRIES = gql`
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
