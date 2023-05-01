import { legacy_createStore } from 'redux';
import reducer from '../reducers';

export const store = legacy_createStore(reducer);