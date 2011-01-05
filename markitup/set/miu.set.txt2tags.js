/*
# markItUp!

Copyright (C) 2008 Jay Salvat
http://markitup.jaysalvat.com/

## Markup language: txt2tags <http://txt2tags.sourceforge.net/markup.html>

## Description
 - A basic Txt2tags markup set with Headings, Bold, Italic, Underline, Strike, Picture, Link, Lists, Quote, Code, Raw, Preview button.
 - Feel free to add more tags.

 #### Author
 - Copyright (C) 2009 Florent Gallaire
 - <fgallaire@gmail.com>

## Install
 1. Download the zip file
 2. Unzip it in your markItUp! sets folder
 3. Modify your JS link to point at this set.js
*/

miu_set_txt2tags = {
	nameSpace:		"txt2tags", // Useful to prevent multi-instances CSS conflict
	previewParserPath:	'', // path to your Txt2tags parser
	onShiftEnter:		{keepDefault:false, replaceWith:'\n\n'},
	markupSet: [
		{name:'Heading 1', key:'1', openWith:'= ', closeWith:' =', placeHolder:'Your title here...', className:'miu-btn-h1'},
		{name:'Heading 2', key:'2', openWith:'== ', closeWith:' ==', placeHolder:'Your title here...', className:'miu-btn-h2'},
		{name:'Heading 3', key:'3', openWith:'=== ', closeWith:' ===', placeHolder:'Your title here...', className:'miu-btn-h3'},
		{name:'Heading 4', key:'4', openWith:'==== ', closeWith:' ====', placeHolder:'Your title here...', className:'miu-btn-h4'},
		{name:'Heading 5', key:'5', openWith:'===== ', closeWith:' =====', placeHolder:'Your title here...', className:'miu-btn-h5'},
		{separator:'---------------'},
		{name:'Bold', key:'B', openWith:'**', closeWith:'**', className:'miu-btn-strong'},
		{name:'Italic', key:'I', openWith:'//', closeWith:'//', className:'miu-btn-em'},
		{name:'Underline', key:'U', openWith:'__', closeWith:'__', className:'miu-btn-underline'},
		{name:'Strike', key:'S', openWith:'--', closeWith:'--', className:'miu-btn-del'},
		{separator:'---------------'},
		{name:'Bullet list', openWith:'- ', className:'miu-btn-ul'},
		{name:'Numbered list', openWith:'+ ', className:'miu-btn-ol'},
		{separator:'---------------'},
		{name:'Picture', key:'P', openWith:'[', closeWith:']', placeHolder:'Your picture here...', className:'miu-btn-img'},
		{name:'Link', key:'L', openWith:'[', closeWith:' [![Link:!:http://]!]]', placeHolder:'Your text to link here...', className:'miu-btn-a'},
		{separator:'---------------'},
		{name:'Quote', openWith:'\t', className:'miu-btn-blockquote'},
		{name:'Code', openWith:'``', closeWith:'``', className:'miu-btn-code'},
		{name:'Raw', key:'R', openWith:'""', closeWith:'""', placeHolder:'No txt2tags in here!', className:'miu-btn-no-formatting'},
		{separator:'---------------'},
		{name:'Preview', call:'preview', className:'miu-btn-tick'}
	]
}