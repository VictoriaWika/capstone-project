import PropTypes from 'prop-types'
import { useState } from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as ArrowDown } from '../../icons/arrow-down.svg'
import { ReactComponent as ArrowUp } from '../../icons/arrow-up.svg'
import { ReactComponent as LikeSVG } from '../../icons/liked.svg'
import { ReactComponent as UnlikeSVG } from '../../icons/unliked.svg'
import Button from '../Button/Button'

const like = <LikeSVG />
const unlike = <UnlikeSVG />

export default function AttractionCard({
  continent,
  description,
  image,
  likedPlaces,
  location,
  name,
  onAddLike,
}) {
  const [isVisible, setIsVisible] = useState(false)
  const region = location + ', ' + continent
  return (
    <Card key={name}>
      <LikeButton
        role="button"
        aria-label="toggle-like"
        onClick={() => onAddLike(name)}
      >
        {likedPlaces.includes(name) ? like : unlike}
      </LikeButton>
      <Image src={image} width="335" height="335" alt="" />
      <AttractionInfo>
        <h2>
          {!isVisible ? name.slice(0, 26) : name}
          {!isVisible && name.length > 26 && '...'}
        </h2>
        <span>
          {!isVisible ? region.slice(0, 27) : region}
          {!isVisible && region.length > 27 && '...'}
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
  name: PropTypes.string,
  image: PropTypes.string,
  onAddLike: PropTypes.func,
  likedPlaces: PropTypes.array,
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
  z-index: var(--zindex-absolute);

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
const LikeButton = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  z-index: var(--zindex-absolute);
`
