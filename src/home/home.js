import {inject} from 'aurelia-framework';
import amd from '../other-modules/amd.js';
import {common} from '../other-modules/common.js';

@inject(amd, common)
export class Home {
	constructor(amd, common){
		this.message = 'home';
		this.amd = amd.hi();
		this.common = common.hi();
	}
}