$(() => {
    const myInput = $('#myInput');
    const myButton = $('#myButton');
    myButton.click(() => {
        myButton.attr('disabled', true);
        console.log('->>');
        $.ajax({
            url: 'send',
            method: 'post',
            data: {
                'value': myInput.val()
            }
        }).done((data) => {
            console.log(data.message);
            myButton.attr('disabled', false);
        });
    });
});