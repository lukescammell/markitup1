// -------------------------------------------------------------------
// markItUp!
// -------------------------------------------------------------------
// Copyright (C) 2008 Jay Salvat
// http://markitup.jaysalvat.com/
// -------------------------------------------------------------------
// MarkDown tags example
// http://en.wikipedia.org/wiki/Markdown
// http://daringfireball.net/projects/markdown/
// -------------------------------------------------------------------
// Feel free to add more tags
// -------------------------------------------------------------------
myMarkdownSettings = {
    nameSpace:			"markdown", // Useful to prevent multi-instances CSS conflict
	previewParserPath:	'',
	onShiftEnter:		{keepDefault:false, openWith:'\n\n'},
	markupSet: [
		{name:'First Level Heading', key:'1', placeHolder:'Your title here...', closeWith:function(markItUp) { return miu.markdownTitle(markItUp, '=') }, className:'mui-btn-h1'},
		{name:'Second Level Heading', key:'2', placeHolder:'Your title here...', closeWith:function(markItUp) { return miu.markdownTitle(markItUp, '-') }, className:'mui-btn-h2'},
		{name:'Heading 3', key:'3', openWith:'### ', placeHolder:'Your title here...', className:'mui-btn-h3'},
		{name:'Heading 4', key:'4', openWith:'#### ', placeHolder:'Your title here...', className:'mui-btn-h4'},
		{name:'Heading 5', key:'5', openWith:'##### ', placeHolder:'Your title here...', className:'mui-btn-h5'},
		{name:'Heading 6', key:'6', openWith:'###### ', placeHolder:'Your title here...', className:'mui-btn-h6'},
		{separator:'---------------' },		
		{name:'Bold', key:'B', openWith:'**', closeWith:'**', className:'mui-btn-strong'},
		{name:'Italic', key:'I', openWith:'_', closeWith:'_', className:'mui-btn-em'},
		{separator:'---------------'},
		{name:'Bullet List', openWith:'- ', className:'mui-btn-ul'},
		{name:'Numbered List', openWith:function(markItUp) {
			return markItUp.line+'. ';
		}, className:'mui-btn-ol'},
		{separator:'---------------'},
		{name:'Picture', key:'P', replaceWith:'![[![Alternative text]!]]([![Url:!:http://]!] "[![Title]!]")', className:'mui-btn-img'},
		{name:'Link', key:'L', openWith:'[', closeWith:']([![Url:!:http://]!] "[![Title]!]")', placeHolder:'Your text to link here...', className:'mui-btn-a'},
		{separator:'---------------'},	
		{name:'Quote', openWith:'> ', className:'mui-btn-blockquote'},
		{name:'Code Block / Code', openWith:'(!(\t|!|`)!)', closeWith:'(!(`)!)', className:'mui-btn-code'},
		{separator:'---------------'},
		{name:'Preview', call:'preview', className:'mui-btn-tick'}
	]
}

// mIu nameSpace to avoid conflict.
miu = {
	markdownTitle: function(markItUp, char) {
		heading = '';
		n = $.trim(markItUp.selection||markItUp.placeHolder).length;
		for(i = 0; i < n; i++) {
			heading += char;
		}
		return '\n'+heading;
	}
}