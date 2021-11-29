import React from "react";

import SignUp from "../../Components/Sign-up/sign-up.component";

import './sign-up-page.style.scss';

const SignUpPage = () =>{

    return(
        <div>
            <div className="sign-up">
                <SignUp/>
            </div>
        </div>
    );
}

export default SignUpPage;