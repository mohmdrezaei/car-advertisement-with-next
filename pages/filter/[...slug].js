import CarsList from '@/components/templates/CarsList'
import carsData from '@/data/carsData'
import { useRouter } from 'next/router'
import React from 'react'

function FilteredCars() {
    const router = useRouter()
    const [min, max] = router.query.slug || []  
    const filteredCars = carsData.filter(item=> item. price > min && item.price < max)
    if(!filteredCars.length) return <h3>notFound</h3>

  return  <CarsList data={filteredCars} />
}

export default FilteredCars