const desktop = 1280;
const tablet = 1024;
const mobile = 640;

function pointChecker (object) {
    if (object.width > desktop) {
        object.isWide = true;
    } else {
        object.isWide = false;
    }

    if (object.width > tablet) {
        object.isDesktop = true;
        object.isDevice = false;
    } else {
        object.isDesktop = false;
    }

    if (object.width <= tablet && object.width > mobile) {
        object.isDevice = true;
        object.isTablet = true;
    } else {
        object.isTablet = false;
    }

    if (object.width <= mobile) {
        object.isDevice = true;
        object.isMobile = true;
    } else {
        object.isMobile = false;
    }
}

export default function (context) {
    const $window = context.store.state.window;
    $(window).on({
        'load': () => {
            $window.scrollTop = $(window).scrollTop();
            $window.scrollLeft = $(window).scrollLeft();
            $window.width = $(window).width();
            $window.height = $(window).height();
            pointChecker($window);
        },
        'resize': () => {
            $window.width = $(window).width();
            $window.height = $(window).height();
            pointChecker($window);
        },
        'scroll': () => {
            $window.scrollTop = $(window).scrollTop();
            $window.scrollLeft = $(window).scrollLeft();
        }
    });
}