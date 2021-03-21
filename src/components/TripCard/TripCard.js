import styled from 'styled-components/macro'

export default function TripCard({
  city,
  id,
  startDate,
  endDate,
  onDeleteTrip,
}) {
  return (
    <Card>
      <Heading>{city}</Heading>
      <DateWrapper>
        <Date>{startDate.replace('-', ' ').replace('-', '/')}</Date>
        <Date>{endDate.replace('-', ' ').replace('-', '/')}</Date>
      </DateWrapper>
      <DeleteButton onClick={() => onDeleteTrip(id)}>✕ Delete</DeleteButton>
    </Card>
  )
}

const Card = styled.div`
  background: var(--color-bg-light);
  height: 176px;
  padding: 20px;
  width: 335px;
  position: relative;

  &:first-child {
    margin-top: 40px;
  }
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
  background: var(--color-lightgrey);
  border-radius: 10px 0 0 10px;
  padding: 10px;
`
const DeleteButton = styled.button`
  color: red;
  border: 0.15em solid red;
  background: transparent;
  border-radius: 100px;
  padding: 4px 8px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 16px;
`
