import PropTypes from 'prop-types'
import CreateForm from '../../components/CreateForm/CreateForm'
import Overlay from '../../components/Overlay/Overlay'

export default function CreatePage({ handleCreateTrip, open }) {
  return (
    <>
      {open === true && <Overlay />}
      <CreateForm onCreateTrip={handleCreateTrip} />
    </>
  )
}

CreatePage.propTypes = {
  handleCreateTrip: PropTypes.func,
  open: PropTypes.bool,
}
