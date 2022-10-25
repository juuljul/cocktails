import { Link, useParams } from 'react-router-dom'
import {useState,useEffect } from 'react'
import { useFetch } from '../../utils/hooks'
import styled from 'styled-components'
import colors from '../../utils/style/colors'



const CocktailsList = styled.ul({
  listStyleType: 'none',
  display: "flex",
  flexDirection: 'column',
})

const DrinkName = styled.li(props =>({
  background: props.background,
  padding: '10px',
  paddingLeft: "40px",
  paddingRight: "40px",
  fontSize: '20px',
  color:'white',
  margin: "auto",
  marginBottom: '20px',
  fontWeight:'bold'
}));



function CocktailsLetter() {
  
    let { letter: queryLetter } = useParams()

    const { data, isLoading, error } = useFetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${queryLetter}`
    )

    let drinksLetter = data?.drinks

    const couleurs = [colors.pink, colors.orange, colors.yellow, colors.pinkorange, colors.blue]
    

    return (
      <div>
        <CocktailsList>
        {drinksLetter?.map((drink, index) => {
          const randomColor = couleurs[Math.floor(Math.random() * 5)]; 
            return (
              <Link key={`recette-${index}`} to={`/recette/${drink.idDrink}`}>
                <DrinkName background={randomColor}>
                  {drink.strDrink}
                </DrinkName>
              </Link>
              )
          }
        )}
        </CocktailsList>
      </div>
    )
  }

export default CocktailsLetter