const STextarea = ({ name, placeholder, data, onChangeHandler }) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={data[name]}
      onChange={onChangeHandler}
      rows={6}
      className="w-full bg-black bg-opacity-5 rounded p-4 border-none outline-none placeholder:text-base resize-y "
    />
  );
};

export default STextarea;
