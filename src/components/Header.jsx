import HeaderLogo from "../images/Header-logo.png";
import Logo from "../images/Logo.png";

function Header() {
  return (
    <header className="w-full min-h-screen  ">
      <div className=" flex items-center justify-between px-12 py-4 bg-black">
        {/* Logo слева */}
        <div>
          <img src={Logo} alt="Jones & Brown Legal" className="h-10" />
        </div>

        {/* Menu справа */}
        <nav className="flex space-x-6 text-white text-lg">
          <a href="#about" className="hover:text-gray-300 transition">
            Services
          </a>
          <a href="#services" className="hover:text-gray-300 transition">
            Schedule a Consult
          </a>
        </nav>
      </div>

      <div
        className="bg-cover bg-center w-full h-[1000px]"
        style={{ backgroundImage: `url(${HeaderLogo})` }}
      >
        <div className="relative flex flex-col items-center justify-end h-full text-white text-center px-12 pb-[70px]">
          <h1 className="text-9xl mb-6">Jones & Brown Legal</h1>
          <div className="flex flex-col md:flex-row md:space-x-4 text-lg">
            <p>Deep expertise, decisive courtroom presence</p>
            <p>We've been serving the Los Angeles area since 1976.</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
