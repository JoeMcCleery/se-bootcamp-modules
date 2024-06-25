import SingleCat from "./SingleCat";

const cats = [
  {
    id: 0,
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    imgSrc:
      "https://images.pexels.com/photos/88234/pexels-photo-88234.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 1,
    name: "Cougar",
    latinName: "Puma concolor",
    imgSrc:
      "https://images.pexels.com/photos/7256331/pexels-photo-7256331.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Jaguar",
    latinName: "Panthera onca",
    imgSrc:
      "https://images.pexels.com/photos/41002/jaguar-halbwuchsig-sepia-profile-41002.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Leopard",
    latinName: "Panthera pardus",
    imgSrc:
      "https://images.pexels.com/photos/33154/leopard-leopard-head-wildlife-big-cat.jpg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "Lion",
    latinName: "Panthera leo",
    imgSrc:
      "https://images.pexels.com/photos/797582/pexels-photo-797582.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    name: "Snow leopard",
    latinName: "Panthera uncia",
    imgSrc:
      "https://images.pexels.com/photos/208840/pexels-photo-208840.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    name: "Tiger",
    latinName: "Panthera tigris",
    imgSrc:
      "https://images.pexels.com/photos/47312/tiger-predator-animal-tooth-47312.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function BigCats() {
  return (
    <>
      {cats.map((data) => (
        <SingleCat
          key={data.id}
          name={data.name}
          latinName={data.latinName}
          imgSrc={data.imgSrc}
        />
      ))}
    </>
  );
}
