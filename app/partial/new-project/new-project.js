angular.module('app').controller('NewProjectCtrl',function($scope, projectService, $state){

	$scope.isSaving = false;
	
	$scope.project = {};
	
	$scope.authors = [
		{
			name: 'Matej'
		},
		{
			name: 'Zrimac'
		},
		{
			name: 'Vers'
		},
		
	];
	
	$scope.onSave = function(){
		
		$scope.isSaving = true;
		
		$scope.project.author = $scope.project.author.name;
		
		projectService.create($scope.project)
			.then(function(res){
				
				$scope.isSaving = false;
				$state.go('projects');	
			
		});
	
	};

});