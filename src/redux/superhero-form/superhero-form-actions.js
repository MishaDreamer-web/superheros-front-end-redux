import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addSuperhero = createAction(
  'superhero-form/Add',
  ({ nickName, realName, originDescription, superpowers, catchPhrase }) => ({
    payload: {
      id: shortid.generate(),
      nickName,
      realName,
      originDescription,
      superpowers,
      catchPhrase,
    },
  }),
);

const removeSuperhero = createAction('superhero-form/Remove');

const changeFilter = createAction('superhero-form/changeFilter');

export default { addSuperhero, removeSuperhero, changeFilter };
