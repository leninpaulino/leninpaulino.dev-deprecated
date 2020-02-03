import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import classNames from 'classnames';

export default function Link({ text, href, children }) {
  const isActive = route().current(href + '*');

  const anchorClasses = classNames('text-decoration-none', {
    'font-weight-bold text-dark': isActive,
    'text-muted': !isActive
  });

  return (
    <li className="list-inline-item">
      <InertiaLink className={anchorClasses} href={route(href)}>
        {text}
        {children}
      </InertiaLink>
    </li>
  );
}
