import styled from 'styled-components/macro'
import Button from '../../components/Button/Button'
import { ReactComponent as AfricaSVG } from '../../icons/africa.svg'
import { ReactComponent as AsiaSVG } from '../../icons/asia.svg'
import { ReactComponent as EuropeSVG } from '../../icons/europe.svg'
import { ReactComponent as NorthAmericaSVG } from '../../icons/north-america.svg'
import { ReactComponent as OceaniaSVG } from '../../icons/oceania.svg'
import { ReactComponent as SouthAmericaSVG } from '../../icons/south-america.svg'

export default function ContinentFilter({
  filteredContinents,
  setFilteredContinents,
}) {
  return (
    <>
      <ButtonWrapper>
        <Africa>
          <AfricaSVG onClick={() => setFilteredContinents('Africa')}>
            Africa
          </AfricaSVG>
        </Africa>
        <Asia>
          <AsiaSVG onClick={() => setFilteredContinents('Asia')}>Asia</AsiaSVG>
        </Asia>
        <Europe>
          <EuropeSVG onClick={() => setFilteredContinents('Europe')}>
            Europe
          </EuropeSVG>
        </Europe>
        <NorthAmerica>
          <NorthAmericaSVG
            onClick={() => setFilteredContinents('North America')}
          >
            North America
          </NorthAmericaSVG>
        </NorthAmerica>
        <Oceania>
          <OceaniaSVG onClick={() => setFilteredContinents('Oceania')}>
            Oceania
          </OceaniaSVG>
        </Oceania>
        <SouthAmerica>
          <SouthAmericaSVG
            onClick={() => setFilteredContinents('South America')}
          >
            South America
          </SouthAmericaSVG>
        </SouthAmerica>
      </ButtonWrapper>
      <SelectedContinent>{filteredContinents}</SelectedContinent>
      {filteredContinents !== 'All continents' && (
        <Button onClick={() => setFilteredContinents('All continents')}>
          Show all continents
        </Button>
      )}
    </>
  )
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
  fill: var(--color-lightgrey);
`
