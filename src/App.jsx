import { GlobalStyle } from './components/GlobalStyle';
import { Recipe } from './components/Recipe/Recipe';
import recipes from './recipes.json'

function App() {
  return (
    <>
      <Recipe info={recipes[0]}/>
      <Recipe info={recipes[1]}/>
      <Recipe info={recipes[2]}/>
      <Recipe info={recipes[3]}/>
      <GlobalStyle />
    </>
  )
}

export default App
