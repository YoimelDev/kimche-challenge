
import styled from "@emotion/styled"
import { Countries } from "./components/Countries"
import { Filter } from "./components/Filter"
import { Header } from "./components/Header"
import { MainContent } from "./components/MainContent"
import { Search } from "./components/Search"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem ;
  width: min(85%, 75rem);
  margin: 1.875rem auto;

  @media (min-width: 1024px) {
    justify-content: space-between;
    flex-direction: row;
    gap: 0;
   }
`

function App() {
  return (
    <>
      <Header />

      <Container>
        <Search />

        <Filter />
      </Container>

      <MainContent />
    </>
  )
}

export default App
