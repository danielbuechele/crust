import { HttpLink } from "@apollo/client";
import { env } from "process";

const link = new HttpLink({
  uri: env.NEXT_PUBLIC_STOREFRONT_API,
  headers: {
    "X-Shopify-Storefront-Access-Token":
      env.NEXT_PUBLIC_STOREFRONT_ACCESS_TOKEN!,
  },
});

export default link;
