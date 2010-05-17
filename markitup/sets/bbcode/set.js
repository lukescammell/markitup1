// ----------------------------------------------------------------------------
// markItUp!
// ----------------------------------------------------------------------------
// Copyright (C) 2008 Jay Salvat
// http://markitup.jaysalvat.com/
// ----------------------------------------------------------------------------
// BBCode tags example
// http://en.wikipedia.org/wiki/Bbcode
// ----------------------------------------------------------------------------
// Feel free to add more tags
// ----------------------------------------------------------------------------
myBbcodeSettings = {
	nameSpace:		"bbcode", // Useful to prevent multi-instances CSS conflict
	previewParserPath:	'', // path to your BBCode parser
	markupSet: [
		{name:'Bold', key:'B', openWith:'[b]', closeWith:'[/b]', className:'mui-btn-strong'},
		{name:'Italic', key:'I', openWith:'[i]', closeWith:'[/i]', className:'mui-btn-em'},
		{name:'Underline', key:'U', openWith:'[u]', closeWith:'[/u]', className:'mui-btn-del'},
		{separator:'---------------'},
		{name:'Picture', key:'P', replaceWith:'[img][![Url]!][/img]', className:'mui-btn-img'},
		{name:'Link', key:'L', openWith:'[url=[![Url]!]]', closeWith:'[/url]', placeHolder:'Your text to link here...', className:'mui-btn-a'},
		{separator:'---------------'},
		{name:'Size', key:'S', openWith:'[size=[![Text size]!]]', closeWith:'[/size]', className:'mui-btn-font-family',
			dropMenu :[
				{name:'Big', openWith:'[size=200]', closeWith:'[/size]', className:'mui-btn-font-family'},
				{name:'Normal', openWith:'[size=100]', closeWith:'[/size]', className:'mui-btn-font-family'},
				{name:'Small', openWith:'[size=50]', closeWith:'[/size]', className:'mui-btn-font-family'}
			]
		},
		{separator:'---------------'},
		{name:'Bulleted list', openWith:'[list]\n', closeWith:'\n[/list]', className:'mui-btn-ul'},
		{name:'Numeric list', openWith:'[list=[![Starting number]!]]\n', closeWith:'\n[/list]', className:'mui-btn-ol'},
		{name:'List item', openWith:'[*] ', className:'mui-btn-li'},
		{separator:'---------------'},
		{name:'Quotes', openWith:'[quote]', closeWith:'[/quote]', className:'mui-btn-blockquote'},
		{name:'Code', openWith:'[code]', closeWith:'[/code]', className:'mui-btn-code'},
		{separator:'---------------'},
		{name:'Clean', replaceWith:function(markitup) { return markitup.selection.replace(/\[(.*?)\]/g, "") }, className:'mui-btn-clean'},
		{name:'Preview', call:'preview', className:'mui-btn-tick'}
	]
}