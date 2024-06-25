export default function SingleCat({ name, latinName, imgSrc }) {
  return (
    <div>
      <h3>
        {name} - <i>{latinName}</i>
      </h3>
      <img
        src={imgSrc}
        alt={name}
      />
    </div>
  );
}
