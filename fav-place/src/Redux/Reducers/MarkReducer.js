import {ADD_MARKER} from '../Actions/MarkAction'
import {DELETE_MARKER} from '../Actions/MarkAction'


const initialState = { mark: [] };

const markReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MARKER:
      return { mark : [...state.mark, action.payload] };
    case DELETE_MARKER:
      return { mark: state.mark - 1 };
    default:
      return state;
  }
};

export default markReducer;