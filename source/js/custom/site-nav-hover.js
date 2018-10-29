'use strict';

(function () {
  var siteNavSubMenuList = document.querySelectorAll('.site-nav-list__item');

  var followForSubMenuStates = function (subMenuLinksList, siteNavSubMenuTargetElem, state) {
    for (var i = 0; i < subMenuLinksList.length; i++) {
      subMenuLinksList[i].addEventListener(state, function (evt) {
        evt.preventDefault();

        if (state === 'focus') {
          siteNavSubMenuTargetElem.classList.add('.sub-menu--open');
        }

        if (state === 'blur') {
          siteNavSubMenuTargetElem.classList.remove('.sub-menu--open');
        }
      });
    }
  };

  var addSiteNavHoverState = function () {
    console.log(siteNavSubMenuList);

    for (var i = 0; i < siteNavSubMenuList.length; i++) {
      var siteNavSubMenuTargetElem = siteNavSubMenuList[i];
      var subMenuLinksList = siteNavSubMenuList[i].querySelectorAll('.sub-menu__link');

      followForSubMenuStates(subMenuLinksList, siteNavSubMenuTargetElem, 'focus');
      followForSubMenuStates(subMenuLinksList, siteNavSubMenuTargetElem, 'blur');
    }
  };

  addSiteNavHoverState();
})();
