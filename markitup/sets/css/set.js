// ----------------------------------------------------------------------------
// markItUp!
// ----------------------------------------------------------------------------
// Copyright (C) 2008 Jay Salvat
// http://markitup.jaysalvat.com/
// ----------------------------------------------------------------------------
// CSS set by Kevin Papst
// http://www.kevinpapst.de/
// Initially written for the BIGACE CMS:
// http://www.bigace.de/
// ----------------------------------------------------------------------------
// Basic CSS set. Feel free to add more tags
// ----------------------------------------------------------------------------
myCssSettings = {
	nameSpace:		"css", // Useful to prevent multi-instances CSS conflict
	onEnter:		{},
	onShiftEnter:		{keepDefault:false, placeHolder:'Your comment here', openWith:'\n\/* ', closeWith:' *\/'},
	onCtrlEnter:		{keepDefault:false, placeHolder:"classname", openWith:'\n.', closeWith:' { \n'},
	onTab:			{keepDefault:false, openWith:'  '},
	markupSet: [	
		{name:'Class', key:'N', placeHolder:'Properties here...', openWith:'.[![Class name]!] {\n', closeWith:'\n}', className:'mui-btn-tag'},
		{separator:'---------------'},
		{name:'Bold', key:'B', replaceWith:'font-weight:bold;', className:'mui-btn-strong'},
		{name:'Italic', key:'I', replaceWith:'font-style:italic;', className:'mui-btn-em'},
		{name:'Stroke through',  key:'S', replaceWith:'text-decoration:line-through;', className:'mui-btn-del'},
		{separator:'---------------' },
		{name:'Lowercase', key:'L', replaceWith:'text-transform:lowercase;', className:'mui-btn-text-lowercase'},
		{name:'Uppercase', key:'U', replaceWith:'text-transform:uppercase;', className:'mui-btn-text-uppercase'},
		{separator:'---------------' },
		{name:'Text indent', openWith:'text-indent:', placeHolder:'5px', closeWith:';', className:'mui-btn-text-indent'},
		{name:'Letter spacing', openWith:'letter-spacing:', placeHolder:'5px', closeWith:';', className:'mui-btn-text-letterspacing'},
		{name:'Line height', openWith:'line-height:', placeHolder:'1.5', closeWith:';', className:'mui-btn-text-lineheight'},
		{separator:'---------------' },
		{name:'Alignments', className:'mui-btn-text-align-left',
			dropMenu:[
				{name:'Left', replaceWith:'text-align:left;', className:'mui-btn-text-align-left'},
				{name:'Center', replaceWith:'text-align:center;', className:'mui-btn-text-align-center'},
				{name:'Right', replaceWith:'text-align:right;', className:'mui-btn-text-align-right'},
				{name:'Justify', replaceWith:'text-align:justify;', className:'mui-btn-text-align-justify'}
			]
		},
		{name:'Padding/Margin', className:'mui-btn-text-padding-left',
			dropMenu:[
				{name:'Top', openWith:'(!(padding|!|margin)!)-top:', placeHolder:'5px', closeWith:';', className:'mui-btn-text-padding-top'},
				{name:'Right', openWith:'(!(padding|!|margin)!)-right:', placeHolder:'5px', closeWith:';', className:'mui-btn-text-padding-right'},
				{name:'Bottom', openWith:'(!(padding|!|margin)!)-bottom:', placeHolder:'5px', closeWith:';', className:'mui-btn-text-padding-bottom'},
				{name:'Left', openWith:'(!(padding|!|margin)!)-left:', placeHolder:'5px', closeWith:';', className:'mui-btn-text-padding-left'}
			]
		},
		{separator:'---------------' },
		{name:'Background Image', replaceWith:'background:url([![Source:!:http://]!]) no-repeat 0 0;', className:'mui-btn-img'},
		{separator:'---------------' },
		{name:'Import CSS file', replaceWith:'@import "[![Source file:!:.css]!]";', className:'mui-btn-css'}
	]
}