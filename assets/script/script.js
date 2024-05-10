window.onscroll = function() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById('main-nav').style.boxShadow = '0 1px 10px #558691';

    } else {
        document.getElementById('main-nav').style.boxShadow = 'none'
    }
}