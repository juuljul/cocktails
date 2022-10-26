import cocktails from '../../assets/cocktails.png'
import styled from 'styled-components'



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
const HeaderLanguage = styled.p`
  position: absolute;
  right: 50px;
`


function Header() {
    return (
      <HeaderContainer>
        <HeaderLogo src={cocktails}/>
        <HeaderTitle>Which cocktail today ?</HeaderTitle>
        <HeaderLanguage>english</HeaderLanguage>
      </HeaderContainer>
    )
  }

export default Header