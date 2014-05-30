function UnitForm($scope) {
	$scope.units = [
		{
			number: 100,
			active: true
		},{
			number: 200,
			active: true
		},{
			number: 500,
			active: true
		},{
			number: 750,
			active: true
		},{
			number: 1000,
			active: true
		},{
			number: 2000,
			active: true
		},{
			number: 3000,
			active: true
		},{
			number: 5000,
			active: true
		}
	];
	
	$scope.toggleActive = function(s) {
		s.active = !s.active;
	}
	
	$scope.totalUnit = function() {
		var totalUnit = 0;
		angular.forEach($scope.units, function(s) {
			if(s.active) {
				totalUnit += s.number;
			}
		});
		return totalUnit;
	};
}

function RentForm($scope) {
	$scope.rents = [
		{
			number: 50,
			active: true
		},{
			number: 100,
			active: true
		},{
			number: 150,
			active: true
		},{
			number: 200,
			active: true
		},{
			number: 250,
			active: true
		},{
			number: 350,
			active: true
		},{
			number: 500,
			active: true
		},{
			number: 750,
			active: true
		}
	];
	
	$scope.toggleActive = function(s) {
		s.active = !s.active;
	}
	
	$scope.totalRent = function() {
		var totalRent = 0;
		angular.forEach($scope.rents, function(s) {
			if(s.active) {
				totalRent += s.number;
			}
		});
		return totalRent;
	};
}

function EmployeeForm($scope) {
	$scope.employees = [
		{
			number: 1,
			active: true
		},{
			number: 2,
			active: true
		},{
			number: 3,
			active: true
		},{
			number: 4,
			active: true
		},{
			number: 5,
			active: true
		}
	];
	
	$scope.toggleActive = function(s) {
		s.active = !s.active;
	}
	
	$scope.totalEmployee = function() {
		var totalEmployee = 0;
		angular.forEach($scope.employees, function(s) {
			if(s.active) {
				totalEmployee += s.number;
			}
		});
		return totalEmployee;
	};
}

function TimeSpendForm($scope) {
	$scope.timeSpends = [
		{
			number: 30,
			active: true
		},{
			number: 1,
			active: true
		},{
			number: 2,
			active: true
		},{
			number: 5,
			active: true
		},{
			number: 8,
			active: true
		},{
			number: 10,
			active: true
		},{
			number: 15,
			active: true
		},{
			number: 20,
			active: true
		}
	];

	$scope.toggleActive = function(s) {
		s.active = !s.active;
	}
	
	$scope.totalTime = function() {
		var totalTime = 0;
		angular.forEach($scope.timeSpends, function(s) {
			if(s.active) {
				totalTime += s.number;
			}
		});
		return totalTime;
	};
}

function HourRateForm($scope) {
	$scope.hourRates = [
		{
			number: 8,
			active: true
		},{
			number: 10,
			active: true
		},{
			number: 12,
			active: true
		},{
			number: 15,
			active: true
		},{
			number: 20,
			active: true
		},{
			number: 22,
			active: true
		},{
			number: 25,
			active: true
		},{
			number: 30,
			active: true
		}
	];

	$scope.toggleActive = function(s) {
		s.active = !s.active;
	}
	
	$scope.totalHour = function() {
		var totalHour = 0;
		angular.forEach($scope.hourRates, function(s) {
			if(s.active) {
				totalHour += s.number;
			}
		});
		return totalHour;
	};
}

$("#totalUnit, #totalRent, #totalEmployee, #totalTime, #totalHour, #text-delinquency").bind('keyup keydown mouseup mousedown change', function(){
	var a = $("#totalUnit").val();
	var b = $("#totalRent").val();
	var c = $("#totalEmployee").val();
	var d = $("#totalTime").val();
	var e = $("#totalHour").val();
	var textDelinquency = $("#text-delinquency").val() * 12;
	
	var result = a*b*c*d*e*textDelinquency;
	
	$(".right-container .common-container .common-result #chasing-collection-total").val(result.toFixed(1))
});