import Blockquote from "@/components/Blockquote/Blockquote";
import * as Accordion from "@radix-ui/react-accordion";
import Image, { StaticImageData } from "next/image";
import { useId } from "react";
import styles from "./page.module.css";
import { medium } from "@/utils/medium";
import { clsx } from "clsx";
import Link from "next/link";
import setting1 from "./setting1.png";
import setting2 from "./setting2.png";
import setting3 from "./setting3.png";
import setting4 from "./setting4.png";

export default function Settings() {
  return (
    <>
      <p>
        Turn the rotary dial clockwise for finer particles and counterclockwise
        for coarser particles. The finest setting is achieved by turning the
        rotary dial clockwise until the grinder core just blocks (zero position)
        and then turning back half a turn. For a coarser setting, turn the
        adjuster further counterclockwise.
      </p>
      <p>
        These indications provide a rough guide to the achievable grind settings
        and their results. The finely adjustable settings allow you to determine
        and adjust according to your individual preferences.
      </p>
      <Blockquote title="Important">
        For extremely coarse settings, be careful not to unscrew the rotary dial
        completely (After 7–8 turns), as this may cause the grinder cone and
        pressure spring to fall out. If this happens or if you need to
        disassemble the grinder for thorough cleaning, follow{" "}
        <Link href="/manual/assembly">these steps</Link>.
      </Blockquote>

      <Accordion.Root type="single" collapsible defaultValue="1">
        <Setting title="Fine Powder" image={setting1} id="1">
          Turn the adjuster half a turn (½×) from the zero position. You get
          powder-fine particles that release their aroma immediately and
          intensely and are not perceived as crumbs when eating. This setting is
          recommended for table seasoning if you want to avoid the "pepper kick"
          from biting into pepper crumbs.
        </Setting>
        <Setting title="Classic Table Seasoning" image={setting2}>
          Turn the adjuster one full turn (1×) from the zero position. You get
          fine particles that are already slightly crumbly and correspond to the
          finest grind of conventional spice mills. This setting is suitable for
          classic table seasoning with good aroma release and minimal "pepper
          kick."
        </Setting>
        <Setting title="Pepper Kick" image={setting3}>
          Turn the adjuster one and a half times (1½×) from the zero position.
          The particles become increasingly crumbly, releasing their aroma more
          slowly in the dish and providing a noticeable "pepper kick" when
          bitten into.
        </Setting>
        <Setting title="Steak Seasoning" image={setting4}>
          Turn the adjuster three times (3×) from the zero position. The
          particles have the classic pepper steak grind with distinct crumbs and
          a strong "pepper kick," releasing the full aroma and spiciness when
          chewed.
        </Setting>
      </Accordion.Root>
    </>
  );
}

function Setting(props: {
  children: React.ReactNode;
  title: string;
  id?: string;
  image: StaticImageData;
}) {
  const id = useId();
  return (
    <Accordion.Item className={styles.setting} value={props.id ?? id}>
      <Accordion.Trigger asChild>
        <Accordion.Header className={clsx(styles.title, medium.className)}>
          {props.title}
        </Accordion.Header>
      </Accordion.Trigger>
      <Accordion.Content className={styles.content}>
        <div className={styles.contentInner}>
          <Image
            width={128}
            src={props.image}
            alt={props.title}
            className={styles.image}
          />
          {props.children}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
}
