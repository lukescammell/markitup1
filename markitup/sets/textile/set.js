// -------------------------------------------------------------------
// markItUp!
// -------------------------------------------------------------------
// Copyright (C) 2008 Jay Salvat
// http://markitup.jaysalvat.com/
// -------------------------------------------------------------------
// Textile tags example
// http://en.wikipedia.org/wiki/Textile_(markup_language)
// http://www.textism.com/
// -------------------------------------------------------------------
// Feel free to add more tags
// -------------------------------------------------------------------
myTextileSettings = {
	nameSpace:		"textile", // Useful to prevent multi-instances CSS conflict
	previewParserPath:	'', // path to your Textile parser
	onShiftEnter:		{keepDefault:false, replaceWith:'\n\n'},
	markupSet: [
		{name:'Heading 1', key:'1', openWith:'h1(!(([![Class]!]))!). ', placeHolder:'Your title here...', className:'miu-btn-h1'},
		{name:'Heading 2', key:'2', openWith:'h2(!(([![Class]!]))!). ', placeHolder:'Your title here...', className:'miu-btn-h2'},
		{name:'Heading 3', key:'3', openWith:'h3(!(([![Class]!]))!). ', placeHolder:'Your title here...', className:'miu-btn-h3'},
		{name:'Heading 4', key:'4', openWith:'h4(!(([![Class]!]))!). ', placeHolder:'Your title here...', className:'miu-btn-h4'},
		{name:'Heading 5', key:'5', openWith:'h5(!(([![Class]!]))!). ', placeHolder:'Your title here...', className:'miu-btn-h5'},
		{name:'Heading 6', key:'6', openWith:'h6(!(([![Class]!]))!). ', placeHolder:'Your title here...', className:'miu-btn-h6'},
		{name:'Paragraph', key:'P', openWith:'p(!(([![Class]!]))!). ', className:'miu-btn-p'},
		{separator:'---------------'},
		{name:'Bold', key:'B', closeWith:'*', openWith:'*', className:'miu-btn-strong'},
		{name:'Italic', key:'I', closeWith:'_', openWith:'_', className:'miu-btn-em'},
		{name:'Stroke through', key:'S', closeWith:'-', openWith:'-', className:'miu-btn-del'},
		{separator:'---------------'},
		{name:'Bullet list', openWith:'(!(* |!|*)!)', className:'miu-btn-ul'},
		{name:'Numbered list', openWith:'(!(# |!|#)!)', className:'miu-btn-ol'},
		{separator:'---------------'},
		{name:'Picture', replaceWith:'![![Source:!:http://]!]([![Alternative text]!])!', className:'miu-btn-img'},
		{name:'Link', openWith:'"', closeWith:'([![Title]!])":[![Link:!:http://]!]', placeHolder:'Your text to link here...', className:'miu-btn-a'},
		{separator:'---------------'},
		{name:'Quote', openWith:'bq(!(([![Class]!]))!). ', className:'miu-btn-blockquote'},
		{name:'Code', openWith:'@', closeWith:'@', className:'miu-btn-code'},
		{separator:'---------------'},
		{name:'Preview', call:'preview', className:'miu-btn-tick'}
	]
}