jQuery(function () {
    const appVersion = () => {
        $.getJSON('./projectConf.json', (ver) => {
            let Major = ver.majorNum;
            let Minor = ver.minorNum;
            let Path = ver.pathNum;
            document.getElementById('V').innerHTML = Major + '.' + Minor + '.' + Path
        })
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