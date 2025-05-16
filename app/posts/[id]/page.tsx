
async function getPostById(postId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return res.json();
}

export default async function DynamicPage({
  params
}: {
  params: { id: string };
}) {
  const posts = await getPostById(params.id);
  return (
    <div>
      <span>{posts.id}</span>
      <h4>{posts.title}</h4>
      <p>{posts.body}</p>
    </div>
  );
}
