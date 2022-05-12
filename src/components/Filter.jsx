import { useState } from "react"
import styled from "@emotion/styled"

const Container = styled.div`
    display: flex;
`

const Select = styled.div`
    width: 9rem;
    margin: 1.5625rem 1.5625rem;
    padding: 1.25rem .625rem;
    outline: none;
    border: none;
    border-radius: .3125rem;
    box-shadow: 0px 5px 10px -7px rgba(0,0,0,0.75);

    ${(props) => {
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
        /* background-color: #fafafa; */
        transition: all .3s ease-in-out;
    }
`

const Title = styled.h4`
    margin: 0;
    text-align: center;
    font-weight: 600;
`
export const Filter = () => {

    const [isActive, setIsActive] = useState('continent')

    return (
        <Container>
            <Select
                onClick={() => setIsActive('continent')}
                $mode={isActive === 'continent' ? 'active' : ''}
            >
                <Title>Continent </Title>
            </Select>

            <Select
                onClick={() => setIsActive('language')}
                $mode={isActive === 'language' ? 'active' : ''}
            >
                <Title>Language</Title>
            </Select>
        </Container>


    )
}
