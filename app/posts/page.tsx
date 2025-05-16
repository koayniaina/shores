import Link from "next/link";


async function getPostData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
  return res.json();
}

export default async function Article() {
  const posts = await getPostData();

  return (
    <div>
      <h1 className="text-xl font-bold">Article Page</h1>
      <ul >
        {posts.map((post) => (
          <Link  href={'/posts/' + post.id} key={post.id}>
            <li >
              <span>{post.id}</span>
              <h4 className="font-bold">{post.title}</h4>
              <p>{post.body}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
