export default function SingleCat({ name, latinName, imgSrc, onDelete }) {
  return (
    <div>
      <h3>
        {name} - <i>{latinName}</i>
      </h3>
      <div>
        <img
          src={imgSrc}
          alt={name}
        />
      </div>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
