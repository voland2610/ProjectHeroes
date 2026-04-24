interface CharacterCardProps {
  name: string;
  status: string;
  image: string;
}

const CharacterCard = ({ name, status, image }: CharacterCardProps) => {
  return (
    <>
      <h1>{name}</h1>
      <p>{status}</p>
      <img src={image} alt={name} />
    </>
  );
};

export default CharacterCard;
