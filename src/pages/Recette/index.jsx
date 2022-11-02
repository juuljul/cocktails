import React from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { useFetch } from '../../utils/hooks'
import styled from 'styled-components'
import { couleursArray } from '../../utils/style/colors'
import Ingredients from '../../components/Ingredients'
import { DrinkName } from '../../components/Drinks'




const CocktailContainer = styled.div({
  display: 'flex',
});

const ImgCocktailContainer = styled.div(props =>({
  background: props.background,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
}));


const ImgCocktail = styled.img({
  width: '80%',
  margin: 'auto'
});

const DetailCocktailContainer = styled.div({
  flex: 1.61,
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

const SubTitle = styled.div({
  fontSize: '18px',
  marginTop: "50px",
  marginBottom:"40px"
});


const RecetteContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingBottom: '20px',
  paddingLeft: "60px",
  paddingRight: "60px",
});


function Recette() {

    const params = useParams()
    console.log("PARAMS", params)
    let couleur = couleursArray[params.randomColor]
    let origin = params.origin
    let url = ""

    if (origin == "letterCocktails") {
      url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.recetteId}`
    } 
    else if (origin == "frenchCocktails") {
      url = `http://localhost:8000/cocktail?id=${params.recetteId}`
    }
    else if (origin == "myCocktails") {
      url = `http://localhost:8000/mycocktail?id=${params.recetteId}`
    }

    const { data, isLoading, error } = useFetch(url)

    let drinks = data?.drinks
    let drink = drinks? drinks[0] : {}

    let ingredients = []
    
    for (let i=1; i<10; i++){
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

    return (
      <CocktailContainer>
        <ImgCocktailContainer background={couleur}>
          <ImgCocktail src={drink.strDrinkThumb}/>
        </ImgCocktailContainer>
        <DetailCocktailContainer>
          <IngredientContainer>
            <DrinkName couleur={couleur} fontSize="35px">
            {drink.strDrink}
            </DrinkName>
            <SubTitle>INGREDIENTS</SubTitle>
            <Ingredients couleur={couleur} ingredients={ingredients}/>
          </IngredientContainer>
          <RecetteContainer>
            <SubTitle>INSTRUCTIONS</SubTitle>
            <div>{drink.strInstructions}</div>
          </RecetteContainer>
        </DetailCocktailContainer>
      </CocktailContainer>
      )
}

export default Recette