import styled from 'styled-components'


const Liste = styled.ul({
    listStyleType: 'none',
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center'
  })

const Name = styled.li(props =>({
    background: props.background,
    padding: '10px',
    paddingLeft: "40px",
    paddingRight: "40px",
    fontSize: '20px',
    color:'white',
    marginBottom: '20px',
    fontWeight:'bold'
  }));


export function CocktailsList(props) {
    return(
      <Liste>{props.children}</Liste>
    )
}

export function CocktailLabel(props) {
      return(
        <Name background={props.background}>{props.children}</Name>
      )
}



