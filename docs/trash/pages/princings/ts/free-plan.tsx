import * as React from "react";
import { Button } from "pragmate-ui/components";
import { Icon } from "pragmate-ui/icons";
export function FreePlan(props) {
  const { title, description, advantages } = props;
  const HEADER = title.charAt(0).toUpperCase() + title.slice(1);

  const listAdvanges = advantages.map((advantage, index) => (
    <li key={index}>
      <Icon icon="circle-checks" className="md" /> {advantage}
    </li>
  ));
  return (
    <section className="container-component container__component-free">
      <h3 className="component__h3">{HEADER}</h3>
      <p className="component__p">{description}</p>

      <div className="view-price">
        <h2 className="price__h2">Free Forever</h2>
        <Button variant="primary">Sign up</Button>
      </div>

      <div className="container-advantages">
        <ul>{listAdvanges}</ul>
      </div>
    </section>
  );
}
