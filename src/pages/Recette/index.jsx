import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../../utils/hooks'
import styled from 'styled-components'



function Recette() {
  
    let { recetteId } = useParams()

    const { data, isLoading, error } = useFetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recetteId}`
    )

    let drinks = data?.drinks
    let drink = drinks? drinks[0] : {}

    return (
      <div>
          {drink.strDrink}
      </div>
      )
  }

export default Recette