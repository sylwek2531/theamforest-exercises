$( document ).ready(function() {
    /* activate jquery isotope */
    var $container = $('#images').isotope({
        itemSelector : '.photos',
        isFitWidth: true
    });

    $container.isotope({ filter: '*' });

    // filter items on button click
    $('#work').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
    });
});
