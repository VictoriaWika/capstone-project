import styled from 'styled-components/macro'
import { ReactComponent as LikeSVG } from '../../icons/liked.svg'
import { ReactComponent as UnlikeSVG } from '../../icons/unliked.svg'

const like = <LikeSVG />
const unlike = <UnlikeSVG />

export default function AttractionCard({
  name,
  image,
  LikePlace,
  likedPlaces,
}) {
  return (
    <Card key={name}>
      <LikeButton
        role="button"
        aria-label="toggle-like"
        onClick={() => LikePlace(name)}
      >
        {likedPlaces.includes(name) ? like : unlike}
      </LikeButton>
      <AttractionName>{name}</AttractionName>
      <Image src={image} width="335" height="335" alt=""></Image>
    </Card>
  )
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
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  background: var(--color-bg-light);
  padding: 10px;
`
const Image = styled.img`
  border-radius: 24px;
  height: auto;
`
const LikeButton = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  z-index: var(--zindex-absolute);
`
