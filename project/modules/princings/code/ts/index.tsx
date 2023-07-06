import * as React from "react";
import { IPrincings } from "./types";
import { FreePlan } from "./free-plan";
import { PremiumPlan } from "./premium-plan";
export /* bundle */ function Pricing({ variant = "free", ...props }) {
  const planComponents = {
    free: FreePlan,
    premium: PremiumPlan,
  };

  const PlanComponent = planComponents[variant];

  return (
    <div className="container_princigs">
      <PlanComponent {...props} />
    </div>
  );
}
