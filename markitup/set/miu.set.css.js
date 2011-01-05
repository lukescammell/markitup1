/*
# markItUp!

Copyright (C) 2008 Jay Salvat
http://markitup.jaysalvat.com/

## Markup language: CSS

## Description
 - Basic CSS set. Feel free to add more tags.
 - A CSS editor set with Bold, Italic, Strike through, Lowercase, Uppercase.
 - Left/Center/Right/Justify Alignment, Text indent, Letter spacing, Line height.
 - Left/Top/Right/Bottom Padding and Margin, Background image and CSS file import.

### Tips
 - Alt+Padding button: Switch to margin
 - Ctrl+Enter: Quick insert comments
 - Shift+Enter: Quick insert Class name

#### Author
 - Kevin Papst
 - <http://www.kevinpapst.de/>
 - Feel free to drop a Comment :)

#### Initially written for the BIGACE CMS:
 - <http://www.bigace.de/>

## Install
 1. Download the zip file
 2. Unzip it in your markItUp! sets folder
 3. Modify your JS link to point at this set.js
*/

miu_set_css = {
	nameSpace:		"css", // Useful to prevent multi-instances CSS conflict
	onEnter:		{},
	onShiftEnter:		{keepDefault:false, placeHolder:'Your comment here', openWith:'\n\/* ', closeWith:' *\/'},
	onCtrlEnter:		{keepDefault:false, placeHolder:"classname", openWith:'\n.', closeWith:' { \n'},
	onTab:			{keepDefault:false, openWith:'  '},
	markupSet: [	
		{name:'Class', key:'N', placeHolder:'Properties here...', openWith:'.[![Class name]!] {\n', closeWith:'\n}', className:'miu-btn-tag'},
		{separator:'---------------'},

		{name:'Bold', key:'B', replaceWith:'font-weight:bold;', className:'miu-btn-strong'},
		{name:'Italic', key:'I', replaceWith:'font-style:italic;', className:'miu-btn-em'},
		{name:'Stroke through',  key:'S', replaceWith:'text-decoration:line-through;', className:'miu-btn-del'},
		{separator:'---------------' },

		{name:'Lowercase', key:'L', replaceWith:'text-transform:lowercase;', className:'miu-btn-text-lowercase'},
		{name:'Uppercase', key:'U', replaceWith:'text-transform:uppercase;', className:'miu-btn-text-uppercase'},
		{separator:'---------------' },

		{name:'Text indent', openWith:'text-indent:', placeHolder:'5px', closeWith:';', className:'miu-btn-text-indent'},
		{name:'Letter spacing', openWith:'letter-spacing:', placeHolder:'5px', closeWith:';', className:'miu-btn-text-letterspacing'},
		{name:'Line height', openWith:'line-height:', placeHolder:'1.5', closeWith:';', className:'miu-btn-text-lineheight'},
		{separator:'---------------' },

		{name:'Alignments', className:'miu-btn-text-align-left',
			dropMenu:[
				{name:'Left', replaceWith:'text-align:left;', className:'miu-btn-text-align-left'},
				{name:'Center', replaceWith:'text-align:center;', className:'miu-btn-text-align-center'},
				{name:'Right', replaceWith:'text-align:right;', className:'miu-btn-text-align-right'},
				{name:'Justify', replaceWith:'text-align:justify;', className:'miu-btn-text-align-justify'}
			]
		},
		{name:'Padding/Margin', className:'miu-btn-text-padding-left',
			dropMenu:[
				{name:'Top', openWith:'(!(padding|!|margin)!)-top:', placeHolder:'5px', closeWith:';', className:'miu-btn-text-padding-top'},
				{name:'Right', openWith:'(!(padding|!|margin)!)-right:', placeHolder:'5px', closeWith:';', className:'miu-btn-text-padding-right'},
				{name:'Bottom', openWith:'(!(padding|!|margin)!)-bottom:', placeHolder:'5px', closeWith:';', className:'miu-btn-text-padding-bottom'},
				{name:'Left', openWith:'(!(padding|!|margin)!)-left:', placeHolder:'5px', closeWith:';', className:'miu-btn-text-padding-left'}
			]
		},
		{separator:'---------------' },

		{name:'Background Image', replaceWith:'background:url([![Source:!:http://]!]) no-repeat 0 0;', className:'miu-btn-img'},
		{separator:'---------------' },

		{name:'Import CSS file', replaceWith:'@import "[![Source file:!:.css]!]";', className:'miu-btn-css'}
	]
}