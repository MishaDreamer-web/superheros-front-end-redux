import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/superhero-form/superhero-form-selectors';
import superheroFormActions from '../../redux/superhero-form/superhero-form-actions';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      name="filter"
      value={value}
      onChange={e =>
        dispatch(superheroFormActions.changeFilter(e.target.value))
      }
      placeholder="Enter nickname for Search"
    />
  );
};

export default Filter;
