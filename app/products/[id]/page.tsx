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
      <img src={product.image} width={45} height={45} />
      <span>{product.id}</span>
      <h4 className="font-bold">{product.title}</h4>
      <p>{product.description}</p>
      <p>$ {product.price}</p>
      <h3>{product.category}</h3>
    </div>
  );
}
