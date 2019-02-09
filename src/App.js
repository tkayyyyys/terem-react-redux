import React, { Component } from 'react';
import { connect } from "react-redux";
import Carousel from './carousel/Carousel';
import Search from './search/Search';
import { getCards } from "./actions";
import './css/App.css';

const CAROUSEL_URL = 'http://demo6045376.mockable.io/carousel';

class App extends Component {

 
  componentDidMount() {
    this.props.dispatch(getCards(CAROUSEL_URL));
  }

  render() {
    //console.log(this.props);
    const RenderLoading = this.RenderLoading;
    return (
      <div className="App">
            <RenderLoading loading={this.props.loading} error={this.props.error}/> 
          <br/>
      </div>
    );
  }

  RenderLoading = ({loading, error}) => {
    if(loading) { 
      return <div className="loading message"> Loading.... </div>;
    }

    if(error) {
      return (
        <div className="error message">
          <h4>Error while retrieving test data</h4>
          <div className="error-suggest">
             <b>Are you sure you are connected to the internet?</b>
              <p>
                Error! {error.message}
              </p>
          </div>
       </div>
      )
    }

    return(
       <div className="demo-cards">
         <div className="demo-cards-carousel demo-cards">
           <h3> Carousel </h3>
           <Carousel cards={this.props.cards} />
         </div>
         <div className="demo-cards-search demo-cards">
           <h3> Search </h3>
           <Search search={this.props.cards} />
         </div>
       </div>
    );

  }

}

const mapStateToProps = state => (
{
     cards: state.items,
     error: state.error,
     loading: state.loading
});

export default connect(mapStateToProps)(App);
