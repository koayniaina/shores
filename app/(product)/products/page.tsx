import Link from "next/link";
import styles from '@/styles/Product.module.css'

async function getPostData() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export default async function Products() {
  const products = await getPostData();

  return (
    <div>
      <ul className={styles.product}>
        {products.map(
          (product: {
            category: string;
            id: number | string;
            image: string;
            title: string;
            price: string;
          }) => (
            // <div >
              <Link href={"/products/" + product.id} key={product.id}>
                <img src={product.image} className={styles.imgs}/>
                <span className={styles.id}>{product.id}</span>
                <div className={styles.category}>
                  <h3>{product.category}</h3>
                  <p>$ {product.price}</p>
                </div>
                <h2 className={styles.htag}>{product.title}</h2>
              </Link>
            // </div>
          )
        )}
      </ul>
    </div>
  );
}
