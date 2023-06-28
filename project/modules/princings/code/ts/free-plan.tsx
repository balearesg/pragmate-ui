import * as React from "react";
import { Button } from "pragmate-ui/form";
import { Icon } from "pragmate-ui/icons";
export function FreePlan(props) {
  const { title, description, btnText, advantages, primary, secondary } = props;
  const HEADER = title.charAt(0).toUpperCase() + title.slice(1);

  const listAdvanges = advantages.map((advantage, index) => (
    <li key={index}>
      <Icon icon="circle-checks" className="md" /> {advantage}
    </li>
  ));
  return (
    <section className="container-component container__component-free">
      <h3 className="component__h3" style={{ color: secondary }}>
        {HEADER}
      </h3>
      <p className="component__p" style={{ color: primary }}>
        {description}
      </p>

      <div className="view-price">
        <h2 className="price__h2" style={{ color: primary }}>
          Free Forever
        </h2>
        <Button variant="primary" style={{ color: secondary }}>
          {btnText}
        </Button>
      </div>

      <div className="container-advantages">
        <ul>{listAdvanges}</ul>
      </div>
    </section>
  );
}
