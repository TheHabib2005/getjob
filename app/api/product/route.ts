import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

export const GET = async () => {
  let isCached = await kv.get("products");

  if (isCached) {
    return NextResponse.json({
      success: true,
      products: isCached,
    });
  } else {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    await kv.set("products", JSON.stringify(data.products));
    return NextResponse.json({
      success: true,
      products: data.products,
    });
  }
};
