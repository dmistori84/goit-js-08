import throttle from 'lodash.throttle';

const iframeRef = document.querySelector('iframe');
const player = new Vimeo.Player(iframeRef);

player.on('timeupdate', throttle(onPlayVideo, 1000));
    
function onPlayVideo(data) {
    let timeCurrent = Math.round(data.seconds);
    localStorage.setItem('videoplayer-current-time', timeCurrent);
};

player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});









