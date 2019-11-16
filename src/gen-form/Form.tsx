import "reflect-metadata";
import React, { ReactElement, useState, ChangeEvent } from 'react';

export interface FormProps {
    instance: Object;
    action?: Function;
}
export interface Metadata {
    type: string;
    name: string;
}

/**
 * Get meta data from an instance
 * 
 * @param instance 
 */
const getMetaData = (instance: Object): Metadata[] => {
    return Object.keys(instance).map(prop => ({
        type: Reflect.getMetadataKeys(instance, prop)[0].split(':')[1],
        name: prop
    }))
}

/**
 * Main component
 * 
 * @param instance 
 * @param action 
 */
const Form: React.FC<FormProps> = ({ instance, action }) => {
    const metadata = getMetaData(instance)

    const [data, setData] = useState(metadata.reduce((acc, val) => ({ ...acc, [val.name]: null }), {}))

    function handleChange(name: string, event: ChangeEvent) {
        // @ts-ignore
        const newData = { ...data, [name]: event.target.value }
        setData(newData)
    }

    return (
        //@ts-ignore
        <form onSubmit={(event) => action(event, data)}>
            {metadata.map(({ name, type }: Metadata) => {
                return (
                    <div className='gen-form-input-wrapper'>
                        <label className='gen-form-label'>
                            {name}
                            <input
                                className='gen-form-input'
                                type={type}
                                onChange={event => handleChange(name, event)} />
                        </label>
                    </div>
                )
            })}
            <input type='submit' value='Submit' />
        </form>
    ) as ReactElement<any>;
}

export default Form;
