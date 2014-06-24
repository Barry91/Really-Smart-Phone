window.onload = function () {

    // Read value from storage, or empty array
    var names = JSON.parse(localStorage.getItem('locname') || "[]");
    var lat   = JSON.parse(localStorage.getItem('latitude') || "[]");
    var long  = JSON.parse(localStorage.getItem('longitude') || "[]");

    function initCoords() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(saveData, onError, options);
            console.log('This works');
        } else {
            showError("Your browser does not support Geolocation!");
        }
    }

    function saveData(position) {
        var data = document.getElementById("locationName").value;
        names.push(data);
        localStorage.setItem('locname', JSON.stringify(names));

        var latitude = position.coords.latitude;
        lat.push(latitude);
        localStorage.setItem('latitude', JSON.stringify(lat));

        var longitude = position.coords.longitude;
        long.push(longitude);
        localStorage.setItem('longitude', JSON.stringify(long));
        console.log(lat, long, names)

        alert('Your location is saved!');
        window.location.replace("list.html");
    }
    
    //Options object
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    //Error handling
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
    }

    document.getElementById('saveData').onclick = initCoords;
}
