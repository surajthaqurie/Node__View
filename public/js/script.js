$(() => {
    $('button').on("click", () => {
        $.ajax({
            type: 'GET',
            url: '/',
            success: (result) => {
                $('#champ').html(result);
            }
        })
    })
});