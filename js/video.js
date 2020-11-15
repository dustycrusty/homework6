var video;
var duration;

var volumeSpan = function() {
	var vol = document.querySelector("#volume");
	vol.innerHTML = String(video.volume * 100) + "%";
	console.log(video.volume);
};

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	var vol = document.querySelector("#volume");
	vol.innerHTML = "";
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volumeSpan();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
	volumeSpan();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9
	console.log("New speed is " + String(video.playbackRate));
	volumeSpan();
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.1
	console.log("New speed is " + String(video.playbackRate));
	volumeSpan();
});


document.querySelector("#skip").addEventListener("click", function() {
	var newPos = video.currentTime;
	if (newPos + 5 > video.duration) {
		newPos = 0;
	}
	else {
		newPos += 5;
	}
	console.log("Current location " + String(newPos));
	video.currentTime = newPos;

	video.play();

	volumeSpan();
});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
	if (this.innerHTML == "Mute"){
		this.innerHTML = "Unmute";
	}
	else {
		this.innerHTML = "Mute";
	}
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	video.volume = this.value / 100;
	volumeSpan();
});

document.querySelector("#old").addEventListener("click", function() {
	video.className = "oldTime";
});

document.querySelector("#original").addEventListener("click", function() {
	video.className = "";
});






