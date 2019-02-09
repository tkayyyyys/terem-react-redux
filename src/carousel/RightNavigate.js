import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../css/App.css';
library.add(faArrowRight);

export default class RightNavigate extends Component {

 render(){
   const { onClick } = this.props;
   return (
    <div className="carousel-right nav" onClick={onClick}>
    <FontAwesomeIcon
      icon="arrow-right"
      color="#000000"
      size="4x"
    />
    </div>
  );
 }  
}
