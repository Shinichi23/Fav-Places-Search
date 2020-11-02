import { PLUS_FAVORITE } from "../Actions/FavAction";

const initialState = { fav: [] };

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_FAVORITE:
      return { fav: [...state.fav, action.payload] };
    default:
      return state;
  }
};

export default favReducer;
