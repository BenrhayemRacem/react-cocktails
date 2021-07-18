import React, {useCallback, useEffect} from "react";
import {useContext, useState} from "react";


const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' ;
const AppContext = React.createContext();

const AppProvider =( {children}) => {

    const [loading , setLoading] = useState(true);
    const [searchItem , setSearchItem] = useState('') ;
    const [cocktailsList , setCocktailsList] = useState([]);

    const fetchData =  async () => {

        try {
            setLoading(true) ;
            const response = await fetch(`${url}${searchItem}`);
            const data = await response.json();

             destructorDataIntoArray(data);
             setLoading(false)


        }
        catch (error) {
            console.log(error)
            setLoading(false);
        }

    }
    const destructorDataIntoArray = (data) => {
        const {drinks} = data ;

        if (drinks) {
            const newCocktailList = drinks.map((item) => {
                const {
                    idDrink,
                    strDrink,
                    strAlcoholic,
                    strCategory,
                    strDrinkThumb,
                    strGlass

                } = item ;
                return {
                    id:idDrink,
                    alcoholic:strAlcoholic,
                    category:strCategory,
                    image:strDrinkThumb,
                    glass:strGlass ,
                    name:strDrink
                }
            })

            setCocktailsList(newCocktailList);

        }
        else {
            setCocktailsList([]);
        }


    }


    useEffect(()=> {
        fetchData();
    } , [searchItem])
    return (
        <AppContext.Provider value={
            {   loading ,
                cocktailsList,
                setSearchItem,
                searchItem


            }
        }>
            {children}
        </AppContext.Provider>
    )

}

export const useGlobalContext = () => {
    return useContext(AppContext);
}
export {AppContext ,AppProvider}