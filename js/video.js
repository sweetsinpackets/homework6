var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

// play
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// pause
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// slow down
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("New speed is " + video.playbackRate);
});

// speed up
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("New speed is " + video.playbackRate);
});

// skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	let skiptime = video.currentTime + 5;
	if (skiptime > video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime = skiptime;
	}
	console.log("Current location " + video.currentTime);
	video.play();
});

// mute
document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted) {
		document.querySelector("#mute").innerHTML = "Mute";
		video.muted = false;
	}
	else {
		document.querySelector("#mute").innerHTML = "Unmute";
		video.muted = true;
	}
});

// change volumn
document.querySelector("#volumeSlider").addEventListener("change", function() {
	video.volume = document.querySelector("#volumeSlider").value / 100;
	document.querySelector("#volume").innerHTML = document.querySelector("#volumeSlider").value + "%";
	console.log(video.volume);
});

// old school
document.querySelector("#old").addEventListener("click", function() {
	video.classList.add("oldTime");
});

// original
document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove("oldTime");
});