import { clsx } from "clsx";
import styles from "./page.module.css";
import { medium } from "@/utils/medium";

export default function Description() {
  return (
    <>
      <p>
        Crust is an innovative, high-quality spice mill that preserves the aroma
        of ground spices. Its large grinder, comparable to a coffee mill, can
        handle even larger peppercorns and spices. It's highly efficient,
        producing large quantities with just a few turns.
      </p>
      <p>
        The stainless steel knob, with a slightly knurled surface, attaches to
        the satin-finished stainless steel mill body via a push-button coupling,
        sealing the filling chamber and keeping the aroma intact.
      </p>
      <p>
        Crust features the high-quality "X-Metal" conical grinder made of
        corrosion-resistant, neutral-tasting, and hardened stainless steel. The
        grinder is significantly larger (cone diameter 1.18" or 30 mm) than
        conventional pepper grinders (cone diameter about 0.79" or 20 mm) and
        boasts excellent edge sharpness, producing very consistent particles
        from extremely fine to very coarse with minimal effort.
      </p>
      <p>
        This grinder combines the benefits of both metal and ceramic grinders,
        achieving a uniform grind that meets virtually all needs. The cutting
        geometry of the two grinder components has been optimized over years of
        experience, especially for fine powder formation, without neglecting the
        full range from fine to coarse.
      </p>
      <p>
        Only a metallic grinder without coating can achieve this grinding
        sharpness and fineness. The high-precision manufacturing and exact
        installation ensure a consistently uniform and highly efficient grinding
        result.
      </p>
      <p>
        The grind setting is adjusted on the bottom of the mill with a patented
        rotary dial featuring a knurled edge. It locks into place and remains
        consistent during grinding, after refilling, and when setting down the
        mill. The rotary dial for grind adjustment prevents particles from
        falling onto the surface when the mill is set down.
      </p>
      <hr />
      <button className={styles.button}>
        Download Media Kit
        <div className={clsx(styles.arrow, medium.className)}>
          <svg
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.546165 6.84712L1.55753 5.8244L5.10866 9.37553L5.10866 0.455078L6.58594 0.455078L6.58594 9.37553L10.1314 5.8244L11.1484 6.84712L5.8473 12.1483L0.546165 6.84712Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </button>
    </>
  );
}
