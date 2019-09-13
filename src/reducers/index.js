import{FETCH_CHUCK_START, FETCH_CHUCK_SUCCESS, FETCH_CHUCK_FAILURE} from '../actions'

const initialState = {
      chuck: null,
      error: "",
      loading: false,
};

const reducer = (state = initialState, action) => {
      switch(action.type){
            case FETCH_CHUCK_START:
                  return{
                        ...state,
                        error:"",
                        loading:true
                  }
                  case FETCH_CHUCK_SUCCESS:
                  return{
                        ...state,
                        error:"",
                        loading:false,
                        chuck:action.payload
                  }
                  case FETCH_CHUCK_FAILURE:
                  return{
                        ...state,
                        error: action.payload,
                        loading:false,
                        chuck: null
                  }
            default:
                  return state

      }
}
export default reducer;