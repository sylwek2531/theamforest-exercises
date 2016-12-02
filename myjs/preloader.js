/**
 * Created by student on 25.11.16.
 */
//preloader

$(document).ready(function () {// Czekamy na załadowanie całej zawartości strony
    $('.preloader').fadeOut();// Usuwamy grafikę ładowania
    $('.preloader-area').delay(350).fadeOut('slow');// Usuwamy diva przysłaniającego stronę
});
