import HeaderLogo from "../images/Header-logo.png";
import Logo from "../images/Logo.png";

function Header() {
  return (
    <header className="w-full min-h-screen">
      {/* Верхняя панель */}
      <div className="flex items-center justify-between px-6 md:px-12 py-4 bg-black">
        <div>
          <img src={Logo} alt="Jones & Brown Legal" className="h-10" />
        </div>

        <nav className="hidden md:flex space-x-6 text-white text-lg">
          <a href="#about" className="hover:text-gray-300 transition">
            Services
          </a>
          <a href="#services" className="hover:text-gray-300 transition">
            Schedule a Consult
          </a>
        </nav>
      </div>

      {/* Фоновая картинка */}
      <div
        className="bg-cover bg-center w-full h-screen"
        style={{ backgroundImage: `url(${HeaderLogo})` }}
      >
        <div className="flex flex-col items-center justify-center [@media(min-width:800px)]:justify-end h-full text-white text-center px-6 md:px-12 pb-[70px]">
          <h1 className="text-[32px] [@media(min-width:800px)]:text-[64px]">Jones & Brown Legal</h1>
          <div className="flex flex-col [@media(min-width:1200px)]:flex-row [@media(min-width:1200px)]:justify-between [@media(min-width:1200px)]:items-start items-center text-[20px] sm:text-[32px] w-full mt-[40px] sm:mt-[78px]">
            <p>Deep expertise, decisive courtroom presence</p>
            <p>We've been serving the Los Angeles area since 1976.</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
