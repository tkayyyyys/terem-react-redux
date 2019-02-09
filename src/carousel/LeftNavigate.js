import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../css/App.css';
library.add(faArrowLeft);

export default class LeftNavigate extends Component {

 render(){
   const { onClick } = this.props;
   return (
   	<div className="carousel-left nav" onClick={onClick}>
    <FontAwesomeIcon
      icon="arrow-left"
      color="#000000"
      size="4x"
    />
    </div>
     
  );
 }  
}

