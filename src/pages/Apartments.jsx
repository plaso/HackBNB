import { PuffLoader } from 'react-spinners'
import ApartmentCard from '../components/ApartmentCard'
import APARTMENTS from '../data/apartments.json'
import { useState, useEffect } from 'react'

const Apartments = () => {
  const [apartments, setApartments] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setApartments(APARTMENTS)
      setIsLoading(false)
    }, 1000);
  }, [])

  return (
    <div>
      <h1 className='mb-4'>Our apartments</h1>

      { isLoading ? (
        <div className='d-flex justify-content-center'>
          <PuffLoader size={60} color='#000' loading />
        </div>
      ) : (
        <div className='row row-cols-1 row-cols-md-2 g-4'>
          {apartments.map(apartment => (
            <div className='col' key={apartment.id}>
              <ApartmentCard title={apartment.title} image={apartment.image} location={apartment.location} id={apartment.id}  />
            </div>
          ))}
        </div>
      ) }
    </div>
  )
}

export default Apartments