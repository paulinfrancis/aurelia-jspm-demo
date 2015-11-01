import {bindable} from 'aurelia-framework';

export class NavMenu {
	//Need this to pass attributes to custom elements
	//config.js -> es7.classProperties
	@bindable router;
} 