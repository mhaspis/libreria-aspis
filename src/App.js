import { BrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import Main from "./components/Main"
import CustomProvider from "./components/CustomProvider"
import "./components/firebase"

function App(){


    return (
    <>
        <BrowserRouter>
            <CustomProvider>                
                <Header />
                <Main />
            </CustomProvider>
        </BrowserRouter>
   
    </>
    
    )
}

export default App;