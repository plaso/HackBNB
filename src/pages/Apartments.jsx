import { PuffLoader } from 'react-spinners'
import ApartmentCard from '../components/ApartmentCard'
import APARTMENTS from '../data/apartments.json'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const LOCATIONS = APARTMENTS.map(apartment => apartment.location)

const Apartments = () => {
  const [apartments, setApartments] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [showLocations, setShowLocations] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()

  const locationParam = searchParams.get('location')
  const location = locationParam ? locationParam.split(',') : []

  console.log(location)

  useEffect(() => {
    setTimeout(() => {
      setApartments(APARTMENTS)
      setIsLoading(false)
    }, 1000);
  }, [])

  const calculateApartmentsToRender = () => {
    if (apartments.length > 0) {
      if (location.length > 0) {
        return apartments.filter(apartment => location.includes(apartment.location))
      }

      return apartments
    }

    return []
  }

  const handleLocation = (locationValue) => {
    const newParam = location.includes(locationValue)
      ? location.filter(value => value !== locationValue)
      : [...location, locationValue]

    setSearchParams({ location: newParam.join(',') })
    setShowLocations(false)
  }

  return (
    <div>
      <h1 className='mb-4'>Our apartments</h1>

      { isLoading ? (
        <div className='d-flex justify-content-center'>
          <PuffLoader size={60} color='#000' loading />
        </div>
      ) : (
        <div>
          <div className='mb-3'>
            <div className='position-relative'>
              <button className='btn btn-outline-primary' onClick={() => setShowLocations(!showLocations)}>Location</button>
              {showLocations && (
                <div className='d-flex flex-column border'>
                  {LOCATIONS.map(locationValue => (
                    <button className='btn' key={locationValue} onClick={() => handleLocation(locationValue)}>
                      {locationValue}{location.includes(locationValue) ? ' X' : ''}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className='row row-cols-1 row-cols-md-2 g-4'>
            {calculateApartmentsToRender().map(apartment => (
              <div className='col' key={apartment.id}>
                <ApartmentCard title={apartment.title} image={apartment.image} location={apartment.location} id={apartment.id}  />
              </div>
            ))}
          </div>
        </div>
      ) }
    </div>
  )
}

export default Apartments