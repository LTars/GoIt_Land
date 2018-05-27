$('.part').hover(
    function () {
        $('.chart-title').html($(this).attr('description-data'));
        $('.chart-title').fadein();
    }.
        function() {
        $('.chart-title').fadeout(50);
    }
)