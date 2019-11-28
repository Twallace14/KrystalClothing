import { combineReducers} from 'redux';
import cartReducer from './cart/cartReducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import shopReducer from './Shop/shopReducer'

import userReducer from './user/userReducer';
import directoryReducer from './directory/directoryReducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};


const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);