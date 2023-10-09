import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const playerTiming = 'player_current_time';
const onPlay = function (data) {
  localStorage.setItem(playerTiming, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = Number(localStorage.getItem('player_current_time'));

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
  player.setColors(['#e3d8d8', '#e84898', '#2f7a0f', '456']).then(function(color) {
    // colors were successfully set
    // Array order: [primary, accent, text/icon, background]
}).catch(function(error) {
    switch (error.name) {

        case 'TypeError':
            // the string was not a valid hex or rgb color
            break;

        case 'EmbedSettingsError':
            // the owner of the video has chosen to use a specific color
            break;

        default:
            // some other error occurred
            break;
    }
});
  