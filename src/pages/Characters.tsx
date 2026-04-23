import { useCharacters } from "../entities/character/useCharacters";

const Characters = () => {
    const { data, isLoading, isError } = useCharacters()

    if(data != undefined){
        return(<>{data.results.map((dat)=>(
            <p>{dat.name}</p>
        ))}</>)
    }
}

export default Characters;