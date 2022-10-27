import { useFetch } from '../../utils/hooks'
import { couleursArray } from '../../utils/style/colors'
import { StyledLink } from '../../utils/style/Atoms'
import { CocktailsList, CocktailLabel } from '../../components/CocktailsList'


function FrenchCocktails() {
  
    const { data, isLoading, error } = useFetch(
        `http://localhost:8000/cocktails`
    )
    let frenchDrinks = data?.drinks

    return (
        <CocktailsList>
        {frenchDrinks?.map((drink, index) => {
          let randomNumber = Math.floor(Math.random() * 5);
          let randomColor = couleursArray[randomNumber];
            return (
              <StyledLink key={`recette-${index}`} to={`/recette/${drink.idDrink}/${randomNumber}`}>
                <CocktailLabel background={randomColor}>
                  {drink.strDrink}
                </CocktailLabel>
              </StyledLink>
              )
          }
        )}
        </CocktailsList>
    )
  }

export default FrenchCocktails