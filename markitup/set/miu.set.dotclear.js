/*
# markItUp!

Copyright (C) 2008 Jay Salvat
http://markitup.jaysalvat.com/

## Markup language: Dotclear <http://dotclear.org/documentation/2.0/usage/syntaxes>

## Description
 - A basic Dotclear markup set with Headings, Bold, Italic, Stroke through, Picture, Link, List, Quotes, Code, Preview button.
 - Feel free to add more tags.

## Install
 1. Download the zip file
 2. Unzip it in your markItUp! sets folder
 3. Modify your JS link to point at this set.js
*/

miu_set_dotclear = {
	nameSpace:		"dotclear", // Useful to prevent multi-instances CSS conflict
	previewParserPath:	'', // path to your DotClear parser
	onShiftEnter:		{keepDefault:false, replaceWith:'%%%\n'},
	onCtrlEnter:		{keepDefault:false, replaceWith:'\n\n'},
	markupSet: [
		{name:'Heading 1', key:'1', openWith:'!!!!!', placeHolder:'Your title here...', className:'miu-btn-h1'},
		{name:'Heading 2', key:'2', openWith:'!!!!', placeHolder:'Your title here...', className:'miu-btn-h2'},
		{name:'Heading 3', key:'3', openWith:'!!!', placeHolder:'Your title here...', className:'miu-btn-h3'},
		{name:'Heading 4', key:'4', openWith:'!!', placeHolder:'Your title here...', className:'miu-btn-h4'},
		{name:'Heading 5', key:'5', openWith:'!', placeHolder:'Your title here...', className:'miu-btn-h5'},
		{separator:'---------------'},
		{name:'Bold', key:'B', openWith:'__', closeWith:'__', className:'miu-btn-strong'}, 
		{name:'Italic', key:'I', openWith:"''", closeWith:"''", className:'miu-btn-em'}, 
		{name:'Stroke through', key:'S', openWith:'--', closeWith:'--', className:'miu-btn-del'}, 
		{separator:'---------------'},
		{name:'Bulleted list', openWith:'(!(* |!|*)!)', className:'miu-btn-ul'}, 
		{name:'Numeric list', openWith:'(!(# |!|#)!)', className:'miu-btn-ol'}, 
		{separator:'---------------'},
		{name:'Picture', key:"P", replaceWith:'(([![Url:!:http://]!]|[![Alternative text]!](!(|[![Position:!:L]!])!)))', className:'miu-btn-img'},
		{name:'Link', key:"L", openWith:"[", closeWith:'|[![Url:!:http://]!]|[![Language:!:en]!]|[![Title]!]]', placeHolder:'Your text to link here...', className:'miu-btn-a'}, 
		{separator:'---------------'},
		{name:'Quote', openWith:'{{', closeWith:'}}', className:'miu-btn-blockquote'}, 
		{name:'Code', openWith:'@@', closeWith:'@@', className:'miu-btn-code'}, 
		{separator:'---------------'},
		{name:'Preview', call:'preview', className:'miu-btn-tick'}
	]
}