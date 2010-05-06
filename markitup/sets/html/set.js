// ----------------------------------------------------------------------------
// markItUp!
// ----------------------------------------------------------------------------
// Copyright (C) 2008 Jay Salvat
// http://markitup.jaysalvat.com/
// ----------------------------------------------------------------------------
// Html tags
// http://en.wikipedia.org/wiki/html
// ----------------------------------------------------------------------------
// Basic set. Feel free to add more tags
// ----------------------------------------------------------------------------
myHtmlSettings = {
    nameSpace:			"html", // Useful to prevent multi-instances CSS conflict
	onShiftEnter:		{keepDefault:false, replaceWith:'<br />\n'},
	onCtrlEnter:		{keepDefault:false, openWith:'\n<p>', closeWith:'</p>\n'},
	onTab:				{keepDefault:false, openWith:'	 '},
	markupSet: [
		{name:'Heading 1', key:'1', openWith:'<h1(!( class="[![Class]!]")!)>', closeWith:'</h1>', placeHolder:'Your title here...', className:'mui-btn-h1'},
		{name:'Heading 2', key:'2', openWith:'<h2(!( class="[![Class]!]")!)>', closeWith:'</h2>', placeHolder:'Your title here...', className:'mui-btn-h2'},
		{name:'Heading 3', key:'3', openWith:'<h3(!( class="[![Class]!]")!)>', closeWith:'</h3>', placeHolder:'Your title here...', className:'mui-btn-h3'},
		{name:'Heading 4', key:'4', openWith:'<h4(!( class="[![Class]!]")!)>', closeWith:'</h4>', placeHolder:'Your title here...', className:'mui-btn-h4'},
		{name:'Heading 5', key:'5', openWith:'<h5(!( class="[![Class]!]")!)>', closeWith:'</h5>', placeHolder:'Your title here...', className:'mui-btn-h5'},
		{name:'Heading 6', key:'6', openWith:'<h6(!( class="[![Class]!]")!)>', closeWith:'</h6>', placeHolder:'Your title here...', className:'mui-btn-h6'},
		{name:'Paragraph', openWith:'<p(!( class="[![Class]!]")!)>', closeWith:'</p>', className:'mui-btn-p'},
		{separator:'---------------'},
		{name:'Bold', key:'B', openWith:'(!(<strong>|!|<b>)!)', closeWith:'(!(</strong>|!|</b>)!)', className:'mui-btn-strong'},
		{name:'Italic', key:'I', openWith:'(!(<em>|!|<i>)!)', closeWith:'(!(</em>|!|</i>)!)', className:'mui-btn-em'},
		{name:'Stroke through', key:'S', openWith:'<del>', closeWith:'</del>', className:'mui-btn-del'},
		{separator:'---------------'},
		{name:'Bullet List', openWith:'<ul>\n', closeWith:'</ul>\n', className:'mui-btn-ul'},
		{name:'Numbered List', openWith:'<ol>\n', closeWith:'</ol>\n', className:'mui-btn-ol'},
		{name:'Add List Item', openWith:'<li>', closeWith:'</li>', className:'mui-btn-li'},
		{separator:'---------------'},
		{name:'Picture', key:'P', replaceWith:'<img src="[![Source:!:http://]!]" alt="[![Alternative text]!]" />', className:'mui-btn-img'},
		{name:'Link', key:'L', openWith:'<a href="[![Link:!:http://]!]"(!( title="[![Title]!]")!)>', closeWith:'</a>', placeHolder:'Your text to link...', className:'mui-btn-a'},
		{separator:'---------------'},
		{name:'Strip all markup from selection', replaceWith:function(markitup) { return markitup.selection.replace(/<(.*?)>/g, "")}, className:'mui-btn-clean'},
		{name:'Preview', call:'preview', className:'mui-btn-tick'}
	]
}