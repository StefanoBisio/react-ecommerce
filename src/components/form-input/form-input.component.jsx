import React from 'react';

import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className="group">
        {/* HandleChange is the function that lives in the stateful component this component will be rendered on (sign-in.component.jsx)
        That function is passed onto this component as a prop.
        I need the label prop declased separately to use in an if statement. The if statement will toggle the .shrink class when there is any value in the input field, therefore shrinking visually the label inside the field
        ...otherProps is everything else, like name, type and value */}
        <input className="form-input" onChange={handleChange} {...otherProps}/>
        {
            // Do create a label only if there is a prop for it, otherwise do nothing
            label ?
            /* Look inside the otherProps, the 'value' one in particular, the one that changes when user types something in the field. If the user has typed something add class of .shrink, alongside the class of .form-input-label that is always there regardless.
            The shrinking layout is set to display on focus, AND on class of .shrink, so it stays shrunk when full and not focused*/
            <label className={`${otherProps.value.length ? 'shrink' : '' } form-input-label `}>
                {label}
            </label>
            : null
        }
    </div>
)

export default FormInput;