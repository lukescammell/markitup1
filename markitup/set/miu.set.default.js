/*
# markItUp!

Copyright (C) 2008 Jay Salvat
http://markitup.jaysalvat.com/

## Markup language: HTML <http://www.w3.org/TR/html401/>

## Description
 - The default HTML markup set with Headings, Paragraph, Bold, Italic, Stroke through, Picture, Link, List, Clean button, Preview button.
 - Feel free to add more tags.

## Install
 1. Download the zip file
 2. Unzip it in your markItUp! sets folder
 3. Modify your JS link to point at this set.js
*/

miu_set_default = {
	nameSpace:		"default", // Useful to prevent multi-instances CSS conflict
	onShiftEnter:		{keepDefault:false, replaceWith:'<br />\n'},
	onCtrlEnter:		{keepDefault:false, openWith:'\n<p>', closeWith:'</p>'},
	onTab:			{keepDefault:false, replaceWith:'    '},
	markupSet: [
		{name:'Bold', key:'B', openWith:'(!(<strong>|!|<b>)!)', closeWith:'(!(</strong>|!|</b>)!)', className:'miu-btn-strong'},
		{name:'Italic', key:'I', openWith:'(!(<em>|!|<i>)!)', closeWith:'(!(</em>|!|</i>)!)', className:'miu-btn-em'},
		{name:'Stroke through', key:'S', openWith:'<del>', closeWith:'</del>', className:'miu-btn-del'},
		{separator:'---------------'},
		{name:'Picture', key:'P', replaceWith:'<img src="[![Source:!:http://]!]" alt="[![Alternative text]!]" />', className:'miu-btn-img'},
		{name:'Link', key:'L', openWith:'<a href="[![Link:!:http://]!]"(!( title="[![Title]!]")!)>', closeWith:'</a>', placeHolder:'Your text to link...', className:'miu-btn-a'},
		{separator:'---------------'},
		{name:'Clean', replaceWith:function(markitup) { return markitup.selection.replace(/<(.*?)>/g, "") }, className:'miu-btn-clean'},
		{name:'Preview',  call:'preview', className:'miu-btn-tick'}
	]
}