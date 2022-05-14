import { useQuery } from '@apollo/client'
import { LIST_CONTINENTS, LIST_COUNTRIES, LIST_LANGUAGES } from './queries'

export const useContinents = () => {
	const result = useQuery(LIST_CONTINENTS)

	return result
}

export const useLanguages = () => {
	const result = useQuery(LIST_LANGUAGES)

	return result
}

export const useCountries = () => {
	const result = useQuery(LIST_COUNTRIES)

	return result
}
