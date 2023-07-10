import React from "react";

function AsideRight({ headings }) {
  return (
    <aside>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id}>
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default AsideRight;
