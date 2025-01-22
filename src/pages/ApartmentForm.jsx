import { useState } from 'react'
import { createAparment } from '../services/ApartmentsService'
import { useNavigate } from 'react-router-dom'

const ApartmentForm = () => {
  const navigate = useNavigate()

  const [img, setImg] = useState('')
  const [title, setTitle] = useState('')
  const [pricePerDay, setPricePerDay] = useState(1)

  const handleSubmit = (event) => {
    event.preventDefault();

    // Mando el formulario
    const data = {
      img, title, pricePerDay
    }

    createAparment(data)
      .then((response) => {
        navigate(`/apartments/${response._id}`)
      })
      .catch(error => console.error(error))
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    switch (name) {
      case 'title':
        setTitle(value)
        break;
      case 'img':
        setImg(value)
        break;
      case 'pricePerDay':
        setPricePerDay(Number(value))
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <h1>New apartment</h1>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            className="form-control" id="title" placeholder="Introduce the title of the apartment ad"
            value={title} onChange={handleChange} name='title'
            />
        </div>

        <div className="mb-3">
          <label htmlFor="img" className="form-label">Image</label>
          <input
            className="form-control" id="img" placeholder="Introduce the image URL"
            value={img} onChange={handleChange} name='img'
          />
        </div>

        <div className="mb-3">
          <label htmlFor="pricePerDay" className="form-label">Price per day</label>
          <input
            type="number" min={0} className="form-control" id="pricePerDay" placeholder="Introduce the price"
            value={pricePerDay} onChange={handleChange} name='pricePerDay'
          />
        </div>

        <button type="submit" className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default ApartmentForm