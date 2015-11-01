import {inject} from 'aurelia-framework';
import {AboutService} from './aboutService';

@inject(AboutService)
export class About {
		
	constructor(aboutService){
		this.aboutService = aboutService;
		this.message = 'about';
	}
	
	activate(){
		return this.aboutService.getData().then(data => {
			this.name = data.name;
			this.occupation = data.occupation;
			this.hobby = data.hobby;
		});
	}	
}