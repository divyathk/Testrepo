$(document).ready(function() {
    //moves the focus to the first name text box
    $("#fName").focus();

    // apply the validate plugin, rules
	$("#reservation_form").validate({
        rules: {
			fName: {
				required: true
			},
			lName: {
				required: true
			},
            email: {
				required: true,
				email: true
			},
			phone: {
				required: true,
				phoneUS: true
			}
		}
        
    });
}); // end ready
