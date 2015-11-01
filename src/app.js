export class App {
	configureRouter(config, router){
		this.router = router;
		
		config.map([
			{ route: ['', 'home'], moduleId: 'home/home', title: 'Home', nav: true, name: 'home' },
			{ route: 'about', moduleId: 'about/about', title: 'About', nav: true, name: 'about' },
			{ route: 'edit/:name', moduleId: 'about/edit', title: 'Edit', name: 'edit' }
		])
	}
}