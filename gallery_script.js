const imageGallery = [
    "https://i.makeagif.com/media/6-04-2024/1CyJIk.gif",
    "https://64.media.tumblr.com/e2a4b9f40e4d8fb0f368542f5b92ba5b/00c0c3ed095259c9-0d/s540x810/c6a3455bfe36e3b7997b02527ff402a05a4ab1ff.gif",
    "https://i.makeagif.com/media/8-10-2022/7QfdCA.gif",
    "https://media.tenor.com/OIC4kmbON74AAAAM/stray-kids-skz-ceremony.gif",
    "https://media4.giphy.com/media/v1.Y2lkPWFlZWNjYzExZ21iaHoyZTZ0dWFrYWE2MGYwbTlvZmIzcmZnYzBtcmJhNXYwNmRzYiZlcD12MV9naWZzX2dpZklkJmN0PWc/tfTpXbC7HksCCsVErx/200.gif",
    "https://i.makeagif.com/media/11-27-2025/UAasRH.gif"
];

const imageElement = document.getElementById('gallery-image');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

let currentImageIndex = 0;

function updateImage() {
    imageElement.src = imageGallery[currentImageIndex];
}

updateImage();

nextButton.addEventListener('click', function() {
currentImageIndex = (currentImageIndex + 1) % imageGallery.length;
updateImage();
});

prevButton.addEventListener('click', function() {
currentImageIndex = (currentImageIndex + 1) % imageGallery.length;
updateImage();
});