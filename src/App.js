import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { GetAllCharacters, GetCharacter } from "./services/characterService";
import {style} from "./services/characterService";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  // Dados específicos
  const [characterId, setCharacterId] = useState(0);
  const [character, setCharacter] = useState({});

  GetCharacter(characterId)
  .then(function (retornoDaApi) {
    setCharacter(retornoDaApi.data);
  });

  const objeto = {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    image: { url: "" }
    
  };

  // Lista de dados

  const [characters, setCharacters] = useState([]);

  useEffect(function () {
    GetAllCharacters()
    .then((retornoDaApi) => {
     
      setCharacters(retornoDaApi.data.results);

      console.log(retornoDaApi.data.results);
    });
  }, []);



  return (

<div>

  

  {/* <Header  /> */}
         
     

  <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">

    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <span class="navbar-toggler-icon"></span>
      <ul className="navbar-nav me-auto mb-3 mb-lg-0">
      
      <li class="nav-item">
          <a class="nav-link ">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">API</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Personagens</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
        <li> 
        <input
         className="form-control me-3" 
          type="number"
          value={characterId}
          onChange={function (evento) {
            setCharacterId(Number(evento.target.value));
           
          }}
          
        /> 
        
        </li>
      </ul>
      <form className="d-flex" role="search">
       
        <button classNameName="btn btn-outline-success" 
         type="number" onclick="GetAllCharacters() ">Buscar</button>
      </form>
    </div>
  </div>
</nav>



      <table>
        {/* Cabeçalho da Tabela */}
        {/* <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Espécie</th>
            <th>Imagem</th>
          </tr>
        </thead> */}

        {/* Dados da tabela */}
        <tbody>

          {characters
          .filter((character) => character.name.includes()  )
          .map(function (character) {
            return (
              <tr key={character.id}>
                <td>{character.id}</td>
                <td>{character.name}</td>
                <td>{character.species}</td>
                <td>{ <img src={character.image} width="100px" alt="rick"/>}</td> 
                
          </tr>
         
            );
            
          })}
        </tbody>
      </table>

     

     
       
        <br />

        {/* <div style={{ backgroundColor: "blue" }}>{characterId}</div> */}

        {/* <h3>Retorno da API</h3>
      <center> <div style={{ backgroundColor: "silver", color: "white", width: "80em" }}> 
          {JSON.stringify(character)}
        </div></center>  */}

         {characterId === 0 ? (
          <h3>Informe o ID  entre 1 e 846 para realizar a busca de um pesonagem de Rick and Morty</h3>
        ) : (
          <p>
            <br /> <center><img src={character.image}  width="480em" alt="rick"/><br />
            O id {character.id} é o personagem {character.name}, sua espécie é {character.species}, foto:</center>
          </p>
        )}
    
    </div>
    
  );

}

export default App;
