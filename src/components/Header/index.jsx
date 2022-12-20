

import { MessageStrip } from 'fundamental-react/lib/MessageStrip';
import { useState } from 'react';
import App from '../../App';
//import { Shellbar } from 'fundamental-react/lib/Shellbar';





export function Header(){
    const [productMenu, setproductMenu] = useState([]);
    const [profile, setprofile] = useState({});
    const [profileMenu, setprofileMenu] = useState([]);
    const [character, setCharacter] = useState({});
    const [characterId, setCharacterId] = useState(0);
    const [characters, setCharacters] = useState([]);

    return(
   
<>
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




        {/* <form>
        <input
          type="number"
          value={characterId}
          onChange={function (evento) {
            setCharacterId(Number(evento.target.value));
          }}
          
        /> 
        <button type="submit">Buscar</button>

        <br />

        <div style={{ backgroundColor: "blue" }}>{characterId}</div>

        <h3>Retorno da API</h3>
      <center> <div style={{ backgroundColor: "silver", color: "white", width: "80em" }}> 
          
        </div></center> 

         {characterId === 0 ? (
          <p>Informe o ID para realizar a busca</p>
        ) : (
          <p>
            O id {character.id} é o personagem {character.name}, sua espécie é {character.species}, 
            sua foto: <img src={character.image} width="100px" alt="rick"/>
          </p>
        )}
      </form> */}
      </>       
        
   )
 }






























 //         <Shellbar
//         //logo={<img src='http://s2.glbimg.com/fP8FcBdhKXgZ2HCLdGl7R8MIHIk=/e.glbimg.com/og/ed/f/original/2017/10/20/rick-and-morty3.png' width='10px'/>}

//         notifications={{
//             notificationCount: 2,
//             label: 'Notifications'
//         }}
//         productMenu={productMenu}
//         productTitle=' Rick and Morty'
//         profile={{
//             image: './assets/headshot-male.jpg',
//             userName: 'Rick'
//         }}
//         // profileMenu={profileMenu}
//         // searchInput={{
//         //     label: 'Search',
//         //     placeholder: 'Search'
            
//         // }}
//         profileMenu={profileMenu}
//         searchInput={{
//             label: 'Search',
//             placeholder: 'Search',
//             onChange:(evento)=>{
// console.log(evento)
//             }
//         }}
//         subtitle='Subtitle' />
{/* <input
          type="number"
          value={characterId}
          onChange={function (evento) {
            setCharacterId(Number(evento.target.value));
          }}
          
        /> */}
// type="number"
// value={characterId}
// onChange={function (evento) {
//   setCharacterId(Number(evento.target.value));}}