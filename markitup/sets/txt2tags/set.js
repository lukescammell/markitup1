// -------------------------------------------------------------------
// markItUp!
// -------------------------------------------------------------------
// Copyright (C) 2009 Florent Gallaire <fgallaire@gmail.com>  
// Copyright (C) 2008 Jay Salvat
// http://markitup.jaysalvat.com/
// -------------------------------------------------------------------
// Txt2tags tags example
// http://txt2tags.sourceforge.net/markup.html
// -------------------------------------------------------------------
// Feel free to add more tags
// -------------------------------------------------------------------
myTxt2tagsSettings = {
	nameSpace:		"txt2tags", // Useful to prevent multi-instances CSS conflict
	previewParserPath:	'', // path to your Txt2tags parser
	onShiftEnter:		{keepDefault:false, replaceWith:'\n\n'},
	markupSet: [
		{name:'Heading 1', key:'1', openWith:'= ', closeWith:' =', placeHolder:'Your title here...', className:'mui-btn-h1'},
		{name:'Heading 2', key:'2', openWith:'== ', closeWith:' ==', placeHolder:'Your title here...', className:'mui-btn-h2'},
		{name:'Heading 3', key:'3', openWith:'=== ', closeWith:' ===', placeHolder:'Your title here...', className:'mui-btn-h3'},
		{name:'Heading 4', key:'4', openWith:'==== ', closeWith:' ====', placeHolder:'Your title here...', className:'mui-btn-h4'},
		{name:'Heading 5', key:'5', openWith:'===== ', closeWith:' =====', placeHolder:'Your title here...', className:'mui-btn-h5'},
		{separator:'---------------'},
		{name:'Bold', key:'B', openWith:'**', closeWith:'**', className:'mui-btn-strong'},
		{name:'Italic', key:'I', openWith:'//', closeWith:'//', className:'mui-btn-em'},
		{name:'Underline', key:'U', openWith:'__', closeWith:'__', className:'mui-btn-underlined'},
		{name:'Strike', key:'S', openWith:'--', closeWith:'--', className:'mui-btn-del'},
		{separator:'---------------'},
		{name:'Bullet list', openWith:'- ', className:'mui-btn-ul'},
		{name:'Numbered list', openWith:'+ ', className:'mui-btn-ol'},
		{separator:'---------------'},
		{name:'Picture', key:'P', openWith:'[', closeWith:']', placeHolder:'Your picture here...', className:'mui-btn-img'},
		{name:'Link', key:'L', openWith:'[', closeWith:' [![Link:!:http://]!]]', placeHolder:'Your text to link here...', className:'mui-btn-a'},
		{separator:'---------------'},
		{name:'Quote', openWith:'\t', className:'mui-btn-blockquote'},
		{name:'Code', openWith:'``', closeWith:'``', className:'mui-btn-code'},
		{name:'Raw', key:'R', openWith:'""', closeWith:'""', placeHolder:'No txt2tags in here!', className:'mui-btn-no-formatting'},
		{separator:'---------------'},
		{name:'Preview', call:'preview', className:'mui-btn-tick'}
	]
}