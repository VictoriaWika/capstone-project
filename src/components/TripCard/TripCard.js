import styled from 'styled-components/macro'

export default function TripCard({ city, startDate, endDate }) {
  return (
    <Card>
      <Heading>{city}</Heading>
      <DateWrapper>
        <Date>{startDate.replace('-', ' ').replace('-', '/')}</Date>
        <Date>{endDate.replace('-', ' ').replace('-', '/')}</Date>
      </DateWrapper>
    </Card>
  )
}

const Card = styled.div`
  background: rgba(250, 250, 250, 0.9);
  height: 176px;
  padding: 20px;
  display: grid;
  gap: 10px;
  position: relative;
`
const Heading = styled.h3`
  margin: 0;
`
const DateWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 20px;
  display: grid;
  gap: 20px;
  text-align: center;
`
const Date = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80px;
  background: #eee;
  border-radius: 10px 0 0 10px;
  padding: 10px;
`
