import PropTypes from 'prop-types'
import { useState } from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as ArrowDown } from '../../icons/arrow-down.svg'
import { ReactComponent as ArrowUp } from '../../icons/arrow-up.svg'
import Button from '../Button/Button'

export default function AttractionCard({
  continent,
  description,
  image,
  location,
  name,
}) {
  const [isVisible, setIsVisible] = useState(false)
  const region = location + ', ' + continent
  return (
    <Card key={name}>
      <Image src={image} width="335" height="335" alt="" />
      <AttractionInfo>
        <h2>
          {!isVisible ? name.slice(0, 24) : name}
          {!isVisible && name.length > 24 && '...'}
        </h2>
        <span>
          {!isVisible ? region.slice(0, 34) : region}
          {!isVisible && region.length > 34 && '...'}
        </span>
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
        {isVisible && <p>{description}</p>}
      </AttractionInfo>
    </Card>
  )
}

AttractionCard.propTypes = {
  continent: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string,
}

const Card = styled.div`
  position: relative;
`
const AttractionInfo = styled.div`
  padding: 16px;
  width: 90%;
  margin: -40px auto 0;
  background: var(--color-white);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
  border-radius: 12px;
  position: relative;

  h2 {
    font-size: 18px;
    margin: 0;
  }

  p,
  span {
    font-size: 16px;
    margin: 0;
  }
`
const ShowMoreButton = styled(Button)`
  margin: 0;
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  background: transparent;
  color: black;
  width: 110px;
  padding: 5px 0;
`
const Image = styled.img`
  border-radius: 12px;
  height: auto;
  z-index: 0;
`
