import * as React from "react";
import { Link } from "pragmate-ui/link";
export /* bundle */ function BreadCrumb({
  title,
  items,
  border,
  className,
  children,
}) {
  let cls = `breadcrumb-page-header${className ? ` ${className}` : ""}`;
  if (border) cls += " border-header";

  let breadcrumbOutput = [];

  if (items) {
    breadcrumbOutput = items.map(([link, label]) => {
      return (
        <li key={`${link} ${label}`}>
          <Link className="breadcrumbs__item" href={link}>
            {label}
          </Link>
        </li>
      );
    });
  }

  return (
    <header className={cls}>
      <h2>{title}</h2>
      {breadcrumbOutput.length > 0 && (
        <ul className="breadcrumb">{breadcrumbOutput}</ul>
      )}
      <div>{children}</div>
    </header>
  );
}
