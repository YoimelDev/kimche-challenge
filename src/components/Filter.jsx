import styled from '@emotion/styled'

const Container = styled.div`
	display: flex;
	gap: 1.5625rem;
`

const Select = styled.div`
	width: 9rem;
	padding: 1.25rem 0.625rem;
	outline: none;
	border: none;
	border-radius: 0.3125rem;
	box-shadow: 0px 5px 10px -7px rgba(0, 0, 0, 0.75);

	${props => {
		switch (props.$mode) {
			case 'active':
				return `
                    background-color: #8e98a1;
                `
			default:
				return `
                    background-color: #fff;
                `
		}
	}}

	&:hover {
		cursor: pointer;
		transition: all 0.3s ease-in-out;
	}
`

const Title = styled.h4`
	margin: 0;
	text-align: center;
	font-weight: 600;
`
export const Filter = ({ setFilter, filter }) => {
	return (
		<Container>
			<Select
				onClick={() => setFilter('continent')}
				$mode={filter === 'continent' ? 'active' : ''}
			>
				<Title>Continent </Title>
			</Select>

			<Select
				onClick={() => setFilter('language')}
				$mode={filter === 'language' ? 'active' : ''}
			>
				<Title>Language</Title>
			</Select>
		</Container>
	)
}
