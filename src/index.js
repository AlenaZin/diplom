import './main.css';
import Router from './js/Router';
import Analytic from './js/Analytic';

// инициализация Роутера и начальной страницы
const router = new Router(
  document.querySelectorAll('.wrapper'),
  document.querySelectorAll('.header__menu_page, .page'),
  document.querySelectorAll('.header__menu_page'),
);
router.bindLinkToPage(document.querySelectorAll('.to-analitic'), 'analytic');
router.bindLinkToPage(document.querySelectorAll('.to-index'), 'index');
router.bindLinkToPage(document.querySelectorAll('.to-about'), 'about');

// тесты аналитики
const analytic = new Analytic('август');
analytic.initCharts();
analytic.calcChartsWidth();

console.log(analytic);
