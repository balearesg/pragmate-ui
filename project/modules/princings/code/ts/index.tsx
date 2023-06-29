import * as React from "react";
import { IPrincings } from "./types";
import { FreePlan } from "./free-plan";
import { PremiumPlan } from "./premium-plan";
export /* bundle */ function Pricing({
  level = "free",
  primary,
  secondary,
  background,
  ...props
}) {
  const planComponents = {
    free: FreePlan,
    premium: PremiumPlan,
  };

  const PlanComponent = planComponents[level];

  return (
    <div className="container_princigs" style={{ backgroundColor: background }}>
      <PlanComponent {...props} primary={primary} secondary={secondary} />
    </div>
  );
}
