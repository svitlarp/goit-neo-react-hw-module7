import css from './SearchBox.module.css';


const SearchBox = ({value, onFilter}) => { 
    return (
         <div className={css.searchBox}>
            <label htmlFor="searchBox">Find contacts by name</label>
            <input className={css.searchBoxInput} type="text" name="searchBox" id="searchBox" value={value} onChange={e => (onFilter(e.target.value))}/>
         </div>
    )
}

export default SearchBox;

