import { useFetch } from '../../utils/hooks'
import { couleursArray } from '../../utils/style/colors'
import { StyledLink } from '../../utils/style/Atoms'
import { CocktailsList, CocktailLabel } from '../../components/CocktailsList'
import styled from 'styled-components'


const ErrorMessage = styled.div({
  display: "flex",
  justifyContent: 'center',
  fontSize: '26px',
  marginTop: '100px'
})


function FrenchCocktails() {
  
    const { data, isLoading, error } = useFetch(
        `http://localhost:8000/cocktails`
    )
    let frenchDrinks = data?.drinks


    return (
        <div>
          {error
          ? <ErrorMessage>Pour accéder à la liste de cocktails français, cloner l'api french cocktails correspondante</ErrorMessage>
          :   
          <CocktailsList>
          {frenchDrinks?.map((drink, index) => {
            let randomNumber = Math.floor(Math.random() * 5);
            let randomColor = couleursArray[randomNumber];
            let language = "french"
              return (
                <StyledLink key={`recette-${index}`} to={`/recette/${drink.idDrink}/${randomNumber}/${language}`}>
                  <CocktailLabel background={randomColor}>
                    {drink.strDrink}
                  </CocktailLabel>
                </StyledLink>
                )
            }
          )}
          </CocktailsList>
        }
        </div>

    )
  }

export default FrenchCocktails