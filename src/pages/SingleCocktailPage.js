
import React, {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom"
import Loading from "../components/Loading";
import {Col, Container, Image, Row ,Button} from "react-bootstrap";


const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=` ;
const SingleCocktailPage = () => {
 const {id} = useParams();
 const [loading , setLoading] = useState(true) ;
 const [SingleCocktail , setSingleCocktail] = useState(null) ;

    function destructorData(data) {
        if (data) {
            const {idDrink ,
                strDrink,
                strCategory,
                strAlcoholic,
                strGlass,
                strInstructions,
                strDrinkThumb,
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5} = data.drinks[0];
            const ingredientArray = [strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5];
            const cocktail = {
                idDrink:idDrink,
                name:strDrink,
                category:strCategory,
                alcoholic:strAlcoholic,
                glass:strGlass,
                instructions:strInstructions,
                image:strDrinkThumb,
                ingredients:ingredientArray,
            }
            setSingleCocktail(cocktail) ;
        } else {
            setSingleCocktail({})
        }
        setLoading(false);
    }

    const fetchData =async() => {
     try {
         setLoading(true);
         const response =  await fetch(`${url}${id}`) ;
         const data = await response.json() ;
         destructorData(data);

     }
     catch (error) {
         console.log(error)
         setLoading(false);
     }
 }
 useEffect(()=> {
     fetchData();
 } , [])
    if (loading) {
        return <Loading/>

    }
    if(!SingleCocktail) {
        return  <h1>no cocktail to display</h1>
    }
    const {  name,image,glass,instructions,ingredients , category,alcoholic , idDrink }  = SingleCocktail ;
    return  (
        <Container>
            <Image src={image} alt={name}  />
            <Row>
                <p>
                    <span> name: </span>
                    {name}
                </p>
            </Row>
            <Row>
                <p>
                    <span> category: </span>
                    {category}
                </p>
            </Row>
            <Row>
                <p>
                    <span> alcoholic: </span>
                    {alcoholic}
                </p>
            </Row>
            <Row>
                <p>
                    <span> glass: </span>
                    {glass}
                </p>
            </Row>
            <Row>
                <p>
                    <span> instructions: </span>
                    {instructions}
                </p>
            </Row>
            <Row>
                &nbsp; ingredients:{ingredients.map((ingredient ,index)=><Col key={index}> {ingredient}</Col>)}
            </Row>
            <Button variant="danger"> <Link to="/"> back home </Link></Button>
        </Container>
    )
}
export default SingleCocktailPage;