window.onload = () => {

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: "#swiper-button-next",
            prevEl: "#swiper-button-prev",
        },
        autoplay: {
            delay: 4000
        }
    });

    // 페이지 바뀔 때, 
    const pageButtons = document.getElementsByClassName('main_banner_button');
    let currentIdx = 0;
    
    swiper.on('transitionEnd', function () {
        pageButtons[currentIdx].classList.remove('main_banner_button_checked');

        currentIdx = swiper.realIndex;

        document.getElementById("main_banner_pagination_idx").innerHTML = `${currentIdx + 1}/7`;        
        pageButtons[currentIdx].classList.add('main_banner_button_checked');
    });

    // Play/Pause 버튼 클릭 시, 
    let autoPlay = true;
    const playBtn = document.getElementById("main_banner_play");
    const pauseBtn = document.getElementById("main_banner_pause");

    playBtn.addEventListener('click', () => {
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'block';
        swiper.autoplay.start();
        autoPlay = true;
    })

    pauseBtn.addEventListener('click', () => {
        playBtn.style.display = 'block';
        pauseBtn.style.display = 'none';
        swiper.autoplay.stop();
        autoPlay = false;
    })

    // 페이지 버튼 클릭 시,
    const goPage = (index) => {
        swiper.slideTo(index+1);
        console.log(index);

        if (autoPlay) {
            swiper.autoplay.start();
        } else {
             swiper.autoplay.stop();
        }
    }
    
    console.log(pageButtons.length);
    for (var i = 0; i < pageButtons.length; i++) {
        (function(protectedIndex){
            pageButtons[i].onclick = function () {
                goPage(protectedIndex);
        }
        })(i);
    }
    
}