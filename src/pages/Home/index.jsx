import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const Alphabet = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`

const Letter = styled.li(props => ({
  background: props.background,
  color: "white",
  margin: "40px",
  height: '100px',
  width: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bolder',
  fontSize: '30px'
}));


function Home() {
  
  let alpha = Array.from(Array(26)).map((e, i) => i + 65);
  let alphabet = alpha.map((x) => String.fromCharCode(x));

  let alphabetWithKeys = []
  for (let i=1; i<=alphabet.length; i++){
    let alphabetItem = {}
    alphabetItem.id = i
    alphabetItem.letter = alphabet[i-1]
    alphabetWithKeys.push(alphabetItem)
  }

  const couleurs = [colors.pink, colors.orange, colors.yellow, colors.pinkorange, colors.blue]

  return (
    <div>
      <Alphabet>
        {alphabetWithKeys.map(({id, letter}) => (
          <div key={id}>
            <Letter background={couleurs[Math.floor(Math.random() * 5)]}>{letter}</Letter>
          </div>
          )
        )}
      </Alphabet>
    </div>
    )
}

export default Home