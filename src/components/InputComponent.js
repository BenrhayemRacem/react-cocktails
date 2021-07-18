import {useGlobalContext} from "../GlobalContext";


const InputComponent =() => {
 const {setSearchItem , searchItem} = useGlobalContext();
    return (
        <input type="text" value={searchItem} onChange={(e)=>setSearchItem(e.target.value)}/>
    )
}
export default InputComponent;