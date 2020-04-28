import sketch from 'sketch';
const functions= require('./functions.js');

var page, pageInfo;
// Config

let Rectangle = require('sketch/dom').Rectangle;
let TextDom = require('sketch/dom').Text;
let Artboard = require('sketch/dom').Artboard
let Settings = require('sketch/settings');
let Style = require('sketch/dom').Style;
let SharedStyle = require('sketch/dom').SharedStyle;


export function getSettings(context) {
  DarkModeSystem(context,"settings");
  
}
export function deleteAll(context) {
  DarkModeSystem(context,"delete");
  
}
export function documentColors(context) {
  DarkModeSystem(context,"colors");
  
}
export function DeleteAllSettings(context) {
  DarkModeSystem(context,"deletesettings");
}

export function switchDark(context) {
  DarkModeSystem(context,"switchDark");
}
export function switchLight(context) {
  DarkModeSystem(context,"switchLight");
}


export function createDarkmode(context) {
  DarkModeSystem(context,"darkmode");
  
}


function DarkModeSystem(context,type) {
  /*
  if(document.colorSpace !== ColorSpace.P3){
    document.changeColorSpace(ColorSpace.P3, true);
  }
  */
  var labels_alignments =[ "Left", "Right", "Center"];

  var pluginName = "DarkMode System",
	pluginDomain = "DarkModeSystem";

  var document = sketch.getSelectedDocument();
  
  
  var fieldHeight = 22,
  fieldWidth = 60,
  labelHeight = 16,
  leftColWidth = 120,
  settingPad = 10,
  settingX = 0,
  settingY = 30,
  switchHeight = 16,
  textOffset = 2,
  windowHeight =(labelHeight*7)+(settingPad*7)+50,
  windowWidth = 600;
  
  
  // Setting variables
  var get_settign_S=Settings.documentSettingForKey(document, 'Styles');
  if(get_settign_S == null){
    Settings.setDocumentSettingForKey(document, 'Styles', []);

  }


  // Setting variables
  var get_settign_C=Settings.documentSettingForKey(document, 'Styles_Containers');
  if(get_settign_C == null){
    Settings.setDocumentSettingForKey(document, 'Styles_Containers', []);

  }

  // Setting variables
  var get_settign_L=Settings.documentSettingForKey(document, 'Styles_Layers');
  if(get_settign_L == null){
    Settings.setDocumentSettingForKey(document, 'Styles_Layers', []);

  }

  // Setting variables
  var get_settign_T=Settings.documentSettingForKey(document, 'Styles_Texts');
  if(get_settign_T == null){
    Settings.setDocumentSettingForKey(document, 'Styles_Texts', []);

  }


  // ------- ------- ------- -------
  // darkmode AREA
	// ------- ------- ------- -------  
	if (type && type == "darkmode") {
    console.log("entered darkmode");
    var document = sketch.getSelectedDocument();
    var s_styles= Settings.documentSettingForKey(document, 'Styles');
    //Settings.setDocumentSettingForKey(document, 'Font', groupdefaultFont.indexOfSelectedItem());
    
    
    //create Modal
    var s_colors= Settings.documentSettingForKey(document, 'colors');

		var alert = NSAlert.alloc().init(),
		alertIconPath = context.plugin.urlForResourceNamed("icon.png").path(),
		alertIcon = NSImage.alloc().initByReferencingFile(alertIconPath),
		alertContent = NSView.alloc().init();
    alertContent = NSView.alloc().initWithFrame(NSMakeRect(0, 0, windowWidth, windowHeight));


    //explaining process
    //FONT FAMILY
    var col_width= windowWidth/4 - 10;
      var groupdefaultFont_label = functions.createLabel("Clean Unvalid Settings",12,NSMakeRect(0,settingY + textOffset,col_width,labelHeight));
    alertContent.addSubview(groupdefaultFont_label);
    var groupdefaultFont_label = functions.createLabel("Sync Layers with SharedStyles",12,NSMakeRect(col_width+10,settingY + textOffset,col_width,labelHeight));
    alertContent.addSubview(groupdefaultFont_label);
    var groupdefaultFont_label = functions.createLabel("Create DarkMode Version",12,NSMakeRect((col_width+10)*2,settingY + textOffset,col_width,labelHeight));
    alertContent.addSubview(groupdefaultFont_label);
    var groupdefaultFont_label = functions.createLabel("Switch to DarkMode ",12,NSMakeRect((col_width+10)*3,settingY + textOffset,col_width,labelHeight));
    alertContent.addSubview(groupdefaultFont_label);

    settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + 5;
    var groupdefaultFont_label = functions.createBoldLabel("Step 1",12,NSMakeRect(0,settingY + textOffset,col_width,labelHeight));
    alertContent.addSubview(groupdefaultFont_label);
    var groupdefaultFont_label = functions.createBoldLabel("Step 2",12,NSMakeRect((col_width+10),settingY + textOffset,col_width,labelHeight));
    alertContent.addSubview(groupdefaultFont_label);
    var groupdefaultFont_label = functions.createBoldLabel("Step 3",12,NSMakeRect((col_width+10)*2,settingY + textOffset,col_width,labelHeight));
    alertContent.addSubview(groupdefaultFont_label);
    var groupdefaultFont_label = functions.createBoldLabel("Step 4",12,NSMakeRect((col_width+10)*3,settingY + textOffset,col_width,labelHeight));
    alertContent.addSubview(groupdefaultFont_label);

    settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
    var progress = functions.createColoredBlock("#fa6a00", NSMakeRect(0,settingY,col_width,12), false);
    alertContent.addSubview(progress);
    var progress = functions.createColoredBlock("#b25f29", NSMakeRect((col_width+10),settingY,col_width,12), false);
    alertContent.addSubview(progress);
    var progress = functions.createColoredBlock("#66422c", NSMakeRect((col_width+10)*2,settingY,col_width,12), false);
    alertContent.addSubview(progress);
    var progress = functions.createColoredBlock("#2d2e38", NSMakeRect((col_width+10)*3,settingY,col_width,12), false);
    alertContent.addSubview(progress);


    settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
    var groupdefaultFont_label = functions.createBoldLabel("Process Overview",15,NSMakeRect(0,settingY + textOffset,windowWidth,labelHeight));
    alertContent.addSubview(groupdefaultFont_label);



    //FONT FAMILY
    var pages_available=[];
    for(var i=0; i<document.pages.length; i++){
      var all_shapes= sketch.find('Shape', document.pages[i]).length;
      var all_shapesPaths= sketch.find('ShapePath', document.pages[i]).length;
      var all_texts= sketch.find('Text', document.pages[i]).length;
      var total= all_shapes+all_shapesPaths+all_texts;
      pages_available.push(document.pages[i].name+" - "+total);
    }

    settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + (settingPad*3);
    var selected_page = functions.createPopUpButton(pages_available,0,NSMakeRect(0,settingY,(windowWidth/2),fieldHeight));
    alertContent.addSubview(selected_page);
    

    settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
    var groupdefaultFont_label = functions.createBoldLabel("Select Page to Transform",15,NSMakeRect(0,settingY + textOffset,windowWidth,labelHeight));
    alertContent.addSubview(groupdefaultFont_label);

    

		alert.setIcon(alertIcon);
		alert.setMessageText("Create Dark Mode System");
		alert.setInformativeText("This might take a while....");

    alert.accessoryView = alertContent;

      //BUTTONS
      var buttonOrganize = alert.addButtonWithTitle("Create Dark Mode");
      var buttonCancel = alert.addButtonWithTitle("Cancel");
      var responseCode = alert.runModal();
  
  
      if (responseCode == 1000) { //create dark mode 
          var all_settings_l= Settings.documentSettingForKey(document, 'Styles_Layers');
          var reviewed_Settings_l= functions.reviewSettings( document, all_settings_l);
          Settings.setDocumentSettingForKey(document, 'Styles_Layers', reviewed_Settings_l);


          var all_settings_c= Settings.documentSettingForKey(document, 'Styles_Containers');
          var reviewed_Settings_c= functions.reviewSettings( document, all_settings_c);
          Settings.setDocumentSettingForKey(document, 'Styles_Containers', reviewed_Settings_c);

          var all_settings_t= Settings.documentSettingForKey(document, 'Styles_Texts');
          var reviewed_Settings_t= functions.reviewSettings( document, all_settings_t);
          Settings.setDocumentSettingForKey(document, 'Styles_Texts', reviewed_Settings_t);

          

        
          var s_page= selected_page.indexOfSelectedItem();
          
          var all_shapes= sketch.find('Shape', document.pages[s_page]);
          var all_shapesPaths= sketch.find('ShapePath', document.pages[s_page]);
          var all_texts= sketch.find('Text', document.pages[s_page]);


          var new_styles= functions.syncLayerwithStyles_best(Settings, sketch, document, s_page);

          document.sharedLayerStyles= new_styles.layer;
          document.sharedTextStyles= new_styles.text;

          var count_added=document.sharedLayerStyles.length+document.sharedTextStyles.length;

          var new_styles_ids=new_styles.new_styles;      
          var new_styles_withdark= functions.createDarkModeStyle(Settings, document, new_styles.layer, new_styles.text, new_styles.new_styles);

          Settings.setDocumentSettingForKey(document, 'Styles', new_styles_withdark.settings);
          Settings.setDocumentSettingForKey(document, 'Styles_Containers', new_styles_withdark.settings_c);
          Settings.setDocumentSettingForKey(document, 'Styles_Layers', new_styles_withdark.settings_l);
          Settings.setDocumentSettingForKey(document, 'Styles_Texts', new_styles_withdark.settings_t);

          document.sharedLayerStyles=  new_styles_withdark.layer; 
          document.sharedTextStyles=  new_styles_withdark.text; 

         // functions.SwitchDarkMode(document ,layers, new_styles_withdark.layer, new_styles_withdark.text, true);
         var count= functions.SwitchDarkMode_best(Settings, sketch, document, s_page , new_styles_withdark.layer, new_styles_withdark.text, true);

        if(count>0){
          sketch.UI.message(' Created Dark Mode version in '+count+' Layers Sucessfully!'); 
        }else{
          sketch.UI.message(" All layers are already in Light Mode or haven't created a DarkMode System"); 

        }   

      }
  }
  








	// ------- ------- ------- -------
  // switchLight AREA
	// ------- ------- ------- -------  
	else if (type && type == "switchDark") {
    windowHeight = 90;
    windowWidth = 300;

    var document = sketch.getSelectedDocument();
    var s_styles= Settings.documentSettingForKey(document, 'Styles');
    //Settings.setDocumentSettingForKey(document, 'Font', groupdefaultFont.indexOfSelectedItem());
    
    
    //create Modal
    var s_colors= Settings.documentSettingForKey(document, 'colors');


		var alert = NSAlert.alloc().init(),
		alertIconPath = context.plugin.urlForResourceNamed("icon.png").path(),
		alertIcon = NSImage.alloc().initByReferencingFile(alertIconPath),
		alertContent = NSView.alloc().init();
    alertContent = NSView.alloc().initWithFrame(NSMakeRect(0, 0, windowWidth, windowHeight));



    //FONT FAMILY
    var pages_available=[];
    for(var i=0; i<document.pages.length; i++){
      //var all_shapes= sketch.find('Shape', document.pages[i]).length;
      //var all_shapesPaths= sketch.find('ShapePath', document.pages[i]).length;
      //var all_texts= sketch.find('Text', document.pages[i]).length;
      //var total= all_shapes+all_shapesPaths+all_texts;
      pages_available.push(document.pages[i].name);
    }

    var selected_page = functions.createPopUpButton(pages_available,0,NSMakeRect(0,settingY,windowWidth,fieldHeight));
    alertContent.addSubview(selected_page);
    

    settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
    var groupdefaultFont_label = functions.createBoldLabel("Select Page to Transform",15,NSMakeRect(0,settingY + textOffset,windowWidth,labelHeight));
    alertContent.addSubview(groupdefaultFont_label);

    

		alert.setIcon(alertIcon);
		alert.setMessageText("Switch to Light Mode ");
    alert.accessoryView = alertContent;

      //BUTTONS
      var buttonOrganize = alert.addButtonWithTitle("Switch Dark");
      var buttonCancel = alert.addButtonWithTitle("Cancel");
      var responseCode = alert.runModal();
  
  
      if (responseCode == 1000) { //create dark mode 
        var s_page= selected_page.indexOfSelectedItem();
        //functions.SwitchDarkMode(document ,layers, new_styles_withdark.layer, new_styles_withdark.text, false);
        var count= functions.SwitchDarkMode_best(Settings, sketch, document, s_page , document.sharedLayerStyles, document.sharedTextStyles, true);

        if(count>0){
          sketch.UI.message(' Switched '+count+' Layers to Dark Mode Sucessfully!'); 
        }else{
          sketch.UI.message(" All layers are already in Dark Mode or haven't created a DarkMode System"); 

        }
    }
  }

  

  	// ------- ------- ------- -------
  // switchLight AREA
	// ------- ------- ------- -------  
	else if (type && type == "switchLight") {
    windowHeight = 90;
    windowWidth = 300;

    var document = sketch.getSelectedDocument();
    var s_styles= Settings.documentSettingForKey(document, 'Styles');
    //Settings.setDocumentSettingForKey(document, 'Font', groupdefaultFont.indexOfSelectedItem());
    
    
    //create Modal
    var s_colors= Settings.documentSettingForKey(document, 'colors');


		var alert = NSAlert.alloc().init(),
		alertIconPath = context.plugin.urlForResourceNamed("icon.png").path(),
		alertIcon = NSImage.alloc().initByReferencingFile(alertIconPath),
		alertContent = NSView.alloc().init();
    alertContent = NSView.alloc().initWithFrame(NSMakeRect(0, 0, windowWidth, windowHeight));



    //FONT FAMILY
    var pages_available=[];
    for(var i=0; i<document.pages.length; i++){
      //var all_shapes= sketch.find('Shape', document.pages[i]).length;
      //var all_shapesPaths= sketch.find('ShapePath', document.pages[i]).length;
      //var all_texts= sketch.find('Text', document.pages[i]).length;
      //var total= all_shapes+all_shapesPaths+all_texts;
      pages_available.push(document.pages[i].name);
    }

    var selected_page = functions.createPopUpButton(pages_available,0,NSMakeRect(0,settingY,windowWidth,fieldHeight));
    alertContent.addSubview(selected_page);
    

    settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
    var groupdefaultFont_label = functions.createBoldLabel("Select Page to Transform",15,NSMakeRect(0,settingY + textOffset,windowWidth,labelHeight));
    alertContent.addSubview(groupdefaultFont_label);

    

		alert.setIcon(alertIcon);
		alert.setMessageText("Switch to Light Mode ");
    alert.accessoryView = alertContent;

      //BUTTONS
      var buttonOrganize = alert.addButtonWithTitle("Switch Light");
      var buttonCancel = alert.addButtonWithTitle("Cancel");
      var responseCode = alert.runModal();
  
  
      if (responseCode == 1000) { //create dark mode 
        var s_page= selected_page.indexOfSelectedItem();
        //functions.SwitchDarkMode(document ,layers, new_styles_withdark.layer, new_styles_withdark.text, false);
        var count= functions.SwitchDarkMode_best(Settings, sketch, document, s_page , document.sharedLayerStyles, document.sharedTextStyles, false);

        if(count>0){
          sketch.UI.message(' Switched '+count+' Layers to Light Mode Sucessfully!'); 
        }else{
          sketch.UI.message(" All layers are already in Light Mode or haven't created a DarkMode System"); 

        }
    }
  }




  
	// ------- ------- ------- -------
  // SETTINGS AREA
	// ------- ------- ------- -------  
	else if (type && type == "settings") {

    windowHeight = 460;
    windowWidth = 800;
    var all_settings_c= Settings.documentSettingForKey(document, 'Styles_Containers');
    var all_settings_l= Settings.documentSettingForKey(document, 'Styles_Layers');
    var all_settings_t= Settings.documentSettingForKey(document, 'Styles_Texts');
    var scrolHeight= (((all_settings_c.length+all_settings_l.length+all_settings_t.length)*(labelHeight+settingPad)))*2;

		var alert = NSAlert.alloc().init(),
		alertIconPath = context.plugin.urlForResourceNamed("icon.png").path(),
    alertIcon = NSImage.alloc().initByReferencingFile(alertIconPath),

    //scroll
    alertscroll = NSScrollView.alloc().initWithFrame(NSMakeRect(0, 0, windowWidth, windowHeight)),
    
    //content
    alertContent = NSView.alloc().initWithFrame(NSMakeRect(0, 0, windowWidth, scrolHeight));
    alertContent.setFlipped(1);


    alertscroll.setHasVerticalScroller(1);
    alertscroll.setDocumentView(alertContent);  
    
    var col_1=440
    var col=(windowWidth/2)-(col_1/2)-10+100;

    //LABELS
    var title_color_0 = functions.createBoldLabel("Type",12,NSMakeRect(0,settingY ,col_1,labelHeight));
    alertContent.addSubview(title_color_0);
    var title_color_1 = functions.createBoldLabel("In Colored",12,NSMakeRect(120,settingY ,col_1,labelHeight));
    alertContent.addSubview(title_color_1);
    var title_color_2 = functions.createBoldLabel("Light Style",12,NSMakeRect((col_1/2)-10,settingY ,col,labelHeight));
    alertContent.addSubview(title_color_2);
    var title_color_3 = functions.createBoldLabel("Dark Style",12,NSMakeRect((col+(col_1/2)-10),settingY ,col,labelHeight));
    alertContent.addSubview(title_color_3);

    var light_name=[];
    var dark_name=[];
    var type=[];
    var colored_container=[];
    //console.log(all_settings);

    for(var j=0; j<3; j++){
      var i=0;
      var all_settings;

      if(j==0){
            all_settings= all_settings_c;
      }else if(j==1){
            all_settings= all_settings_l;
      }else{
            all_settings= all_settings_t;
      }
      for(var k=0; k<all_settings.length;k++){
        settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
        
        var dark_id= all_settings[i].dark;
        var light_id= all_settings[i].light;
    
        if(all_settings[i].type=="text"){
          var sharedStyle_light = document.getSharedTextStyleWithID(light_id);
          var sharedStyle_dark = document.getSharedTextStyleWithID(dark_id);
          type[i] = functions.createLabel(all_settings[i].element,12,NSMakeRect(0,settingY + textOffset,col_1,labelHeight));
          alertContent.addSubview(type[i]);
        }else{
          var sharedStyle_light = document.getSharedLayerStyleWithID(light_id);
          var sharedStyle_dark = document.getSharedLayerStyleWithID(dark_id);
          type[i] = functions.createLabel(all_settings[i].element,12,NSMakeRect(0,settingY + textOffset,col_1,labelHeight));
          alertContent.addSubview(type[i]);
          
        }
          //console.log(sharedStyle_dark);
          //console.log(sharedStyle_light);
          colored_container[i] = functions.createLabel(String(all_settings[i].colored_container),12,NSMakeRect(120,settingY + textOffset,col_1,labelHeight));
          alertContent.addSubview(colored_container[i]);

        if(sharedStyle_light===undefined || sharedStyle_dark===undefined){
          light_name[i] = functions.createLabel("-",12,NSMakeRect((col_1/2)-10,settingY + textOffset,windowWidth-leftColWidth,labelHeight));
          alertContent.addSubview(light_name[i]);
          dark_name[i] = functions.createLabel("-",12,NSMakeRect((col+(col_1/2)-10),settingY + textOffset,windowWidth-leftColWidth,labelHeight));
          alertContent.addSubview(dark_name[i]);
        // console.log("there is one settings missing");
        }else{
          light_name[i] = functions.createLabel(sharedStyle_light.name,12,NSMakeRect((col_1/2)-10,settingY + textOffset,windowWidth-leftColWidth,labelHeight));
          alertContent.addSubview(light_name[i]);
          dark_name[i] = functions.createLabel(sharedStyle_dark.name,12,NSMakeRect((col+(col_1/2)-10),settingY + textOffset,windowWidth-leftColWidth,labelHeight));
          alertContent.addSubview(dark_name[i]);
        }
        i++;
      }

    }

    alert.setIcon(alertIcon);
		alert.setMessageText("Edit Settings");
		alert.setInformativeText("Here you can setup some of the variables that help you generate and edit your DarkMode Systems.");

		alert.accessoryView = alertscroll;
		var responseCode = alert.runModal();

		if (responseCode == 1000) {
      return false;
			
		} else return false;
  }












 // ------------------------------------------------
  // create a Delete All Style System
  // ------------------------------------------------
  else if (type && type == "deletesettings") {
    windowHeight = 10;
    windowWidth = 400;
    
    var alert = NSAlert.alloc().init(),
    alertIconPath = context.plugin.urlForResourceNamed("icon.png").path(),
    alertIcon = NSImage.alloc().initByReferencingFile(alertIconPath),
    alertContent = NSView.alloc().init();
    alertContent = NSView.alloc().initWithFrame(NSMakeRect(0, 0, windowWidth, windowHeight));

    alert.setIcon(alertIcon);
    alert.setMessageText("Delete All Settings ");
    alert.setInformativeText("Are you Sure You want to delete all "+get_settign_S.length+" styles? This will not delete the shared styles connected to the layers, but the setting connecting the 2.");
    alert.accessoryView = alertContent;


    //BUTTONS
    var buttonOrganize = alert.addButtonWithTitle("Delete All");
    var buttonOrganize2 = alert.addButtonWithTitle("Delete Unused");
    var buttonCancel = alert.addButtonWithTitle("Cancel");
    // RUN MODAL
    var responseCode = alert.runModal();
   // log(styles_list);
    if (responseCode == 1000) {
      var all_settings_c= Settings.documentSettingForKey(document, 'Styles_Containers');
      var all_settings_l= Settings.documentSettingForKey(document, 'Styles_Layers');
      var all_settings_t= Settings.documentSettingForKey(document, 'Styles_Texts');


      Settings.setDocumentSettingForKey(document, 'Styles_Containers', []);
      Settings.setDocumentSettingForKey(document, 'Styles_Layers', []);
      Settings.setDocumentSettingForKey(document, 'Styles_Texts', []);


   
      sketch.UI.message(' Deleted All! '+all_settings_c.length+' '+all_settings_l.length+' '+all_settings_t.length+' stylesmmm, sucessfully!');


    }else if (responseCode == 1001) {
      var all_settings_l= Settings.documentSettingForKey(document, 'Styles_Layers');
      var reviewed_Settings_l= functions.reviewSettings( document, all_settings_l);
      Settings.setDocumentSettingForKey(document, 'Styles_Layers', reviewed_Settings_l);


      var all_settings_c= Settings.documentSettingForKey(document, 'Styles_Containers');
      var reviewed_Settings_c= functions.reviewSettings( document, all_settings_c);
      Settings.setDocumentSettingForKey(document, 'Styles_Containers', reviewed_Settings_c);

      var all_settings_t= Settings.documentSettingForKey(document, 'Styles_Texts');
      var reviewed_Settings_t= functions.reviewSettings( document, all_settings_t);
      Settings.setDocumentSettingForKey(document, 'Styles_Texts', reviewed_Settings_t);

      var deleted= (all_settings_c.length-reviewed_Settings_c.length)+ (all_settings_t.length-reviewed_Settings_t.length)+ (all_settings_l.length-reviewed_Settings_l.length);

      sketch.UI.message(' Deleted '+deleted+' Settings , sucessfully! You now have '+(reviewed_Settings_c.length+reviewed_Settings_t.length+reviewed_Settings_l.length)+" Settings!");

    }

  }


      
  // ------- ------- ------- -------
  // Colors AREA
	// ------- ------- ------- -------  
	else if (type && type == "colors") {
    var count=0;
   
   
    //Layer styles COlors
    var colors_in_layer_styles= [];
    var colors_in_layer_styles_names= [];
    var styles_layer = document.sharedLayerStyles;
    var s_colors= Settings.documentSettingForKey(document, 'colors');

    //console.log(styles_layer);


    //COLORS
    var colors= s_colors;
    var groupdefaultColorsCode = [];
    var groupdefaultColorsCode_dark = [];
    var groupdefaultColorsCode_block = [];
    var groupdefaultColorsCode_block_dark = [];
    var groupdefaultColorsName = [];

    var groupdefaultColorsCode_textstyles = [];
    var groupdefaultColorsCode_block_textstyles = [];
    var groupdefaultColorsName_textstyles = [];

    var groupdefaultColorsCode_layerstyles = [];
    var groupdefaultColorsCode_block_layerstyles = [];
    var groupdefaultColorsName_layerstyles = [];



    for(var i=0; i<styles_layer.length; i++){
      if( styles_layer[i].style.fills.length>0){

        var layer_style_color= styles_layer[i].style.fills[0].color;
        var repeated=0;
        
        for( var j=0; j<colors.length; j++){
          if( layer_style_color == colors[j].code){
            repeated++;
            break;
          }

        }

        for( var k=0; k<colors_in_layer_styles.length; k++){
          if( layer_style_color == colors_in_layer_styles[k]){
            repeated++;
            break;
          }
        }
        if(repeated==0){
          colors_in_layer_styles.push(layer_style_color);
          colors_in_layer_styles_names.push(styles_layer[i].name);
        }


    }
  }


    //Text styles COlors
    var styles_list = document.sharedTextStyles;
    var colors_in_text_styles= [];

    for(var i=0; i<styles_list.length; i++){
      var text_style_color= styles_list[i].style.textColor;
      //console.log(text_style_color);
      var repeated=0;
      
      for( var j=0; j<colors.length; j++){
        if( text_style_color == colors[j].code){
          repeated++;
          break;
        }

      }

      for( var k=0; k<colors_in_text_styles.length; k++){
        if( text_style_color == colors_in_text_styles[k]){
          repeated++;
          break;
        }
      }
      
      if(repeated==0 && text_style_color!=undefined){
        colors_in_text_styles.push(text_style_color);
      }

    }
   // Settings.setDocumentSettingForKey(document, 'colors', []);


    windowHeight = 100 + (s_colors.length*(fieldHeight+settingPad)
                    +(colors_in_layer_styles.length* (fieldHeight+settingPad))
                    +(colors_in_text_styles.length* (fieldHeight+settingPad))+100);
    windowWidth = 600;

		var alert = NSAlert.alloc().init(),
		alertIconPath = context.plugin.urlForResourceNamed("icon.png").path(),
		alertIcon = NSImage.alloc().initByReferencingFile(alertIconPath),
		alertContent = NSView.alloc().init();
    alertContent = NSView.alloc().initWithFrame(NSMakeRect(0, 0, windowWidth, windowHeight));

		alert.setIcon(alertIcon);
		alert.setMessageText("Edit Document Colors");
		alert.setInformativeText("Here you can setup some of the variables that help you generate and edit your DarkMode Systems.");

    alert.accessoryView = alertContent;



    groupdefaultColorsCode[colors.length] = functions.createField("", NSMakeRect(40,settingY,(windowWidth/2)-50,fieldHeight));
    alertContent.addSubview(groupdefaultColorsCode[colors.length]);

    groupdefaultColorsName[colors.length] = functions.createField("", NSMakeRect(windowWidth/2,settingY,windowWidth/2,fieldHeight));
    alertContent.addSubview(groupdefaultColorsName[colors.length]);

   
    //TITLES
    settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
    var title_color_1 = functions.createLabel("Color Code",12,NSMakeRect(40,settingY,(windowWidth/2)-50,fieldHeight));
    alertContent.addSubview(title_color_1);

    var title_color_2 = functions.createLabel("Color Name",12,NSMakeRect(windowWidth/2,settingY,windowWidth/2,fieldHeight));
    alertContent.addSubview(title_color_2);


    //TITLES
    settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
    var title_color = functions.createBoldLabel("Add New Color",12,NSMakeRect(0,settingY + textOffset,windowWidth-leftColWidth,labelHeight));
    alertContent.addSubview(title_color);

    // DIVIDER
    settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
    var divider_2 = functions.createDivider(NSMakeRect(0,settingY,windowWidth,1));
    alertContent.addSubview(divider_2);
    settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
 




    for( var i=colors_in_layer_styles.length-1; i>=0; i--){
      settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
      
      groupdefaultColorsCode_block_layerstyles[i] = functions.createColoredBlock(colors_in_layer_styles[i], NSMakeRect(0,settingY,fieldHeight,fieldHeight), false);
      alertContent.addSubview(groupdefaultColorsCode_block_layerstyles[i]);

      groupdefaultColorsCode_layerstyles[i] = functions.createField(colors_in_layer_styles[i], NSMakeRect(40,settingY,(windowWidth/2)-50,fieldHeight));
      alertContent.addSubview(groupdefaultColorsCode_layerstyles[i]);

      groupdefaultColorsName_layerstyles[i] = functions.createField(colors_in_layer_styles_names[i], NSMakeRect(windowWidth/2,settingY,windowWidth/2,fieldHeight));
      alertContent.addSubview(groupdefaultColorsName_layerstyles[i]);
    
    }
    //TITLES
    settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
    var title_color = functions.createBoldLabel("New Colors from Layer Styles",12,NSMakeRect(0,settingY + textOffset,windowWidth-leftColWidth,labelHeight));
    alertContent.addSubview(title_color);
    


    // DIVIDER
    settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
    var divider_2 = functions.createDivider(NSMakeRect(0,settingY,windowWidth,1));
    alertContent.addSubview(divider_2);
    settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
 

    //console.log(styles[]);
    for( var i=colors_in_text_styles.length-1; i>=0; i--){
      settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
      
      groupdefaultColorsCode_block_textstyles[i] = functions.createColoredBlock(colors_in_text_styles[i], NSMakeRect(0,settingY,fieldHeight,fieldHeight),false);
      alertContent.addSubview(groupdefaultColorsCode_block_textstyles[i]);

      groupdefaultColorsCode_textstyles[i] = functions.createField(colors_in_text_styles[i], NSMakeRect(40,settingY,(windowWidth/2)-50,fieldHeight));
      alertContent.addSubview(groupdefaultColorsCode_textstyles[i]);

      groupdefaultColorsName_textstyles[i] = functions.createField(colors_in_text_styles[i], NSMakeRect(windowWidth/2,settingY,windowWidth/2,fieldHeight));
      alertContent.addSubview(groupdefaultColorsName_textstyles[i]);
    
    }

    
    //TITLES
    settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
    var title_color = functions.createBoldLabel("New Colors from Text Styles",12,NSMakeRect(0,settingY + textOffset,windowWidth-leftColWidth,labelHeight));
    alertContent.addSubview(title_color);
    


    // DIVIDER
    settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
    var divider_2 = functions.createDivider(NSMakeRect(0,settingY,windowWidth,1));
    alertContent.addSubview(divider_2);
    settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
 

    for( var i=colors.length-1; i>=0; i--){
        settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
      
        groupdefaultColorsCode_block[i] = functions.createColoredBlock(colors[i].code, NSMakeRect(0,settingY,fieldHeight,fieldHeight), false);
        alertContent.addSubview(groupdefaultColorsCode_block[i]);

        groupdefaultColorsCode[i] = functions.createField(colors[i].code, NSMakeRect(50,settingY,(windowWidth/3)-50,fieldHeight));
        alertContent.addSubview(groupdefaultColorsCode[i]);

        groupdefaultColorsName[i] = functions.createField(colors[i].name, NSMakeRect(windowWidth/3,settingY,windowWidth/3,fieldHeight));
        alertContent.addSubview(groupdefaultColorsName[i]);


        groupdefaultColorsCode_block_dark[i] = functions.createColoredBlock(colors[i].code, NSMakeRect(windowWidth/3*2+40,settingY,fieldHeight,fieldHeight), true);
        alertContent.addSubview(groupdefaultColorsCode_block_dark[i]);

        var color= colors[i].code;
        if(color.length>7){
          var alpha = color.slice(7, 9);
        }else{
          var alpha="ff";
        }
        var dark_hex_hex= functions.DarkMode(color,"Shape_Fill");
        var dark_hex= functions.RGBToHex("rgb("+dark_hex_hex.r+","+dark_hex_hex.g+","+dark_hex_hex.b+")");
        groupdefaultColorsCode_dark[i] = functions.createLabel(dark_hex+alpha,12, NSMakeRect(windowWidth/3*2+90,settingY,(windowWidth/3*3)-90,fieldHeight));
        alertContent.addSubview(groupdefaultColorsCode_dark[i]);
      
    }

    //TITLES
    settingY = CGRectGetMaxY(alertContent.subviews().lastObject().frame()) + settingPad;
    var title_color = functions.createBoldLabel("Colors",12,NSMakeRect(0,settingY + textOffset,windowWidth-leftColWidth,labelHeight));
    alertContent.addSubview(title_color);



		alert.accessoryView = alertContent;
    //BUTTONS
		var buttonOrganize = alert.addButtonWithTitle("Update Colors");
		var buttonOrganize = alert.addButtonWithTitle("Add Color");
		var buttonOrganize = alert.addButtonWithTitle("Add Text Colors");
		var buttonCancel = alert.addButtonWithTitle("Cancel");
		var responseCode = alert.runModal();


    if (responseCode == 1000) { //update color
      var validated_array = functions.validateColorInput(groupdefaultColorsCode, groupdefaultColorsName, false);
      Settings.setDocumentSettingForKey(document, 'colors', validated_array);
    }
    else if (responseCode == 1001) {  //add color

      var count_repeated=0;
      for(var j=0; j<colors.length; j++){
        if( groupdefaultColorsCode[colors.length].stringValue()==colors[j].code){
          count_repeated++;
          break;

        }
      }
      if( count_repeated==0){
        var validated_array = functions.validateColorInput( groupdefaultColorsCode, groupdefaultColorsName, true);
        Settings.setDocumentSettingForKey(document, 'colors', validated_array);
        sketch.UI.message('Color added!');

      }else{
        
        sketch.UI.message(' That Color code already exists! Color not added.');

      }

    }
    else if (responseCode == 1002) {  //add color from text
      var groupdefaultColorsCode_merged = groupdefaultColorsCode.concat(groupdefaultColorsCode_textstyles);
      var groupdefaultColorsName_merged = groupdefaultColorsName.concat(groupdefaultColorsName_textstyles);

      var validated_array = functions.validateColorInput(groupdefaultColorsCode_merged, groupdefaultColorsName_merged, true);
      Settings.setDocumentSettingForKey(document, 'colors', validated_array);

      //console.log(validated_array);

    }
  }

}



