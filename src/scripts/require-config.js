require.config({
	baseUrl: '/scripts/',
	paths:{
		'jQuery' : '/scripts/vendors/jquery',
		'angular' : '/scripts/vendors/angular',
		'bootstrap' : '/scripts/vendors/bootstrap'
	},
	shim: {
    	'angular' : {'exports' : 'angular'},
    	'jQuery': {'exports' : 'jQuery'},
    	'bootstrap': ['jQuery']
    }
});