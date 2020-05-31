import React, { Component } from 'react';

class FilterComponent extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             dataToBeFilter : [
                {name : "Rohit",role:"Software Engineer"},
                {name : "Pawar",role:"Associate Software Engineer"},
                {name : "Ramesh",role:"Senior Software Engineer"},
                {name : "Rohini",role:"Lead Software Engineer"},
                {name : "Rohan",role:"Top Software Engineer"}
            ],
            filterString : ""
        }
    }

    onNameChange = (e) => {
        this.setState({
            filterString : e.target.value
        });
    }

    render(){
        const searchString = this.state.filterString.toLowerCase();
        const filterData = this.state.dataToBeFilter.filter(item => {
            return Object.keys(item).some(key => {
                if(item[key].toLowerCase().indexOf(searchString) > -1)
                return true;
                else 
                    return false;
            })
        }   
        );
        if( filterData.length == 0)
            return (
                <>
                    <div>Search Name Details : 
                        <input type="text" value={this.state.filterString} onChange={this.onNameChange}></input>
                    </div>

                    <h1>No Result Found</h1>
                </>
            );     
        else  
            return (
                <>
                    <div>Search Name Details : 
                        <input type="text" value={this.state.filterString} onChange={this.onNameChange}></input>
                    </div>

                    {filterData.map(item => {
                           return <h1>{item.name} - {item.role}</h1>;             
                    })}
                </>
            );
    }
    
}

export default FilterComponent