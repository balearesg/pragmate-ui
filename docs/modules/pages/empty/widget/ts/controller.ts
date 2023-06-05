import { PageReactWidgetController } from "@beyond-js/react-18-widgets";
import { View } from "./views";

export /*bundle*/
class Controller extends PageReactWidgetController {
  get Widget() {
    return View;
  }
}
