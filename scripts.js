jQuery(function () {

    const updateCounter = () => {
        let log = 16
        document.querySelector('#updateNum').innerHTML = log
    }
    updateCounter()

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

    const topImg = function ($) {
        $.scrollTo(0);
        $('.link').click(() => $.scrollTo($('#gora'), 1000))
    }

    topImg($)

    const contentsMap = function ($) {
        $.scrollTo(0)

        $('#1').click(() => {
            $.scrollTo($('#art1'), 500)
        })

        $('#2').click(() => {
            $.scrollTo($('#art2'), 500)
        })

        $('#3').click(() => {
            $.scrollTo($('#art3'), 500)
        })

        $('#4').click(() => {
            $.scrollTo($('#art4'), 500)
        })

        $('#5').click(() => {
            $.scrollTo($('#art5'), 500)
        })

        $('#6').click(() => {
            $.scrollTo($('#art6'), 500)
        })
    }

    contentsMap($)
})