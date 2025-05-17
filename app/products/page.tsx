import Image from "next/image";
import Link from "next/link";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

async function getPostData() {
  const res = await fetch("https://fakestoreapi.com/products?limit=8");
  return res.json();
}

export default async function Products() {
  const products = await getPostData();

  return (
    <div>
      <ul>
        {products.map(
          (product: {
            category: ReactNode;
            id: number | string;
            image: string;
            title: string;
            price: string;
          }) => (
            <Link href={"/products/" + product.id} key={product.id}>
              <li>
                <img src={product.image} width={80} height={80} />
                <span>{product.id}</span>
                <h4>{product.title}</h4>
                <p>$ {product.price}</p>
                <h3>{product.category}</h3>
              </li>
            </Link>
          )
        )}
      </ul>
    </div>
  );
}
