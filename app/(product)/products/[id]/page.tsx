import styles from "@/styles/Product.module.css";

async function getPostById(postId: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${postId}`);
  return res.json();
}

export default async function DynamicPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getPostById(params.id);
  return (
    <div>
      <div className={styles.params}>
        <div className={styles.params_id}>
          <img src={product.image}/>
          <span>{product.id}</span>
        </div>
        <div className="prods">
          <h4 className="font-bold">{product.title}</h4>
          <p>{product.description}</p>
          <p>$ {product.price}</p>
          <h3>{product.category}</h3>
        </div>
      </div>
    </div>
  );
}
