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
    <div className={styles.params}>
      <div className={styles.params_id}>
        <div className={styles.mains}>
          <div className="img">
            <img src={product.image} />
            <br />
          </div>
          <div className={styles.body}>
            <h4>{product.title}</h4>
            <p>$ {product.price}</p>
          </div>
        </div>
        <div className={styles.categorys}>
          <span className={styles.ids}>{product.id}</span>
          <h3>{product.category}</h3>
        </div>
        <p className={styles.htags}>{product.description}</p>
      </div>
      <div></div>
    </div>
  );
}
