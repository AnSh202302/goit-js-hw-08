import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_CURRENT_TIME = 'videoplayer-current-time';

const onPlay = function (currentTime) {
  localStorage.setItem(KEY_CURRENT_TIME, currentTime.seconds);
};
player.on('timeupdate', throttle(onPlay, 1000));

const localStorageTime = Number(localStorage.getItem(KEY_CURRENT_TIME)) ?? [];
player.setCurrentTime(localStorageTime).then(function (seconds) {});
