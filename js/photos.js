$(document).ready(function(){
            var url = "http://api.flickr.com/services/feeds/photos_public.gne?&format=json&jsoncallback=?&tags=fscteam";

            $.getJSON(url, function(data){
                var html = "";
                $.each(data.items, function(i, item){	
                    html += "<img src=" + item.media.m + ">";
                    html += "<h3>" + item.title + "</h3>";
                });
                $("#photos").html(html);
            });          
        }
);
