// let sidebar_toggle_hide = document.querySelector('#sidebar-toggle-hide')
//
// sidebar_toggle_hide.onclick = function () {
//     sidebar_toggle_hide.style.opacity = 0
// }
//
// console.log(sidebar_toggle_hide)

$(document).ready(function (){

    function removeAllSidebarToggleClass() {
        $('#sidebar-toggle-hide').removeClass('d-md-inline');
        $('#sidebar-toggle-hide').removeClass('d-none');
        $('#sidebar-toggle-show').removeClass('d-inline');
        $('#sidebar-toggle-show').removeClass('d-md-none');
    }


    $('#sidebar-toggle-hide').click(function () {
        $('#sidebar').fadeOut(300);
        $('.main-body').animate({width: "100%"}, 300);
        setTimeout(function () {
            removeAllSidebarToggleClass()
            $('#sidebar-toggle-hide').addClass('d-none');
            $('#sidebar-toggle-show').removeClass('d-none');


        }, 300)
    })

    $('#sidebar-toggle-show').click(function () {
        $('#sidebar').fadeIn(300);
        setTimeout(function () {
            removeAllSidebarToggleClass()
            $('#sidebar-toggle-hide').removeClass('d-none');
            $('#sidebar-toggle-show').addClass('d-none');


        }, 300)
    })

    $('#menu-toggle').click(function () {
        $('#body-header').toggle(300)
    })

    $('#search-toggle').click(function () {
        $('#search-toggle').removeClass('d-md-inline')
        $('#search-area').addClass('d-md-inline')
        $('#search-input').animate({width: '12rem'}, 300)
    })

    $('#search-area-hide').click(function () {
        $('#search-input').animate({width: '0'}, 300)

        setTimeout(function () {
        $('#search-toggle').addClass('d-md-inline')
        $('#search-area').removeClass('d-md-inline')
        }, 300)
    })

    $('#header-notification-toggle').click(function () {
        $('#header-notification').fadeToggle()

            $('#header-comment').fadeOut()

            $('#header-profile').fadeOut()
    })

    $('#header-comment-toggle').click(function () {
        $('#header-comment').fadeToggle()

        $('#header-notification').fadeOut()

        $('#header-profile').fadeOut()

    })

    $('#header-profile-toggle').click(function () {
        $('#header-profile').fadeToggle()

        $('#header-notification').fadeOut()

        $('#header-comment').fadeOut()
    })

    $('.sidebar-group-link').click(function () {

        if ($(this).hasClass('sidebar-group-link-active')) {
            $(this).removeClass('sidebar-group-link-active')
            $(this).children('.sidebar-dropdown-toggle').children('.angle').removeClass('fa-angle-down')
            $(this).children('.sidebar-dropdown-toggle').children('.angle').addClass('fa-angle-left')
        }
        else {
            $('.sidebar-group-link').removeClass('sidebar-group-link-active')
            $('.sidebar-group-link').children('.sidebar-dropdown-toggle').children('.angle').removeClass('fa-angle-down')
            $('.sidebar-group-link').children('.sidebar-dropdown-toggle').children('.angle').addClass('fa-angle-left')

            $(this).addClass('sidebar-group-link-active')
            $(this).children('.sidebar-dropdown-toggle').children('.angle').removeClass('fa-angle-left')
            $(this).children('.sidebar-dropdown-toggle').children('.angle').addClass('fa-angle-down')
        }
    })

    $('#full-screen').click(function () {
        toggleFullScreen()
    })

})

    function toggleFullScreen() {
        if ((document.fullScreenElement && document.fullScreenElement !== null) ||
            (!document.mozFullScreen && !document.webkitIsFullScreen)) {

            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen(Element.ALLOW_KEYBOARD_INPUT)

            }
            else if (document.documentElement.mozRequestFullscreen) {
                document.documentElement.mozRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)

            }
            else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)

            }

            $('#screen-compress').removeClass('d-none')
            $('#screen-expand').addClass('d-none')
        }
        else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen()
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen()
            }
            else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen()
            }

            $('#screen-compress').addClass('d-none')
            $('#screen-expand').removeClass('d-none')
        }
    }

