$(function(){
	$("#quit").on('click', function(){
// prompt dialog
alertify.confirm("Are you sure you want to quit?", function (e) {
    // str is the input text
    if (e) {
        // user clicked "ok"
        window.open('', '_self', ''); 
		window.close();
    } else {
        // user clicked "cancel"
        alertify.success("Thanks for sticking around! Have some more fun!");
    }
});
	});
});

