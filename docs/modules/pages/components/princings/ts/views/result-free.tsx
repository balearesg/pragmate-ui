import * as React from "react";
import { Pricing } from "pragmate-ui/pricing";

export function ResultsFree() {
  const advantages = [
    "625 credits/month",
    "Buy more credits as needed ",
    "Upscale resolution and remove watermarks",
    "Unlimited users for your team",
    "Priority support from our engineers",
    "Gen-1 (Video to Video) up to 15 sec",
    "3 video projects",
    "5GB assets",
    "Up to 3 editors",
  ];
  return (
    <section>
      <Pricing
        variant="free"
        title="basic"
        price={0}
        description="For individuals and teams looking for more access, more AI Magic Tools and more export options."
        advantages={advantages}
      />
    </section>
  );
}
