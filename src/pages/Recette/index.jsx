import React from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { useFetch } from '../../utils/hooks'
import styled from 'styled-components'
import { couleursArray } from '../../utils/style/colors'




function Recette(props) {

  const params = useParams()
  console.log("PARAMS", params)
  let couleur = couleursArray[params.randomColor]
  // let couleur = couleursArray[parseInt(params.randomColor)]
  console.log(couleur)

    // function useQuery() {
    //   const { search } = useLocation();
    //   return React.useMemo(() => new URLSearchParams(search), [search]);
    // }

    // let { recetteId: queryRecetteId, randomColor: queryRandomColor } = useParams()
    // // let query = useQuery();
    // // let bgcolor = query.get("bgcolor")

    // console.log("queryRecetteId", queryRecetteId)
    // console.log("queryRandomColor", queryRandomColor)

    const { data, isLoading, error } = useFetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.recetteId}`
    )

    let drinks = data?.drinks
    let drink = drinks? drinks[0] : {}

    const DrinkName = styled.div(props =>({
      background: couleur,
      padding: '10px',
      paddingLeft: "40px",
      paddingRight: "40px",
      fontSize: '20px',
      color:'white',
      margin: "auto",
      marginBottom: '20px',
      fontWeight:'bold'
    }));

    // console.log(props.match.params.recetteId)

    return (
      <DrinkName background={couleur} margin="auto">
          {drink.strDrink}
      </DrinkName>
      )
  }

export default Recette