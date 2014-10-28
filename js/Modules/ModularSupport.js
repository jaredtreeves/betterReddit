function HandleAngularError(Exception, AppName){
    try {
       var appName = (window._.isEmpty(AppName) ? "Angular App Unspecified" : AppName) + " - ";

        if (window._.isUndefined(pException)) {
            console.log(appName + "error: exception undefined", "AngularJs");
        } else {
            console.log(appName + "error: " + Exception.toString() + " " + JSON.stringify(Exception), "AngularJs");
        }
    } catch (e) {
        alert("Handle Angular Error: " + Exception.toString() + " " + JSON.stringify(Exception));
    }
}

function SetUrlSanitizationWhitelist($compileProvider){
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
}
