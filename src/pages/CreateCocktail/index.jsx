import { useState } from "react";
import styled from 'styled-components'
import { useFetch } from '../../utils/hooks'
import { couleursArray } from '../../utils/style/colors'


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

const FormInput = styled.input(props =>({
  marginBottom: props.mb
}))

const IngredientInput = styled.input(props =>({
  marginRight: '5px',
  marginLeft: '5px'
}))

const FormArea = styled.textarea(props =>({
  marginBottom: props.mb
}))

const Label = styled.label(props =>({
  background: props.background,
  padding: '6px',
  textAlign: 'center',
  fontSize: '16px',
  color:'white',
  marginBottom: '20px',
  marginTop: props.mt,
  fontWeight: 'bold'
}));

const Button = styled.button({
  background: couleursArray[1],
  padding: '8px',
  textAlign: 'center',
  fontSize: '20px',
  color:'white',
  fontWeight: 'bold',
  border: 'none'
});

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
        <Label background={couleursArray[2]}>Nom du cocktail</Label>
        <FormInput 
          type="text" 
          required 
          value={strDrink}
          onChange={(e) => setStrDrink(e.target.value)}
          mb="20px"
        />
        <Label background={couleursArray[2]}>Ingrédients</Label>
        <IngredientContainer>
        <label>Ingrédient:</label>
        <IngredientInput 
          type="text" 
          required 
          value={strIngredient1}
          onChange={(e) => setIngredient1(e.target.value)}
        />
        <label>Mesure:</label>
        <IngredientInput 
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
              <IngredientInput 
                type="text" 
                value={ingredients[index]}
                onChange={(e) => updateIngredient(index, e.target.value)}
              />
              <label>Mesure:</label>
              <IngredientInput 
                type="text" 
                value={measures[index]}
                onChange={(e) => updateMeasure(index, e.target.value)}
              />
              </IngredientContainer>
              )
          }
        )}

        <Label background={couleursArray[2]} mt="20px">Instructions</Label>
        <FormArea
          required
          value={strInstructions}
          onChange={(e) => setInstruction(e.target.value)}
          mb="20px"
        />
        <Button>Créez votre cocktail</Button>
      </FormContainer>
    </CreateContainer>
  );
}
 
export default CreateCocktail;