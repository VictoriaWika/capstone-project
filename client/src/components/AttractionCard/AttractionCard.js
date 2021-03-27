import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { ReactComponent as LikeSVG } from '../../icons/liked.svg'
import { ReactComponent as UnlikeSVG } from '../../icons/unliked.svg'

const like = <LikeSVG />
const unlike = <UnlikeSVG />

export default function AttractionCard({
  image,
  likedPlaces,
  name,
  onAddLike,
}) {
  return (
    <Card key={name}>
      <LikeButton
        role="button"
        aria-label="toggle-like"
        onClick={() => onAddLike(name)}
      >
        {likedPlaces.includes(name) ? like : unlike}
      </LikeButton>
      <AttractionName>{name}</AttractionName>
      <Image src={image} width="335" height="335" alt=""></Image>
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
const AttractionName = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  bottom: 4px;
  left: 0;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background: var(--color-bg-light);
  padding: 10px;
`
const Image = styled.img`
  border-radius: 12px;
  height: auto;
`
const LikeButton = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  z-index: var(--zindex-absolute);
`
