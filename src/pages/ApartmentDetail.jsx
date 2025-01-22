import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PuffLoader } from 'react-spinners'
import APARTMENTS from '../data/apartments.json'
import ApartmentCard from '../components/ApartmentCard'
import { getApartment } from '../services/ApartmentsService'

const ApartmentDetail = () => {
  // Importante recordar que es un string
  const { apartmentId } = useParams()

  const [apartment, setApartment] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    getApartment(apartmentId)
      .then(response => setApartment(response))
      .catch(err => {
        setShowError(true)
        console.error(err) 
      })
      .finally(() => setIsLoading(false))
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
              <img src={apartment.img} className='w-100' alt="" />
            </div>
            <div className='col'>
              <div>
                Price: {apartment.pricePerDay}
              </div>
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