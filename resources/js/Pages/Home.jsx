import React from 'react';
import Layout from '../Shared/Layout';
import PostItem from './Home/PostItem';
import { InertiaLink } from '@inertiajs/inertia-react';

export default function Home({
  posts,
  topics,
  tags,
  tag: filteredTag,
  topic: filteredTopic
}) {
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
                      <InertiaLink
                        className="text-decoration-none text-secondary"
                        href={route('posts.topic', topic.slug)}
                        key={topic.slug}
                      >
                        {filteredTopic && filteredTopic.slug === topic.slug ? (
                          <strong>{topic.name}</strong>
                        ) : (
                          topic.name
                        )}
                      </InertiaLink>
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
                      <InertiaLink
                        href={route('posts.tag', tag.slug)}
                        className="text-decoration-none text-secondary"
                      >
                        {filteredTag && filteredTag.slug === tag.slug ? (
                          <strong>{tag.name}</strong>
                        ) : (
                          tag.name
                        )}
                      </InertiaLink>
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
