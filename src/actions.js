import 'whatwg-fetch'; 

// Retrieve data 
export function getCards(url){
	return function action(dispatch) {
		fetch(url)
	      .then(response => {
	        return response.json();
	      })
	      .then(result => 
	      { 
	      	  return dispatch(fetchSuccess(result.data))
	      }).catch(error =>{
	      	return dispatch(fetchFail(error));
	      });
	}
}


export const FETCH_CARD_SUCCESS = "FETCH_CARD_SUCCESS";
export const FETCH_CARD_FAIL = "FETCH_CARD_FAIL";

export const fetchSuccess = data=> ({
  type: FETCH_CARD_SUCCESS,
  payload: { data }
});

export const fetchFail = error => ({
  type: FETCH_CARD_FAIL,
  payload: { error }
});


