import { Link } from "react-router-dom"

const ApartmentCard = ({ id, title, location, image }) => {
  return (
    <div className="card">
    <img src={image} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{location}</p>
      <Link to={`/apartments/${id}`} className="btn btn-primary">See more info</Link>
    </div>
  </div>
  )
}

export default ApartmentCard