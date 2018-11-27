import {GridCell, GridFooter, GridTitle,OutcomeDropdown,GridSideBar,GridSiderBarIcon} from '../style/GridSC'
import Treatment from '../components/TreatmentDropdown'
import Risk from '../content/risk.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Component} from 'react'
import BarChart from './BarChart';

export default class RiskBox extends Component{
    state = {
        currentDisplay:"chart-bar"
    }
    // handleDisplay(input)
    render(){

        return (<GridCell>
            <GridTitle>{Risk.categoryName}</GridTitle>
            <OutcomeDropdown>
                <div className="dropdown-select">
                    <div className="dropdown-name">
                    ipsilateral invasive breast cancer
                    </div>
                    <div className="dropdown-icon">
                    <FontAwesomeIcon icon="caret-down" />
                    </div>
                </div>
                </OutcomeDropdown>
            <GridSideBar>
                {
                    ["chart-bar","chart-area", "table","comment","shapes"].map(d=>
                        (
                            <GridSiderBarIcon>
                                <FontAwesomeIcon icon={d} key={`sidebaricon_${d}`}/>
                            </GridSiderBarIcon>
                        )
                    )
                }
            </GridSideBar>
            
            <BarChart/>
            <GridFooter></GridFooter>
        </GridCell>)
    }
}