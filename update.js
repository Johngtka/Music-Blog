jQuery(function () {

    const appVersion = () => {
        let majorNum = 1
        let minorNum = 1
        let pathNum = 0
        const finalVersion = majorNum + '.' + minorNum + '.' + pathNum
        document.querySelector('#V').innerHTML = finalVersion
    }
    appVersion()

    const copyright = () => {
        const date = new Date()
        const year = date.getFullYear()
        document.querySelector('#Year').innerHTML = year
    }

    copyright()

    const NavY = $('nav').offset().top

    const stickyNav = function () {
        let ScrollY = $(window).scrollTop();

        if (ScrollY > NavY) {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }

    $(window).on("scroll", function () {
        stickyNav()
    })
})