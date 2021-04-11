import PropTypes from 'prop-types'
import styled from 'styled-components'
import CreateForm from '../../components/CreateForm/CreateForm'
import Overlay from '../../components/Overlay/Overlay'
import ScrollToTop from '../../services/ScrollToTop'

export default function CreatePage({ handleCreateTrip, open }) {
  return (
    <PageLayout>
      <ScrollToTop />
      {open && <Overlay />}
      <Heading>Trips</Heading>
      <CreateForm onCreateTrip={handleCreateTrip} />
    </PageLayout>
  )
}

CreatePage.propTypes = {
  handleCreateTrip: PropTypes.func,
  open: PropTypes.bool,
}

const PageLayout = styled.div`
  display: grid;
  margin-top: 80px;
`
const Heading = styled.h1`
  font-size: 27px;
  position: fixed;
  background: var(--color-white);
  top: 18px;
  left: 0;
  padding: 20px;
  width: 100vw;
`
