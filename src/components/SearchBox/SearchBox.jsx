import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosClose } from 'react-icons/io';

import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filters/slice';
import { selectFilter } from '../../redux/filters/selectors';

export const SearchBox = () => {
  const SearchBoxId = useId();
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  return (
    <div className={css.searchbox}>
      <label htmlFor={SearchBoxId}>Find contacts by name</label>
      <div className={css.inputWrap}>
        <input
          id={SearchBoxId}
          name="SearchBox"
          type="text"
          placeholder="Enter contact name for search"
          value={value}
          onChange={(evt) => dispatch(changeFilter(evt.target.value))}
          className={css.input}
        />
        <button
          type="button"
          className={css.btn}
          onClick={() => dispatch(changeFilter(''))}
        >
          <IoIosClose size="30" />
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
