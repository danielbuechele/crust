import Blockquote from "@/components/Blockquote/Blockquote";
import { Questions, Question } from "@/components/Questions/Questions";
import Slideshow from "@/components/Slideshow/Slideshow";
import ToggleGroup from "@/components/ToggleGroup/ToggleGroup";
import { Suspense } from "react";
import Steps from "./Steps";

export default function Filling() {
  return (
    <>
      <p>
        Opening and filling the spice mill is easy and straightforward. The
        push-button (A) connected knob can be separated from the mill body (B)
        by gently pulling it upwards, preventing the ground material from
        falling out of the housing.
      </p>
      <p>
        The large filling opening allows for easy filling without any additional
        tools. To close the spice mill, simply press and snap the knob (A) onto
        the protruding push-button axle end (B). The grind setting remains
        unchanged after refilling. You only need to adjust the rotary dial at
        the bottom of the spice mill when changing the grind setting.
      </p>
      <Blockquote title="Important">
        <p>
          Always use fully dried salt. All stainless steel can develop "flash
          rust," which discolors salt when moisture is present, though the steel
          itself doesn't rust.
        </p>
        <p>
          This is why a ceramic grinding mechanism is preferred, to avoid
          discolored salt crumbs. These discolorations have no negative effects
          other than being unattractive.
        </p>
        <p>
          We recommend regularly removing these discolored particles before each
          refill of the mill, using a soft brush (e.g., a toothbrush) to reduce
          discoloration over time.
        </p>
      </Blockquote>

      <Questions>
        <Question question="Which pepper and salt can I use?">
          <h4>Pepper</h4>
          <p>
            Choose whole peppercorns designed for grinding. You can use black,
            white, red, or dried green pepper varieties. We recommend Kampot,
            Malabar, and Tellicherry peppercorns.
          </p>

          <h4>Salt</h4>
          <p>
            Choose large, non-wet salt crystals. You can use table salt, sea
            salt, and Himalayan salt intended for grinding. To prevent the salt
            from clumping, store it in a dry place when not in use.
          </p>
        </Question>
        <Question question="Can I use other spices?">
          <p>
            Yes, Crust works best with dry spices in whole seed form, like
            coriander seeds, fennel seeds, caraway seeds, cumin, mustard seeds,
            anise, cloves, allspice.
          </p>
          <p>Cinnamon sticks and long pepper (break into small pieces).</p>
          <p>
            For slightly oily spices like caraway, mustard seeds, cloves, anise,
            rosemary, juniper berries, chili, and ginger, you can mix them with
            twice the amount of rice and then grind them 2-3 times from coarse
            to fine. This produces a spice powder that is full of flavor but
            less intense, making it much easier to dose.
          </p>
        </Question>
      </Questions>
      <Suspense>
        <Steps />
      </Suspense>
    </>
  );
}
