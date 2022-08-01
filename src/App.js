import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar"

function App(){

    return (
    <>
        
        <NavBar/>       
        <ItemListContainer mostrarCatalogo={true}/>
   
    </>
    
    )
}

export default App;