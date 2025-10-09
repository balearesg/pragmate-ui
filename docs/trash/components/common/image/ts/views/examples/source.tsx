import * as React from "react";
import { Image } from "pragmate-ui/image";

export function Sources() {
    const sources = [
        {
            media: "(max-width: 1280px)",
            srcSet: "https://th.bing.com/th/id/OIP.EvzGc57hkNpeXisvI_7rwgHaE8?w=276&h=185&c=7&r=0&o=5&pid=1.7"
        }
    ]
    return (
        <Image
            src="https://images.freeimages.com/images/large-previews/19f/the-manor-1642006.jpg"
            alt="alt image"
            sources={sources}
        />
    );
}
