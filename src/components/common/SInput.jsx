const SInput = ({
  name,
  placeholder,
  type = "text",
  data,
  onChangeHandler,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={data[name]}
      onChange={onChangeHandler}
      className="w-full h-[50px] bg-black bg-opacity-5 rounded px-4 border-none outline-none placeholder:text-base "
    />
  );
};

export default SInput;
