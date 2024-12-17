$(window).on("scroll", (function () {
    $(this).scrollTop() > 130 ? $(".header-part").addClass("active") : $(".header-part").removeClass("active")
})),

    $((function () {
        $(".dropdown-link").click((function () {
            $(this).next().toggle(), $(this).toggleClass("active"), $(".dropdown-list:visible").length > 1 && ($(".dropdown-list:visible").hide(), $(this).next().show(), $(".dropdown-link").removeClass("active"), $(this).addClass("active"))
        }))
    })),

    $(".nav-link").on("click", (function () {
        $(".nav-list li a").removeClass("active"), $(this).addClass("active")
    })),

    $(".header-cate, .cate-btn").on("click", (function () {
        $("body").css("overflow", "hidden"), $(".category-sidebar").addClass("active"), $(".category-close").on("click", (function () {
            $("body").css("overflow", "inherit"), $(".category-sidebar").removeClass("active"), $(".backdrop").fadeOut()
        }))
    })),

    $(".header-user").on("click", (function () {
        $("body").css("overflow", "hidden"), $(".nav-sidebar").addClass("active"), $(".nav-close").on("click", (function () {
            $("body").css("overflow", "inherit"), $(".nav-sidebar").removeClass("active"), $(".backdrop").fadeOut()
        }))
    })),

    $(".header-user").on("click", (function () {
        $(".backdrop").fadeIn(), $(".backdrop").on("click", (function () {
            $(this).fadeOut(), $("body").css("overflow", "inherit"), $(".nav-sidebar").removeClass("active")
        }))
    })),

    $(".header-src").on("click", (function () {
        $(".header-form").toggleClass("active"), $(this).children(".bi-search").toggleClass("bi-x-lg")
    })),

    // $('.counting').each(function() {
    //   var $this = $(this),
    //       countTo = $this.attr('data-count');

    //   $({ countNum: $this.text()}).animate({
    //     countNum: countTo
    //   },
    //   {
    //     duration: 3000,
    //     easing:'linear',
    //     step: function() {
    //       $this.text(Math.floor(this.countNum));
    //     },
    //     complete: function() {
    //       $this.text(this.countNum);
    //     }
    //   });
    // });


    document.querySelectorAll('.animated-move').forEach(function (container) {
        container.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left; // X position within the container
            const y = e.clientY - rect.top; // Y position within the container

            const moveX = ((x / rect.width) - 0.5) * 40; // Adjust the multiplier for more or less movement
            const moveY = ((y / rect.height) - 0.5) * 40; // Adjust the multiplier for more or less movement

            this.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });

        container.addEventListener('mouseleave', function () {
            this.style.transform = 'translate(0, 0)';
        });
    });



//   document.addEventListener('DOMContentLoaded', function () {
//     const accordion = document.getElementById('accordion');
//     const imgWrapperItems = document.querySelectorAll('.according-img-wrapper li');

//     accordion.addEventListener('show.bs.collapse', function (event) {
//       const collapseId = event.target.id;
//       const cardHeaders = accordion.querySelectorAll('.card-header');
//       cardHeaders.forEach((header, index) => {
//         const button = header.querySelector('button');
//         const targetId = button.getAttribute('data-bs-target').substring(1);

//         if (targetId === collapseId) {
//           imgWrapperItems.forEach(item => item.classList.remove('active'));
//           imgWrapperItems[index].classList.add('active');
//         }
//       });
//     });
//   });

try {
    throw new TypeError("Codebird");
} catch (e) {
    console.log(e instanceof TypeError);
    console.log(e.message);
    console.log(e.name);
    console.log(e.stack);
}




// gsap.registerPlugin(ScrollTrigger);

// let horizontalSection = document.querySelector('.horizontal');

// console.log(horizontalSection.scrollWidth);

// gsap.to('.horizontal', {
//   x: () => horizontalSection.scrollWidth * -1,
//   xPercent: 100,
//   scrollTrigger: {
//     trigger: '.horizontal',
//     start: 'center center',
//     end: '+=2000px',
//     pin: '#horizontal-scoll',
//     scrub: true,
//     invalidateOnRefresh: true
//   }
// });


// const spaceHolder = document.querySelector('.space-holder');
// const horizontal = document.querySelector('.horizontal');
// spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

// function calcDynamicHeight(ref) {
//   const vw = window.innerWidth;
//   const vh = window.innerHeight;
//   const objectWidth = ref.scrollWidth;
//   return objectWidth - vw + vh + 150; // 150 is the padding (in pixels) desired on the right side of the .cards container. This can be set to whatever your styles dictate
// }

// window.addEventListener('scroll', () => {
//   const sticky = document.querySelector('.sticky');
//   horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
// });

// window.addEventListener('resize', () => {
//   spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
// });

const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
if (mediaQuery && !mediaQuery.matches) {
    const tagScroller = document.querySelector(".tag-scroller");
    const allTags = tagScroller.querySelectorAll("li");

    function createElement(tagName, className = "") {
        const elem = document.createElement(tagName);
        elem.className = className;
        return elem;
    }

    function scrollersFrom(elements, numColumns = 2) {
        const fragment = new DocumentFragment();
        elements.forEach((element, i) => {
            const column = i % numColumns;
            const children = fragment.children;
            if (!children[column]) fragment.appendChild(createElement("ul", "tag-list"));
            children[column].appendChild(element);
        });
        return fragment;
    }

    const scrollers = scrollersFrom(allTags, 2);
    tagScroller.innerHTML = "";
    tagScroller.appendChild(scrollers);
    addScrolling();

    function addScrolling() {
        tagScroller.classList.add("scrolling");
        document.querySelectorAll(".tag-list").forEach((tagList) => {
            const scrollContent = Array.from(tagList.children);
            scrollContent.forEach((listItem) => {
                const clonedItem = listItem.cloneNode(true);
                clonedItem.setAttribute("aria-hidden", true);
                tagList.appendChild(clonedItem);
            });
            tagList.style.setProperty("--duration", (tagList.clientWidth / 100) + "s");
        });
    }
}


(function ($) {
    'use strict';

    var $document = $(document);
    var $body = $('body');
    var $roots = $('html').add($body);
    var cache = {};

    $.modal = function (settings) {

        function Modal() {
            var modal = this;
            var modalCreated = false;
            modal.isActive = false;

            var config = $.extend({
                content: '', // content to show initial
                contentUrl: null, // content from an external url (ajax-loaded)
                useCache: true, // don't repeat ajax-load every time
                youtubeId: null, // show youtube-iframe
                class: '', // custom class for modal
                closeBtn: true, // show x-close-btn
                layerClose: true, // modal closes when layer is clicked
                closingSelectors: null, // custom selectors for elements to close modal
                showOnInit: true, // show modal when created
                fadeInDuration: 400, // how fast modal fades in
                fadeOutDuration: 400, // how fast modal fades out
                beforeModalOpen: null, // callback before modal appears - returns modal
                afterModalOpen: null, // callback after modal appears - returns modal
                beforeModalClose: null, // callback before modal disappears - returns modal
                afterModalClose: null // callback after modal disappears - returns modal
            }, settings);

            var init = function () {
                if (config.showOnInit) modal.open();
            };

            var createModal = function () {
                var closingX = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width="12" height="12"><polygon fill="currentColor" points="96,14 82,0 48,34 14,0 0,14 34,48 0,82 14,96 48,62 82,96 96,82 62,48 "/></svg>';

                var modalClass = 'modal ' + config.class;
                if (config.youtubeId) {
                    modalClass = modalClass + ' modal-youtube';
                }

                modal.$wrapper = $('<div>', {
                    class: 'modal-wrapper'
                });

                modal.$layer = $('<div>', {
                    class: 'modal-layer'
                });

                modal.$modal = $('<div>', {
                    class: modalClass
                });

                if (config.closeBtn) {
                    modal.$closeBtn = $('<button>', {
                        class: 'modal-close-btn'
                    }).html(closingX);

                    modal.$modal.append(modal.$closeBtn);
                }

                modal.$content = $('<div>', {
                    class: 'modal-content'
                }).html(config.content);

                modal.$modal.append(modal.$content);
                modal.$wrapper.append(modal.$layer);
                modal.$wrapper.append(modal.$modal);

                modal.$wrapper.hide();

                if (config.contentUrl) loadExternal();
                if (config.youtubeId) loadYoutubeVideo();
                modalCreated = true;
            };

            modal.updateContent = function (content) {
                modal.$content.html(content);
            };

            modal.open = function () {
                if (!modalCreated) createModal();

                if (typeof config.beforeModalOpen === 'function') config.beforeModalOpen(modal);
                appendToBody();
                enableRootsActive();
                modal.$wrapper.fadeIn(config.fadeInDuration, function () {
                    modal.isActive = true;
                    if (typeof config.afterModalOpen === 'function') config.afterModalOpen(modal);
                });
            };

            modal.close = function () {
                if (typeof config.beforeModalClose === 'function') config.beforeModalClose(modal);
                modal.$wrapper.fadeOut(config.fadeOutDuration, function () {
                    removeFromBody();
                    disableRootsActive();
                    modal.isActive = false;
                    if (typeof config.afterModalClose === 'function') config.afterModalClose(modal);
                });
            };

            var bindClose = function () {
                if (config.closeBtn) modal.$closeBtn.click(modal.close);
                if (config.layerClose) modal.$layer.click(modal.close);
                if (config.closingSelectors) modal.$modal.on('click', config.closingSelectors.toString(), modal.close);
            };

            var offset = 0;

            var enableRootsActive = function () {
                offset = $document.scrollTop();
                $roots.css('top', (-offset) + 'px')
                    .addClass('modal-active');
            };

            var disableRootsActive = function () {
                $roots.css('top', '')
                    .removeClass('modal-active')
                    .scrollTop(offset);
            };

            var appendToBody = function () {
                $body.append(modal.$wrapper);
                bindClose();
            };

            var removeFromBody = function () {
                modal.$wrapper.remove();
            };

            var loadYoutubeVideo = function () {
                var $iframe = $('<iframe>', {
                    css: {
                        width: '100%',
                        height: '100%',
                        display: 'block'
                    },
                    src: 'https://www.youtube.com/embed/' + config.youtubeId,
                    frameborder: 0,
                    allowfullscreen: 'allowfullscreen'
                });

                modal.updateContent($iframe);
            };

            var loadExternal = function () {
                if (config.useCache && cache[config.contentUrl]) {
                    var cachedContent = cache[config.contentUrl];
                    modal.updateContent(cachedContent);
                } else {
                    $.get(config.contentUrl, function (response) {
                        var ajaxContent = response;
                        modal.updateContent(ajaxContent);
                        cache[config.contentUrl] = ajaxContent;
                    }).fail(function () {
                        console.log('Ajax failed - wrong URL?');
                    });
                }
            };

            init();

            return modal;
        }

        return new Modal();
    };

})(jQuery);

