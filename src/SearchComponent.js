import React, {Component} from 'react';

class SearchComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            dataToBeFilter : [{
                id : '1',
                name : 'Rohit',
                surname:"Pawar"
            },{
                id : '1',
                name : 'Ramesh',
                surname:"Powar"
            },{
                id : '1',
                name : 'Sachin Ramesh',
                surname:"Tendulkar"
            }],
            stringToSearch : "ten"
        }
    }

    onChangeOfString = (e) => {
        this.setState({
                stringToSearch : e.target.value
        });
    }

    render(){
        // let dataToFilter = this.state.dataToBeFilter;
        // const stringToSearch = this.state.stringToSearch
        // const filterData = dataToFilter.filter((singleItem) => {
        //     return Object.keys(singleItem).some(singleKey => {
        //         let currentData = singleItem[singleKey].toLowerCase();
        //         if(currentData.indexOf(stringToSearch) > -1){
        //             return true;
        //         }else{
        //             return false;
        //         }
        //     })
        // });

        // return (
        //     <>
        //     Enter Search String : <input type="text" value={this.state.stringToSearch} onChange={this.onChangeOfString}></input>
        //     {
        //         filterData.map(singleData => {
        //             return <h1>{singleData.name}</h1>
        //         })
        //     }
        //     </>
        // )

    }
}

export default SearchComponent