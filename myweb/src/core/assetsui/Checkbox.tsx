import React, { useState } from 'react';

type CheckboxProps = {
    label?: string,
    checked: boolean,
    onChange: (checked: boolean) => void,
    className?: string,
    children? : React.ReactNode,
}

const Checkbox = ({label, checked, onChange, className, children}: CheckboxProps) => {
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
    };

    const checkboxClass = `checkbox ${className || ''}`;

    return (
        <label className={checkboxClass.trim()}>
            <input type="checkbox" checked={checked} onChange={handleCheckboxChange} />
            {label ? label : children}
        </label>
    );

}

export default Checkbox;