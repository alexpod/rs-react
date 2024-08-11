import { useState, useEffect } from "react"
import characters from "../data/characters"
import episodes from "../data/episode.json"
import locations from "../data/location.json"
import { useParams, Link } from "react-router-dom"

const Category = () => {
  const [data, setData] = useState([])
  const [sortedData, setSortedData] = useState([]);
  const { category } = useParams()

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
      default:
        break;
    }
  }, [category]);

  const sortList = (type: string) => {
    let sortedDataCopy = [...data]
    switch (type) {
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
    setSortedData(data)
  }, [data]);



  return (
   <div className="category">
    <div className="container">
      <h1>Category {category && category}</h1>
      <div className="sort">
        <p>Sort by: 
          <span className="sort__button" onClick={() => {sortList('id')}}>ID</span>
          <span className="sort__button" onClick={() => {sortList('date')}}>Date</span>
          <span className="sort__button" onClick={() => {sortList('asc')}}>ASC</span>
          <span className="sort__button" onClick={() => {sortList('desc')}}>DESC</span>
        </p>
      </div>
      {/* <p>{categoryNmae}</p>
      <p>{itemId}</p> */}
      <div className="category__list">
        {sortedData && sortedData.map((item) => (
          <Link to={`/category/${category}/${item.id}`} key={item.id} className="category__item-link">
          <div className="category__item">
            <div className="category__item-image"></div>
            <div className="category__item-content">
              {item.id && <div className="category__item-id">#{item.id}</div>}
              <h3>{item.name && item.name}</h3>
              {/* {item.created && new Date(item.created.replace('Z', '+00:00'))} */}
              <div className="category__item-date">
                {item.created && new Date(item.created.replace('Z', '+00:00')).toLocaleString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' })}
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