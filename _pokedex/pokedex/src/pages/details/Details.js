import { useNavigate } from "react-router-dom";
import logo from "../../assets/Pokemon_logo.png"
import { goToHome, goToPokedex } from "../../routers/Cordinator";
import { Header, Button} from "./styledDetails"


const Details = () => {
    const navigate = useNavigate()
 
        return (
            <Header>
                    <div>
                   <img src={logo} height="52em" width="180" onClick={() => goToHome(navigate)} />
                    </div>
                    <Button onClick={() => goToPokedex(navigate)}>Ir para Pokedex</Button>
        </Header>
        )
 }
 export default Details;