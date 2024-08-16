import { HttpLink } from "@apollo/client";
import process from "process";

const link = new HttpLink({
  uri: process.env.NEXT_PUBLIC_STOREFRONT_API,
  headers: {
    "X-Shopify-Storefront-Access-Token":
      process.env.NEXT_PUBLIC_STOREFRONT_ACCESS_TOKEN!,
  },
});

export default link;
