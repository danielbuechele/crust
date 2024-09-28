import Blockquote from "@/components/Blockquote/Blockquote";
import Image, { StaticImageData } from "next/image";
import grinding from "./grinding.jpg";

export default function Grinding() {
  return (
    <>
      <p>
        When grinding, hold the mill at an 45 degree angle so that the ground
        material falls through the slot between the mill body and the rotary
        dial.
      </p>
      <p>
        The slot width changes with the grind setting from narrow (about 0.04"
        or 1 mm) for the finest setting to wide (about 0.12" or 3 mm) for a very
        coarse setting.
      </p>

      <Blockquote title="Important">
        After finishing the grinding, you should tap the mill to release any
        remaining particles, ensuring nothing drops onto the surface when you
        set it down. This also prevents any leftovers in the slot from spoiling.
      </Blockquote>

      <Image
        style={{ width: "100%", height: "auto" }}
        src={grinding}
        alt="Grinding"
      />
    </>
  );
}
