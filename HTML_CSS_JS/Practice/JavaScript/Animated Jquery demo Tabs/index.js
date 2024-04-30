// 1st Jquery Tab
/*$(document).ready(function () {
    var oldId = null;

    $('.tabs-controls__link').click(function (e) {
        e.preventDefault();

        if ($(this).hasClass('tabs-controls__link--active')) {
            return false;
        }

        var currentId = parseInt($(this).data('id'), 10);
        $('.tabs-controls__link--active').removeClass('tabs-controls__link--active');
        $(this).addClass('tabs-controls__link--active');

        if (currentId < oldId) { // item is hidden
            var timing = $('.card.hidden').length * 100;
            $('.card').each(function (index) {
                if (index > (currentId - 1) || index == (currentId - 1)) {
                    window.setTimeout(function () {
                        $('.card').eq(index).removeClass('hidden');
                    }, timing - (index * 100));
                }
            });
        } else {
            $('.card').each(function (index) {
                if (index < (currentId - 1)) {
                    window.setTimeout(function () {
                        $('.card').eq(index).addClass('hidden');
                    }, index * 100);
                }
            });
        }

        oldId = currentId;
    });
});
*/


$(document).ready(function () {

    (function ($) {
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

        $('.tab ul.tabs li a').click(function (g) {
            var tab = $(this).closest('.tab'),
                index = $(this).closest('li').index();

            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');

            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

            g.preventDefault();
        });
    })(jQuery);

});

