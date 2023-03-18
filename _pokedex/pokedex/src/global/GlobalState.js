import React, { useState } from "react";
import { GlobalContext } from "./GlobalContex";
import axios from "axios";

export default function GlobalState(props) {
    const [pokedexList, setPokedexList] = useState([])
    const [infosPoke, setInfoPokes] = useState({});
    const [details, setDetails] = useState({})
    const [page, setPage] = useState(0)
    const [pokeList, setPokeList] = useState([]) 



    const getPokemons = async (pagina) => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${pagina}&limit=28`);
            const newPokeList = response.data.results.filter((item) => {
                return !pokedexList.find((pokemon) => {
                    return pokemon.name === item.name
                })
            })
            setPokeList(newPokeList)
        } catch (err) {
            console.log("Erro na página", err.response);
        }
    }


    const states = { pokeList, pokedexList, infosPoke, details, page }
    const setters = { setPokeList, setPokedexList, setDetails, setInfoPokes, setPage }
    const requests = { getPokemons }

    return (
        <GlobalContext.Provider value={{ states, setters, requests }}>
            {props.children}
        </GlobalContext.Provider>
    )
}