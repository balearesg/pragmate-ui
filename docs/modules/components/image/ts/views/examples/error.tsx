import * as React from "react";
import { Image } from "pragmate-ui/image";

export function Error() {
    return (
        <Image
            src="invalid image url"
            alt="image alt"
            sizeLoadingError={{
                width: "600px",
                height: "450px"
            }}
            onError={() => { }}
        />
    );
}
