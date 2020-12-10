const Header = () => {
  return (
    <header className="header bg-green-700 border-b border-gray-300 text-white">
      <h1>
        <img src="logo-192x192.png" className="inline-block w-10 h-10 mx-2" />
        Natural Event Tracker
        <span className="text-lg mx-2">( Powered by NASA )</span>
      </h1>
    </header>
  );
};

export default Header;
