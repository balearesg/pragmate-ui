import * as React from "react";
export function SliderBarNav() {
  const [show, setShow] = React.useState(false);
  function handleModalColor() {
    setShow(!show);
  }
  return (
    <aside className="doc__nav">
      <ul>
        <li className="js-btn">Form</li>
        <li className="js-btn">
          {" "}
          <a href="/components/modal">Modal</a>
        </li>
        <li className="js-btn">
          {" "}
          <a href="/components/icons">Icon</a>
        </li>
        <li className="js-btn">
          {" "}
          <a href="/components/spinner">Spinner</a>
        </li>
        <li className="js-btn">
          {" "}
          <a href="">Input Controller</a>
        </li>
        <li className="js-btn">
          {" "}
          <a href="/components/image">Image</a>
        </li>
        <li className="js-btn">
          {" "}
          <a href="scroll-container">Scroll</a>
        </li>
        <li className="js-btn">
          {" "}
          <a href="/components/tabs">Tabs</a>
        </li>
        <li className="js-btn">
          {" "}
          <a href="/components/toast">Toast</a>
        </li>
        <li className="js-btn">
          {" "}
          <a href="/components/swiper">Swiper</a>
        </li>
        <li className="js-btn">
          {" "}
          <a href="/components/code-verification">Verificacion Code</a>
        </li>

        {/* <li onClick={handleModalColor} className="js-btn">
          Form Color
        </li> */}
      </ul>
    </aside>
  );
}
