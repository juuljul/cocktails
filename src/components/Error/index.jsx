import styled from 'styled-components'


export function ErrorMessage(props) {

    const Message = styled.div({
        display: "flex",
        justifyContent: 'center',
        fontSize: '26px',
        marginTop: '100px'
      });

    return (
        <Message>{props.children}</Message>
    )
}
