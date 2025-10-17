import LogoBlack from "../images/logo-black.svg";

export default function Footer() {
  return (
    <footer>
      <section className="flex flex-col items-start justify-center max-w-[980px] mx-auto py-[40px] sm:py-[60px] lg:py-[70px] pl-[28px] px-[28px]">
        <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center w-full mb-[84px]">
          <img
            src={LogoBlack}
            alt="logoblack"
            className="mb-4 md:mb-0 h-10"
          />
          <p className="font-bold text-4xl md:text-5xl text-left md:text-right">
            Jones & Brown Legal
          </p>
        </div>

        <div className="w-full text-left mt-4 font-bold">
          <p>Deep expertise, decisive courtroom presence</p>
        </div>

        <div className="w-full mt-[84px] grid grid-cols-1 md:grid-cols-3 gap-8 text-l text-black">
          <address className="not-italic">
            <p className="m-0 leading-none">hello@figma.com</p>
            <p className="m-0 leading-none">(555) 123-4567</p>
          </address>

          <address className="not-italic">
            <p className="m-0 leading-none">123 Candyland Lane</p>
            <p className="m-0 leading-none">Suite 123</p>
            <p className="m-0 leading-none">Los Angeles, CA 94117</p>
          </address>

          <nav className="font-normal text-left md:text-right">
            <ul className="m-0 p-0 space-y-1 list-none">
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Bluesky
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-[84px] w-full flex flex-col justify-start text-l text-left">
          <p className="m-0">Jones & Brown Legal</p>
          <p className="m-0">© 2025 All Rights Reserved</p>
        </div>
      </section>
    </footer>
  );
}
