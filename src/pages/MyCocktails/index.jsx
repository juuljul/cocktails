import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../../utils/hooks'
import styled from 'styled-components'
import { couleursArray } from '../../utils/style/colors'
import { StyledLink } from '../../utils/style/Atoms'
import { CocktailsList, CocktailLabel } from '../../components/CocktailsList'


const AddButton = styled.button(props =>({
    position: 'absolute',
    bottom: '40px',
    right: '50px',
    background: 'none',
    outline: 'none',
    border: 'none',
    fontSize: '18px',
  }));


function MyCocktails() {
  
    const { data, isLoading, error } = useFetch(
        `http://localhost:8000/mycocktails`
    )
    let drinks = data?.drinks

    return (
        <div>
        <CocktailsList>
        {drinks?.map((drink, index) => {
          let randomNumber = Math.floor(Math.random() * 5);
          let randomColor = couleursArray[randomNumber];
          let origin = "myCocktails"
            return (
              <StyledLink key={`recette-${index}`} to={`/recette/${drink.strDrink}/${randomNumber}/${origin}`}>
                <CocktailLabel background={randomColor}>
                  {drink.strDrink}
                </CocktailLabel>
              </StyledLink>
              )
          }
        )}
        </CocktailsList>
        <StyledLink to={`/create`}>
        <AddButton>CRÉER UN COCKTAIL</AddButton>
        </StyledLink>
        </div>

    )
  }

export default MyCocktails