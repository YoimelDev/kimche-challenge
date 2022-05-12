import styled from "@emotion/styled"

const Form = styled.form`
    flex: 1;
`

const InputSearch = styled.input`
    width: 100%;
    padding: 1.25rem .9375rem;
    padding-left: 5rem;
    outline: none;
    border: none;
    border-radius: .3125rem;
    box-shadow: 0px 5px 10px -7px rgba(0,0,0,0.75);

    @media (min-width: 1024px) {
        max-width: 30rem;
     }
`

const FormContent = styled.div`
    position: relative;
    height: 100%;
`

const ButtonSubmit = styled.button`
    position: absolute;
    left: 1.25rem;
    height: 100%;
    width: 3.125rem;
    background-color: transparent;
    border: none;

    &:hover {
        cursor: pointer;
    }
`

export const Search = () => {

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <FormContent>
                <InputSearch
                    type="search"
                    placeholder="Search for a country..."
                />

                <ButtonSubmit
                    type="submit"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#9e9e9e" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="10" cy="10" r="7" />
                        <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                </ButtonSubmit>
            </FormContent>
        </form>
    )
}
