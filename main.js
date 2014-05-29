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
	
	$scope.rentTotal = function() {
		var rentTotal = 0;
		angular.forEach($scope.units, function(s) {
			if(s.active) {
				rentTotal += s.number;
			}
		});
		return rentTotal;
	}
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
}