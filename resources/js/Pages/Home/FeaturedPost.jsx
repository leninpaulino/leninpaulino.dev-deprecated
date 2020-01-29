import React from "react";

export default function FeaturedPost({ post }) {
    return (
        <div className="mb-8 bg-gray-800 text-white rounded">
            <div className="col-md-8 px-0">
                <h1 className="font-italic font-serif">
                    <a
                        href={route("blog.post", post.slug)}
                        className="text-white text-decoration-none"
                    >
                        {post.title}
                    </a>
                </h1>
                <p className="lead my-3">
                    <a
                        href={route("blog.post", post.slug)}
                        className="text-white text-decoration-none"
                    >
                        {post.summary}
                    </a>
                </p>
                <p className="lead mb-0">
                    <a
                        href={route("blog.post", post.slug)}
                        className="text-white font-weight-bold text-decoration-none"
                    >
                        Continue reading...
                    </a>
                </p>
            </div>
        </div>
    );
}
