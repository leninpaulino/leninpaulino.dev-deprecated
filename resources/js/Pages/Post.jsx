import React from 'react';
import Layout from '../Shared/Layout';
import classNames from 'classnames';
import moment from 'moment';

export default function Post({ avatar, post, author, meta }) {
  return (
    <Layout>
      <div className="row justify-content-md-center">
        <div className="col col-lg-8">
          <h1 className="text-dark pt-5 mb-4">{post.title}</h1>
          <div className="media py-1">
            <img
              src={avatar}
              alt={author.email}
              className="mr-3 rounded-circle shadow-sm"
              style={{ width: '50px' }}
            />
            <div className="media-body">
              <p className="mt-0 mb-1 font-weight-bold">{author.name}</p>
              <span className="text-muted">
                {moment(post.published_at).format('MMM DD')} - {post.read_time}
              </span>
            </div>
          </div>
          {post.featured_image && (
            <div>
              <img
                src={post.featured_image}
                alt={post.featured_image_caption ?? null}
                title={post.featured_image_caption ?? null}
                className="w-100 pt-4"
              />
              <p
                className="text-muted text-center pt-3"
                style={{ fontSize: '0.9rem' }}
              >
                {post.featured_image_caption}
              </p>
            </div>
          )}

          <div
            className="post mt-4"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          {post.tags && (
            <h5>
              {post.tags.map(tag => (
                <span key={tag.slug}>
                  <a
                    href={route('posts.tag', tag.slug)}
                    className="badge badge-light p-2 text-decoration-none"
                  >
                    {tag.name}
                  </a>
                </span>
              ))}
            </h5>
          )}
        </div>
      </div>

      <div className="post">
        <hr />
        <p className="text-center font-italic pt-3 my-5">
          <a
            href={meta.canonical_link}
            target="_blank"
            className="text-dark"
            rel="noopener"
          >
            {meta.canonical_link}
          </a>
        </p>
      </div>
    </Layout>
  );
}
