import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import classNames from 'classnames';

export default function Link({ text, href, children }) {
  const isActive = route().current(href + '*');

  const navItemClasses = classNames('nav-item', {
    active: isActive
  });

  return (
    <li className={navItemClasses}>
      <InertiaLink className="nav-link" href={route(href)}>
        {text}
        {children}
      </InertiaLink>
    </li>
  );
}
