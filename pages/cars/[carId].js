import { useRouter } from "next/router"
import carsData from "@/data/carsData"

function CarDetails() {
    const router = useRouter()
    const {carId} = router.query
    const carDetails = carsData[carId - 1]
    console.log(carDetails)
   
  return (
    <div>CarDetails</div>
  )
}

export default CarDetails