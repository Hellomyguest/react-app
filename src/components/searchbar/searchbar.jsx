/* eslint-disable react/button-has-type */
import './searchbar.css';
import { ReactComponent as FindIcon } from '../icons/search.svg';
import { ReactComponent as DeleteIcon } from '../icons/x-medium.svg';

const Searchbar = function Searchbar() {
  return (
    <div className="searchbar searchbar_empty">
      <input
        className="searchbar__area"
        type="search"
        defaultValue=""
        placeholder="Номер заказа или ФИО"
        name=""
        id=""
      />
      <FindIcon className="searchbar__icon-find" />
      <button className="searchbar__button-delete">
        <DeleteIcon className="serachbar__icon-delete" />
      </button>
    </div>
  );
};

export default Searchbar;
