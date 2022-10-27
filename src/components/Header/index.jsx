import cocktails from '../../assets/cocktails.png'
import styled from 'styled-components'
import { useState } from 'react'
import { StyledLink } from '../../utils/style/Atoms'



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
  const [isFrench, setFrench] = useState(true)
    return (
      <HeaderContainer>
        <HeaderLogo src={cocktails}/>
        <HeaderTitle>Which cocktail today ?</HeaderTitle>
        {isFrench 
        ?
        <StyledLink to={`/`}>
        <HeaderLanguage onClick={() => setFrench(false)}>french</HeaderLanguage>
        </StyledLink>
        :
        <StyledLink to={`/`}>
        <HeaderLanguage onClick={() => setFrench(true)}>english</HeaderLanguage>
        </StyledLink>
        }
      </HeaderContainer>
    )
  }

export default Header