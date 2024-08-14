import { heroes } from "../data/heroes";

export const getHeroesByPublisher =(publisher)=>{

    const validPubilisher =['DC Comics','Marvel Comics']
    if(!validPubilisher.includes(publisher)){
        throw new Error(`${publisher} is not a valid publisher`)
    }

    return heroes.filter(heroe=> heroe.publisher===publisher);

}