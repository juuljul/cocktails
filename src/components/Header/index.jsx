import cocktails from '../../assets/cocktails.png'
import styled from 'styled-components'
import { useState } from 'react'
import { StyledLink } from '../../utils/style/Atoms'
import { Link, useParams } from 'react-router-dom'



const HeaderContainer = styled.div`
  display: flex;
  align-items: center; 
  line-height: 100px;
  height: 100px;
  justify-content: center;
  position: relative;
  border-bottom: solid 1px grey;
`
const HeaderLogo = styled.img`
  height: 100px;
  position: absolute;
  left: 0;
`
const HeaderTitle = styled.h2`
  font-size: 32px;
`

const HeaderText = styled.button(props =>({
  position: 'absolute',
  top: '45px',
  right: props.right,
  background: 'none',
	outline: 'none',
	border: 'none',
  fontSize: '15px',
}));


function Header() {
  const [isFrench, setFrench] = useState(false)
    return (
      <HeaderContainer>
        <HeaderLogo src={cocktails}/>
        <StyledLink to={`/`} couleur="black">
        <HeaderTitle>Which cocktail today ?</HeaderTitle>
        </StyledLink>
        <StyledLink to={`/mycocktails`}>
        <HeaderText right='130px'>MES COCKTAILS</HeaderText>
        </StyledLink>
        {isFrench 
        ?
        <StyledLink to={`/`}>
        <HeaderText right='30px' onClick={() => setFrench(false)}>FRANÇAIS</HeaderText>
        </StyledLink>
        :
        <StyledLink to={`/frenchcocktails`}>
        <HeaderText right='30px' onClick={() => setFrench(true)}>ENGLISH</HeaderText>
        </StyledLink>
        }
      </HeaderContainer>
    )
  }

export default Header