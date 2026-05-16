const AuthLayout = ({ children }) => {
  return (
    <div
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-gradient-to-br
        from-black
        via-zinc-900
        to-yellow-500/10
        px-4
      "
    >
      {children}
    </div>
  );
};

export default AuthLayout;