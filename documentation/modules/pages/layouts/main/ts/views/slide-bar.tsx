import * as React from "react";
export function SliderBarNav() {
  const [show, setShow] = React.useState(false);
  function handleModalColor() {
    setShow(!show);
  }
  return (
    <aside className="doc__nav">
      <ul>
        {/* <li className="js-btn selected">Get Started</li>
        <li className="js-btn">Configuration</li>
        <li className="js-btn">Keybindings</li>
        <li className="js-btn">Issues</li> */}
        <li className="js-btn">Form</li>
        <li className="js-btn">
          {" "}
          <a href="/components/modal">Modal</a>
        </li>
        <li className="js-btn">
          {" "}
          <a href="components/icons">Icon</a>
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
          <a href="">Verificacion Code</a>
        </li>

        <li onClick={handleModalColor} className="js-btn">
          Form Color
        </li>
      </ul>
    </aside>
  );
}
