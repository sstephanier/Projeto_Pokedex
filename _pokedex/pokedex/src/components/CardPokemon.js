import axios from "axios";
import { baseUrl } from "../constants/constants";
import { useEffect, useState, useContext } from "react";
import { goToDetails } from "../routers/Cordinator";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../global/GlobalContex";
import styled from "styled-components";

export const Card = styled.div`
font-family: 'Inter', sans-serif;
font-size: 14px;
align-items: center;
`

export const ContainerMae = styled.div`
background-color: #b0e0e6;
min-width: 10%;
max-width: 10%;
padding: 2px;
border-radius: 5%;
margin: 1% 1% 1% 2%;
display: inline-block;
align-items: center;
flex-direction: column;
text-align: center;
`

export const Button = styled.button`
margin: 2% 2% 2% 4%;
`


const CardPokemon = (props) => {
    const [infosPoke, setInfoPokes] = useState({});
    const navigate = useNavigate()
    const { states, setters } = useContext(GlobalContext)

    const getPokeInfos = () => {
        axios
          .get(`${baseUrl}pokemon/${props.pokemon.name}`)
          .then((res) => {
            setInfoPokes(res.data);
            console.log(res)
          })
          .catch((err) => {
            console.log(err.response);
          });
      };
    
      const setPokedex = () => {
        const newPokedex = [...states.pokedexList, infosPoke]
        setters.setPokedexList(newPokedex);
        
        const newPokeList = states.pokeList.filter((item) => {
          return item.name != infosPoke.name
          
        })
        setters.setPokeList(newPokeList)
      }
    
      useEffect(() => {
        getPokeInfos();
      }, []);

      return (
        <ContainerMae>
          <Card>
            <img onClick={() => goToDetails()}
              src={infosPoke.sprites?.front_default}
              alt={`${props.pokemon.name}`}
            />
            <h2>{props.pokemon.name}</h2>
          </Card>
          <div>
            <Button onClick={() => setPokedex()}>Adicionar a Pokedex</Button>
          </div>
        </ContainerMae>
      );
    };
    
    export default CardPokemon;
    