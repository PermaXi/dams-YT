const video = document.querySelector(".video-box video");
const image = document.querySelector(".video-box .image");

video.addEventListener("mouseenter", () => {
    video.play();
    image.classList.remove("active");
});
video.addEventListener("mouseleave", () => {
    video.pause();
    image.classList.add("active");
});