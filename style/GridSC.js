import styled from 'styled-components';


export const GridContainer = styled.div`
    display:grid;

    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr 1fr 1fr;



`

export const GridCell = styled.div`
    display:grid;
    grid-template-columns: 5fr 5fr 1fr;
    grid-template-rows:.5fr 2fr .3fr;
    background:${props=>props.theme.offWhite};
    /* max-height: 33.3333vh; */
    grid-template-areas:
        "title dropdown dropdown"
        "content content sidebar"
        "content content sidebar";


`


export const GridFooter = styled.div`
    background:${props=>props.theme.black};
    grid-area:footer;
`


export const GridTitle = styled.div`
        grid-area: title;
        /* background:grey; */
`


export const GridContent = styled.div`
        grid-area: content;
        /* background:black; */
`


export const GridSideBar = styled.div`
        grid-area: sidebar;
        display:flex;
        flex-direction:column;
        
`

export const GridSiderBarIcon = styled.div`
    margin:auto;
    cursor:pointer;
    color:${({selected,theme})=>selected?theme.secondary:theme.darkGrey};
    font-size:1.6rem;
    &:hover{
        color:${props=>props.theme.secondary}
    }
`


export const GridSubContent = styled.div`
    display:flex;
    width:50%;
    align-self: start;
    flex-direction:column;
    p {
        margin:auto;
        width:auto 5px;
    }

    img {
        margin:auto;   
    }
`

export const GridContentSplit = styled(GridContent)`
    display:flex;

    padding:0;
    flex-wrap:nowrap;
    flex-direction:row;

`




export const Dropdowns = styled.div`
    display:flex;
    background:${props=>props.theme.primary};
    .dropdown-select {
        color:${props=>props.theme.offWhite};
        flex-shrink:1;
        flex-grow:1;
        width:100%;
        font-size:1.1rem;
        margin:auto;
        display:flex;
        line-height:1.3rem;
        padding-bottom:2px;

    }
    .dropdown-name{
        margin:auto auto auto 5px;
    }
    .dropdown-icon{
        margin:auto 5px auto auto;
    }

`

export const OutcomeDropdown = styled(Dropdowns)`
    grid-area: dropdown;
    background:none;
    .dropdown-select {
        color:black;
        border:none;
        background:${props=>props.theme.grey};
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
`

