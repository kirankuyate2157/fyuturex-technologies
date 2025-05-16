import React from 'react';
import './feature.css';

const Feature = ({ title, text,text2="" }) => (
    <div className="gpt3__features-container__feature">
        <div className="gpt3__features-container__feature-title">
            <div />
            <h1>{title}</h1>
        </div>
        <div className="gpt3__features-container_feature-text flex flex-col gap-2">
            <p>{text}</p>
           {text2&&( <p>{text2}</p>)}
        </div>
    </div>
);

export default Feature;