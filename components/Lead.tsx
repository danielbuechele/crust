import styles from "./Lead.module.css";

export default function Lead() {
  return (
    <div className={styles.lead}>
      <p>
        <strong>Introducing the Crust Mill:</strong> Precision engineered for
        perfection in seasoning. Choose between the P–1 for an exquisite pepper
        grind or the S–1 for a flawless salt texture. Manufactured from the
        finest stainless steel for durability that lasts.
      </p>
      <p>
        Designed in California and Made in Germany, this mill isn't just a
        tool—it's an essential part of the culinary experience, crafted to
        elevate every dish.
      </p>
    </div>
  );
}
