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

const HeaderLanguage = styled.button({
  position: 'absolute',
  top: '40px',
  right: '50px',
  background: 'none',
	outline: 'none',
	border: 'none',
  fontSize: '18px',
});


function Header() {
  const [isFrench, setFrench] = useState(false)
    return (
      <HeaderContainer>
        <HeaderLogo src={cocktails}/>
        <StyledLink to={`/`} couleur="black">
        <HeaderTitle>Which cocktail today ?</HeaderTitle>
        </StyledLink> 
        {isFrench 
        ?
        <StyledLink to={`/`}>
        <HeaderLanguage onClick={() => setFrench(false)}>français</HeaderLanguage>
        </StyledLink>
        :
        <StyledLink to={`/frenchcocktails`}>
        <HeaderLanguage onClick={() => setFrench(true)}>english</HeaderLanguage>
        </StyledLink>
        }
      </HeaderContainer>
    )
  }

export default Header