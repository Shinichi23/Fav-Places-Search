import { combineReducers} from 'redux'
import favReducers from './FavReducer'
import markReducers from './MarkReducer'


const reducer = combineReducers({
    mark : markReducers,
    fav : favReducers,
});

export default reducer;