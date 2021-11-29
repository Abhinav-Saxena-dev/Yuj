import React, { useState } from "react";

import PageData from './pageData';

import Section from "../../Components/Section/section.component";

import './LandingPage.style.scss';

const LandingPage = () => {
    const [pageData] = useState(PageData);

    return(
        <div className="homepage">
            {
                pageData.map(({title, page, description, ...otherProps}) => 
                    <Section title = {title} page = {page} description = {description} {...otherProps}/>
                    )
            }
        </div>
    );
}

export default LandingPage;