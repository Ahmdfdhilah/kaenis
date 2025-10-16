import { LogoIcon } from "./Icons";
import { routeList, socialLinks } from "../lib/menus";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-5 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex mb-4"
          >
            <LogoIcon />
            Lyra Digital Technology.
          </a>

          <div className="text-sm opacity-70">
            <h4 className="font-semibold mb-2">Office</h4>
            <p>Jl. Swadaya Pos No.xx RT.016 RW04</p>
            <p>RW.4, Pulo Gebang</p>
            <p>Kec. Cakung, Kota Jakarta Timur</p>
            <p>Daerah Khusus Ibukota Jakarta 13950</p>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Menu</h3>
          {routeList.map((route) => (
            <div key={route.href}>
              <a
                rel="noreferrer noopener"
                href={route.href}
                className="opacity-60 hover:opacity-100"
              >
                {route.label}
              </a>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow Us</h3>
          {socialLinks.map((social) => (
            <div key={social.href}>
              <a
                rel="noreferrer noopener"
                href={social.href}
                target="_blank"
                className="opacity-60 hover:opacity-100 flex items-center gap-2"
              >
                {social.icon}
                {social.label}
              </a>
            </div>
          ))}
        </div>

        {/* Company Info */}
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Lyra Digital</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#about"
              className="opacity-60 hover:opacity-100"
            >
              About Us
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="#contact"
              className="opacity-60 hover:opacity-100"
            >
              Contact
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};