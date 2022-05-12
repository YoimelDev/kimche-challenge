import { Countries } from "./components/Countries"
import { Filter } from "./components/Filter"
import { Header } from "./components/Header"
import { Search } from "./components/Search"

function App() {
  return (
    <>
      <Header />

      <Search />

      <Filter />

      <Countries />
    </>
  )
}

export default App
