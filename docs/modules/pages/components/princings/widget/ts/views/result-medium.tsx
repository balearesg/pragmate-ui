import * as React from "react";
import { Pricing } from "pragmate-ui/pricing";

export function ResultsMedium() {
  const advantages = [
    "625 credits/month",
    "Buy more credits as needed ",
    "Upscale resolution and remove watermarks",
    "Unlimited users for your team",
    "Priority support from our engineers",
    "Gen-1 (Video to Video) up to 15 sec",
    "Gen-2 (Audio only) up to 40 min",
    "Gen-3 (Image Only)",
    "Custom branding options available",
  ];
  return (
    <section>
      <Pricing
        level="medium"
        title="standard"
        price={40}
        description="For individuals and teams looking for more access, more AI Magic Tools and more export options."
        btnText="suscribe now"
        advantages={advantages}
        primary="#ecf0f1"
        secondary="#2ecc71"
        background="#2d3436"
      />
    </section>
  );
}
