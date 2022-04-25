import { useSelector, useDispatch } from 'react-redux';
import superheroFormActions from '../../redux/superhero-form/superhero-form-actions.js';
import { getVisibleSuperheros } from '../../redux/superhero-form/superhero-form-selectors.js';

const SuperheroListItem = ({
  id,
  nickName,
  realName,
  originDescription,
  superpowers,
  catchPhrase,
  onRemove,
}) => {
  return (
    <li>
      {nickName}: {realName}: {originDescription}: {superpowers}: {catchPhrase}
      <button onClick={() => onRemove(id)}>delete</button>
    </li>
  );
};

const SuperherosList = () => {
  const superheros = useSelector(getVisibleSuperheros);
  const dispatch = useDispatch();

  const onRemove = id => dispatch(superheroFormActions.removeSuperhero(id));

  if (superheros.length === 0)
    return <p>There are no superheros in the list</p>;

  return (
    <ul>
      {superheros.map(
        ({
          id,
          nickName,
          realName,
          originDescription,
          superpowers,
          catchPhrase,
        }) => (
          <SuperheroListItem
            key={id}
            nickName={nickName}
            realName={realName}
            originDescription={originDescription}
            superpowers={superpowers}
            catchPhrase={catchPhrase}
            onRemove={() => onRemove(id)}
          />
        ),
      )}
    </ul>
  );
};

export default SuperherosList;
