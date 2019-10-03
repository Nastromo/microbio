import { combineReducers } from 'redux';
import { notificationCss, notificationText } from './Notification';
import { loginSpinner } from './Spinner';
import { dropdownStatus, dropdownOption } from './DropDown';
import { searchQuery, searchLoading, searchResults, activeRow } from '../reducers/SearchInput';
import { newDDStatus, newDDOption } from '../reducers/NewDropDown';
import { plateMenu } from '../reducers/PlateMenu';



const RootReducer = combineReducers({
    plateMenu,
    newDDStatus,
    newDDOption,
    activeRow,
    searchQuery,
    searchLoading,
    searchResults,
    loginSpinner,
    notificationCss,
    notificationText,
    dropdownStatus,
    dropdownOption,
    
});


export default RootReducer;