export function configure(aurelia){
	aurelia.use
	   .standardConfiguration()
	   .developmentLogging()
	   .feature('./elements')
	   .plugin('aurelia-validation');
	   
	aurelia.start().then(a => a.setRoot('app', document.body));
}