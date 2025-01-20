import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PuffLoader } from 'react-spinners'
import APARTMENTS from '../data/apartments.json'
import ApartmentCard from '../components/ApartmentCard'

const getApartmentById = (id) => {
  return APARTMENTS.find(apartment => apartment.id === Number(id))
}

const ApartmentDetail = () => {
  // Importante recordar que es un string
  const { apartmentId } = useParams()

  const [apartment, setApartment] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    setTimeout(() => {
      const foundApartment = getApartmentById(apartmentId)

      if (foundApartment) {
        setApartment(foundApartment)
      } else {
        setShowError(true)
      }
      setIsLoading(false)
    }, 1000);
  }, [apartmentId])

  return (
    <div>
      {showError ? (
        <>
          <h1>Aparment not found</h1>
          <p>The apartment you tried to found does not exist</p>
        </>
      ) : null}

      {isLoading ? (
        <div className='d-flex justify-content-center'>
          <PuffLoader size={60} color='#000' loading />
        </div>
      ) : null}

      {!isLoading && !showError && apartment ? (
        <div>
          <h1>{apartment.title}</h1>

          <div className='row row-cols-1 row-cols-md-2 g-4 mb-3'>
            <div className='col'>
              <img src={apartment.image} className='w-100' alt="" />
            </div>
            <div className='col'>
              <div>
                Bathrooms: {apartment.bathrooms}
              </div>
              <div>
                Bedrooms: {apartment.bedrooms}
              </div>
              <div className={`badge text-bg-${apartment.available ? 'success' : 'danger'}`}>{apartment.available ? 'Available' : 'Not available'}</div>
            </div>
          </div>


          <Link to={`/apartments/${Number(apartmentId) + 1}`}>Go to next apartment</Link>

          <div className='mt-4'>
            <h2>Other apartments</h2>

            <div className='row row-cols-1 row-cols-md-3 g-4'>
              {APARTMENTS.map(apartment => (
                <div className='col' key={apartment.id}>
                  <ApartmentCard title={apartment.title} image={apartment.image} location={apartment.location} id={apartment.id}  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default ApartmentDetail