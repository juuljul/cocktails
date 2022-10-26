import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { couleursArray } from '../../utils/style/colors'



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
  
  return (
    <div>
      <Alphabet>
        {alphabet?.map((letter, id) => (
            <Link key={`cocktailsletter-${id}`} to={`/cocktailsletter/${letter}`}>
             <Letter background={couleursArray[Math.floor(Math.random() * 5)]}>{letter}</Letter>
            </Link>
          )
        )}
      </Alphabet>
    </div>
    )
}

export default Home