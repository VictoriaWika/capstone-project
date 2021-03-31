import PropTypes from 'prop-types'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { ReactComponent as PlusSVG } from '../../icons/plus.svg'
import Button from '../Button/Button'
import { ReactComponent as ArrowDown } from '../../icons/arrow-down.svg'
import { ReactComponent as ArrowUp } from '../../icons/arrow-up.svg'

export default function TripCard({
  continent,
  endDate,
  location,
  id,
  onDeleteTrip,
  sights,
  startDate,
}) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <Card>
      <Heading>{location}</Heading>
      <span>{continent}</span>
      <DateWrapper>
        <span>{startDate}</span>
        <span>{endDate}</span>
      </DateWrapper>
      <AddButton
        as={Link}
        to={`/${location}`}
        aria-label="navigate-to-add-sights"
      >
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
        {!isVisible ? <ArrowDown /> : <ArrowUp />}
      </ShowMoreButton>
      {isVisible && (
        <>
          {sights.length !== 0 &&
            `You added ${sights.length} ${
              sights.length === 1 ? 'sight' : 'sights'
            } to your trip`}
          <FlexContainer>
            {sights.length
              ? sights.map(sight => (
                  <div key={sight._id}>
                    <Image
                      src={sight.image}
                      width="250"
                      height="250"
                      alt=""
                    ></Image>{' '}
                    {sight.name}
                  </div>
                ))
              : 'Add sights and they will be displayed here'}
          </FlexContainer>
          <DeleteButton
            onClick={() => onDeleteTrip(id)}
            aria-label="delete-trip"
          >
            Delete trip
          </DeleteButton>
        </>
      )}
    </Card>
  )
}

TripCard.propTypes = {
  continent: PropTypes.string,
  location: PropTypes.string,
  id: PropTypes.string,
  sights: PropTypes.array,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  onDeleteTrip: PropTypes.func,
}

const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  border-radius: 12px;
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
const AddButton = styled(Button)`
  display: flex;
  justify-content: space-between;
  padding: 10px 90px;
  align-items: center;
  text-decoration: none;
`
const ShowMoreButton = styled(Button)`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background: transparent;
  color: black;
  width: 160px;
`
const DeleteButton = styled(Button)`
  display: inline;
  color: var(--color-pink);
  border: 0.15em solid var(--color-pink);
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
