// -------------------------------------------------------------------
// markItUp!
// -------------------------------------------------------------------
// Copyright (C) 2008 Jay Salvat
// http://markitup.jaysalvat.com/
// -------------------------------------------------------------------
// Mediawiki Wiki tags example
// -------------------------------------------------------------------
// Feel free to add more tags
// -------------------------------------------------------------------
myWikiSettings = {
	nameSpace:		"wiki", // Useful to prevent multi-instances CSS conflict
	previewParserPath:	'', // path to your Wiki parser
	onShiftEnter:		{keepDefault:false, replaceWith:'\n\n'},
	markupSet: [
		{name:'Heading 1', key:'1', openWith:'== ', closeWith:' ==', placeHolder:'Your title here...', className:'miu-btn-h1'},
		{name:'Heading 2', key:'2', openWith:'=== ', closeWith:' ===', placeHolder:'Your title here...', className:'miu-btn-h2'},
		{name:'Heading 3', key:'3', openWith:'==== ', closeWith:' ====', placeHolder:'Your title here...', className:'miu-btn-h3'},
		{name:'Heading 4', key:'4', openWith:'===== ', closeWith:' =====', placeHolder:'Your title here...', className:'miu-btn-h4'},
		{name:'Heading 5', key:'5', openWith:'====== ', closeWith:' ======', placeHolder:'Your title here...', className:'miu-btn-h5'},
		{separator:'---------------'},
		{name:'Bold', key:'B', openWith:"'''", closeWith:"'''", className:'miu-btn-strong'},
		{name:'Italic', key:'I', openWith:"''", closeWith:"''", className:'miu-btn-em'},
		{name:'Stroke through', key:'S', openWith:'<s>', closeWith:'</s>', className:'miu-btn-del'},
		{separator:'---------------'},
		{name:'Bulleted list', openWith:'(!(* |!|*)!)', className:'miu-btn-ul'},
		{name:'Numeric list', openWith:'(!(# |!|#)!)', className:'miu-btn-ol'},
		{separator:'---------------'},
		{name:'Picture', key:'P', replaceWith:'[[Image:[![Url:!:http://]!]|[![name]!]]]', className:'miu-btn-img'},
		{name:'Link', key:'L', openWith:'[[![Link]!] ', closeWith:']', placeHolder:'Your text to link here...', className:'miu-btn-a'},
		{name:'Url', openWith:'[[![Url:!:http://]!] ', closeWith:']', placeHolder:'Your text to link here...', className:'miu-btn-url'},
		{separator:'---------------'},
		{name:'Quotes', openWith:'(!(> |!|>)!)', placeHolder:'', className:'miu-btn-blockquote'},
		{name:'Code', openWith:'(!(<source lang="[![Language:!:php]!]">|!|<pre>)!)', closeWith:'(!(</source>|!|</pre>)!)', className:'miu-btn-code'},
		{separator:'---------------'},
		{name:'Preview', call:'preview', className:'miu-btn-tick'}
	]
}