import * as React from 'react';
import { Input } from './inputs/default';
import { Select } from './inputs/select';
import { TextArea } from './inputs/textarea';
import { CheckAndRadios } from './inputs/check-and-radios';

class InputComponents {
	select: React.FC = Select;
	textarea: React.FC = TextArea;
	radio: React.FC = CheckAndRadios;
	radioItem: React.FC = Input;
	checkbox: React.FC = CheckAndRadios;
	checkItem: React.FC = Input;
	default: React.FC = Input;

	setComponent(type: string, component: React.Component) {
		this[type] = component;
	}
}

export /*bundle*/ const inputComponents = new InputComponents();
