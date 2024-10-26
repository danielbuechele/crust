import Blockquote from "@/components/Blockquote/Blockquote";
import { medium } from "@/utils/medium";
import Image from "next/image";
import cleaning from "./cleaning.png";

export default function Cleaning() {
  return (
    <>
      <h3 className={medium.className}>Manual Cleaning</h3>
      <p>
        The surface of the mill can be cleaned and maintained with commercially
        available liquid cleaning and solvent agents. Do not use abrasive or
        scratching agents and utensils, as they will damage the surface.
      </p>
      <p>
        To clean the inside of the mill housing (B), it's best to fill it with a
        teaspoon of rice, grind it coarsely first, then refill and grind it
        again on a fine setting.
      </p>
      <Blockquote title="Important">
        All stainless steel can develop "flash rust," which discolors salt when
        moisture is present, though the steel itself doesn't rust. We recommend
        regularly removing these discolored particles before each refill of the
        mill, using a soft brush (e.g., a toothbrush) to reduce discoloration
        over time.
      </Blockquote>
      <h3 className={medium.className}>Cleaning in Dishwasher</h3>
      <p>
        If the mill is not satisfactorily cleaned and odor-free afterward, the
        mill housing (B) can be thoroughly cleaned in the dishwasher without the
        knob and vegan leather tag (A).
      </p>
      <Blockquote title="Important">
        <p>
          For cleaning in the dishwasher, complete disassembly is not
          recommended, as all parts of the mill housing (B) should be cleaned.
        </p>
        <p>
          Do not submerge the knob and vegan leather tag (A) in water or clean
          it in the dishwasher, as water may collect inside the knob housing and
          cannot be removed.
        </p>
        <p>
          The entire mill housing (B) can be cleaned upright, standing on its
          head, and set to a very coarse grind setting (Turn the adjuster about
          six times (6×) from the zero position) in the dishwasher.
        </p>
        <p>
          Afterward, let it dry thoroughly for at least 24 hours in a
          well-ventilated area or in the sun.
        </p>
      </Blockquote>
      <Image src={cleaning} alt="Cleaning" height={774} quality={90} />
    </>
  );
}
