import { useParams } from 'react-router-dom'
import { cities } from '../../capstone.json'
import GoBackButton from '../GoBackButton/GoBackButton'

export default function CityPage() {
  const { city } = useParams()
  const filteredCity = cities.map(
    location => location.name === city && location.attraction
  )

  return (
    <div>
      <GoBackButton />
      <h1>{city}</h1>
    </div>
  )
}
