$(document).ready(function(){
    $.getJSON("employees.json", function(data){
        $.each(data, function() {
            $.each(this, function(key, value) {
                $("#team").append(
                    "Name: " + value.name + "<br>" + 
                    "Title: " + value.title + "<br>" +
                    "Department: " + value.department + "<br>" + 
                    "Bio: " + value.bio + "<br><br>"
                );
            });
        }); 
    });
});
