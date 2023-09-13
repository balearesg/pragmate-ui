import * as React from "react";
import { Pricing } from "pragmate-ui/pricing";

export function Results() {
  const advantages = [
    "125 credits",
    "Can't buy more credits ",
    "Can't upscale resolution or remove watermarks on Gen-1 and Gen-2",
    "Gen-1 (Video to Video) up to 4 sec",
    "Gen-2 (Text to Video) up to 4 sec ",
    "3 video projects",
    "5GB assets ",
  ];
  return (
    <section>
      <Pricing
        variant="free"
        title="basic"
        price={0}
        description="For individuals looking to explore Runway's AI Magic Tools and content creation features."
        advantages={advantages}
      />
    </section>
  );
}
