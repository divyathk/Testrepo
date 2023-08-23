$(document).ready(function($){
    $.fn.highlightMenu = function(options) {
        var defaults = $.extend({
            'bgColor'       : '#32CD32',      //Set default bg color to lime green
            'color'         : '#ff1122',      //Set default text color to superman red
        }, options);

        return this.each(function() {
            var o = defaults;
            var menu = $("ul");
            var nav = $(".topnav")

            menu.css('display','inline')  //css to show the menu horizontally
                .css('font-weight', 'bold');

            nav.css('font-family', 'arial, helvetica, sans-serif')
               .css('background-color', o.bgColor);
            });
        }
    })(jQuery); 
    