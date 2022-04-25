import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './superhero-form-actions';

const items = createReducer([], {
  [actions.addSuperhero]: (state, { payload }) => [...state, payload],
  [actions.removeSuperhero]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
