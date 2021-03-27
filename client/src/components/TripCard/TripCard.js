import PropTypes from 'prop-types'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { ReactComponent as PlusSVG } from '../../icons/plus.svg'
import Button from '../Button/Button'

export default function TripCard({
  city,
  endDate,
  id,
  onDeleteTrip,
  sights,
  startDate,
}) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <Card>
      <Heading>{city}</Heading>
      <DateWrapper>
        <span>{startDate}</span>
        <span>{endDate}</span>
      </DateWrapper>
      <AddButton as={Link} to={`/${city}`} aria-label="navigate-to-add-sights">
        <PlusSVG /> Add sights
      </AddButton>
      <ShowMoreButton
        onClick={event => {
          event.stopPropagation()
          setIsVisible(!isVisible)
        }}
        aria-label="toggle-details"
      >
        {!isVisible ? 'Show more' : 'Show less'}
      </ShowMoreButton>
      {isVisible && (
        <>
          <FlexContainer>
            {sights.length !== 0
              ? sights.map(sight => (
                  <div>
                    <Image
                      src={sight.image}
                      width="150"
                      height="150"
                      alt=""
                    ></Image>{' '}
                    {sight.name}
                  </div>
                ))
              : 'Add sights and they will be displayed here'}
          </FlexContainer>
          <DeleteButton onClick={() => onDeleteTrip(id)}>✕</DeleteButton>
        </>
      )}
    </Card>
  )
}

TripCard.propTypes = {
  city: PropTypes.string,
  id: PropTypes.string,
  sights: PropTypes.array,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  onDeleteTrip: PropTypes.func,
}

const Card = styled.div`
  background: var(--color-bg-light);
  padding: 20px;
  width: 335px;
  display: grid;
  gap: 15px;

  &:first-child {
    margin-top: 40px;
  }
`
const Heading = styled.h3`
  margin: 0;
`
const DateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
`
const ShowMoreButton = styled(Button)`
  margin: 0 auto;
  width: 150px;
`
const AddButton = styled(Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  text-decoration: none;
  color: black;
  padding: 10px;
  border-radius: 0;
`
const DeleteButton = styled(Button)`
  display: inline;
  color: red;
  border: 0.15em solid red;
  background: transparent;
  padding: 5px;
`
const FlexContainer = styled.div`
  display: flex;
  gap: 10px;
  overflow: scroll;
`
const Image = styled.img`
  height: auto;
  border-radius: 10px;
`
