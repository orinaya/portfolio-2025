import Image from "next/image";
import sportCar from "@/assets/icons/icon-sportcar.svg";
import peugeotImg from "@/assets/images/passions/peugeot.jpg";
import ferrariImg from "@/assets/images/passions/ferrari.jpg";
import lotrImg from "@/assets/images/passions/lotr.jpg";
import swImg from "@/assets/images/passions/sw.jpg";
import rpgImg1 from "@/assets/images/passions/rpg-1.jpg";
import rpgImg2 from "@/assets/images/passions/rpg-2.jpg";
import diceIcon from "@/assets/icons/icon-dice.svg";
import magicHatIcon from "@/assets/icons/icon-magic-hat.svg";

function PassionsComponent() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="md:grid md:grid-cols-7 md:gap-5 gap-3 flex flex-wrap">
          <div className="col-span-3 w-full flex flex-col bg-[#FEECEC] py-4 px-6 items-center justify-center gap-3 rounded-xl hover:scale-105 transition-transform duration-200 hover:drop-shadow-xl">
            <div className="flex gap-2 items-center justify-center text-2xl font-semibold text-melon-600">
              <Image src={sportCar} alt="Sportcar Icon" width={24} height={24} />
              <h3 className="text-center text-lg text-[DB6757]">Automobile</h3>
            </div>
            <p className="text-center text-sm">Endurance et Formule 1</p>
          </div>

          <div className="col-span-2 w-[48%] md:w-full">
            <Image
              src={peugeotImg}
              alt="Peugeot"
              className="h-[122px] w-full object-cover rounded-xl object-center"
              width={500}
              height={122}
            />
          </div>

          <div className="col-span-2 w-[48%] md:w-full">
            <Image
              src={ferrariImg}
              alt="Ferrari"
              className="h-[122px] w-full object-cover rounded-xl object-center"
              width={500}
              height={122}
            />
          </div>

          <div className="col-span-2 w-full">
            <Image
              src={lotrImg}
              alt="Lord of the Rings"
              className="h-[122px] sm:h-[122px] w-full object-cover rounded-xl"
              width={500}
              height={122}
            />
          </div>

          <div className="col-span-3 flex flex-col py-2 px-4 items-center justify-center gap-3 rounded-xl bg-[#DEDFED] hover:scale-105 transition-transform duration-200 hover:drop-shadow-xl w-full">
            <div className="flex gap-2 items-center justify-center text-2xl font-semibold text-verdigris-400">
              <Image src={magicHatIcon} alt="magic hat Icon" width={24} height={24} />
              <h3 className="text-center text-lg text-[#4C4E8B]">Fantasy / Sci-fi</h3>
            </div>
            <p className="text-center text-sm">Seigneur des Anneaux / Star Wars / Doctor Who</p>
          </div>

          <div className="col-span-2 w-full">
            <Image
              src={swImg}
              alt="Star Wars"
              className="h-[122px] sm:h-[122px] w-full object-cover rounded-xl"
              width={500}
              height={122}
            />
          </div>

          <div className="col-span-2 w-[48%] md:w-full">
            <Image
              src={rpgImg1}
              alt="RPG 1"
              className="h-[122px] w-full object-cover rounded-xl"
              width={500}
              height={122}
            />
          </div>

          <div className="col-span-2 w-[48%] md:w-full">
            <Image
              src={rpgImg2}
              alt="RPG 2"
              className="h-[122px] w-full object-cover rounded-xl"
              width={500}
              height={122}
            />
          </div>

          <div className="col-span-3 flex flex-col py-2 px-4 items-center justify-center gap-3 rounded-xl bg-[#EEF3E2] hover:scale-105 transition-transform duration-200 hover:drop-shadow-xl w-full">
            <div className="flex gap-2 items-center justify-center text-2xl font-semibold text-darkOlive-400  ">
              <Image src={diceIcon} alt="Dice Icon" width={24} height={24} />
              <h3 className="text-center text-lg text-[#98BA52]">Jeux</h3>
            </div>
            <p className="text-center text-sm">Jeux de société / Jeux de rôle / Jeux vidéos</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PassionsComponent;
