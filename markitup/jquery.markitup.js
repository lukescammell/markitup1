/* markItUp! Universal MarkUp Engine, JQuery plugin v 1.1.14, Copyright (C) 2007-2012 Jay Salvat, http://markitup.jaysalvat.com
   Dual licensed under the MIT and GPL licenses. */
(function(b){b.fn.markItUp=function(u,k){var B,H,c,h,n,x;h=n=x=!1;"string"==typeof u&&(B=u,H=k);c={id:"",nameSpace:"",root:"",previewHandler:!1,previewInWindow:"",previewInElement:"",previewAutoRefresh:!0,previewPosition:"after",previewTemplatePath:"~/templates/preview.html",previewParser:!1,previewParserPath:"",previewParserVar:"data",previewParserAjaxType:"POST",resizeHandle:!0,beforeInsert:"",afterInsert:"",onEnter:{},onShiftEnter:{},onCtrlEnter:{},onTab:{},markupSet:[{}]};b.extend(c,u,k);c.root||
b("script").each(function(R,h){miuScript=b(h).get(0).src.match(/(.*)jquery\.markitup(\.pack)?\.js$/);null!==miuScript&&(c.root=miuScript[1])});var y=function(b){b=b.toLowerCase();b=/(chrome)[ \/]([\w.]+)/.exec(b)||/(webkit)[ \/]([\w.]+)/.exec(b)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b)||/(msie) ([\w.]+)/.exec(b)||0>b.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b)||[];return{browser:b[1]||"",version:b[2]||"0"}}(navigator.userAgent),l={};y.browser&&(l[y.browser]=!0,l.version=y.version);
l.chrome?l.webkit=!0:l.webkit&&(l.safari=!0);return this.each(function(){function k(a,b){return b?a.replace(/("|')~\//g,"$1"+c.root):a.replace(/^~\//,c.root)}function u(){nameSpace=id="";c.id?id='id="'+c.id+'"':e.attr("id")&&(id='id="markItUp'+e.attr("id").substr(0,1).toUpperCase()+e.attr("id").substr(1)+'"');c.nameSpace&&(nameSpace='class="'+c.nameSpace+'"');e.wrap("<div "+nameSpace+"></div>");e.wrap("<div "+id+' class="markItUp"></div>');e.wrap('<div class="markItUpContainer"></div>');e.addClass("markItUpEditor");
C=b('<div class="markItUpHeader"></div>').insertBefore(e);b(y(c.markupSet)).appendTo(C);I=b('<div class="markItUpFooter"></div>').insertAfter(e);!0===c.resizeHandle&&!0!==l.safari&&(resizeHandle=b('<div class="markItUpResizeHandle"></div>').insertAfter(e).bind("mousedown.markItUp",function(a){var f=e.height(),c=a.clientY,p,d;p=function(a){e.css("height",Math.max(20,a.clientY+f-c)+"px");return!1};d=function(a){b("html").unbind("mousemove.markItUp",p).unbind("mouseup.markItUp",d);return!1};b("html").bind("mousemove.markItUp",
p).bind("mouseup.markItUp",d)}),I.append(resizeHandle));e.bind("keydown.markItUp",J).bind("keyup",J);e.bind("insertion.markItUp",function(a,f){!1!==f.target&&D();d===b.markItUp.focused&&v(f)});e.bind("focus.markItUp",function(){b.markItUp.focused=this});c.previewInElement&&K()}function y(a){var f=b("<ul></ul>"),c=0;b("li:hover > ul",f).css("display","block");b.each(a,function(){var a=this,d="",g,h;a.title?g=a.key?(a.title||"")+" [Ctrl+"+a.key+"]":a.title||"":g=a.key?(a.name||"")+" [Ctrl+"+a.key+"]":
a.name||"";key=a.key?'accesskey="'+a.key+'"':"";if(a.separator)d=b('<li class="markItUpSeparator">'+(a.separator||"")+"</li>").appendTo(f);else{c++;for(h=z.length-1;0<=h;h--)d+=z[h]+"-";d=b('<li class="markItUpButton markItUpButton'+d+c+" "+(a.className||"")+'"><a href="#" '+key+' title="'+g+'">'+(a.name||"")+"</a></li>").bind("contextmenu.markItUp",function(){return!1}).bind("click.markItUp",function(a){a.preventDefault()}).bind("focusin.markItUp",function(){e.focus()}).bind("mouseup",function(b){a.call&&
eval(a.call)(b);setTimeout(function(){v(a)},1);return!1}).bind("mouseenter.markItUp",function(){b("> ul",this).show();b(document).one("click",function(){b("ul ul",C).hide()})}).bind("mouseleave.markItUp",function(){b("> ul",this).hide()}).appendTo(f);a.dropMenu&&(z.push(c),b(d).addClass("markItUpDropMenu").append(y(a.dropMenu)))}});z.pop();return f}function O(a){return a?(a=a.toString(),a=a.replace(/\(\!\(([\s\S]*?)\)\!\)/g,function(a,b){var c=b.split("|!|");return!0===x?void 0!==c[1]?c[1]:c[0]:void 0===
c[1]?"":c[0]}),a=a.replace(/\[\!\[([\s\S]*?)\]\!\]/g,function(a,b){var c=b.split(":!:");if(!0===A)return!1;value=prompt(c[0],c[1]?c[1]:"");null===value&&(A=!0);return value})):""}function q(a){b.isFunction(a)&&(a=a(w));return O(a)}function E(a){var b=q(r.openWith),c=q(r.placeHolder),d=q(r.replaceWith),e=q(r.closeWith),g=q(r.openBlockWith),h=q(r.closeBlockWith),k=r.multiline;if(""!==d)block=b+d+e;else if(""===selection&&""!==c)block=b+c+e;else{a=a||selection;var l=[a],m=[];!0===k&&(l=a.split(/\r?\n/));
for(a=0;a<l.length;a++){line=l[a];var n;(n=line.match(/ *$/))?m.push(b+line.replace(/ *$/g,"")+e+n):m.push(b+line+e)}block=m.join("\n")}block=g+block+h;return{block:block,openBlockWith:g,openWith:b,replaceWith:d,placeHolder:c,closeWith:e,closeBlockWith:h}}function v(a){var f,k,p;w=r=a;D();b.extend(w,{line:"",root:c.root,textarea:d,selection:selection||"",caretPosition:g,ctrlKey:h,shiftKey:n,altKey:x});q(c.beforeInsert);q(r.beforeInsert);(!0===h&&!0===n||!0===a.multiline)&&q(r.beforeMultiInsert);b.extend(w,
{line:1});if(!0===h&&!0===n){lines=selection.split(/\r?\n/);f=0;k=lines.length;for(p=0;p<k;p++)""!==b.trim(lines[p])?(b.extend(w,{line:++f,selection:lines[p]}),lines[p]=E(lines[p]).block):lines[p]="";string={block:lines.join("\n")};start=g;f=string.block.length+(l.opera?k-1:0)}else!0===h?(string=E(selection),start=g+string.openWith.length,f=string.block.length-string.openWith.length-string.closeWith.length,f-=string.block.match(/ $/)?1:0,f-=G(string.block)):!0===n?(string=E(selection),start=g,f=string.block.length,
f-=G(string.block)):(string=E(selection),start=g+string.block.length,f=0,start-=G(string.block));""===selection&&""===string.replaceWith&&(m+=L(string.block),start=g+string.openBlockWith.length+string.openWith.length,f=string.block.length-string.openBlockWith.length-string.openWith.length-string.closeWith.length-string.closeBlockWith.length,m=e.val().substring(g,e.val().length).length,m-=L(e.val().substring(0,g)));b.extend(w,{caretPosition:g,scrollPosition:F});string.block!==selection&&!1===A?(k=
string.block,document.selection?document.selection.createRange().text=k:d.value=d.value.substring(0,g)+k+d.value.substring(g+selection.length,d.value.length),M(start,f)):m=-1;D();b.extend(w,{line:"",selection:selection});(!0===h&&!0===n||!0===a.multiline)&&q(r.afterMultiInsert);q(r.afterInsert);q(c.afterInsert);t&&c.previewAutoRefresh&&K();n=x=h=A=!1}function L(a){return l.opera?a.length-a.replace(/\n*/g,"").length:0}function G(a){return l.msie?a.length-a.replace(/\r*/g,"").length:0}function M(a,
b){if(d.createTextRange){if(l.opera&&9.5<=l.version&&0==b)return!1;range=d.createTextRange();range.collapse(!0);range.moveStart("character",a);range.moveEnd("character",b);range.select()}else d.setSelectionRange&&d.setSelectionRange(a,a+b);d.scrollTop=F;d.focus()}function D(){d.focus();F=d.scrollTop;if(document.selection)if(selection=document.selection.createRange().text,l.msie){var a=document.selection.createRange(),b=a.duplicate();b.moveToElementText(d);for(g=-1;b.inRange(a);)b.moveStart("character"),
g++}else g=d.selectionStart;else g=d.selectionStart,selection=d.value.substring(g,d.selectionEnd);return selection}function K(){var a=e.val();c.previewParser&&"function"===typeof c.previewParser&&(a=c.previewParser(a));c.previewHandler&&"function"===typeof c.previewHandler?c.previewHandler(a):""!==c.previewParserPath?b.ajax({type:c.previewParserAjaxType,dataType:"text",global:!1,url:c.previewParserPath,data:c.previewParserVar+"="+encodeURIComponent(a),success:function(a){N(k(a,1))}}):P||b.ajax({url:c.previewTemplatePath,
dataType:"text",global:!1,success:function(b){N(k(b,1).replace(/\x3c!-- content --\x3e/g,a))}});return!1}function N(a){if(c.previewInElement)b(c.previewInElement).html(a);else if(t&&t.document){try{sp=t.document.documentElement.scrollTop}catch(d){sp=0}t.document.open();t.document.write(a);t.document.close();t.document.documentElement.scrollTop=sp}}function J(a){n=a.shiftKey;h=(x=a.altKey)&&a.ctrlKey?!1:a.ctrlKey||a.metaKey;if("keydown"===a.type){if(!0===h&&(li=b('a[accesskey="'+(13==a.keyCode?"\\n":
String.fromCharCode(a.keyCode))+'"]',C).parent("li"),0!==li.length))return h=!1,setTimeout(function(){li.triggerHandler("mouseup")},1),!1;if(13===a.keyCode||10===a.keyCode){if(!0===h)return h=!1,v(c.onCtrlEnter),c.onCtrlEnter.keepDefault;if(!0===n)return n=!1,v(c.onShiftEnter),c.onShiftEnter.keepDefault;v(c.onEnter);return c.onEnter.keepDefault}if(9===a.keyCode){if(1==n||1==h||1==x)return!1;if(-1!==m)return D(),m=e.val().length-m,M(m,0),m=-1,!1;v(c.onTab);return c.onTab.keepDefault}}}function Q(){e.unbind(".markItUp").removeClass("markItUpEditor");
e.parent("div").parent("div.markItUp").parent("div").replaceWith(e);var a=e.parent("div").parent("div.markItUp").parent("div");a.length&&a.replaceWith(e);e.data("markItUp",null)}var e,d,z,F,g,m,r,w,C,I,t,P,A;e=b(this);d=this;z=[];A=!1;F=g=0;m=-1;c.previewParserPath=k(c.previewParserPath);c.previewTemplatePath=k(c.previewTemplatePath);if(B)switch(B){case "remove":Q();break;case "insert":v(H);break;default:b.error("Method "+B+" does not exist on jQuery.markItUp")}else u()})};b.fn.markItUpRemove=function(){return this.each(function(){b(this).markItUp("remove")})};
b.markItUp=function(u){var k={target:!1};b.extend(k,u);if(k.target)return b(k.target).each(function(){b(this).focus();b(this).trigger("insertion",[k])});b("textarea").trigger("insertion",[k])}})(jQuery);