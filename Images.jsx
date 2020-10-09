# To define images making this template using fat arrow function

import React from 'react';

const Images = (props) => {
    return <img src={props.imgsrc} salt="myPic" className="card__img" />
}

export default Images;
