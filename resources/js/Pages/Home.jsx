import React from 'react';
import Layout from '../Shared/Layout';
import PostItem from './Home/PostItem';

export default function Home({ posts, topics, tags }) {
  const hasPosts = posts.data.length > 0;
  const hasTopics = topics.length > 0;
  const hasTags = tags.length > 0;

  const renderPosts = () => {
    if (hasPosts) {
      return posts.data.map(post => <PostItem key={post.slug} post={post} />);
    }

    return <p>I'll start writing soon.</p>;
  };

  return (
    <Layout>
      <main role="main" className="mt-5">
        <div className="row">
          <div className="col-md-10">
            <h3 className="mb-4 font-italic">Recent Posts</h3>
            {renderPosts()}
          </div>
          <aside className="col-md-2">
            <div className="p-md-4">
              <h4 className="font-italic">Topics</h4>
              <ol className="list-unstyled mb-0">
                {hasTopics &&
                  topics.map(topic => (
                    <li key={topic.slug}>
                      <a
                        className="text-decoration-none text-secondary"
                        href={route('blog.topic', topic.slug)}
                        key={topic.slug}
                      >
                        {topic.name}
                      </a>
                    </li>
                  ))}
              </ol>
            </div>
            <div className="p-md-4">
              <h4 className="font-italic">Tags</h4>
              <ol className="list-unstyled mb-0">
                {hasTags &&
                  tags.map(tag => (
                    <li key={tag.slug}>
                      <a
                        href={route('blog.tag', tag.slug)}
                        className="text-decoration-none text-secondary"
                      >
                        {tag.name}
                      </a>
                    </li>
                  ))}
              </ol>
            </div>
          </aside>
        </div>
      </main>
    </Layout>
  );
}
