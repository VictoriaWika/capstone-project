import styled from 'styled-components/macro'

export default function TripCard({ city, startDate, endDate }) {
  return (
    <Card>
      <h3>{city}</h3>
      <span>{startDate} </span>
      <span>{endDate}</span>
    </Card>
  )
}

const Card = styled.div`
  background: hotpink;
`
