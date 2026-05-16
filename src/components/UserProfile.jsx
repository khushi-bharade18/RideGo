import { useEffect } from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const username = useSelector((state) => state.auth.username);
  const email = useSelector((state) => state.auth.email);


  // Get first letter
  const firstLetter = username ? username.charAt(0).toUpperCase() : "U";

  return (
    <div className="flex items-center gap-3">
      {/* Username */}
      <div className="hidden text-right sm:block">
      
<p className=" text-sm  text-gray-300">
          {email || "Email"}
        </p>
        <p className="text-sm  text-gray-300">
          {username || "User"}
        </p>
      </div>

      {/* Avatar */}
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border-2
          border-yellow-400
          bg-yellow-400
          text-lg
          font-bold
          text-black
          shadow-lg
        "
      >
        {firstLetter}
      </div>
    </div>
  );
};

export default UserProfile;
