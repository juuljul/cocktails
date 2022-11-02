import { useState } from "react";
import styled from 'styled-components'
import { useFetch } from '../../utils/hooks'



const CreateContainer = styled.div(props =>({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}))

const FormContainer = styled.form(props =>({
  display: 'flex',
  flexDirection: 'column',
}))

const IngredientContainer = styled.div(props =>({
  display: 'flex',
}))


const FormLabel = styled.button(props =>({
  fontSize: '18px',
}))

const CreateCocktail = () => {
  const [strDrink, setStrDrink] = useState('');
  const [strIngredient1, setIngredient1] = useState('');
  const [strMeasure1, setMeasure1] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [strInstructions, setInstruction] = useState('');

  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/mycocktails`
  )
  let drinks = data?.drinks


  const handleSubmit = (e) => {
    e.preventDefault();

    let drinkNames = drinks.map(drink => drink.strDrink)
    if (drinkNames.includes(strDrink)){
      alert ("Le nom de cocktail est déjà utilisé dans vos cocktails créés")
      return
    }

    const cocktail = { strDrink, strIngredient1, strMeasure1, strInstructions };
    
    for (let i=2; i<7; i++){
      const strIngredient = "strIngredient"+i
      const strMeasure = "strMeasure"+i
      cocktail[strIngredient] = ingredients[i-2]
      cocktail[strMeasure] = measures[i-2]
    }

    fetch('http://localhost:8000/mycocktails/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cocktail)
    }).then(res => {
      console.log('res',res)
      alert("Nouveau cocktail créé")
    }).catch(err => {
      console.log('err', err)
  });
  }

  const updateIngredient = (index, newIngredient) => {
    let newArr = [...ingredients]; 
    newArr[index] = newIngredient;
    setIngredients(newArr);
  }

  const updateMeasure = (index, newMeasure) => {
    let newArr = [...measures]; 
    newArr[index] = newMeasure; 
    setMeasures(newArr);
  }
  

  return (
    <CreateContainer className="createContainer">
      <h2>Créez votre propre cocktail</h2>
      <FormContainer onSubmit={handleSubmit}>
        <label>Nom du cocktail:</label>
        <input 
          type="text" 
          required 
          value={strDrink}
          onChange={(e) => setStrDrink(e.target.value)}
        />
        <IngredientContainer>
        <label>Ingrédient:</label>
        <input 
          type="text" 
          required 
          value={strIngredient1}
          onChange={(e) => setIngredient1(e.target.value)}
        />
        <label>Mesure:</label>
        <input 
          type="text" 
          required 
          value={strMeasure1}
          onChange={(e) => setMeasure1(e.target.value)}
        />
        </IngredientContainer>

        {[...Array(5).keys()].map((index) => {
            return (
              <IngredientContainer key={index}>
              <label>Ingrédient:</label>
              <input 
                type="text" 
                value={ingredients[index]}
                onChange={(e) => updateIngredient(index, e.target.value)}
              />
              <label>Mesure:</label>
              <input 
                type="text" 
                value={measures[index]}
                onChange={(e) => updateMeasure(index, e.target.value)}
              />
              </IngredientContainer>
              )
          }
        )}

        <label>Instructions</label>
        <textarea
          required
          value={strInstructions}
          onChange={(e) => setInstruction(e.target.value)}
        ></textarea>
        <button>Créez votre cocktail</button>
      </FormContainer>
    </CreateContainer>
  );
}
 
export default CreateCocktail;