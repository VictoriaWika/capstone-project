import PropTypes from 'prop-types'
import styled from 'styled-components'
import CreateForm from '../../components/CreateForm/CreateForm'
import Header from '../../components/Header/Header'
import Overlay from '../../components/Overlay/Overlay'
import ScrollToTop from '../../services/ScrollToTop'

export default function CreatePage({ handleCreateTrip, open, sights }) {
  return (
    <>
      <ScrollToTop />
      <Header />
      {open === true && <Overlay />}
      <Heading>Trips</Heading>
      <CreateForm onCreateTrip={handleCreateTrip} sights={sights} />
    </>
  )
}

CreatePage.propTypes = {
  handleCreateTrip: PropTypes.func,
  open: PropTypes.bool,
}

const Heading = styled.h2`
  margin-top: 40px;
`
