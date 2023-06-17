import SearchBar from './search-bar'
import List from './list'
import Paginator from './paginator'
import Sort from './filter'

export default function Home() {
  return (
    <>
      <SearchBar />
      <Sort />
      <List />
      <Paginator />
    </>
  )
}
