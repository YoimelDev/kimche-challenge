import styled from "@emotion/styled"

const Select = styled.select`
    width: 12rem;
    margin: 1.5625rem 1.5625rem;
    padding: 1.25rem .625rem;
    outline: none;
    border: none;
    border-radius: .3125rem;
    box-shadow: 0px 5px 10px -7px rgba(0,0,0,0.75);
`


export const Filter = () => {
    return (
        <form>
            <Select>
                <option value="continents">Continent</option>
                <option value="language">Language</option>
            </Select>
        </form>
    )
}
