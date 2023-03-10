import SearchContext from '../../SearchContext'
import Header from '../Header'
import SearchPosts from '../SearchPosts'

import './index.css'

const Home = () => (
  <SearchContext.Consumer>
    {value => {
      const {searchInput, isDark} = value

      return (
        <>
          <Header />
          <div className="app-container">
            <SearchPosts search={searchInput} theme={isDark} />
          </div>
        </>
      )
    }}
  </SearchContext.Consumer>
)
export default Home
