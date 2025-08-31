import { ErrorMessage, Field, Formik } from 'formik';
import css from './SearchBox.module.css';


const initialValues = {
        searchBox: "",      
    }

const SearchBox = () => { 

    const handleSubmit = (values) => {
        console.log(values);
    }

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <div>
                <label htmlFor='searchBox'>Find contacts by name</label>
                <Field className={css.field} type='text' name='searchBox' />
                <ErrorMessage className={css.error} name="searchBox" component='span' />
            </div>
        </Formik>
    )
}


export default SearchBox;



// const SearchBox = () => {
//     return (
//         <form className={css.searchBox}>
//             <label htmlFor="searchBox">Find contacts by name</label>
//             <input className={css.searchBoxInput} type="text" name="searchBox" id="searchBox"/>
//         </form>
//     )
// }