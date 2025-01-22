import { Link } from "react-router-dom"

const ApartmentCard = ({ id, title, image }) => {
  return (
    <div className="card">
    <img src={image} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <Link to={`/apartments/${id}`} className="btn btn-primary">See more info</Link>
    </div>
  </div>
  )
}

export default ApartmentCard