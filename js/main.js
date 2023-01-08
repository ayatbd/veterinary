
var videoPlayer = document.getElementById("videoPlayer");
        var myVideo = document.getElementById("myVideo");

        function playVideo(file) {
            myVideo.src = file;
            videoPlayer.style.display = "block";
        }

        function stopVideo(){
            videoPlayer.style.display = "none";

        }





var playerVideo = document.getElementById("playerVideo");
        var ourVideo = document.getElementById("ourVideo");

        function playOfVideo(file) {
            ourVideo.src = file;
            playerVideo.style.display = "block";
        }

        function stopOfVideo(){
            playerVideo.style.display = "none";

        }

        function openNav() {
            document.getElementById("myNav").style.width = "100%";
        }

        function closeNav() {
            document.getElementById("myNav").style.width = "0%";
        }
