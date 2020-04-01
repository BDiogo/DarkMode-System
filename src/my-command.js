import sketch from 'sketch';
import dialog from '@skpm/dialog';
//import {getFonts} from './functions.js';
const functions= require('./functions.js');

var userDefaults;
var base, ratio, font,base_input,ratio_input,font_input;

// Saving to user defaults
var ratio_initical = 1.25;
var font_initical_label = "Roboto-Regular";
var font_initical =  functions.getFontIndex(font_initical_label);
var avail_fonts = functions.getFonts();
var selectedItemIndex=0;

var fieldHeight = 22,
  fieldWidth = 60,
  labelHeight = 16,
  leftColWidth = 120,
  windowHeight = 300,
  settingPad = 10,
  settingX = 0,
  settingY = 0,
  switchHeight = 16,
  textOffset = 2,
  windowWidth = 350;


var pluginName = "DarkMode System",
	pluginDomain = "DarkModeSystem";

var page, pageInfo, documentSettings, defaultSettings;


export function createNew(context){
  // Page variables
	page = context.document.currentPage(),
  pageInfo = page.userInfo();

  // Setting variables
  var CreateSettings = {};
  CreateSettings.defaultFont = "Roboto";
  CreateSettings.defaultBase = 16;
  CreateSettings.defaultRatio = "H1";
    


  // Display settings window
  var window = createWindow(context);
  var alert = window[0];
  var response = alert.runModal()
  

  if(response == "1000"){
    base = base_input.stringValue();
    ratio = ratio_input.stringValue();
    font = font_input.objectValueOfSelectedItem();


    userDefaults.setObject_forKey(base, "base_input"); 
    userDefaults.setObject_forKey(ratio, "ratio_input"); 
    userDefaults.setObject_forKey(font, "font_input"); 

    // Save to user defaults
    userDefaults.synchronize(); // save
    sketch.UI.message('Clicked in Create! With a base of '+ base+"pt, a ratio of "+ratio+" and with this font family "+font);

    return true;
  } 
}


function createWindow(context) {
  initVars(context);

  // Setup the window
  var alert = COSAlertWindow.new()
  //alert.setIcon(NSImage.alloc().initByReferencingFile(plugin.urlForResourceNamed("rectangle@2x.png").path()));
  alert.setMessageText("Create New DarkMode System")
  alert.addButtonWithTitle("Create")
  alert.addButtonWithTitle("Cancel")

  // Create initial view panel
  var viewWidth = 600
  var viewHeight = 120
  var view = NSView.alloc().initWithFrame(NSMakeRect(0, 0, viewWidth, viewHeight))
  alert.addAccessoryView(view)


  
  var infoLabel_1 = NSTextField.alloc().initWithFrame(NSMakeRect(0, 0 , (viewWidth /3*2), 25));
  infoLabel_1.setEditable_(false);
  infoLabel_1.setSelectable_(false);
  infoLabel_1.setBezeled_(false);
  infoLabel_1.setDrawsBackground_(false);
    // label.setFont(NSFont.systemFontOfSize_(fontSize));
    infoLabel_1.setStringValue("Base Size");

  var infoLabel_2 = NSTextField.alloc().initWithFrame(NSMakeRect(0, 30 , (viewWidth /3*2), 25));
  infoLabel_2.setEditable_(false);
    infoLabel_2.setSelectable_(false);
    infoLabel_2.setBezeled_(false);
    infoLabel_2.setDrawsBackground_(false);
      // label.setFont(NSFont.systemFontOfSize_(fontSize));
      infoLabel_2.setStringValue("Ratio");

     var infoLabel_3 = NSTextField.alloc().initWithFrame(NSMakeRect(0, 60 , (viewWidth /3*2), 25));
     infoLabel_3.setEditable_(false);
     infoLabel_3.setSelectable_(false);
     infoLabel_3.setBezeled_(false);
     infoLabel_3.setDrawsBackground_(false);
        // label.setFont(NSFont.systemFontOfSize_(fontSize));
        infoLabel_3.setStringValue("Font Family");
    
  var base_input = NSTextField.alloc().initWithFrame(NSMakeRect(120, 0 , 200,25));
  var ratio_input = NSTextField.alloc().initWithFrame(NSMakeRect(120, 30 , 200, 25));


  // Add label
  view.addSubview(infoLabel_1);
  view.addSubview(infoLabel_2);

  // Adding the textfield 
  view.addSubview(base_input);
  view.addSubview(ratio_input);

  settingY = CGRectGetMaxY(view.subviews().lastObject().frame()) + settingPad;
  
  var font_input = functions.createSelect(avail_fonts, getFontValue(), NSMakeRect(leftColWidth,settingY,windowWidth-(leftColWidth*2),28));
  // Adding the PopUpButton to the dialog
  view.addSubview(infoLabel_3);
  view.addSubview(font_input);


/*
  for (var i = 0; i < options.length; ++i) {
      if (options[i] == selectedItem) {
          selectedItemIndex = i;
          break;
      }
  }
  */
  // Default values for textfield
  base_input.setStringValue(getBaseValue());
  ratio_input.setStringValue(getRatioValue());
  font_input.setStringValue(getFontValue());


  //var answer = alert.runModal();
  return [alert];



}
function getFontValue(context){
  // Gets and returns saved setting
  // If there is no saved setting, return default

  var font_check = userDefaults.objectForKey("font_input");

  if(font_check != undefined){
    return font_check

  } else {
    return font_initical// Default value
  }

}
function getRatioValue(context){
  // Gets and returns saved setting
  // If there is no saved setting, return default

  var ratio_check = userDefaults.objectForKey("ratio_input");

  if(ratio_check != undefined){
    return ratio_check

  } else {
    return ratio_initical // Default value
  }

}


function getBaseValue(context){
  // Gets and returns saved setting
  // If there is no saved setting, return default
  var base_check = userDefaults.objectForKey("base_input");

  if(base_check != undefined){
    return base_check;

  } else {
    return base_initial; // Default value
  }

}

