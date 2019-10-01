class Router {
  constructor(domSwitchPage, domToggleActive, domMenuLinks) {
    this.domSwitchPage = domSwitchPage;
    this.domToggleActive = domToggleActive;
    this.domMenuLinks = domMenuLinks;
    this.setListeners();
    this.setLoadedPage();
  }

  setLoadedPage() {
    const updateHistory = false;
    const page = window.location.hash ? window.location.hash : 'index';
    console.log(updateHistory);
    this.setPage(page, updateHistory);
  }

  setListeners() {
    const self = this;
    const updateHistory = true;

    window.onhashchange = function() {
      if (window.location.hash) {
        self.setPage(window.location.hash, updateHistory);
      }
    };

    this.domMenuLinks.forEach((dom) => {
      dom.addEventListener('click', (evt) => {
        evt.preventDefault();
        const page = dom.getAttribute('page');
        self.setPage(page, updateHistory);
      });
    });
  }

  // Устанавливает активную страницу и обновляет историю URL
  setPage(page, updateHistory) {
    window.scrollTo(0, 0);
    page = page.replace(/#/, '');
    // DOM, где нужно переключиь аттрибут "page" на новый (.wrapper)
    this.domSwitchPage.forEach((dom) => {
      dom.setAttribute('page', page);
    });
    // DOM, где нужно убрать класс активности, если это НЕ нужная страница и добавить, если нужная
    // (.header__menu_page, .page)
    this.domToggleActive.forEach((dom) => {
      if (dom.getAttribute('page') === page) { // если у DOM аттрибут page равен нужной странице
        if (dom.classList.contains('active') === false) {
          dom.classList.add('active');
        }
      } else if (dom.classList.contains('active')) {
        dom.classList.remove('active');
      }
    });

    console.log(updateHistory);
    if (updateHistory) {
      const baseUrl = location.protocol + '//' + location.host + location.pathname;
      history.pushState(null, null, baseUrl + '#' + page);
    }
  }

  bindLinkToPage(domElements, page) {
    const self = this;
    domElements.forEach((dom) => {
      dom.addEventListener('click', (evt) => {
        evt.preventDefault();
        self.setPage(page, true);
        return false;
      });
    });
  }
}

export default Router;