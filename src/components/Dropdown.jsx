const Dropdown = ({ label, options, value, onChange, className = "" }) => {
  return (
    <div className="flex items-center space-x-2">
      {label && <span className="text-sm">{label}</span>}
      <select
        value={value}
        onChange={onChange}
        className={`border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-transparent ${className}`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
