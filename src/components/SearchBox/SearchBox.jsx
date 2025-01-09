import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        className={styles.input}
      />
    </label>
  );
};

export default SearchBox;
