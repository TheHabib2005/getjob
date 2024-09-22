// import Header from "@/components/shared/header";
// import Uploader from "@/components/shared/uploader";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <Uploader />
//   );
// }

import { fetchProduct } from "@/actions/fetch-product";
import Link from "next/link";


const page = async () => {
  const { products } = await fetchProduct();
  console.log(products);

  return (
    <div className="grid grid-cols-5 gap-4">
      <Link href={"/sign-in"}>sing-in</Link>
      {
        products.map((product: {
          id: number;
          title: string;
          description: string;
          price: number
        }) => {
          return (
            <div key={product.id}>
              <div className="flex items-center space-x-2">
                {/* <Image src={product.thumbnail} alt={product.title} width={50} height={50} /> */}
                <div>
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <p>${product.price}</p>
                </div>
              </div>
            </div>
          )
        })
      }

    </div>
  )
}

export default page