import { ReactWidgetController } from "@beyond-js/react-widgets/base";

import { IWidgetStore } from "@beyond-js/kernel/core";
import { beyond__styles } from "@beyond/docs/layout/styles";
import { WidgetMenu } from "./menu";
import { MenuStore } from "./store";

export /*bundle*/
class Controller extends ReactWidgetController {
    get Widget() {
        return WidgetMenu;
    }
}
