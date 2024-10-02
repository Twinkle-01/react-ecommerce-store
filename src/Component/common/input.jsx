const Input = ({type,name,placeholder,value,onChange}) => {
  
  return (
    <input
      type={type}
      id={`${name}-field`}
      name={name}
      className="border border-[var(--dark)] outline-none rounded-[10px] p-4 w-full"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;