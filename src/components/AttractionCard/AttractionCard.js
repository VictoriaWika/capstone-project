import styled from 'styled-components/macro'

export default function AttractionCard({ name, image }) {
  return (
    <Card key={name}>
      <AttractionName>{name}</AttractionName>
      <Image src={image} width="335" alt=""></Image>
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
  background: rgba(250, 250, 250, 0.9);
  padding: 10px;
`
const Image = styled.img`
  border-radius: 24px;
`
