import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor="searchBox">Find contacts by name</label>
      <input
        className={css.searchBoxInput}
        type="text"
        id="searchBox"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
