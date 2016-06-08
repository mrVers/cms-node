angular.module('app').factory('projectService',function($http) {

    var projectService = {

		model:{
			list:[],
			item:null
		},

		create:function(data){

			var promise = $http.post('http://localhost:3333/project', data);

			return promise;

		},

		getOne:function(id){

			var promise = $http.get('http://localhost:3333/projects'+id);

			promise.then(function(res){

				projectService.model.item = res.data;
				

			});

			return promise;

		},

		getList:function(){

			var promise = $http.get('http://localhost:3333/projects');

			promise.then(function(res){

				projectService.model.list = res.data;


			});

			return promise;

		},
		delete:function(id){

			var promise = $http.delete('http://localhost:3333/project/'+id);

			promise.then(function(res){


				angular.forEach(projectService.model.list, function(project, i){

					if(project._id === id){
						projectService.model.list.splice(i,1);

					}

				});
			//	projectService.model.list = res.data;

			});

			return promise;

		},
		update:function(){


		}


	};

    return projectService;
});
