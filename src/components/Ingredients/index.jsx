import styled from 'styled-components'


const Names = styled.div(props =>({
    display: "flex",
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingRight: '10px'
}));

const Name = styled.div(props =>({
}));

const Tirets = styled.div(props =>({
}));

const Tiret = styled.div(props =>({
  }));

const Measures = styled.div(props =>({
    display: "flex",
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: '10px'
}));

const Measure = styled.div(props =>({
}));

function Ingredients(props) {

    const Container = styled.div({
        display: "flex",
        justifyContent: 'center',
        color: props.couleur,
        fontSize: '30px',
        marginBottom: '30px'
      })

    return (
        <Container>
            <Names>
            {props.ingredients.map(ingredient => {
              return (
                <Name>{ingredient.name}</Name>
              )
            }
            )}
            </Names>
            <Tirets>
            {props.ingredients.map(ingredient => {
              return (
                <Tiret>-------</Tiret>
              )
            }
            )}
            </Tirets>
            <Measures>
            {props.ingredients.map(ingredient => {
              return (
                <Measure>{ingredient.measure}</Measure>
              )
            }
            )}
            </Measures>
        </Container>
    )
  }

export default Ingredients