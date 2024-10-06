import { Route,Routes } from "react-router-dom"
import Login from "./Component/Login/Login"

const App2 = () => {
return <Routes>
    <Route path="/login" element = {<Login/>} />

</Routes>
}

export default App2