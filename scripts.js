jQuery(function () {

    const updateCounter = () => {
        $.getJSON('./projectConf.json', (count) => {
            document.querySelector('#updateNum').innerHTML = count.updateNum
        })
    }

    const appVersion = () => {
        $.getJSON('./projectConf.json', (ver) => {
            let Major = ver.majorNum;
            let Minor = ver.minorNum;
            let Path = ver.pathNum;
            document.querySelector('#V').innerHTML = Major + '.' + Minor + '.' + Path
        })
        updateCounter()
    }
    appVersion()

    const copyright = () => {
        const date = new Date()
        const year = date.getFullYear()
        document.querySelector('#Year').innerHTML = year
    }

    copyright()

    const warningShow = () => {
        let elements = document.querySelectorAll('.warning')
        for (var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = '&#9888; ' + 'Uwaga głośne !!!'
        }
    }

    warningShow()

    const topImg = function ($) {
        $.scrollTo(0);
        $('.link').click(() => $.scrollTo($('#gora'), 1000))
    }

    topImg($)

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

    // const stickyMenu = function () {
    //     let ScrollY = $(window).scrollTop();

    //     if (ScrollY >= NavY) {
    //         $('aside').addClass('sticky2');
    //     } else {
    //         $('aside').removeClass('sticky2');
    //     }

    //     let devWidth = screen.width
    //     if (devWidth >= 800) {
    //         let menuPos = $('aside').offset().top
    //         console.log(menuPos)
    //         if (menuPos > 4020) {
    //             $('aside').removeClass('sticky2');

    //         }
    //     }

    // }

    // $(window).on("scroll", function () {
    //     stickyMenu()
    // })

    // const contentsMap = function ($) {
    //     $.scrollTo(0)

    //     $('#1').click(() => {
    //         $.scrollTo($('#art1'), 500)
    //     })

    //     $('#2').click(() => {
    //         $.scrollTo($('#art2'), 500)
    //     })

    //     $('#3').click(() => {
    //         $.scrollTo($('#art3'), 500)
    //     })

    //     $('#4').click(() => {
    //         $.scrollTo($('#art4'), 500)
    //     })

    //     $('#5').click(() => {
    //         $.scrollTo($('#art5'), 500)
    //     })

    //     $('#6').click(() => {
    //         $.scrollTo($('#art6'), 500)
    //     })
    // }

    // contentsMap($)
})