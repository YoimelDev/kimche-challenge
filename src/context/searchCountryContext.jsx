import { createContext, useMemo, useReducer } from 'react'

export const searchCountryContext = createContext()

const searchCountryReducer = (state, action) => {
	const { payload, type } = action

	switch (type) {
		case 'SET_COUNTRY':
			return {
				...state,
				searchCountry: payload,
			}

		default:
			return state
	}
}

export const SearchCountryProvider = ({ children }) => {
	const initialState = {
		searchCountry: '',
	}

	const [state, dispatch] = useReducer(searchCountryReducer, initialState)

	const searchContext = useMemo(
		() => ({
			setCountry: payload => {
				dispatch({ type: 'SET_COUNTRY', payload })
			},
		}),
		[]
	)

	return (
		<searchCountryContext.Provider
			value={{
				searchCountry: state.searchCountry,
				setCountry: searchContext.setCountry,
			}}
		>
			{children}
		</searchCountryContext.Provider>
	)
}
