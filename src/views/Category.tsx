import { useState, useEffect } from "react"
import { useParams, Link, useSearchParams } from "react-router-dom"
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

const Category = () => {
  const [data, setData] = useState<dataObject[]>([])
  const [sortedData, setSortedData] = useState<dataObject[]>([]);
  const { category } = useParams()

  const [searchParams, setSearchParams] = useSearchParams({sort: "id"});
  const search = searchParams.get("sort");

  useEffect(() => {
    switch (category) {
      case "characters":
        setData(characters);
        break;
      case "episodes":
        setData(episodes);
        break;
      case "locations":
        setData(locations);
        break;
    }
  }, [category]);

  const sortList = () => {
    let sortedDataCopy = [...data]
    switch (searchParams.get("sort")) {
      case "id":
        sortedDataCopy.sort((a, b) => b.id - a.id)
        break
      case "date":
        sortedDataCopy.sort((a, b) => new Date(a.created).valueOf() - new Date(b.created).valueOf())
        break
      case "asc":
        sortedDataCopy.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "desc":
        sortedDataCopy.sort((a, b) => b.name.localeCompare(a.name))
        break
    }
    setSortedData(sortedDataCopy)
  }

  useEffect(() => {
    sortList()
  }, [data, searchParams]);

  const getDate = (date: string) => {
    return new Date(date.replace('Z', '+00:00')).toLocaleString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric' 
    })
  }

  return (
   <div className="category">
    <div className="container">
      <h1>Category {category && category}</h1>
      <div className="sort">
        <p>Sort by: 
          <span className="sort__button" onClick={() => {setSearchParams({sort: "id"})}}>ID</span>
          <span className="sort__button" onClick={() => {setSearchParams({sort: "date"})}}>Date</span>
          <span className="sort__button" onClick={() => {setSearchParams({sort: "asc"})}}>ASC</span>
          <span className="sort__button" onClick={() => {setSearchParams({sort: "desc"})}}>DESC</span>
        </p>
      </div>
      <div className="category__list">
        {sortedData && sortedData.map((item) => (
          <Link to={`/category/${category}/${item.id}`} key={item.id} className="category__item-link">
          <div className="category__item">
            <div className="category__item-image"></div>
            <div className="category__item-content">
              {item.id && <div className="category__item-id">#{item.id}</div>}
              <h3>{item.name && item.name}</h3>
              <div className="category__item-date">
                {item.created && getDate(item.created)}
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
   </div> 
  )
}

export default Category