"use server";

import { kv } from "@vercel/kv";

export const fetchProduct = async () => {
  const isCached = await kv.get("products");
  if (isCached) {
    return {
      success: true,
      products: isCached,
    };
  } else {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    await kv.set("products", JSON.stringify(data.products));
    return {
      success: true,
      products: data.products,
    };
  }
};
