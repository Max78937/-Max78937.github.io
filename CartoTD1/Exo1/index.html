<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>TD1</title>
</head>

<body>
    <h4> TD1 </h4>


    <script>
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        function success(pos) {
            var crd = pos.coords;

            var today = new Date();
            //var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            var timestamp = Date.now()
            var date = new Date(timestamp)

            var vitesse = pos.speed


            console.log('Votre position actuelle est :');
            console.log(`Latitude : ${crd.latitude}`);
            console.log(`Longitude : ${crd.longitude}`);
            console.log(`La précision est de ${crd.accuracy} mètres.`);

            document.getElementById("lat").innerHTML = `Latitude : ${crd.latitude}`;
            document.getElementById("lon").innerHTML = `Longitude : ${crd.longitude}`;
            document.getElementById("vit").innerHTML = `Vitesse : ${vitesse}`;
            document.getElementById("tim").innerHTML = `Date : ${date}`;
        }

        function error(err) {
            console.warn(`ERREUR (${err.code}): ${err.message}`);
        }


        navigator.geolocation.getCurrentPosition(success, error, options);

        ////////////////////////////////////////////////////////////////////
        function handleMotionEvent(event) {

            var x = event.accelerationIncludingGravity.x;
            var y = event.accelerationIncludingGravity.y;
            var z = event.accelerationIncludingGravity.z;

            document.getElementById("acx").innerHTML = `Accélération x : ${x}`;
            document.getElementById("acy").innerHTML = `Accélération y : ${y}`;
            document.getElementById("acz").innerHTML = `Accélération z : ${z}`;
            // Faire quelque chose de génial.



        }

        window.addEventListener("devicemotion", handleMotionEvent, true);



        if (window.DeviceOrientationEvent) {
            window.addEventListener("deviceorientation", function (event) {
                // alpha : rotation autour de l'axe z
                var rotateDegrees = event.alpha;
                // gamma : de gauche à droite
                var leftToRight = event.gamma;
                // bêta : mouvement avant-arrière
                var frontToBack = event.beta;

                handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
            }, true);
        }

        var handleOrientationEvent = function (frontToBack, leftToRight, rotateDegrees) {
            document.getElementById("orx").innerHTML = `Orientation x : ${rotateDegrees}`;
            document.getElementById("ory").innerHTML = `Orientation y : ${leftToRight}`;
            document.getElementById("orz").innerHTML = `Orientation z : ${frontToBack}`;
        };

        function printMousePos(event) {
            var clicx = event.clientX;
            var clicy = event.clientY;
            document.getElementById("posx").innerHTML = `Position x : ${clicx}`;
            document.getElementById("posy").innerHTML = `Position y : ${clicy}`;
        }

        document.addEventListener("click", printMousePos);

    </script>

    <h2 id="lat"></h2>
    <h2 id="lon"></h2>
    <h2 id="vit"></h2>
    <h2 id="tim"></h2>
    <br>
    <h2 id="acx"></h2>
    <h2 id="acy"></h2>
    <h2 id="acz"></h2>
    <br>
    <h2 id="orx"></h2>
    <h2 id="ory"></h2>
    <h2 id="orz"></h2>
    <br>
    <h2 id="posx"></h2>
    <h2 id="posy"></h2>
</body>

</html>