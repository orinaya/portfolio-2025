import Link from "next/link";
import ButtonParticle from "../particles/ButtonParticle";

function NavbarComponent() {
  return (
    <>
      <nav className="fixed w-full z-50 flex justify-between items-center py-4 px-8">
        {/* Logo */}
        <div className="flex items-center w-1/5">
          <Link href="/" className="text-strawberry-700  text-2xl font-bold font-michael">
            Oriane Ratelade
          </Link>
        </div>

        {/* nav */}
        <div className="flex gap-8 items-center">
          <Link href="/#a-propos" className="hover:text-strawberry-700  transition font-medium">
            À propos
          </Link>
          <Link href="/#skills" className="hover:text-strawberry-700  transition font-medium">
            Mes skills
          </Link>
          <Link href="/#parcours" className="hover:text-strawberry-700  transition font-medium">
            Mon parcours
          </Link>
          <Link href="/#projets" className="hover:text-strawberry-700  transition font-medium">
            Mes projets
          </Link>
        </div>

        {/* GitHub & Contact */}
        <div className="flex gap-4 items-center w-1/5">
          <ButtonParticle
            title="Contact"
            colorBg="bg-strawberry-900"
            colorText="text-strawberry-200"
            routeLink="#"
            iconBefore="letter"
          />
          <ButtonParticle
            title="Github"
            colorBg="bg-strawberry-900"
            colorText="text-strawberry-200"
            routeLink="https://github.com/orinaya"
            iconBefore="github"
          />
        </div>
      </nav>
    </>
  );
}

export default NavbarComponent;
