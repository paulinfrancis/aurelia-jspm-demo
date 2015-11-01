export class AboutService{
	
	getData(){	
		return new Promise(resolve => {
			setTimeout(resolve({
				name: 'Francis',
				occupation: 'Programmer',
				hobby: 'Bikes'
			}), 2000);
		});
	}
	
}