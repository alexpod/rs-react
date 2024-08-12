import { useParams } from "react-router-dom"
import characters from "../data/characters"
import episodes from "../data/episode"
import locations from "../data/location"

interface dataObject {
  id: number
  name: string
  status?: string
  species?: string
  type?: string
  gender?: string
  image?: string
  created: string
  air_date?: string;
  episode?: string;
}

const CategoryItem = () => {
  let categoryNew: dataObject[] = []
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

  return (
    <>
    <div className="container">
      <h1>Category Item {category && category} {id && id}</h1>
      <div className="card">
        <div className="card__image"></div>
        <dl>
          {categoryNew.filter((item: dataObject) => ((item.id).toString() === id)).map((c, i) => (
            <>
              {Object.keys(c).map((key) => (
                <>
                { c[key] && (
                  <>
                    <dt key={`${i}-${key}`}>{key}</dt>
                    <dd key={`${i}-${key}-${c[key]}`}>{c[key]}</dd>
                  </>
                )}
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