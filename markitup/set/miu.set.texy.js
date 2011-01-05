/*
# markItUp!

Copyright (C) 2008 Jay Salvat
http://markitup.jaysalvat.com/

## Markup language: Texy! <http://texy.info>

## Description
 - A basic Texy markup set with Headings, Bold, Italic, Picture, Link, Lists, Quotes and Codes (Inline and Block).

## Install
 1. Download the zip file
 2. Unzip it in your markItUp! sets folder
 3. Modify your JS link to point at this set.js
*/

miu_set_texy = {
	nameSpace:		"texy", // Useful to prevent multi-instances CSS conflict
	previewParserPath:	'', // path to your Texy parser
	onShiftEnter:		{keepDefault:false, replaceWith:'\n\n'},
	markupSet: [
		{name:'Heading 1', key:'1', closeWith:function(markItUp) { return miu.texyTitle(markItUp, '#') }, placeHolder:'Your title here...', className:'miu-btn-h1'},
		{name:'Heading 2', key:'2', closeWith:function(markItUp) { return miu.texyTitle(markItUp, '*') }, placeHolder:'Your title here...', className:'miu-btn-h2'},
		{name:'Heading 3', key:'3', closeWith:function(markItUp) { return miu.texyTitle(markItUp, '=') }, placeHolder:'Your title here...', className:'miu-btn-h3'},
		{name:'Heading 4', key:'4', closeWith:function(markItUp) { return miu.texyTitle(markItUp, '-') }, placeHolder:'Your title here...', className:'miu-btn-h4'},
		{separator:'---------------' },
		{name:'Bold', key:'B', closeWith:'**', openWith:'**', className:'miu-btn-strong', placeHolder:'Your text here...'},
		{name:'Italic', key:'I', closeWith:'*', openWith:'*', className:'miu-btn-em', placeHolder:'Your text here...'},
		{separator:'---------------' },
		{name:'Bulleted list', openWith:'- ', className:'miu-btn-ul'},
		{name:'Numeric list', openWith:function(markItUp) { return markItUp.line+'. '; }, className:'miu-btn-ol'},
		{separator:'---------------' },
		{name:'Picture', openWith:'[* ', closeWith:' (!(.([![Alt text]!]))!) *]', placeHolder:'[![Url:!:http://]!]', className:'miu-btn-img'},
		{name:'Link', openWith:'"', closeWith:'":[![Url:!:http://]!]', placeHolder:'Your text to link...', className:'miu-btn-a' },
		{separator:'---------------' },
		{name:'Quotes', openWith:'> ', className:'miu-btn-blockquote'},
		{name:'Code block/Code in-line', openWith:'(!(/---[![Language:!:html]!]\n|!|`)!)', closeWith:'(!(\n\\---\n|!|`)!)', className:'miu-btn-code'},
		{name:'Texy off', closeWith:'\'\'', openWith:'\'\'', className:'miu-btn-no-formatting', placeHolder:'No texty! in here!'},
 		{separator:'---------------' },	
		{name:'Preview', call:'preview', className:'miu-btn-tick'}
	]
}

miu = {
	texyTitle: function (markItUp, char) {
		heading = '';
		n = $.trim(markItUp.selection || markItUp.placeHolder).length;
		for(i = 0; i < n; i++)	{
			heading += char;
		}
		return '\n'+heading;
	}
}