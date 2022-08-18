window.onload = () => {

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: "#swiper-button-next",
            prevEl: "#swiper-button-prev",
        }
    });

    swiper.on('transitionEnd', function() {
        document.getElementById("main_banner_pagination_idx").innerHTML = `${swiper.realIndex + 1}/3`;
    });
    
}