app.controller("ctrl", ($scope,fac,$window) => {
  $scope.totalRating = 0;

  let promise = fac.fetch();
  promise.then(
    data => {
      $scope.data = data.data;
      console.log("data is",data);
      const a=data.data;
      for (let key of a.topScores) {
        $scope.totalRating += parseFloat(key.score);
      }
      $scope.totalRating = $scope.totalRating / 4;
    },
    error => {
      console.log(error);
    }
  );
  $scope.star = () => {
    return new Array(5);
  };

  const screenWidth = $window.pageYOffset ;
  $scope.$watch('screenWidth', function() {
    if(screenWidth>700);
  });
  

  $scope.options = {
    size: 50,
    
    readOnly: true,
    skin: {
      type: "tron",
      width: 2,
      color: "#388E3C",
      spaceWidth: 3
    },
    barColor: "#388E3C",
    fontSize: "auto",
    dynamicOptions: true,
    trackWidth: 6,
    barWidth: 12,
    textColor: "#494B52",
    step: 0.1,
    max: 5
  };
});
