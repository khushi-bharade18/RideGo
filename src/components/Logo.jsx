const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      {/* Logo Image */}
      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          overflow-hidden
          rounded-xl
          border
          border-yellow-400/30
          bg-white
          shadow-lg
        "
      >
        {/* Add Your Logo Here */}
        <img
          src="../public/logo.webp"
          alt="logo"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Brand Name */}
      <div className="flex flex-col">
        <h1
          className="
            text-xl
            font-extrabold
            tracking-wide
            text-white
          "
        >
          Ride
          <span className="text-yellow-400">
            Go
          </span>
        </h1>

        <p className="text-[10px] text-gray-400">
          Smart Ride Booking
        </p>
      </div>
    </div>
  );
};

export default Logo;