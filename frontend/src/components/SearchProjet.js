import { Formik, Field, Form } from "formik";

function SearchProjet () {

    
  const initialValues = {
    search: ""
  };

    return (
        <>
          <Formik
                initialValues={initialValues}
                validationSchema= ""
                onSubmit="">
                <Form>
                <div class="styles__StyledInputWrapper-sc-da3xah-0 hfnyXF k-TextInput__wrapper k-TextInput__wrapper--small k-TextInput__wrapper--button_inset">
                    <Field type="text" id="KissKiss__appHeader__SearchMenu__Input" name="q" class="k-TextInput k-HeaderNav__searchInput__input k-TextInput--hasButton k-TextInput--rounded" autocomplete="off" placeholder="Search" aria-label="Search" />
                        <button type="submit" modifier="beryllium" aria-label="See all results" class="button-search k-TextInput__button" disabled="">
                        <svg width="14" height="14" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#333" d="M14.7 13.3l-3.5-3.5a1 1 0 00-1.4 1.4l3.5 3.5a1 1 0 001.4-1.4z"></path>
                            <path fill="#333" d="M6.3 0a6.3 6.3 0 100 12.6A6.3 6.3 0 006.3 0zm0 2a4.3 4.3 0 110 8.6 4.3 4.3 0 010-8.6z"></path>
                            </svg>
                        </button>
                    </div>
                </Form>
          </Formik>
            
        </>
    )

}

export default SearchProjet