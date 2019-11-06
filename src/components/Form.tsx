import "reflect-metadata";

import React from 'react';
import User from './User';

function process(instance: Object) {
    for (let prop in instance) {
        let value = Reflect.getMetadataKeys(instance, prop)
        Reflect.get
        console.log(value)
    }
}

process(new User());

const Form: React.FC = () => {
    return <p>form</p>
}

export default Form;
