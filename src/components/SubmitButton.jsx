const SubmitButton = () => {
  return (
    <button
      className="
        mt-4
        w-full
        rounded-xl
        bg-yellow-400
        py-3
        text-base
        font-bold
        text-black
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:bg-yellow-300
        active:scale-[0.98]
      "
    >
      Sign In
    </button>
  );
};

export default SubmitButton;