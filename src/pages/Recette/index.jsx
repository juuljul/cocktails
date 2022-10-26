import React from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { useFetch } from '../../utils/hooks'
import styled from 'styled-components'
import { couleursArray } from '../../utils/style/colors'


const CocktailContainer = styled.div({
  display: 'flex',
});

const ImgCocktail = styled.img({
  width: '60%',
  margin: 'auto'
});

const DetailCocktailContainer = styled.div({
  flex: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingBottom: '20px'
});

const IngredientContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
});

const RecetteContainer = styled.div({
});


const IngredientTitle = styled.h2({
  fontSize: '20px',
  fontWeight:'bold'
});


function Recette() {

    const params = useParams()
    console.log("PARAMS", params)
    let couleur = couleursArray[params.randomColor]

    const { data, isLoading, error } = useFetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.recetteId}`
    )

    let drinks = data?.drinks
    let drink = drinks? drinks[0] : {}

    let ingredients = []
    
    for (let i=1; i<15; i++){
      const strIngredient = "strIngredient"+i
      const strMeasure = "strMeasure"+i
      const name = drink[strIngredient]? drink[strIngredient] : null
      const measure = drink[strMeasure]? drink[strMeasure] : null
      if (name!=null && measure!=null) {
        let ingredient = {}
        ingredient.name = name
        ingredient.measure = measure
        ingredients.push(ingredient)
      }
     }
    
    const ImgCocktailContainer = styled.div({
      background: couleur,
      flex: 1,
      display: 'flex',
      alignItems: 'center',
    });


    return (
      <CocktailContainer>
        <ImgCocktailContainer>
          <ImgCocktail src={drink.strDrinkThumb}/>
        </ImgCocktailContainer>
        <DetailCocktailContainer>
          <IngredientContainer>
            <IngredientTitle>
            {drink.strDrink}
            </IngredientTitle>
            <IngredientTitle>
              INGREDIENTS
            </IngredientTitle>
            {ingredients?.map(ingredient => {
              return (
              <div>
                {ingredient.name} ------- {ingredient.measure}
              </div>
              )
            }
            )}
            <IngredientTitle>
              INSTRUCTIONS
            </IngredientTitle>
          </IngredientContainer>
          <RecetteContainer>
            <div>{drink.strInstructions}</div>
          </RecetteContainer>
        </DetailCocktailContainer>
      </CocktailContainer>
      )
}

export default Recette