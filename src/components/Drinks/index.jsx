import styled from 'styled-components'


export function DrinkName(props) {

      const Drink = styled.div({
        background: props.couleur,
        padding: '10px',
        paddingLeft: "40px",
        paddingRight: "40px",
        fontSize: props.fontSize,
        color:'white',
        marginTop: '20px',
        marginBottom: '20px',
        fontWeight:'bold'
      });

    return (
        <Drink>{props.children}</Drink>
    )
}
