import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../../utils/hooks'
import styled from 'styled-components'
import { couleursArray } from '../../utils/style/colors'
import { StyledLink } from '../../utils/style/Atoms'
import { CocktailsList, CocktailLabel } from '../../components/CocktailsList'


function CocktailsLetter() {
  
    let { letter: queryLetter } = useParams()
    const { data, isLoading, error } = useFetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${queryLetter}`
    )
    let drinksLetter = data?.drinks

    return (
        <CocktailsList>
        {drinksLetter?.map((drink, index) => {
          let randomNumber = Math.floor(Math.random() * 5);
          let randomColor = couleursArray[randomNumber];
          let language = "english"
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
    )
  }

export default CocktailsLetter