import Link from "next/link";
import styles from "../page.module.css";

export default function Guide() {
  return (
    <div>
      <p>
        When it comes to seasoning your food with freshly ground pepper, the
        type of peppercorns you choose can make a significant difference in
        flavor, aroma, and overall culinary experience. Here’s a comprehensive
        guide to help you select the best pepper spices for your manual grinder.
      </p>
      <p>Table of content:</p>
      <ul>
        <li>
          <Link href="#">Peppercorn Types</Link>
        </li>
        <li>
          <Link href="#">Quality Indicators to Consider</Link>
        </li>
        <li>
          <Link href="#">Storing Peppercorns</Link>
        </li>
        <li>
          <Link href="#">Conclusion</Link>
        </li>
      </ul>
      <h2>Peppercorn Types</h2>
      <h3>Black Peppercorns</h3>
      <div className={styles.twocol}>
        <h4>Origin</h4>
        <h4>Flavor Profile</h4>
        <p>
          Black pepper comes from the dried, unripe berries of the pepper plant
          (Piper nigrum)
        </p>
        <p>Pungent, sharp, and slightly spicy with a deep, rich aroma.</p>
        <h4>Best For</h4>
        <h4>Grind</h4>
        <p>
          Black pepper is versatile, ideal for savory dishes, meats, vegetables,
          and even some desserts.
        </p>
        <p>
          Coarse grind for steaks and roasted vegetables; fine grind for soups,
          sauces, and dressings.
        </p>
      </div>
      <h4>Varieties</h4>
      <ul>
        <li>
          <strong>Tellicherry:</strong> Larger, more mature berries with a
          robust, fruity flavor.
        </li>
        <li>
          <strong>Malabar:</strong> Common variety, slightly less pungent than
          Tellicherry.
        </li>
        <li>
          <strong>Lampong:</strong> Smaller, with a strong, sharp flavor.
        </li>
      </ul>
      <hr />
      <h3>White Peppercorns</h3>
      <div className={styles.twocol}>
        <h4>Origin</h4>
        <h4>Flavor Profile</h4>
        <p>
          White pepper is made from ripe pepper berries that have had their
          outer shell removed before drying.
        </p>
        <p>
          Milder than black pepper, with an earthy and slightly fermented taste.
        </p>
        <h4>Best For</h4>
        <h4>Grind</h4>
        <p>
          Light-colored sauces, soups, and dishes where the appearance of black
          pepper specks is undesirable.
        </p>
        <p>
          Fine grind for a subtle heat in light sauces; medium grind for
          seasoning mashed potatoes and cream-based dishes.
        </p>
      </div>
      <h4>Varieties</h4>
      <ul>
        <li>
          <strong>Muntok:</strong> Popular variety with a clean, bright flavor.
        </li>
        <li>
          <strong>Sarawak:</strong> Slightly more intense, with a bold, sharp
          taste.
        </li>
      </ul>
      <hr />
      <h3>Pink Peppercorns</h3>
      <div className={styles.twocol}>
        <h4>Origin</h4>
        <p>
          Pink peppercorns come from the berries of the Peruvian pepper tree
          (Schinus molle).
        </p>
        <h4>Flavor Profile</h4>
        <p>Sweet, fruity, and mildly peppery, with a resinous note.</p>
        <h4>Best For</h4>
        <p>Desserts, salads, seafood, and as a colorful garnish.</p>
        <h4>Grind</h4>
        <p>
          Coarse grind for a burst of color and flavor in salads; fine grind for
          integrating into spice blends.
        </p>
      </div>
      <h4>Varieties</h4>
      <ul>
        <li>
          <strong>Peruvian:</strong> Authentic pink peppercorns with a distinct,
          sweet flavor.
        </li>
        <li>
          <strong>Brazilian:</strong> Often blended with black pepper for a
          unique flavor mix.
        </li>
      </ul>
      <hr />
      <h3>Sichuan Peppercorns</h3>
      <div className={styles.twocol}>
        <h4>Origin</h4>
        <p>
          Not a true pepper, Sichuan pepper comes from the husks of the prickly
          ash tree seeds.
        </p>
        <h4>Flavor Profile</h4>
        <p>Citrusy, slightly spicy, and numbing (tingling sensation).</p>
        <h4>Best For</h4>
        <p>
          Chinese dishes, especially in Sichuan cuisine, and spice rubs for
          meats.
        </p>
        <h4>Grind</h4>
        <p>
          Toast lightly before grinding to enhance flavor; use a coarse grind
          for spice blends or a fine grind for sauces.
        </p>
      </div>
      <h4>Varieties</h4>
      <li>
        <strong>Red Sichuan Pepper:</strong> The most common, with a strong
        numbing effect. Green
      </li>
      <li>
        <strong>Sichuan Pepper:</strong> Milder and more fragrant.
      </li>

      <h2>Quality Indicators to Consider</h2>

      <h3>Freshness</h3>
      <ul>
        <li>
          <strong>Look </strong>For: Bright, vibrant color, and a strong aroma.
        </li>
        <li>
          <strong>Avoid:</strong> Dull, discolored peppercorns with a weak or
          musty smell.
        </li>
      </ul>
      <h3>Origin</h3>
      <ul>
        <li>
          <strong>Best </strong>Regions: Tellicherry (India), Malabar Coast
          (India), Sarawak (Malaysia), Kampot (Cambodia).
        </li>
        <li>
          <strong>Why </strong>It Matters: Certain regions are known for
          producing peppercorns with superior flavor due to soil conditions and
          climate.
        </li>
      </ul>
      <h3>Size and Uniformity</h3>
      <ul>
        <li>
          <strong>Larger </strong>Peppercorns: Generally more flavorful,
          especially with varieties like Tellicherry.
        </li>
        <li>
          <strong>Uniformity:</strong> Ensures even grinding and consistent
          flavor.
        </li>
      </ul>
      <h3>Organic and Sustainably Sourced</h3>
      <ul>
        <li>
          <strong>Benefits:</strong> Free from pesticides and chemicals, often
          richer in flavor.
        </li>
        <li>
          <strong>Certification:</strong> Look for organic certifications or
          Fair Trade labels.
        </li>
      </ul>

      <h2>Storing Peppercorns</h2>

      <h3>Airtight Containers</h3>
      <p>Store in a dark, cool place to preserve aroma and flavor.</p>
      <h3>Whole vs. Ground</h3>
      <p>
        Whole peppercorns retain their potency longer; grind just before use.
      </p>
      <h3>Shelf Life</h3>
      <p>
        Properly stored peppercorns can last up to 3 years, though they are best
        used within 1 year for optimal flavor.
      </p>

      <h2>Conclusion</h2>
      <p>
        Choosing the right pepper spice for your manual grinder involves
        considering the type of peppercorn, its quality, and how it will
        complement your cooking style. By investing in high-quality peppercorns
        and a reliable manual grinder, you can enhance the flavor of your dishes
        with freshly ground pepper that’s full of aroma and depth. Whether
        you’re looking to add a spicy kick to your steak or a delicate touch to
        your sauces, the right peppercorns will make all the difference.
      </p>
    </div>
  );
}
