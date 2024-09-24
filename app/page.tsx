// import Header from "@/components/shared/header";
// import Uploader from "@/components/shared/uploader";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <Uploader />
//   );
// }

import { fetchProduct } from "@/actions/fetch-product";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const page = async () => {
  const { products } = await fetchProduct();
  return (
    <div className="grid grid-cols-5 gap-4">
      <Link href={"/sign-in"}>sing-in</Link>

    </div>
  )
}

export default page