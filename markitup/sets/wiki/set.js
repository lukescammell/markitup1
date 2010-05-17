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
		{name:'Heading 1', key:'1', openWith:'== ', closeWith:' ==', placeHolder:'Your title here...', className:'mui-btn-h1'},
		{name:'Heading 2', key:'2', openWith:'=== ', closeWith:' ===', placeHolder:'Your title here...', className:'mui-btn-h2'},
		{name:'Heading 3', key:'3', openWith:'==== ', closeWith:' ====', placeHolder:'Your title here...', className:'mui-btn-h3'},
		{name:'Heading 4', key:'4', openWith:'===== ', closeWith:' =====', placeHolder:'Your title here...', className:'mui-btn-h4'},
		{name:'Heading 5', key:'5', openWith:'====== ', closeWith:' ======', placeHolder:'Your title here...', className:'mui-btn-h5'},
		{separator:'---------------'},
		{name:'Bold', key:'B', openWith:"'''", closeWith:"'''", className:'mui-btn-strong'},
		{name:'Italic', key:'I', openWith:"''", closeWith:"''", className:'mui-btn-em'},
		{name:'Stroke through', key:'S', openWith:'<s>', closeWith:'</s>', className:'mui-btn-del'},
		{separator:'---------------'},
		{name:'Bulleted list', openWith:'(!(* |!|*)!)', className:'mui-btn-ul'},
		{name:'Numeric list', openWith:'(!(# |!|#)!)', className:'mui-btn-ol'},
		{separator:'---------------'},
		{name:'Picture', key:'P', replaceWith:'[[Image:[![Url:!:http://]!]|[![name]!]]]', className:'mui-btn-img'},
		{name:'Link', key:'L', openWith:'[[![Link]!] ', closeWith:']', placeHolder:'Your text to link here...', className:'mui-btn-a'},
		{name:'Url', openWith:'[[![Url:!:http://]!] ', closeWith:']', placeHolder:'Your text to link here...', className:'mui-btn-url'},
		{separator:'---------------'},
		{name:'Quotes', openWith:'(!(> |!|>)!)', placeHolder:'', className:'mui-btn-blockquote'},
		{name:'Code', openWith:'(!(<source lang="[![Language:!:php]!]">|!|<pre>)!)', closeWith:'(!(</source>|!|</pre>)!)', className:'mui-btn-code'},
		{separator:'---------------'},
		{name:'Preview', call:'preview', className:'mui-btn-tick'}
	]
}