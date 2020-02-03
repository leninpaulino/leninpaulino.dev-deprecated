import React from 'react';

export default function PostItem({ post }) {
  return (
    <div className="mb-5">
      <h3>
        <a
          className="font-serif text-dark text-decoration-none"
          href={route('posts.show', post.slug)}
        >
          {post.title}
        </a>
      </h3>
      <p className="text-muted mb-2">
        {post.published_at} — {post.read_time}
      </p>
      <p>
        <a
          className="text-dark text-decoration-none"
          href={route('posts.show', post.slug)}
        >
          {post.summary}
        </a>
      </p>
    </div>
  );
}
