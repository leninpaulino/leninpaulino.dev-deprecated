import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import classNames from "classnames";

export default function Link({ text, href }) {
    const isActive = route().current(href + "*");

    const anchorClasses = classNames("inline-block py-2 px-4 no-underline", {
        "text-gray-900 font-bold": isActive,
        "text-gray-600 hover:text-gray-900 hover:text-underline": !isActive
    });

    return (
        <li className="mr-3">
            <InertiaLink className={anchorClasses} href={route(href)}>
                {text}
            </InertiaLink>
        </li>
    );
}
