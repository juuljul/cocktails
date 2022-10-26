import { Link, useParams } from 'react-router-dom'
import {useState,useEffect } from 'react'
import { useFetch } from '../../utils/hooks'
import styled from 'styled-components'
import { couleursArray } from '../../utils/style/colors'
import { StyledLink } from '../../utils/style/Atoms'



const CocktailsList = styled.ul({
  listStyleType: 'none',
  display: "flex",
  flexDirection: 'column',
  alignItems: 'center'
})

const DrinkName = styled.li(props =>({
  background: props.background,
  padding: '10px',
  paddingLeft: "40px",
  paddingRight: "40px",
  fontSize: '20px',
  color:'white',
  marginBottom: '20px',
  fontWeight:'bold'
}));


function CocktailsLetter() {
  
    let { letter: queryLetter } = useParams()

    const { data, isLoading, error } = useFetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${queryLetter}`
    )

    let drinksLetter = data?.drinks


    return (
      <div>
        <CocktailsList>
        {drinksLetter?.map((drink, index) => {
          let randomNumber = Math.floor(Math.random() * 5);
          let randomColor = couleursArray[randomNumber];
            return (
              <StyledLink key={`recette-${index}`} to={`/recette/${drink.idDrink}/${randomNumber}`}>
                <DrinkName background={randomColor}>
                  {drink.strDrink}
                </DrinkName>
              </StyledLink>
              )
          }
        )}
        </CocktailsList>
      </div>
    )
  }

export default CocktailsLetter