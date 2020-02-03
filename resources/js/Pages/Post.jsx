import React from 'react';
import Layout from '../Shared/Layout';
import classNames from 'classnames';

export default function Post({ post }) {
  const titleClasses = classNames('text-dark font-serif pt-5 mb-4', {
    'mb-4': !!post.summary
  });
  return (
    <Layout>
      <div className="row justify-content-md-center">
        <div className="col col-lg-8">
          <h1 className={titleClasses}>{post.title}</h1>
        </div>
      </div>
    </Layout>
  );
}
