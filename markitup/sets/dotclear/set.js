// -------------------------------------------------------------------
// markItUp!
// --------------------------------------------------------------------
// Copyright (C) 2008 Jay Salvat
// http://markitup.jaysalvat.com/
// -------------------------------------------------------------------
// Dotclear Wiki tags example
// -------------------------------------------------------------------
// Feel free to add more tags
// -------------------------------------------------------------------
myDotclearSettings = {
    nameSpace:			"dotclear", // Useful to prevent multi-instances CSS conflict
	previewParserPath:	'', // path to your DotClear parser
	onShiftEnter:		{keepDefault:false, replaceWith:'%%%\n'},
	onCtrlEnter:		{keepDefault:false, replaceWith:'\n\n'},
	markupSet: [
		{name:'Heading 1', key:'1', openWith:'!!!!!', placeHolder:'Your title here...', className:'mui-btn-h1'},
		{name:'Heading 2', key:'2', openWith:'!!!!', placeHolder:'Your title here...', className:'mui-btn-h2'},
		{name:'Heading 3', key:'3', openWith:'!!!', placeHolder:'Your title here...', className:'mui-btn-h3'},
		{name:'Heading 4', key:'4', openWith:'!!', placeHolder:'Your title here...', className:'mui-btn-h4'},
		{name:'Heading 5', key:'5', openWith:'!', placeHolder:'Your title here...', className:'mui-btn-h5'},
		{separator:'---------------'},
		{name:'Bold', key:'B', openWith:'__', closeWith:'__', className:'mui-btn-strong'}, 
		{name:'Italic', key:'I', openWith:"''", closeWith:"''", className:'mui-btn-em'}, 
		{name:'Stroke through', key:'S', openWith:'--', closeWith:'--', className:'mui-btn-del'}, 
		{separator:'---------------'},
		{name:'Bulleted list', openWith:'(!(* |!|*)!)', className:'mui-btn-ul'}, 
		{name:'Numeric list', openWith:'(!(# |!|#)!)', className:'mui-btn-ol'}, 
		{separator:'---------------'},
		{name:'Picture', key:"P", replaceWith:'(([![Url:!:http://]!]|[![Alternative text]!](!(|[![Position:!:L]!])!)))', className:'mui-btn-img'},
		{name:'Link', key:"L", openWith:"[", closeWith:'|[![Url:!:http://]!]|[![Language:!:en]!]|[![Title]!]]', placeHolder:'Your text to link here...', className:'mui-btn-a'}, 
		{separator:'---------------'},
		{name:'Quote', openWith:'{{', closeWith:'}}', className:'mui-btn-blockquote'}, 
		{name:'Code', openWith:'@@', closeWith:'@@', className:'mui-btn-code'}, 
		{separator:'---------------'},
		{name:'Preview', call:'preview', className:'mui-btn-tick'}
	]
}