export const implementation = `export function pricingPage() {
  const advantages = [
    "125 credits",
    "Can't buy more credits ",
    "Can't upscale resolution or remove watermarks on Gen-1 and Gen-2",
    "Gen-1 (Video to Video) up to 4 sec",
    "Gen-2 (Text to Video) up to 4 sec ",
    "3 video projects",
    "5GB assets ",
    "Up to 3 editors",
    "Video editor exports in 720p",
    "Limited image export options",
  ];

	return (
        <section>
            <Princings
                variant="free"
                title="basic"
                price={78}
                description="For individuals and teams looking for more access, more AI Magic Tools and more export options."
                advantages={advantages}
            />
        </section>
	);
  }`;
