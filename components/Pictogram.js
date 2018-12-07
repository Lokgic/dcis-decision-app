import {Component} from "react"
import styled from 'styled-components';




class Pictogram extends Component{
    constructor(props){
        super(props)
        defaultDime = {
            r:3,
            baseMargin:{x:10,y:40},
            m:{x:10,y:40}
        }
        this.state = {
            dime:{
                ...defaultDime,
                ...props.dime
            },
            data:props.data
        }

    }
}