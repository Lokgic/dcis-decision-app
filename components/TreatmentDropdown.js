import { Form, Select, Option } from 'informed';
import {Dropdowns} from '../style/GridSC'
import TxData from '../content/treatments.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default props=>(
  <Dropdowns>
    {/* {
      [0,1].map(i=>(
        <Form id={`tx-form-${i}`} key={`tx-form-key-${i}`}>
                <Select field={`tx-field-${i}`} id={`tx-${i}`} class ="tx-select">
                  {
                    Object.keys(TxData).map(d=>
                      <Option value={d} key={`option_${d+i}`}>{TxData[d].name}</Option>
                      )
                  }
          </Select>
        </Form>
      ))
    }
     */}
     {
       [0,2].map(i=>(
         <div className="dropdown-select" key={`txkey${i}`}>
           <div className="dropdown-name">{TxData[Object.keys(TxData)[i]].name}</div>
           <div className="dropdown-icon"><FontAwesomeIcon icon="caret-down" /></div>
         </div>
       ))
     }
</Dropdowns>
)