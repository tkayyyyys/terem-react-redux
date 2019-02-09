import {
  FETCH_CARD_SUCCESS,
  FETCH_CARD_FAIL,
} from "./actions";

const initialState = {
  items: [],
  loading: true,
  error: null
};


export default function (state = initialState, action) {
 //console.log("action type => ", action.type);
 //console.log(action);

 switch (action.type) {
 	case FETCH_CARD_SUCCESS:
 		return{
	 		...state,
	        error: null,
	        loading: false,
	        items:action.payload.data
    	};
 	case FETCH_CARD_FAIL:
 	 	return{
 	 		...state,
        	error: action.payload.error,
        	loading: false,
       	 	items: []
       	 }

     default:
     	return state;
 }

}