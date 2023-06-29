import * as React from "react";
import { Pricing } from "pragmate-ui/pricing";

export function ResultsPremium() {
  const advantages = [
    "2250 credits/month",
    "Buy more credits as needed",
    "Upscale resolution and remove watermarks",
    "Gen-1 (Video to Video) up to 15 sec",
    "Gen-2 (Text to Video) up to 4 sec",
    "Unlimited video editor projects",
    "500GB assets",
    "Up to 10 editors",
    "All video exports from Standard",
  ];
  return (
    <section>
      <Pricing
        level="premium"
        title="premium"
        price={78}
        description="For large teams and companies looking to add all of Runway’s features into their workflows."
        btnText="suscribe now"
        advantages={advantages}
        primary="#ffffff"
        secondary="#7158e2"
        background="#2c2c54"
      />
    </section>
  );
}
