import SingleCat from "./SingleCat";

export default function BigCatsList({ list, onListUpdated }) {
  function deleteCat(cat) {
    const index = list.indexOf(cat);
    list.splice(index, 1);
    onListUpdated([...list]);
  }

  return (
    <>
      {list.map((cat) => (
        <SingleCat
          key={cat.id}
          name={cat.name}
          latinName={cat.latinName}
          imgSrc={cat.imgSrc}
          onDelete={() => deleteCat(cat)}
        />
      ))}
    </>
  );
}
