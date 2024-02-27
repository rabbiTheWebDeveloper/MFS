

const FieldSet = ({label, children}) => {
  return (
    <fieldset className="m-2 border-none p-0">
        {label && <legend className="text-md font-bold mb-2">{label}</legend>}
        <div className="">{children}</div>
    </fieldset>
  )
}

export default FieldSet