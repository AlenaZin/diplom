import './css/main.scss';

import '../../images/background.png';
import '../../images/loader.gif';
import '../../images/arrow_right.svg';
import '../../images/avatar.jpg';
import '../../images/css.png';
import '../../images/favicon.png';
import '../../images/git_avatar.png';
import '../../images/html.png';
import '../../images/image.png';
import '../../images/js.png';
import '../../images/not-found.png';
import '../../images/slider-left.png';
import '../../images/slider-right.png';
import '../../images/social_facebook.svg';
import '../../images/social_github.svg';
import '../../images/webpack.png';

import Analytic from './js/Analytic';

console.log('analytic.js');

// тесты аналитики
const analytic = new Analytic('август');
analytic.initCharts();
analytic.calcChartsWidth();
console.log(analytic);
