import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { goToDetails, goBack, goToHome } from "../../routers/Cordinator";
import { GlobalContext} from "../../global/GlobalContex"
import { Button, Cont, Container, ContainerCardPoke, Header } from "./styledPokedex";
import logo from "../../assets/Pokemon_logo.png"


const Pokedex = () => {
    const navigate = useNavigate()
    const { states, setters } = useContext(GlobalContext)

    const deletePokemon = (pokemomName) => {
        const newPokedexList = states.pokedexList.filter((item) => {
            return item.name !== pokemomName.name
        })
        setters.setPokedexList(newPokedexList)
    }

    const pokemons = states.pokedexList.map((pokemon) => {

        return (
           
                <ContainerCardPoke key={pokemon.id} >
                    <div onClick={() => goToDetails(navigate, pokemon.id)}>
                        <img
                            src={pokemon.sprites?.front_default}
                            alt={` ${pokemon.name}`}
                        />
                    </div>
                    <h1>{`${pokemon.id} - ${pokemon.name}`}</h1>
                    <Button onClick={() => deletePokemon(pokemon)}>remover</Button>
                </ContainerCardPoke>
        
        )
    })
    return (
        <Container>
       <Header>
            <img src={logo}  height="52em" width="180" onClick={() => goToHome(navigate)} alt={"logo Pokemon"} />
            <Button onClick={() => goBack(navigate)}>Voltar</Button>
        </Header>
         {pokemons}
        </Container>
    )
}

export default Pokedex;