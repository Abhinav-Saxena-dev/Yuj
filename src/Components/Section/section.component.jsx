import React from "react";

import './section.style.scss';

const Section = ({title, page, description}) => (
    <div className="section">
        <div className="section-1">
            <div className="title-container">
                <span className="title">{title}</span>
            </div>
        </div>
        <div className="section-2">
            <div className="page-container">
                <span className="page">{page}</span>
            </div>
            <div className="description-container">
                <span className="description">{description}</span>
            </div>
        </div>
    </div>
);

export default Section;