// ----------------------------------------------------------------------------
// markItUp!
// ----------------------------------------------------------------------------
// Copyright (C) 2008 Jay Salvat
// http://markitup.jaysalvat.com/
// ----------------------------------------------------------------------------
// Default set, HTML tags
// http://en.wikipedia.org/wiki/html
// ----------------------------------------------------------------------------
// Basic set. Feel free to add more tags
// ----------------------------------------------------------------------------
myDefaultSettings = {
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