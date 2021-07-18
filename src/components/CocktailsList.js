import {useGlobalContext} from "../GlobalContext";
import Loading from "./Loading";
import CocktailItem from "./CocktailItem";



const CocktailsList = ()=> {
    const {cocktailsList , loading} = useGlobalContext();

    if (loading) {
        return <Loading/>
    }
    if (cocktailsList.length <1) {
        return <h1> No Cocktail matched your Search</h1>
    }
    return  (
        cocktailsList.map((singleCocktail) => <CocktailItem key ={singleCocktail.id} cocktail={singleCocktail}/>)


    )
}

export default CocktailsList;