import React, { Component } from 'react';
import Select from 'react-select';

export default class Search extends Component {

	constructor(props) {
    	super(props);

    	this.state = {
    		selectedItem : null
    	}
	}

	onUpdateInput = (selected) => {
	    this.setState({ selected });
  	}

	render(){

		let autofil="";

		autofil = (this.props.search.map((item, index) => 
			{
				return(	
						{
							value: index,
							label: item.location
						}
					);
			}
		));
	
		return(
			<div className="search">
				 	<div className="search">
				 		<Select
				 		  value = {this.selectedItem}
				 		  options={autofil}
				          onChange={this.onUpdateInput}
				          className="search-select" 
				          openMenuOnClick={false}
				          escapeClearsValue={true}
				          blurInputOnSelect={true}
				 		  isClearable={true}
				 		  placeholder="Search..."
		        		/>
				 	</div>
		 	</div>
	 	);
	}

}