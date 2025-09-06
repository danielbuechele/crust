import styles from "./page.module.css";
import PageHeader from "@/components/PageHeader/PageHeader";
import Table, { Row } from "@/components/Table/Table";
import Link from "next/link";
import { Questions, Question } from "@/components/Questions/Questions";

export default function FAQ() {
  return (
    <>
      <PageHeader
        title="FAQ"
        lead="Advice and answers from the Crust team."
        byline={
          <>
            If we haven't addressed your question here,{" "}
            <Link href="contact">contact us</Link> for more information.
          </>
        }
      />
      <Table className={styles.table}>
        <Row title="Product" className={styles.firstRow}>
          <Questions>
            <Question question="Which pepper and salt can I use?">
              <h4>Pepper</h4>
              <p>
                Choose whole peppercorns designed for grinding. You can use
                black, white, red, or dried green pepper varieties. We recommend
                Kampot, Malabar, and Tellicherry peppercorns.
              </p>

              <h4>Salt</h4>
              <p>
                Choose large, non-wet salt crystals. You can use table salt, sea
                salt, and Himalayan salt intended for grinding. To prevent the
                salt from clumping, store it in a dry place when not in use.
              </p>
            </Question>
            <Question question="Can I use other spices?">
              <p>
                Yes, Crust works best with dry spices in whole seed form, like
                coriander seeds, fennel seeds, caraway seeds, cumin, mustard
                seeds, anise, cloves, allspice.
              </p>
              <p>Cinnamon sticks and long pepper (break into small pieces).</p>
              <p>
                For slightly oily spices like caraway, mustard seeds, cloves,
                anise, rosemary, juniper berries, chili, and ginger, you can mix
                them with twice the amount of rice and then grind them 2-3 times
                from coarse to fine. This produces a spice powder that is full
                of flavor but less intense, making it much easier to dose.
              </p>
            </Question>
            <Question question="Can I grind salt in the pepper mill (P–1)?">
              No, we offer specifically the salt mill Crust S–1 with a ceramic
              burr that will avoid Corrosion.
            </Question>
            <Question question="How do I clean my Crust mill?">
              Our <Link href="/manual">User Manual</Link> provides detailed
              instructions on how to clean the Crust mills.
            </Question>
            <Question question="Where can I download the user manual?">
              A User Manual is available online on our website{" "}
              <Link href="/manual">here</Link>.
            </Question>
            <Question question="Where are Crust mills made?">
              All Crust mills are designed in California and manufactured in
              Germany. We take pride in our responsible approach to production,
              ensuring minimal environmental impact. By offering a thoughtfully
              selected product range, we maintain a small, closely connected
              supply chain.
            </Question>
            <Question question="Why should I choose a manual grinder over an electric one?">
              <h4>Control Over Grind Size</h4>
              <p>
                Manual grinders often allow for more precise control over the
                grind size, from coarse to fine. This precision can be harder to
                achieve with electric grinders, which may have preset settings.
              </p>
              <h4>Consistency</h4>
              <p>
                Manual grinders, especially those with high-quality ceramic or
                steel burrs, tend to produce a more consistent grind, which is
                essential for achieving the desired flavor and texture in your
                dishes.
              </p>
              <h4>Durability</h4>
              <p>
                Manual grinders generally have fewer moving parts and no
                electronic components, making them less likely to break down
                over time. This can result in a longer lifespan compared to
                electric grinders.
              </p>
              <h4>Aesthetic Appeal</h4>
              <p>
                Many manual grinders are beautifully crafted, often made from
                wood, stainless steel, or other attractive materials, making
                them a stylish addition to your kitchen or dining table.
              </p>
            </Question>

            <Question question="Why did you choose to make Crust out of stainless steel?">
              A stainless steel pepper and salt grinder is highly durable,
              resistant to rust and corrosion, and easy to clean, making it
              ideal for frequent kitchen use. Its sleek, modern appearance also
              adds aesthetic appeal, while its strength ensures consistent
              grinding performance. Additionally, stainless steel is a
              low-maintenance and environmentally friendly choice.
            </Question>

            <Question question="Can stainless steel rust?">
              <p>
                Stainless steel is designed to resist rust and corrosion due to
                its combination of nickel and chromium.
              </p>
              <h4>The stainless steel parts</h4>
              <p>
                Housing, laser parts, shaft, spring, nut, and adjuster—are made
                of austenitic stainless steel with about 18% nickel and 10%
                chromium. This alloy resists rusting under normal conditions,
                but long-term exposure to salt, moisture, and air can cause
                surface discoloration. However, the stainless steel itself
                remains unaffected.
              </p>

              <h4>The stainless steel used in the hardened parts</h4>
              <p>
                Grinding mechanism and ball bearings—are made of martensitic
                stainless steel with about 13% chromium. Although it’s
                considered stainless steel, it can develop surface rust (flash
                rust) when exposed to salt, moisture, and air. This rust is
                mainly a surface issue and doesn’t lead to deep corrosion. If
                the stainless steel comes into contact with regular steel or
                iron, small particles can embed into the surface and cause rust
                spots. These issues are mostly cosmetic and do not affect
                hygiene, taste, or functionality.
              </p>
              <p>
                If you maintain and clean your stainless steel spice grinder
                properly, it should not rust easily.
              </p>
            </Question>

            <Question question="Do you offer a warranty?">
              Yes, Crust Mills come with a 1-year warranty covering defects in
              materials and craftsmanship.
            </Question>
          </Questions>
        </Row>
        <Row title="Shipping & Orders">
          <Questions>
            <Question question="How much does shipping cost?">
              We offer free standard shipping within the United States.
            </Question>
            <Question question="How long does it take for my Crust mill to arrive?">
              Orders generally require 1-3 business days for processing before
              shipment. However, during holidays, processing times may be longer
              due to increased order volumes. Once your order has shipped, you
              will receive a tracking number, and within 24 hours, you can view
              the estimated delivery date. For orders within the US, delivery
              typically takes 3-7 business days after shipping.
            </Question>
            <Question question="Do you ship outside the USA?">
              Currently, we are only shipping within the USA.
            </Question>
            <Question question="How can I track my order?">
              You will receive a shipping confirmation email with your order
              number and a tracking link. For assistance, please contact us at
              support@crustmill.com.
            </Question>
            <Question question="My tracking number isn't working. What should I do?">
              New tracking numbers may take up to 24 hours to activate after you
              receive your shipping confirmation. If your tracking number isn't
              working after this period, please email us, and we'll assist you
              with a status update.
            </Question>
            <Question question="Where is my shipment coming from?">
              We ship all our mills from Germany to our trusted Shopify
              fulfillment partner in Southern California, who handles the
              distribution.
            </Question>
            <Question question="If I buy more than one mill, will I get multiple shipments?">
              When an order is received, our fulfillment partner packs the
              products, consolidates all items into a single box, and then ships
              the order to you.
            </Question>
            <Question question="Can I cancel or make changes to my order?">
              If you need to change or cancel your order, please reach out to us
              as soon as possible at support@crustmill.com, and we will do our
              best to assist you.
            </Question>
            <Question question="Does Crust offer gift wrapping and could I add a gift note to my order?">
              Currently, we do not provide gift wrapping or note services.
            </Question>
          </Questions>
        </Row>
        <Row title="Returns & Exchanges">
          <Questions>
            <Question question="What's your return policy?">
              We have a 30-day return policy, which means you have 30 days after
              receiving your item to request a return. You can read more about
              how to start a return on our{" "}
              <Link href="/returns">Return Policy</Link>.
            </Question>
            <Question question="Can I exchange my Crust mill?">
              We are unable to process exchanges. The quickest way to replace a
              mill is to return the one you have, and once the return is
              complete, you can make a separate purchase for the new item.
            </Question>
            <Question question="When can I expect my refund?">
              After we receive your return, please allow up to 15 business days
              for your refund to be processed. If you haven't received it after
              15 business days, please contact us at support@crustmill.com.
            </Question>
          </Questions>
        </Row>
      </Table>
    </>
  );
}
