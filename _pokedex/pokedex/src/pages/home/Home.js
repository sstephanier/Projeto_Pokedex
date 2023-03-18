import React, { useEffect, useContext } from "react";
import CardPokemon from "../../components/CardPokemon";
import { goToPokedex, goToHome } from "../../routers/Cordinator";
import logo from "../../assets/Pokemon_logo.png"
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../global/GlobalContex";
import { Button, Cont, Container, ContainerCard, Header } from "./StyledHome";




const Home = (props) => {

    const navigate = useNavigate()
    const { states, functions, requests } = useContext(GlobalContext)

    const cardPokemons = states.pokeList.map((pokemon) => {
        return (
            <CardPokemon  key={pokemon.name} 
                pokeList={props.pokeList}
                setPokeList={props.setPokeList}
                pokemon={pokemon}
                setPokedexList={props.setPokedexList}
                pokedexList={props.pokedexList} />
        )
    })
    useEffect(() => {
        requests.getPokemons(states.page)
    }, [states.page])

    return (
        <div>
        <Header>
        <img src={logo} height="52em" width="180" onClick={() => goToHome(navigate)} />
        <Button onClick={() => goToPokedex(navigate)}>Ir para Pokedex</Button>
        </Header>
        <Container> 
        {cardPokemons}
        </Container>
        </div>
    )
}

export default Home;

