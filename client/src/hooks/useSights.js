import { useEffect, useState } from 'react'
import getSights from '../services/getSights'

export default function useSights() {
  const [data, setData] = useState([])

  useEffect(() => {
    getSights().then(data => setData([...data]))
  }, [])

  return data
}
