"use client";

import { useRouter } from "next/navigation";

export default function PostsDropdown({ posts }) {
  const router = useRouter();

  function onChange(e) {
    router.push(`/posts/${e.target.value}`);
  }

  console.log(posts);

  return (
    <label className="PostsLimit">
      Select Post:
      <select onChange={onChange}>
        <option value="">---Select an option---</option>
        {posts.map((post) => (
          <option
            key={post.id}
            value={post.id}
          >
            {post.title}
          </option>
        ))}
      </select>
    </label>
  );
}
