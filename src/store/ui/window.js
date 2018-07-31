const state = {
    scrollTop: 0,
    scrollLeft: 0,
    width: 0,
    height: 0,
    
    isWide: false, // screen > 1280
    isDesktop: false, // screen > 1024
    isDevice: false, // screen <= 1024
    isTablet: false, // screen <= 1024 && screen > 640
    isMobile: false, // screen <= 640
}

export default {
    state
}