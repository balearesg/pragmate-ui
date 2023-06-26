import * as React from "react";
import { routing } from "@beyond-js/kernel/routing";



export /*bundle*/
function Link({href, ...props}: React.AnchorHTMLAttributes<HTMLAnchorElement>): JSX.Element {
console.log(href)
    const isExternal = href.startsWith("http");
  const target = isExternal ? '_blank' : '';
  
  const onClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    if (!isExternal) {
       event.preventDefault()
    };
    
    event.stopPropagation();

    if (props.onClick && typeof props.onClick === "function") {
      props.onClick(event);
    }

    !isExternal && routing.pushState(href);
  };

  const cls = props.className || ''
   const properties = { ...props };
  ["href", "onClick"].forEach((prop) => delete properties[prop]);

  return (
    <a {...properties} href={href} onClick={onClick} target={props.target || target} className={`tag-a ${cls}`}>
      {props.children}
    </a>
  );
}

// export /*bundle*/
// function ELink(
//   props: React.AnchorHTMLAttributes<HTMLAnchorElement>
// ): JSX.Element {
//   const { href } = props;
//   delete props.href;
//   return (
//     <a href={href} target="_blank" {...props}>
//       {props.children}
//     </a>
//   );
// }
