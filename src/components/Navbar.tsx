interface NavBarProps {
  name: string;
  pageTitle: string;
  onLogout: () => void;
}

const Navbar = (props: NavBarProps) => {
  const { name, pageTitle, onLogout } = props;

  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-3xl font-semibold text-center">{pageTitle}</h1>
      <div className="flex items-center gap-4">
        <p className="text-lg font-bold">{name}</p>
        <button className="btn btn-sm text-xs" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
