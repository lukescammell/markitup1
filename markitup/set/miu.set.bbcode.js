/*
# markItUp!

Copyright (C) 2008 Jay Salvat
http://markitup.jaysalvat.com/

## Markup language: BBCode <http://en.wikipedia.org/wiki/Bbcode>

## Description
 - A basic BBCode markup set with Bold, Italic, Underline, Picture, Link, Size, List, Quotes, Code, Clean button, Preview button.
 - Feel free to add more tags.

## Install
 1. Download the zip file
 2. Unzip it in your markItUp! sets folder
 3. Modify your JS link to point at this set.js
*/

miu_set_bbcode = {
	nameSpace:		"bbcode", // Useful to prevent multi-instances CSS conflict
	previewParserPath:	'', // path to your BBCode parser
	markupSet: [
		{name:'Bold', key:'B', openWith:'[b]', closeWith:'[/b]', className:'miu-btn-strong'},
		{name:'Italic', key:'I', openWith:'[i]', closeWith:'[/i]', className:'miu-btn-em'},
		{name:'Underline', key:'U', openWith:'[u]', closeWith:'[/u]', className:'miu-btn-del'},
		{separator:'---------------'},
		{name:'Picture', key:'P', replaceWith:'[img][![Url]!][/img]', className:'miu-btn-img'},
		{name:'Link', key:'L', openWith:'[url=[![Url]!]]', closeWith:'[/url]', placeHolder:'Your text to link here...', className:'miu-btn-a'},
		{separator:'---------------'},
		{name:'Size', key:'S', openWith:'[size=[![Text size]!]]', closeWith:'[/size]', className:'miu-btn-font-family',
			dropMenu :[
				{name:'Big', openWith:'[size=200]', closeWith:'[/size]', className:'miu-btn-font-family'},
				{name:'Normal', openWith:'[size=100]', closeWith:'[/size]', className:'miu-btn-font-family'},
				{name:'Small', openWith:'[size=50]', closeWith:'[/size]', className:'miu-btn-font-family'}
			]
		},
		{separator:'---------------'},
		{name:'Bulleted list', openWith:'[list]\n', closeWith:'\n[/list]', className:'miu-btn-ul'},
		{name:'Numeric list', openWith:'[list=[![Starting number]!]]\n', closeWith:'\n[/list]', className:'miu-btn-ol'},
		{name:'List item', openWith:'[*] ', className:'miu-btn-li'},
		{separator:'---------------'},
		{name:'Quotes', openWith:'[quote]', closeWith:'[/quote]', className:'miu-btn-blockquote'},
		{name:'Code', openWith:'[code]', closeWith:'[/code]', className:'miu-btn-code'},
		{separator:'---------------'},
		{name:'Clean', replaceWith:function(markitup) { return markitup.selection.replace(/\[(.*?)\]/g, "") }, className:'miu-btn-clean'},
		{name:'Preview', call:'preview', className:'miu-btn-tick'}
	]
}