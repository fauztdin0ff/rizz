/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

         __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isWebp": () => (/* binding */ isWebp)
            /* harmony export */
         });
         // проверка поддержки webp, добавление класса webp или no-webp
         function isWebp() {
            //проверка поддержки webp
            function testWebP(callback) {

               var webP = new Image();
               webP.onload = webP.onerror = function () {
                  callback(webP.height == 2);
               };
               webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }

            //добавление класса
            testWebP(function (support) {
               if (support == true) {
                  document.querySelector('body').classList.add('webp');
               } else {
                  document.querySelector('body').classList.add('no-webp');
               }
            });
         }

         /***/
      })
/******/]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
         /******/
      }
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
         /******/
      };
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
      /******/
   }
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
               /******/
            }
            /******/
         }
         /******/
      };
      /******/
   })();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
      /******/
   })();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            /******/
         }
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
         /******/
      };
      /******/
   })();
   /******/
   /************************************************************************/
   var __webpack_exports__ = {};
   // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
   (() => {
      __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


      _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();

      const body = document.querySelector('body');

      //-------------------------------Прелоадер и плавное появление блоков---------------------------------
      if (document.readyState === "complete") {
         init();
      } else {
         window.addEventListener("load", init);
      }
      function init() {
         let preloader = document.querySelector('.preloader');
         if (preloader) {
            setTimeout(() => {
               preloader.style.display = 'none';

               function onEntry(entry) {
                  entry.forEach(change => {
                     if (change.isIntersecting) {
                        change.target.classList.add('element-show');
                     }
                  });
               }

               let options = { threshold: [0.1] };
               let observer = new IntersectionObserver(onEntry, options);
               let elements = document.querySelectorAll('.element-animation');
               for (let elm of elements) {
                  observer.observe(elm);
               }
            }, 800);
         }
      }


      /*------------------------------Открытие панелей хедера---------------------------*/
      document.addEventListener('DOMContentLoaded', function () {
         const catalogButton = document.querySelector('.header__catalog-button');
         const catalogMenu = document.querySelector('.header__catalog-menu');
         const menuIcon = document.querySelector('.header__menu-icon');
         const navigations = document.querySelector('.header__navigations');
         const filterButton = document.querySelector('.header__filter');
         const filterBody = document.querySelector('.header__filter-body');
         const filterTitle = document.querySelector('.header__filter-title');

         // Обработчик для кнопки каталога
         catalogButton.addEventListener('click', function () {
            if (navigations.classList.contains('opened')) {
               navigations.classList.remove('opened');
               menuIcon.classList.remove('active');
            }
            if (filterBody.classList.contains('opened')) {
               filterBody.classList.remove('opened');
               filterButton.classList.remove('active');
            }
            catalogButton.classList.toggle('active');
            catalogMenu.classList.toggle('opened');
            updateBodyClass();
         });

         // Обработчик для кнопки меню
         if (menuIcon && navigations) {
            menuIcon.addEventListener('click', function () {
               if (catalogMenu.classList.contains('opened')) {
                  catalogMenu.classList.remove('opened');
                  catalogButton.classList.remove('active');
               }
               if (filterBody.classList.contains('opened')) {
                  filterBody.classList.remove('opened');
                  filterButton.classList.remove('active');
               }
               navigations.classList.toggle('opened');
               menuIcon.classList.toggle('active');
               updateBodyClass();
            });
         }

         // Обработчик для кнопки фильтра
         if (filterButton && filterBody) {
            filterButton.addEventListener('click', function () {
               if (catalogMenu.classList.contains('opened')) {
                  catalogMenu.classList.remove('opened');
                  catalogButton.classList.remove('active');
               }
               if (navigations.classList.contains('opened')) {
                  navigations.classList.remove('opened');
                  menuIcon.classList.remove('active');
               }
               filterBody.classList.toggle('opened');
               filterButton.classList.toggle('active');
               updateBodyClass();
            });
         }

         if (filterTitle) {
            filterTitle.addEventListener('click', function () {
               filterBody.classList.remove('opened');
               filterButton.classList.remove('active');
               updateBodyClass();
            });
         }

         function updateBodyClass() {
            if (!catalogMenu.classList.contains('opened') &&
               !navigations.classList.contains('opened') &&
               !filterBody.classList.contains('opened')) {
               body.classList.remove('disabled');
            } else {
               body.classList.add('disabled');
            }
         }
      });


      /*------------------------------Header catalog category---------------------------*/
      const categories = document.querySelectorAll('.catalog-menu__category');
      const subcategories = document.querySelectorAll('.catalog-menu__subcategory');
      const backButton = document.querySelector('.catalog-menu__back');
      const subcategoriesContainer = document.querySelector('.catalog-menu__subcategories');
      const categoriesContainer = document.querySelector('.catalog-menu__categories');

      const hideAllSubcategories = () => {
         subcategories.forEach(subcategory => {
            subcategory.classList.remove('opened');
         });
         categories.forEach(category => {
            category.classList.remove('active');
         });
      };
      const showSubcategory = (category) => {
         const categoryNumber = category.getAttribute('data-category');
         const activeSubcategory = document.querySelector(`.catalog-menu__subcategory[data-subcategory="${categoryNumber}"]`);
         if (activeSubcategory) {
            activeSubcategory.classList.add('opened');
         }
         category.classList.add('active');
      };
      categories.forEach(category => {
         category.addEventListener('click', (event) => {
            event.preventDefault();
            hideAllSubcategories();
            showSubcategory(category);
            subcategoriesContainer.classList.remove('closed');
            if (window.innerWidth < 767) {
               categoriesContainer.classList.add('closed');
            }
         });
      });
      if (categories.length > 0 && subcategories.length > 0) {
         if (window.innerWidth >= 767) {
            hideAllSubcategories();
            showSubcategory(categories[0]);
         } else {
            subcategoriesContainer.classList.add('closed');
         }
      }
      if (backButton && subcategoriesContainer) {
         backButton.addEventListener('click', (event) => {
            event.preventDefault();
            subcategoriesContainer.classList.add('closed');
            categoriesContainer.classList.remove('closed');
         });
      }

      /*------------------------------Субменю---------------------------*/
      document.addEventListener('DOMContentLoaded', function () {
         const menuItems = document.querySelectorAll('.menu__list-item');

         if (menuItems.length > 0) {
            menuItems.forEach(item => {
               let timer;

               item.addEventListener('mouseenter', () => {
                  clearTimeout(timer);
                  item.classList.add('menu__item-hover');
               });

               item.addEventListener('mouseleave', (event) => {
                  if (!item.contains(event.relatedTarget)) {
                     timer = setTimeout(() => {
                        item.classList.remove('menu__item-hover');
                     }, 500);
                  }
               });

               const sublist = item.querySelector('.menu__sublist');
               if (sublist) {
                  sublist.addEventListener('mouseenter', () => {
                     clearTimeout(timer);
                  });

                  sublist.addEventListener('mouseleave', (event) => {
                     if (!item.contains(event.relatedTarget)) {
                        timer = setTimeout(() => {
                           item.classList.remove('menu__item-hover');
                        }, 200);
                     }
                  });
               }
            });
         }
      });


      /*------------------------------Слайдер Тегов---------------------------*/
      document.addEventListener('DOMContentLoaded', function () {
         const swiperContainer = document.querySelector('.header__tags-slider');
         if (!swiperContainer) return;

         let swiperInstance = null;
         function initSwiper() {
            if (window.innerWidth <= 1200) {
               if (!swiperInstance) {
                  swiperInstance = new Swiper(swiperContainer, {
                     slidesPerView: 'auto',
                     initialSlide: 0,
                     watchOverflow: true,
                     spaceBetween: 24,
                     loop: false,
                  });
               }
            } else {
               if (swiperInstance) {
                  swiperInstance.destroy(true, true);
                  swiperInstance = null;
               }
            }
         }
         initSwiper();
         window.addEventListener('resize', initSwiper);
      });


      /*------------------------------Кастомный Dropdown---------------------------*/
      document.addEventListener('DOMContentLoaded', function () {
         if (window.NodeList && !NodeList.prototype.forEach) {
            NodeList.prototype.forEach = function (callback, thisArg) {
               thisArg = thisArg || window;
               for (var i = 0; i < this.length; i++) {
                  callback.call(thisArg, this[i], i, this);
               }
            };
         }
         document.querySelectorAll('.s-dropdown').forEach(function (dropDownWrapper) {
            const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
            const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
            const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
            const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');
            dropDownBtn.addEventListener('click', function (e) {
               dropDownList.classList.toggle('dropdown__list--visible');
               this.classList.toggle('dropdown__button--active');
            });
            dropDownListItems.forEach(function (listItem) {
               listItem.addEventListener('click', function (e) {
                  e.stopPropagation();
                  dropDownBtn.innerText = this.innerText;
                  dropDownBtn.focus();
                  dropDownInput.value = this.dataset.value;
                  dropDownList.classList.remove('dropdown__list--visible');
                  dropDownBtn.classList.remove('dropdown__button--active');
               });
            });

            document.addEventListener('click', function (e) {
               const isDropdownClick = dropDownWrapper.contains(e.target);
               const isDropdownListClick = dropDownList.contains(e.target);
               if (!isDropdownClick && !isDropdownListClick) {
                  dropDownBtn.classList.remove('dropdown__button--active');
                  dropDownList.classList.remove('dropdown__list--visible');
               }
            });
         });
      });

      /*------------------------------Range---------------------------*/
      var slider = document.getElementById('price-range');
      var inputMin = document.getElementById('input-min');
      var inputMax = document.getElementById('input-max');

      if (slider && inputMin && inputMax) {
         noUiSlider.create(slider, {
            start: [0, 150000],
            connect: true,
            range: {
               'min': 0,
               'max': 150000
            },
            step: 100
         });

         // Добавление ARIA атрибутов
         var handles = slider.getElementsByClassName('noUi-handle');
         handles[0].setAttribute('aria-label', 'Minimum price');
         handles[1].setAttribute('aria-label', 'Maximum price');

         slider.noUiSlider.on('update', function (values, handle) {
            var value = values[handle];
            if (handle === 0) {
               inputMin.value = formatNumber(Math.round(value));
            } else {
               inputMax.value = formatNumber(Math.round(value));
            }
         });

         function formatNumber(number) {
            return number.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
         }

         inputMin.addEventListener('change', function () {
            if (this.value && inputMax.value) {
               slider.noUiSlider.set([this.value, null]);
            }
         });

         inputMax.addEventListener('change', function () {
            if (this.value && inputMin.value) {
               slider.noUiSlider.set([null, this.value]);
            }
         });
      }


      /*--------------------------Лейбл в инпуте-------------------------------*/
      document.addEventListener('DOMContentLoaded', function () {
         const input = document.querySelector('.input-with-label');
         const filterCity = document.querySelector('.header__filter-city');
         if (input && filterCity) {
            input.addEventListener('focus', function () {
               filterCity.classList.add('actived');
            });
            input.addEventListener('blur', function () {
               if (input.value.trim() === '') {
                  filterCity.classList.remove('actived');
               }
            });
         }
      });

      /*------------------------------Footer аккордион---------------------------*/
      document.addEventListener('DOMContentLoaded', function () {
         if (window.innerWidth <= 551) {
            const menuTitles = document.querySelectorAll('.footer__menu-title');

            if (menuTitles.length > 0) {
               menuTitles.forEach(title => {
                  title.addEventListener('click', function () {
                     menuTitles.forEach(item => {
                        if (item !== title) {
                           item.classList.remove('active');
                           item.nextElementSibling.classList.remove('opened');
                        }
                     });
                     title.classList.toggle('active');
                     title.nextElementSibling.classList.toggle('opened');
                  });
               });
            }
         }
      });


      /*------------------------------Слайдеры товаров на главной---------------------------*/
      function toggleSlider() {
         const sliderContainers = document.querySelectorAll('.cat-block__content .swiper');
         if (window.innerWidth < 550) {
            sliderContainers.forEach(slider => {
               if (slider.swiper) {
                  slider.swiper.destroy(true, true);
               }
               slider.classList.remove('swiper');
               const wrapper = slider.querySelector('.swiper-wrapper');
               if (wrapper) {
                  wrapper.classList.remove('swiper-wrapper');
                  const slides = wrapper.querySelectorAll('.swiper-slide');
                  slides.forEach(slide => {
                     slide.classList.remove('swiper-slide');
                  });
               }
            });
         } else {
            sliderContainers.forEach(slider => {
               if (!slider.swiper) {
                  const newSwiper = new Swiper(slider, {
                     loop: false,
                     navigation: {
                        nextEl: '.cat-block-slider-next',
                        prevEl: '.cat-block-slider-prev',
                     },
                     spaceBetween: 20,
                     breakpoints: {
                        320: {
                           slidesPerView: 2,
                        },
                        740: {
                           slidesPerView: 3,
                        },
                        992: {
                           slidesPerView: 4,
                        }
                     },
                  });
               }
            });
         }
      }
      toggleSlider();
      window.addEventListener('resize', toggleSlider);

      /*------------------------------Показать больше товаров на мобильной версии---------------------------*/
      document.addEventListener('DOMContentLoaded', function () {
         const buttons = document.querySelectorAll('.show-more-products');

         buttons.forEach(button => {
            button.addEventListener('click', function () {
               const parentSection = button.closest('.cat-block');
               const sliderWrapper = parentSection.querySelector('.cat-block__slider-wrapper');

               if (window.innerWidth < 550) {
                  sliderWrapper.classList.add('all-opened');
               }
            });
         });
      });

      /*------------------------------Вид списка товаров в каталоге---------------------------*/
      document.addEventListener('DOMContentLoaded', function () {
         const viewMozaikButton = document.querySelector('.catalog__view-mozaik');
         const viewGridButton = document.querySelector('.catalog__view-grid');
         const catalogProducts = document.querySelector('.catalog__products');

         if (viewMozaikButton && viewGridButton && catalogProducts) {
            viewMozaikButton.addEventListener('click', function () {
               catalogProducts.classList.add('view-rows');
               viewMozaikButton.classList.add('active');
               viewGridButton.classList.remove('active');
            });

            viewGridButton.addEventListener('click', function () {
               catalogProducts.classList.remove('view-rows');
               viewGridButton.classList.add('active');
               viewMozaikButton.classList.remove('active');
            });
         }
      });

      /*--------------------Перенос фильтров на странице каталога за пределы main для корректного отображения-----------------*/
      function moveMoviedFilters() {
         const moviedFilters = document.querySelector('.movied-filters');
         const main = document.querySelector('main');

         if (moviedFilters && main) {
            if (window.innerWidth < 1200) {
               if (!moviedFilters.parentElement.isSameNode(main.parentNode)) {
                  main.parentNode.insertBefore(moviedFilters, main.nextSibling);
               }
            } else {
               if (moviedFilters.parentElement.isSameNode(main.parentNode)) {
                  main.appendChild(moviedFilters);
               }
            }
         }
      }

      window.addEventListener('resize', moveMoviedFilters);
      window.addEventListener('load', moveMoviedFilters);


      /*------------------------------слайдер галерея товара---------------------------*/
      var swiper = new Swiper(".product-card__slider-thumb", {
         loop: false,
         spaceBetween: 10,
         freeMode: true,
         watchSlidesProgress: true,
         breakpoints: {
            320: {
               direction: 'horizontal',
               slidesPerView: 4,

            },
            600: {
               direction: 'vertical',
               slidesPerView: 4,

            }
         },
      });
      var swiper2 = new Swiper(".product-card__slider", {
         loop: false,
         spaceBetween: 0,
         slidesPerView: 1,
         thumbs: {
            swiper: swiper,
         },

         navigation: {
            nextEl: ".product-card__slider-next",
            prevEl: ".product-card__slider-prev",
         },
         breakpoints: {
            320: {
               direction: 'horizontal',
            },
            600: {
               direction: 'vertical',
            }
         },
      });


      /*------------------------------Открытие "Поделиться"---------------------------*/
      const shareOpenButton = document.querySelector('.product-card__share-open');
      const shareBlock = document.querySelector('.share-block');

      if (shareOpenButton && shareBlock) {
         function toggleShareBlock() {
            shareBlock.classList.toggle('opened');
            shareOpenButton.classList.toggle('active');
         }

         shareOpenButton.addEventListener('click', function (event) {
            event.stopPropagation();
            toggleShareBlock();
         });

         document.addEventListener('click', function (event) {
            if (!shareBlock.contains(event.target) && !shareOpenButton.contains(event.target)) {
               shareBlock.classList.remove('opened');
               shareOpenButton.classList.remove('active');
            }
         });
      }
      /*-------------------------------Кнопка копирования текста--------------------------*/
      const buttonToCopy = document.getElementById('button-to-copy');
      const textToCopy = document.getElementById('text-to-copy');

      if (buttonToCopy && textToCopy) {
         buttonToCopy.addEventListener('click', function () {
            const tempInput = document.createElement('input');
            tempInput.style.position = 'absolute';
            tempInput.style.left = '-9999px';
            document.body.appendChild(tempInput);
            tempInput.value = textToCopy.value;

            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);

            buttonToCopy.classList.add('success');

            setTimeout(function () {
               buttonToCopy.classList.remove('success');
            }, 3000);
         });
      }

      /*------------------------------Табы в профиле---------------------------*/
      document.addEventListener('DOMContentLoaded', function () {
         const tabsContainer = document.querySelector('.profile__tabs');
         const contentsContainer = document.querySelector('.profile__contents');

         if (tabsContainer && contentsContainer) {
            const tabs = tabsContainer.querySelectorAll('.profile__tab');
            const contents = contentsContainer.querySelectorAll('.profile__tab-content');

            if (tabs.length > 0 && contents.length > 0) {
               function activateTab(tabIndex) {
                  tabs.forEach(tab => tab.classList.remove('active'));
                  contents.forEach(content => content.classList.remove('active'));

                  tabs[tabIndex].classList.add('active');
                  contents[tabIndex].classList.add('active');
               }

               activateTab(0);

               tabs.forEach((tab, index) => {
                  tab.addEventListener('click', () => activateTab(index));
               });
            }
         }
      });


      document.addEventListener('DOMContentLoaded', function () {
         if (window.innerWidth > 768) {
            const links = document.querySelectorAll('.menu__link');

            function handlePointerDown(e) {
               if (e.pointerType !== 'mouse') {
                  links.forEach(function (link) {
                     link.addEventListener('click', function (e) {
                        e.preventDefault();
                     });
                  });
               }
            }

            document.addEventListener('pointerdown', handlePointerDown, { once: true });
         }
      });




   })();

   /******/
})()
   ;