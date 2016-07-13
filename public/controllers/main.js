app.controller('mainController', function($scope, $http){
	$scope.title= 'Ego Eimi';
		$http.get('/api/teams/top_four').success(function(data){
			console.log('bla');
		    $scope.topFour = data;
		    $scope.topFour[0].bar = data[0].score * 0.02;
		    $scope.topFour[1].bar = data[1].score * 0.02;
		    $scope.topFour[2].bar = data[2].score * 0.02;
		    $scope.topFour[3].bar = data[3].score * 0.02;
	    });
	    $http.get('/api/teams/bottom_four').success(function(data){
		    $scope.bottomFour = data;
		    $scope.bottomFour[0].bar = data[0].score * 0.02;
		    $scope.bottomFour[1].bar = data[1].score * 0.02;
		    $scope.bottomFour[2].bar = data[2].score * 0.02;
		    $scope.bottomFour[3].bar = data[3].score * 0.02;
	    });

	    $scope.teams = [
	    {
	    	color:'black',
	    	id:1
	    },
	    {
	    	color:'electric',
	    	id:2
	    },
	    {
	    	color:'blue',
	    	id:3
	    },
	    {
	    	color:'grey',
	    	id:4
	    },
	    {
	    	color:'yellow',
	    	id:5
	    },
	    {
	    	color:'orange',
	    	id:6
	    },
	    {
	    	color:'red',
	    	id:7
	    },
	    {
	    	color:'green',
	    	id:8
	    }
	    ];

	    $scope.behaviors = [
	    {
	    	name:'شتيمة',
	    	value:-20
	    },
	    {
	    	name:'ضرب',
	    	value:-70
	    },
	    {
	    	name:'عدم التزام',
	    	value:-100
	    },
	    {
	    	name:'عدم احترام الخدام',
	    	value:-150
	    },
	    {
	    	name:'عدم الهدوء',
	    	value:-50
	    },
	    {
	    	name:'اجابات',
	    	value:50
	    },
	    {
	    	name:'التزام',
	    	value:130
	    },
	    {
	    	name:'نظافة',
	    	value:100
	    },
	    {
	    	name:'هدوء',
	    	value:70
	    },
	    {
	    	name:'روحانية',
	    	value:200
	    }
	    ];

	    $scope.submit = function(){
	    	console.log($scope.selectedTeam);
	    	console.log($scope.selectedBehavior);
	    	console.log($scope.code);
	    }

});