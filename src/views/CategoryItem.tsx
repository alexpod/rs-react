import { useParams } from "react-router-dom"
import characters from "../data/characters.json"
import episodes from "../data/episode.json"
import locations from "../data/location.json"

const CategoryItem = () => {
  let categoryNew = []
  const { category, id } = useParams()

  switch (category) {
    case "characters":
      categoryNew = characters
      break
    case "episodes":
      categoryNew = episodes
      break
    case "locations":
      categoryNew = locations
      break
    default:
      break
  }
  // console.log(category, id)
  // console.log(categoryNew.filter((item) => item.id === parseInt(id) ))

  // categoryNew = categoryNew.filter((item) => (item.id == id)).map((c, i) => {
  //   Object.keys(c).forEach((key) => {
  //     console.log(`${key}: ${c[key]}`);
  //   });
  // });
  // Object.keys(categoryNew).forEach((key) => {
  //   console.log(`${key}: ${categoryNew[key]}`);
  // });

  return (
    <>
    <div className="container">
      <h1>Category Item {category && category} {id && id}</h1>
      <div className="card">
        <div className="card__image"></div>
        <dl>
          {categoryNew.filter((item) => (item.id == id)).map((c, i) => (
            <>
              {Object.keys(c).map((key) => (
                <>
                  <dt key={`${i}-${key}`}>{key}</dt>
                  <dd key={`${i}-${key}`}>{c[key]}</dd>
                </>
              ))}
            </>
          ))}
        </dl>
      </div>
    </div>
  </>
  )
}

export default CategoryItem;