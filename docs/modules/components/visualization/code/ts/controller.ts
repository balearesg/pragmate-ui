import { PageReactWidgetController } from '@beyond-js/react-18-widgets/page';
import { View } from './view';

export /*bundle*/
class Controller extends PageReactWidgetController {
	get Widget() {
		return View;
	}
}
