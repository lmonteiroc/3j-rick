import { batata } from "../api"

const route = "character"

export async function GetAllCharacters() {
  return await batata.get(`/${route}`)
}

export async function GetCharacter(idCharacter) {
  return await batata.get(`/${route}/${idCharacter}`)
}


