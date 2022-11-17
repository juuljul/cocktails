import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../../utils/hooks'
import styled from 'styled-components'
import { couleursArray } from '../../utils/style/colors'
import { StyledLink } from '../../utils/style/Atoms'
import { CocktailsList, CocktailLabel } from '../../components/CocktailsList'
import plus from '../../assets/plus.png'



const AddContainer = styled.div(props =>({
    position: 'absolute',
    bottom: '60px',
    right: '60px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }));
  
  const AddText = styled.div(props =>({
    fontSize: '18px',
    marginTop: '15px'
  }));

const ImgPlus = styled.img({
  width: '60px',
});
  


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
        <StyledLink to={`/create`} couleur="black">
        <AddContainer>
        <ImgPlus src={plus}/>
        <AddText>CRÉER UN COCKTAIL</AddText>
        </AddContainer>
        </StyledLink>
        </div>

    )
  }

export default MyCocktails