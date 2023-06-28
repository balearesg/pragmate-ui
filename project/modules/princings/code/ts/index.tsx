import * as React from "react";
import { IPrincings } from "./types";
import { FreePlan } from "./free-plan";
import { MediumPlan } from "./medium-plan";
import { ProPlan } from "./pro-plan";
export /* bundle */ function Pricing({
  level,
  primary,
  secondary,
  background,
  ...props
}) {
  const planComponents = {
    free: FreePlan,
    medium: MediumPlan,
    pro: ProPlan,
  };

  const PlanComponent = planComponents[level];

  return (
    <div className="container_princigs" style={{ backgroundColor: background }}>
      <PlanComponent {...props} primary={primary} secondary={secondary} />
    </div>
  );
}
