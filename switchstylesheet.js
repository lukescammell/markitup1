$.fn.switchstylesheet=function(b){function d(a){$("link[rel*=style][title*="+b.seperator+"]").each(function(){this.disabled=true;if($(this).attr("title")==a)this.disabled=false});cookie.createCookie(b.seperator,a,365)}defaults={seperator:"alt"};b=$.extend(defaults,b);var c=cookie.readCookie(b.seperator);c&&d(c);$(this).click(function(){var a=$(this).attr("title");d(a)})};var cookie;
(function(){cookie={createCookie:function(b,d,c){if(c){var a=new Date;a.setTime(a.getTime()+c*24*60*60*1E3);c="; expires="+a.toGMTString()}else c="";document.cookie=b+"="+d+c+"; path=/"},readCookie:function(b){b=b+"=";for(var d=document.cookie.split(";"),c=0;c<d.length;c++){for(var a=d[c];a.charAt(0)==" ";)a=a.substring(1,a.length);if(a.indexOf(b)==0)return a.substring(b.length,a.length)}return null}}})(jQuery);