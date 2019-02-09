import React, { Component } from 'react';
import LeftNavigate from './LeftNavigate';
import RightNavigate from './RightNavigate';


export default class  Carousel extends Component {

	constructor(props) {
    	super(props);

    	this.state ={
			slideIndex: 0
		};
	}

	/*
	 
	 Events for navigation
	 
	 */

	handleLeftClick = () => {
		let index = this.state.slideIndex;
		
		index --;	
		if(index <= 0){
			index = this.props.cards.length -1;
		}
		
		this.setState({
			slideIndex: index
		});
  	};
	
	handleRightClick = () => {
   		let index = this.state.slideIndex;

   		index++; 		
		if(index >= this.props.cards.length ){
			index = 0;
		}
		
		this.setState({
			slideIndex: index
		});
  	};

  	/*
  	 
  	 Render the current image
  	 
  	 */

  	Slide = ({image}) => {
  		//console.log(image);
		let url;
		let title;

		if(image != null){
			url = image.img;
			title = image.title;
		}

		  return (
		  	 <div className="slide">
		  	 	<img className="image" src={url} alt={title}/>
		  	 	<p>{title}</p> 
		  	 </div>
		  );
	}

	render()
	 {
	 	const Slide = this.Slide;
		return(
			<div className="carousel">
		 		 <LeftNavigate onClick={this.handleLeftClick}/>
		 		  	   <Slide image={this.props.cards[this.state.slideIndex]} />
	             <RightNavigate onClick={this.handleRightClick}/>
			</div>
		)
		
	}

}
