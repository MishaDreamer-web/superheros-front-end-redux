import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import superheroFormActions from '../../redux/superhero-form/superhero-form-actions';
import { getVisibleSuperheros } from '../../redux/superhero-form/superhero-form-selectors';

import shortid from 'shortid';

const SuperheroForm = () => {
  const [nickName, setNickName] = useState('');
  const [realName, setRealName] = useState('');
  const [originDescription, setOriginDescription] = useState('');
  const [superpowers, setSuperpowers] = useState('');
  const [catchPhrase, setCatchPhrase] = useState('');

  const superheros = useSelector(getVisibleSuperheros);
  const dispatch = useDispatch();

  const nickNameInputId = shortid.generate();
  const realNameInputId = shortid.generate();
  const originDescriptionInputId = shortid.generate();
  const superpowersInputId = shortid.generate();
  const catchPhraseInputId = shortid.generate();

  const handleChangeForm = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'nickName':
        setNickName(value);
        break;

      case 'realName':
        setRealName(value);
        break;
      case 'origin_description':
        setOriginDescription(value);
        break;
      case 'superpowers':
        setSuperpowers(value);
        break;
      case 'catch_phrase':
        setCatchPhrase(value);

      default:
        return;
    }
  };

  const handleSubmitForm = e => {
    e.preventDefault();

    if (
      superheros.find(
        superhero => superhero.nickName === e.target.nickName.value,
      )
    ) {
      alert(`${e.target.nickName.value} is already in superheros`);
      return;
    }

    if (
      superheros.find(
        superhero => superhero.realName === e.target.realName.value,
      )
    ) {
      alert(`Real name ${e.target.realName.value} is already in superheros`);
      return;
    }

    if (
      (!nickName || nickName.trim() === '') &&
      (!realName || realName.trim() === '')
    ) {
      alert('Fill in the fields "NickName" and "RealName"');
      return;
    }

    if (!nickName || nickName.trim() === '') {
      alert('Field "NickName" is empty');
      return;
    }

    if (!realName || realName.trim() === '') {
      alert('Field "RealName" is empty');
      return;
    }

    dispatch(
      superheroFormActions.addSuperhero({
        nickName,
        realName,
        originDescription,
        superpowers,
        catchPhrase,
      }),
    );

    resetForm();
  };

  const resetForm = () => {
    setNickName('');
    setRealName('');
    setOriginDescription('');
    setSuperpowers('');
    setCatchPhrase('');
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <input
        id={nickNameInputId}
        type="text"
        name="nickName"
        placeholder="Enter nickname"
        value={nickName}
        onChange={handleChangeForm}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Никнейм героя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      />
      <input
        id={realNameInputId}
        type="text"
        name="realName"
        placeholder="Enter real name"
        value={realName}
        onChange={handleChangeForm}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Реальное имя героя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      />
      <input
        id={originDescriptionInputId}
        type="text"
        name="origin_description"
        placeholder="Enter Superhero description"
        value={originDescription}
        onChange={handleChangeForm}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="История происхождения героя."
      />
      <input
        id={superpowersInputId}
        type="text"
        name="superpowers"
        placeholder="Enter superpowers"
        value={superpowers}
        onChange={handleChangeForm}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Перечень суперспособностей"
      />
      <input
        id={catchPhraseInputId}
        type="text"
        name="catch_phrase"
        placeholder="Enter catch phrase"
        value={catchPhrase}
        onChange={handleChangeForm}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Захватывающая фраза"
      />
      <button type="submit">Add superhero</button>
    </form>
  );
};

export default SuperheroForm;
