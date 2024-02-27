/* eslint-disable no-unsafe-optional-chaining */
import React from 'react'

const Field = ({label, children, htmlFor, error}) => {
    const id = htmlFor || getChildId(children);
  return (
    <div className="mt-4">
        {label && <label htmlFor={id} className="inline-block mb-1 text-sm tab:text-base font-medium text-secondary-text">{label}</label>}
        {children}
        {!!error && <div className="text-red-500">{error.message}</div>}
    </div>
  )
}

const getChildId = (children) => {
    const child = React.Children.only(children);

    if ("id" in child?.props) {
        return child.props.id;
    }
};

export default Field