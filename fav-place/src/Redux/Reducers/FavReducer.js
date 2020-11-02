import { DELETE_FAVORITE, PLUS_FAVORITE } from "../Actions/FavAction";

const initialState = { fav: [] };

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_FAVORITE:
      return { fav: [...state.fav, action.payload] };
    case DELETE_FAVORITE:
      const newArr = state.fav.filter((elem) => elem.id !== action.payload.id);
      return { fav: [...newArr] };
    default:
      return state;
  }
};

export default favReducer;
