import React from "react";
import Layout from "../Shared/Layout";
import classNames from "classnames";
import FeaturedPost from "./Home/FeaturedPost";

export default function Home({ posts, topics }) {
    const hasPosts = posts.data.length > 0;
    const hasTopics = topics.length > 0;
    const containerClasses = classNames("container", {
        "mt-4": hasPosts
    });

    return (
        <Layout>
            <div className="container">
                {hasTopics && (
                    <div className="relative z-2 h-10 overflow-hidden py-1 mb-2">
                        <nav className="flex flex-no-wrap pb-4 -mt-px overflow-x-auto text-center whitespace-no-wrap scrolling-touch justify-between">
                            {topics.map(topic => (
                                <a
                                    className="p-2 text-gray-600 no-underline"
                                    href={route("blog.topic", topic.slug)}
                                    key={topic.slug}
                                >
                                    {topic.name}
                                </a>
                            ))}
                        </nav>
                    </div>
                )}
                {hasPosts && <FeaturedPost post={posts.data.shift()} />}
            </div>

            <main role="main" className={containerClasses}>
                <div className="row">
                    {hasPosts && posts.data.map(post => <h1>{post.title}</h1>)}
                </div>
            </main>
        </Layout>
    );
}
