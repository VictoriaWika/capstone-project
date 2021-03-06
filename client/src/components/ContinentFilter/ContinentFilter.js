import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { ReactComponent as AfricaSVG } from '../../assets/icons/africa.svg'
import { ReactComponent as AsiaSVG } from '../../assets/icons/asia.svg'
import { ReactComponent as EuropeSVG } from '../../assets/icons/europe.svg'
import { ReactComponent as NorthAmericaSVG } from '../../assets/icons/north-america.svg'
import { ReactComponent as OceaniaSVG } from '../../assets/icons/oceania.svg'
import { ReactComponent as SouthAmericaSVG } from '../../assets/icons/south-america.svg'
import Button from '../../components/Button/Button'

export default function ContinentFilter({
  filteredContinents,
  setFilteredContinents,
}) {
  return (
    <>
      <ButtonWrapper>
        <Africa>
          <AfricaSVG
            onClick={() => {
              setFilteredContinents('Africa')
            }}
            aria-label="africa-filter"
            fill={
              filteredContinents === 'Africa'
                ? 'var(--color-turquoise)'
                : 'var(--color-lightgrey)'
            }
          />
        </Africa>
        <Asia>
          <AsiaSVG
            onClick={() => setFilteredContinents('Asia')}
            aria-label="asia-filter"
            fill={
              filteredContinents === 'Asia'
                ? 'var(--color-turquoise)'
                : 'var(--color-lightgrey)'
            }
          />
        </Asia>
        <Europe>
          <EuropeSVG
            onClick={() => setFilteredContinents('Europe')}
            aria-label="europe-filter"
            fill={
              filteredContinents === 'Europe'
                ? 'var(--color-turquoise)'
                : 'var(--color-lightgrey)'
            }
          />
        </Europe>
        <NorthAmerica>
          <NorthAmericaSVG
            onClick={() => setFilteredContinents('North America')}
            aria-label="north-america-filter"
            fill={
              filteredContinents === 'North America'
                ? 'var(--color-turquoise)'
                : 'var(--color-lightgrey)'
            }
          />
        </NorthAmerica>
        <Oceania>
          <OceaniaSVG
            onClick={() => setFilteredContinents('Oceania')}
            aria-label="oceania-filter"
            fill={
              filteredContinents === 'Oceania'
                ? 'var(--color-turquoise)'
                : 'var(--color-lightgrey)'
            }
          />
        </Oceania>
        <SouthAmerica>
          <SouthAmericaSVG
            onClick={() => setFilteredContinents('South America')}
            aria-label="south-america-filter"
            fill={
              filteredContinents === 'South America'
                ? 'var(--color-turquoise)'
                : 'var(--color-lightgrey)'
            }
          />
        </SouthAmerica>
      </ButtonWrapper>
      <SelectedContinent>{filteredContinents}</SelectedContinent>
      {filteredContinents !== 'All continents' && (
        <Button
          onClick={() => setFilteredContinents('All continents')}
          aria-label="reset-filter"
        >
          Show all continents
        </Button>
      )}
    </>
  )
}

ContinentFilter.propTypes = {
  filteredContinents: PropTypes.string,
  setFilteredContinents: PropTypes.func,
}

const Africa = styled.div`
  position: absolute;
  bottom: 69px;
  left: 142px;
`
const Asia = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
`
const Europe = styled.div`
  position: absolute;
  right: 117px;
  top: 0;
`
const NorthAmerica = styled.div`
  position: absolute;
`
const Oceania = styled.div`
  position: absolute;
  right: 10px;
  bottom: 40px;
`
const SouthAmerica = styled.div`
  position: absolute;
  left: 72px;
  bottom: 7px;
`
const SelectedContinent = styled.span`
  text-align: center;
  font-size: 16px;
  margin-top: -25px;
`
const ButtonWrapper = styled.section`
  position: relative;
  height: 230px;
  width: 335px;
`
