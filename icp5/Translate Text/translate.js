var app = angular.module("ttApp",['ngSanitize']);

app.controller('ttCtrl', function ($scope, $http) {

    $scope.langList = [];
    // Loading the Supported Languages
    $http.get("https://translate.yandex.net/api/v1.5/tr.json/getLangs?ui=en&key=trnsl.1.1.20180922T180945Z.859e1b66d1926b36.795f9d16b2faf557318a3b0b8cbdba54bbfab110").success(function (data) {
        if(data != null && data.langs != null){
            $scope.langList = data.langs;
        }
    });
    // If Error
    $http.get("https://translate.yandex.net/api/v1.5/tr.json/getLangs?ui=en&key=trnsl.1.1.20180922T180945Z.859e1b66d1926b36.795f9d16b2faf557318a3b0b8cbdba54bbfab110").error(function (data) {
        alert("There was some error processing your request. Please try after some time.");
    });

    $scope.getTranslateText = function () {
        $scope.textOut = "";
        var sourceText = $scope.sourceText;
        var sourceLan = $scope.sourceLan;
        var destLan = $scope.destLan;
        if (sourceText != null && sourceText != "" && sourceLan != null && sourceLan != "") {
            if(destLan == null || destLan == ""){
                destLan = 'en';
            }
            //This is the API that gives the list of venues based on the place and search query.
            var handler = $http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?" +
                "key=trnsl.1.1.20180922T180945Z.859e1b66d1926b36." +
                "795f9d16b2faf557318a3b0b8cbdba54bbfab110&text=" + sourceText + "&" +
                "lang=" + sourceLan + "-" + destLan);
            handler.success(function (data) {
                if (data != null && data.text != null) {
                    $scope.textOut = "<strong>Translated Text : "+ data.text[0]+"</strong>";
                }else{
                    $scope.textOut = "<strong>No Translation Details exist for the Input Details</strong>";
                }
            });
            handler.error(function (data) {
                alert("There was some error processing your request. Please try after some time.");
            });
        }else{
            $scope.textOut = "<strong>Source Text or Source Language cannot be empty</strong>";
        }
    }
});