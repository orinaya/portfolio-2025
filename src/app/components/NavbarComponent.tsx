import Link from "next/link";
import ButtonParticle from "../particles/ButtonParticle";

function NavbarComponent() {
  return (
    <>
      <nav className="fixed w-full z-50 flex justify-between items-center py-4 px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="text-strawberry-700  text-2xl font-bold font-michael"
          >
            ori
          </Link>
        </div>

        {/* nav */}
        <div className="flex gap-8 items-center">
          <Link
            href="/a-propos"
            className="hover:text-strawberry-700  transition font-medium"
          >
            À propos
          </Link>
          <Link
            href="/parcours"
            className="hover:text-strawberry-700  transition font-medium"
          >
            Mon parcours
          </Link>
          <Link
            href="/projets"
            className="hover:text-strawberry-700  transition font-medium"
          >
            Mes projets
          </Link>
        </div>

        {/* GitHub & Contact */}
        <div className="flex gap-4 items-center">
          <Link
            href="https://github.com/orinaya"
            target="_blank"
            className="hover:text-strawberry-700 transition"
          >
            GitHub
          </Link>

          <ButtonParticle
            title="Contact"
            colorBg="bg-strawberry-800"
            colorText="text-strawberry-200"
            routeLink="#"
          />
        </div>
      </nav>
    </>
  );
}

export default NavbarComponent;
