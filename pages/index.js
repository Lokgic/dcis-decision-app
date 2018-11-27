import {GridContainer, GridCell, GridFooter, GridTitle,OutcomeDropdown,GridSideBar,GridContentLeft,GridContentRight} from '../style/GridSC'
import Treatment from '../components/TreatmentDropdown'
import RiskBox from '../components/RiskBox'
import ContentBox from '../components/ContentBox'
import treatmentDescription from '../content/treatmentDescription.json'
import qualityOfLife from '../content/qualityOfLife.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ()=>
    (
        <GridContainer>
            <Treatment/>
            <RiskBox/>


            <ContentBox data={treatmentDescription}/>
            <ContentBox data={qualityOfLife}/>
        </GridContainer>);