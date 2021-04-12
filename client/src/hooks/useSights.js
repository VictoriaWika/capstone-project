import { useEffect, useState } from 'react'
import getSights from '../services/getSights'

export default function useSights() {
  const [data, setData] = useState([])

  useEffect(() => {
    getSights()
      .then(data => setData([...data]))
      .catch(error =>
        console.log('An error occured, while fetching the api', error)
      )
  }, [])

  return data
}
