const InputField = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-yellow-400 font-medium">{label}</label>

      <input
        required={true}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
          w-full
          rounded-xl
          border
          border-yellow-500/30
          bg-white/5
          px-4
          py-3
          text-white
          placeholder:text-gray-400
          outline-none
          transition-all
          duration-300
          focus:border-yellow-400
          focus:ring-2
          focus:ring-yellow-400/20
        "
      />
    </div>
  );
};

export default InputField;
