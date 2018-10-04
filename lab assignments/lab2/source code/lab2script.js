angular.module('lab2App', ['ngSanitize'])
    .controller('lab2Controller', function($scope, $http, $location) {

        $scope.getYouTubeDetails = function() {
            // Hiding all errors first
            $scope.errorText = "";

            // Fetching the Text
            var youTubeText = $scope.youtubeText;

            // Making Sure Input Text is Not empty
            if (youTubeText == null || $.trim(youTubeText) == ''){
                // Throw error
                $scope.errorText = "Input Text should not be empty !!";
                // Stop flow
                return false;
            }
            $scope.youTubeVideos = [];
            $http.get('https://www.googleapis.com/youtube/v3/search?q='+youTubeText+'&part=snippet&type=video&key=AIzaSyADWswW8i5Ei0P1jzUpauMCNiEDR6U3hMU').success(function (data) {
                $scope.youTubeVideos = data.items;
                // If No Videos from API
                if($scope.youTubeVideos.length < 1){
                    // Throw Error
                    $scope.errorText = "No YouTube search records found for the input text : "+youTubeText;
                    // Stop flow
                    return false;
                }
            })
        }



    });