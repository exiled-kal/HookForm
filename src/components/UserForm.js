import React from 'react';

const UserForm = (props) => {
    // destructuring the props
    const { inputs, setInputs } = props;
// the e parameter will capture the event that we input

    const onChange = e => {
        setInputs({
            // this will spread whatever we have in my dict
            
            ...inputs,
            // pick the one that we actually want to change
            [e.target.name]: e.target.value
        })
    };

    return(
        <form>
            <div>
                {/* onChange will help us to know when the value of the input is changing */}
                {/* {onChange} this invoke our onChange callback function  */}               
                <label htmlFor="firstName">First Name: </label> 
                <input onChange={onChange} type="text" name="firstName" />
            </div>
            <div>
                <label htmlFor="lastName">Last Name: </label> 
                <input onChange={onChange} type="text" name="lastName" />
            </div>
            <div>
                <label htmlFor="email">Email Address: </label> 
                <input onChange={onChange} type="text" name="email" />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input onChange={onChange} type="password" name="password" />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password: </label>
                <input onChange={onChange} type="password" name="confirmPassword" />
            </div>
        </form>

    )
}

export default UserForm;