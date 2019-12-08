$(document).ready(() => {
    $("form#changeQuote").on('submit', (e) => {
        e.preventDefult();
        var data = $('input[name=quote]').val();
        $.ajax({
            type: 'post',
            url: '/ajax',
            data: data,
            dataType: 'text'
        })
            .done((data) => {
                $('h1').html(data.quote);
            });
    });
});