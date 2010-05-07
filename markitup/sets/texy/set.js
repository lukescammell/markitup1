// ----------------------------------------------------------------------------
// markItUp!
// ----------------------------------------------------------------------------
// Copyright (C) 2008 Jay Salvat
// http://markitup.jaysalvat.com/
// ----------------------------------------------------------------------------
// Texy! set by Peter Kahoun
// http://kahi.cz
// ----------------------------------------------------------------------------
// Texy!
// http://texy.info
// Feel free to do anything with this.
// -------------------------------------------------------------------
myTexySettings = {
	nameSpace:		"texy", // Useful to prevent multi-instances CSS conflict
	previewParserPath:	'', // path to your Texy parser
	onShiftEnter:		{keepDefault:false, replaceWith:'\n\n'},
	markupSet: [
		{name:'Heading 1', key:'1', closeWith:function(markItUp) { return miu.texyTitle(markItUp, '#') }, placeHolder:'Your title here...', className:'mui-btn-h1'},
		{name:'Heading 2', key:'2', closeWith:function(markItUp) { return miu.texyTitle(markItUp, '*') }, placeHolder:'Your title here...', className:'mui-btn-h2'},
		{name:'Heading 3', key:'3', closeWith:function(markItUp) { return miu.texyTitle(markItUp, '=') }, placeHolder:'Your title here...', className:'mui-btn-h3'},
		{name:'Heading 4', key:'4', closeWith:function(markItUp) { return miu.texyTitle(markItUp, '-') }, placeHolder:'Your title here...', className:'mui-btn-h4'},
		{separator:'---------------' },
		{name:'Bold', key:'B', closeWith:'**', openWith:'**', className:'mui-btn-strong', placeHolder:'Your text here...'},
		{name:'Italic', key:'I', closeWith:'*', openWith:'*', className:'mui-btn-em', placeHolder:'Your text here...'},
		{separator:'---------------' },
		{name:'Bulleted list', openWith:'- ', className:'mui-btn-ul'},
		{name:'Numeric list', openWith:function(markItUp) { return markItUp.line+'. '; }, className:'mui-btn-ol'},
		{separator:'---------------' },
		{name:'Picture', openWith:'[* ', closeWith:' (!(.([![Alt text]!]))!) *]', placeHolder:'[![Url:!:http://]!]', className:'mui-btn-img'},
		{name:'Link', openWith:'"', closeWith:'":[![Url:!:http://]!]', placeHolder:'Your text to link...', className:'mui-btn-a' },
		{separator:'---------------' },
		{name:'Quotes', openWith:'> ', className:'mui-btn-blockquote'},
		{name:'Code block/Code in-line', openWith:'(!(/---[![Language:!:html]!]\n|!|`)!)', closeWith:'(!(\n\\---\n|!|`)!)', className:'mui-btn-code'},
		{name:'Texy off', closeWith:'\'\'', openWith:'\'\'', className:'mui-btn-no-formatting', placeHolder:'No texty! in here!'},
 		{separator:'---------------' },	
		{name:'Preview', call:'preview', className:'mui-btn-tick'}
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