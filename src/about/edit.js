import {inject} from 'aurelia-framework';
import {Validation} from 'aurelia-validation';
import {AboutService} from './aboutService'

@inject(Validation, AboutService)
export class Edit {
	constructor(validation, aboutService) {	
		this.validation = validation.on(this)
									.ensure('name')
										.isNotEmpty()
										.hasMinLength(3)
										.hasMaxLength(10)
									.ensure('occupation')
										.isNotEmpty()
										.hasMinLength(3)
										.hasMaxLength(10)
									.ensure('hobby')
										.isNotEmpty()
										.hasMinLength(3)
										.hasMaxLength(10);
								
		this.aboutService = aboutService;
	}
	
	activate(params) {
		this.editingName = params.name;
		
		return this.aboutService.getData().then(data => {
			this.name = data.name;
			this.occupation = data.occupation;
			this.hobby = data.hobby;
		});
	}

	save() {
		this.validation.validate() 
			.then(() => {
				alert(':)');
			})
			.catch(() => {
				alert(':(');
			});
	}	
}