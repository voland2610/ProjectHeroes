import { useParams } from "react-router-dom";
import { useCharacter } from "~/entities/character";

const CharacterDetailsPage = () => {
  const { id } = useParams();
  const characterId = Number(id);
  const { data, isLoading, isError } = useCharacter(characterId);
  if (isLoading) {
    return <h1>Идет загрузка</h1>;
  }

  if (isError) {
    return <h1>Есть ошибка</h1>;
  }

  if (!data) {
    return <h1>Персонаж не найден</h1>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.image} alt={data.name} />
      <p>Status: {data.status}</p>
    </div>
  );
};
export default CharacterDetailsPage;
