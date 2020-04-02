import sketch from 'sketch';
import M from 'minimatch';

// ------------------
//inputs
// ------------------
export function getFontIndex(font_name,avail_fonts) {
    var index=0;
    //has to convert them to normal array, as {sys_fonts} is array-like object, and is persistent, so when modified, changes stay between runs of script
    for (var i = 0; i < avail_fonts.length; i++) {
        var font_info = avail_fonts[i];

        var font_selected = font_name;
        var style_oposite = document.getSharedTextStyleWithID(style_oposite_id);

        if(font_info==font_selected && style_oposite!=null){
            index=i;
            break;
        }
    }
    return index;
}

export function getSpecificFonts(specific_font) {
  var fontManager = NSFontManager.sharedFontManager();
  var fonts = {
      family : [],
      weights : []
  }
  var sys_fonts_families = fontManager.availableFontFamilies();

  for (var i = 0; i < sys_fonts_families.length; i++) {
    if(sys_fonts_families[i]== specific_font){
      fonts.family.push(sys_fonts_families[i]);

      var w= fontManager.availableMembersOfFontFamily(sys_fonts_families[i]);
      var weights =[];
      //log(w);
      for(var m=0; m<w.length; m++){
          
          weights.push({"name": w[m][1],"font": w[m][0], "weight": w[m][2], "variation":w[m][3]});

      }
      if(w.length.length==0){
          weights.push({"name": "plain","font": sys_fonts_families[i], "weight":"5", "variation":0});

      }
      fonts.weights.push(weights);
    }
  }
  return fonts;
}



export function getFonts() {
    var fontManager = NSFontManager.sharedFontManager();
    var fonts = {
        family : [],
        weights : []
    }
    var sys_fonts = fontManager.availableFonts();
    var sys_fonts_families = fontManager.availableFontFamilies();

   var w= fontManager.availableMembersOfFontFamily(sys_fonts_families[0]);

    var last_font;


    for (var i = 0; i < sys_fonts_families.length; i++) {
        fonts.family.push(sys_fonts_families[i]);

        var w= fontManager.availableMembersOfFontFamily(sys_fonts_families[i]);
        var weights =[];
        //log(w);
        for(var m=0; m<w.length; m++){
            
            weights.push({"name": w[m][1],"font": w[m][0], "weight": w[m][2], "variation":w[m][3]});

        }
        if(w.length.length==0){
            weights.push({"name": "plain","font": sys_fonts_families[i], "weight":"5", "variation":0});

        }
        fonts.weights.push(weights);
    }
    return fonts;
  }


  export function getFontsOld() {
    var fontManager = NSFontManager.sharedFontManager();
    var fonts = [];
    var sys_fonts = fontManager.availableFonts();
    //has to convert them to normal array, as {sys_fonts} is array-like object, and is persistent, so when modified, changes stay between runs of script
    for (var i = 0; i < sys_fonts.length; i++) {
        fonts.push(sys_fonts[i] );
    }
    return fonts;
  }
  /*
  export function getFontIndex(font) {
    var fontManager = NSFontManager.sharedFontManager();
    var font_name ;
    var sys_fonts = fontManager.availableFonts();
    //has to convert them to normal array, as {sys_fonts} is array-like object, and is persistent, so when modified, changes stay between runs of script
    for (var i = 0; i < sys_fonts.length; ++i) {
        if(sys_fonts[i]==font){
            font_name=i;
            break;

        }
    }
    return font_name;
  }
  */
  export function getFontName(index) {
    var fontManager = NSFontManager.sharedFontManager();
    var font_name ;
    var sys_fonts = fontManager.availableFonts();
    //has to convert them to normal array, as {sys_fonts} is array-like object, and is persistent, so when modified, changes stay between runs of script
    for (var i = 0; i < sys_fonts.length; ++i) {
        if(i==index){
            font_name=sys_fonts[i];
            break;

        }
    }
    return font_name;
  }


// ------------------
// text style
// ------------------

export function addTextStyle(context,styleName,theStyle) {
	var sketchVersion = MSApplicationMetadata.metadata().appVersion;
	var textStyles = context.document.documentData().layerTextStyles();

	if (textStyles.addSharedStyleWithName_firstInstance) {
		textStyles.addSharedStyleWithName_firstInstance(styleName,theStyle.style());
	} else if (sketchVersion < 52) {
		var textStyle = MSSharedStyle.alloc().initWithName_firstInstance(styleName,theStyle.style());

		textStyles.addSharedObject(textStyle);
	} else {
		var textStyle = MSSharedStyle.alloc().initWithName_style(styleName,theStyle.style());

		textStyles.addSharedObject(textStyle);
	}

	return getTextStyleByName(context,styleName);
}


/*
function updateTextStyle(context,styleName,theStyle) {
	var textStyles = context.document.documentData().layerTextStyles(),
		currentStyle = getTextStyleByName(context,styleName);

	if (textStyles.updateValueOfSharedObject_byCopyingInstance) {
		textStyles.updateValueOfSharedObject_byCopyingInstance(currentStyle,theStyle.style());
	} else {
		currentStyle.updateToMatch(theStyle.style());
	}

	return getTextStyleByName(context,styleName);
}
*/
/*
export function createTextStyle(styleData,frame) {
	var textStyle = MSTextLayer.alloc().initWithFrame(frame);
	textStyle.setFontSize(styleData.fontSize);
	textStyle.setLineHeight(styleData.lineHeight);
	textStyle.setTextAlignment(styleData.textAlignment);
	textStyle.setFontPostscriptName(styleData.fontFace);
	textStyle.setTextColor(MSImmutableColor.colorWithSVGString("#" + styleData.fontColor));

	return textStyle;
}
*/

export function updateTextStyle(document, Text, Rectangle, create_info,defaultSettings , place){
    var base = create_info.base.stringValue();
    var ratio = parseFloat(create_info.ratio.stringValue().replace(",", "."));
    var font_family = create_info.font_family.titleOfSelectedItem();
    var font_weight = create_info.font_weight.titleOfSelectedItem();
    var font_weight_index = create_info.font_weight.indexOfSelectedItem();
    var font_color = create_info.color.indexOfSelectedItem();
    var font_color_name = create_info.color.titleOfSelectedItem();
    var color = defaultSettings.s_colors[font_color].code;
    var weights_array= create_info.list_weights;
    var labels_alignments= create_info.labels_alignments;
      
    var count=[];
    var count_updated=0;
    var count_Created=0;

    var weight_info= getWeightfromPopupButton(font_weight_index,font_weight,weights_array);
      
    var i=0;
    var initial_size = base/ratio/ratio/ratio;
    var is_italic= getIs_italic(weight_info[0].name);

    while (i< defaultSettings.s_labels.length){
        var size = initial_size* Math.pow(ratio, i+1);
        var label= defaultSettings.s_labels.length -i-1;

        for (var j=0; j<3; j++){
          var options = [defaultSettings.s_labels[label], font_family, weight_info[0].name, font_color_name, labels_alignments[j]];
          var h= defaultSettings.s_hierarchy;
          var styleName= options[h[0]]+"/"+options[h[1]]+"/"+options[h[2]]+"/"+options[h[3]]+"/"+options[h[4]];
          
         // var styleName=defaultSettings.s_labels[label]+"/"+font_color_name+"/"+weight_info[0].name+"/"+labels_alignments[j];
          var titleStyle = getTextStyleByName(context,styleName);
          // If title style does not exist...
          let styles_list = document.sharedTextStyles;

          var style_to_update= getTextStyleByNameLabel(styleName, styles_list)
          if (!titleStyle) {
            count_Created++; 
            document.sharedTextStyles.push({
              name: styleName,
              style:{
                fontFamily: font_family ,
                fontSize : size,
                fontStyle: is_italic,
                fontWeight : weight_info[0].weight,
                textColor : color+"ff",
                lineHeight :(size*1.2),
                alignment : j,
                borders : [],
                fills : []
              }
            })
            
          }else{
            count_updated++;
            var new_style ={
                fontFamily: font_family ,
                fontSize : size,
                fontStyle: is_italic,
                fontWeight : weight_info[0].weight,
                textColor : color+"ff",
                lineHeight :(size*1.2),
                alignment : j,
                borders : [],
                fills : []
              };
              //log(titleStyle);
              //log(style_to_update);
              style_to_update.style.fontFamily= font_family;
              style_to_update.style.fontSize= size;
              style_to_update.style.fontStyle= is_italic;
              style_to_update.style.fontWeight= weight_info[0].weight;
              style_to_update.style.lineHeight= (size*1.2);

              var layers = style_to_update.getAllInstancesLayers();
              //log("NEW CHANge");
              for(var m=0; m< layers.length; m++){
                  layers[m].style.syncWithSharedStyle(style_to_update);

              }
          }

        }
        i++;
    }
    if(place>0){
        //placeTextStyles(document, Text, Rectangle);
        
    }

    var count=[count_Created,count_updated];
    return count;
}





export function updateTextStyleLabel(document, Text, Rectangle, create_info,defaultSettings , place){
  var base = create_info.base.stringValue();
  var ratio = parseFloat(create_info.ratio.stringValue().replace(",", "."));
  var font_family = create_info.font_family.titleOfSelectedItem();
  var font_weight = create_info.font_weight.titleOfSelectedItem();
  var font_weight_index = create_info.font_weight.indexOfSelectedItem();
  var font_color = create_info.color.indexOfSelectedItem();
  var font_color_name = create_info.color.titleOfSelectedItem();

  var color = defaultSettings.s_colors[font_color].code;
  var weights_array= create_info.list_weights;
  var labels_alignments= create_info.labels_alignments;
    
  print(ratio);
  var count=[];
  var count_updated=0;
  var count_Created=0;

  var weight_info= getWeightfromPopupButton(font_weight_index,font_weight,weights_array);
    
  var i=0;
  var initial_size = base/ratio/ratio/ratio;
  var is_italic= getIs_italic(weight_info[0].name);

  while (i< defaultSettings.s_labels.length){
      var size = initial_size* Math.pow(ratio, i+1);
      var label= defaultSettings.s_labels.length -i-1;

      for (var j=0; j<3; j++){
        var options = [defaultSettings.s_labels[label], font_family, weight_info[0].name, font_color_name, labels_alignments[j]];
        var h= defaultSettings.s_hierarchy;
        var styleName= options[h[0]]+"/"+options[h[1]]+"/"+options[h[2]]+"/"+options[h[3]]+"/"+options[h[4]];
        
       // var styleName=defaultSettings.s_labels[label]+"/"+font_color_name+"/"+weight_info[0].name+"/"+labels_alignments[j];
        var titleStyle = getTextStyleByName(context,styleName);
        // If title style does not exist...
        let styles_list = document.sharedTextStyles;

        var style_to_update= getTextStyleByNameLabel(styleName, styles_list)
        if (!titleStyle) {
          count_Created++; 
          document.sharedTextStyles.push({
            name: styleName,
            style:{
              fontFamily: font_family ,
              fontSize : size,
              fontStyle: is_italic,
              fontWeight : weight_info[0].weight,
              textColor : color+"ff",
              lineHeight :(size*1.2),
              alignment : j,
              borders : [],
              fills : []
            }
          })
          
        }else{
          count_updated++;
          var new_style ={
              fontFamily: font_family ,
              fontSize : size,
              fontStyle: is_italic,
              fontWeight : weight_info[0].weight,
              textColor : color+"ff",
              lineHeight :(size*1.2),
              alignment : j,
              borders : [],
              fills : []
            };
            //log(titleStyle);
            //log(style_to_update);
            style_to_update.style.fontFamily= font_family;
            style_to_update.style.fontSize= size;
            style_to_update.style.fontStyle= is_italic;
            style_to_update.style.fontWeight= weight_info[0].weight;
            style_to_update.style.lineHeight= (size*1.2);

            var layers = style_to_update.getAllInstancesLayers();
            //log("NEW CHANge");
            for(var m=0; m< layers.length; m++){
                layers[m].style.syncWithSharedStyle(style_to_update);

            }
        }

      }
      i++;
  }
  if(place>0){
      //placeTextStyles(document, Text, Rectangle);
      
  }

  var count=[count_Created,count_updated];
  return count;
}



export function createTextStyle(document, Text, Rectangle, create_info,defaultSettings , place){
    var base = create_info.base.stringValue();
    var ratio = parseFloat(create_info.ratio.stringValue().replace(",", "."));
    var font_family = create_info.font_family.titleOfSelectedItem();
    var font_weight = create_info.font_weight.titleOfSelectedItem();
    var font_weight_index = create_info.font_weight.indexOfSelectedItem();
    var font_color = create_info.color.indexOfSelectedItem();
    var font_color_name = create_info.color.titleOfSelectedItem();
    var color = defaultSettings.s_colors[font_color].code;
    var weights_array= create_info.list_weights;
    var labels_alignments= create_info.labels_alignments;
  print(ratio);
      
    var count=[];
    var count_existent=0;
      var weight_info= getWeightfromPopupButton(font_weight_index,font_weight,weights_array);
      

      var i=0;
      var initial_size = base/ratio/ratio/ratio;
      var count_Created=0;
      var is_italic= getIs_italic(weight_info[0].name);


      while (i< defaultSettings.s_labels.length){
        var size = initial_size* Math.pow(ratio, i+1);
        var label= defaultSettings.s_labels.length -i-1;

        for (var j=0; j<3; j++){


          //HIERARQUIA
          var options = [defaultSettings.s_labels[label], font_family, weight_info[0].name, font_color_name, labels_alignments[j]];
          var h= defaultSettings.s_hierarchy;
          var styleName= options[h[0]]+"/"+options[h[1]]+"/"+options[h[2]]+"/"+options[h[3]]+"/"+options[h[4]];
          //var styleName=defaultSettings.s_labels[label]+"/"+font_family+"/"+weight_info[0].name+"/"+font_color_name+"/"+labels_alignments[j];
          var titleStyle = getTextStyleByName(context,styleName);
          // If title style does not exist...
          if (!titleStyle) {
            count_Created++; 

            const page = document.selectedPage;
            document.sharedTextStyles.push({
              name: styleName,
              style:{
                fontFamily: font_family ,
                fontSize : size,
                fontStyle: is_italic,
                fontWeight : weight_info[0].weight,
                textColor : color+"ff",
                lineHeight :(size*1.2),
                alignment : j,
                borders : [],
                fills : []
              }
            })
            
          }else{
            count_existent++;
          }

        }
        i++;
      }
    if(place>0){
        placeTextStyles(document, Text, Rectangle);
    }
    var count=[count_Created,count_existent];

    return count;
}


export function placeTextStyles(document, Text, Rectangle){

    var x=0;
    var y=0;
    var layer_width= 800;
    var layer_height= 70;


    var styles_list = document.sharedTextStyles;
    var page = document.selectedPage;
    var Group = require('sketch/dom').Group;

    var Artboard = require('sketch/dom').Artboard;

    var organized_styles= OrganizeArrayTextStyles(styles_list);

    var layers_artboard = document.getLayersNamed("TypeSystem");
    if (layers_artboard.length) {
      //  layers[0].remove();
        var artboard =layers_artboard[0];
        artboard.layers=[];
    }else{
        var artboard = new Artboard({
            name: 'TypeSystem',
            parent: page
        });
    }
    

    var layers = document.getLayersNamed("Group TypeSystem");
    if (layers.length) {
      //  layers[0].remove();
        var group =layers[0];
        group.layers=[];
    }else{
        var group = new Group({
            name: 'Group TypeSystem',
            parent: artboard
        });
    }
    
    // log (organized_styles);
    if(organized_styles.length>0){
        for(var j=0; j<organized_styles.length; j++){
            y=j*(layer_height+10);
            // STYLES INDIVIDUALLY
            var styles= organized_styles[j].styles;
            for(var i=0; i<styles.length; i++){
                x=i*(layer_width+100);

                var rect = new Rectangle(x, y, layer_width, layer_height);
                var text = new Text({
                    text: styles[i].name,
                    sharedStyleId:styles[i].id,
                    frame: rect,
                    parent: group,
                    style: styles[i].style
                })
                //document.centerOnLayer(text);

            }
           
        }
        sketch.UI.message(' Placed '+styles_list.length+' text styles, sucessfully!');
        group.adjustToFit();
        artboard.adjustToFit();
        var padding =100;
        var h= artboard.frame.height+(padding*2);
        var w= artboard.frame.width+(padding*2);
        var art_x= artboard.frame.x -padding;
        var art_y= artboard.frame.y - padding;

        artboard.frame.height=h;
        artboard.frame.width=w;
        artboard.frame.x=art_x;
        artboard.frame.y=art_y;

        group.frame.x=padding;
        group.frame.y=padding;


    }else{
        sketch.UI.message('No Styles to Place :( Try creating them first.');    
    }
}

export function elementHasStyle(all_styles, id){
  var exists=false;
  //console.log(all_styles);


  for(var i= 0; i< all_styles.length; i++){
    if(id==all_styles[i].id){
      exists=all_styles[i];
      break;
    }
  }
  return exists;

}


export function ifStyleNameAlreadyExists(all_styles, name){
  var exists=false;
  //console.log(all_styles);

  for(var i= 0; i< all_styles.length; i++){
    if(name.replace(" ","")==all_styles[i].name.replace(" ","")){
      exists=true;
      break;
    }
  }
  return exists;

}

export function getStyleByName(all_styles, name){
  var style=false;
  //console.log(all_styles);

  for(var i= 0; i< all_styles.length; i++){
    if(name.replace(" ", "")==all_styles[i].name.replace(" ", "")){
      style=all_styles[i];
      break;
    }
  }
  return style;

}



export function getStyleById(all_styles, id){
  var style=false;
  //console.log(all_styles);

  for(var i= 0; i< all_styles.length; i++){
    if(id==all_styles[i].id){
      style=all_styles[i];
      break;
    }
  }
  return style;

}



export function getTextStyleByName(context,styleName,removeStyle) {
	var textStyles = context.document.documentData().layerTextStyles().objects();

	if (textStyles) {
		for (var i = 0; i < textStyles.count(); i++) {
			if (textStyles.objectAtIndex(i).name() == styleName) {
				if (removeStyle && removeStyle == 1) {
					context.document.documentData().layerTextStyles().removeSharedStyle(textStyles.objectAtIndex(i));
					return false;
				} else {
					return textStyles.objectAtIndex(i);
				}
			}
		}
	}

	return false;
}

// ------------------
// functions
// ------------------
export function updateSettingsWithDocument(context,settings, page) {
    var i;
      for (i in settings) {
          try {
              var value = sketch.Settings.layerSettingForKey(page,i);
          } catch (err) {
              log('Could not JSON.parse value, using old method…');
  
              var value = context.command.valueForKey_onLayer(i,page.sketchObject);
          }
  
          if (value != null) settings[i] = value;
      }
  
      return settings;
  }
export function updateSettingsWithGlobal(defaults,settings) {
    var i;
      for (i in settings) {
          var value = defaults.objectForKey(i);
          if (value) settings[i] = value;
      }
  
      return settings;
  }
  
export function createSelect(items,selectedItemIndex,frame) {
	var comboBox = NSComboBox.alloc().initWithFrame(frame),
		selectedItemIndex = (selectedItemIndex > -1) ? selectedItemIndex : 0;

	comboBox.addItemsWithObjectValues(items);
	comboBox.selectItemAtIndex(selectedItemIndex);
	comboBox.setNumberOfVisibleItems(16);
    comboBox.setCompletes(1);
    
	return comboBox;
}


  
export function createPopUpButton(items,selectedItemIndex,frame) {
	var PopUpButton = NSPopUpButton.alloc().initWithFrame(frame),
		selectedItemIndex = (selectedItemIndex > -1) ? selectedItemIndex : 0;

    PopUpButton.addItemsWithTitles(items);
    PopUpButton.selectItemAtIndex(selectedItemIndex);
    PopUpButton.setTarget=self;

	return PopUpButton;
}


export function createPopUpButtonWeights(items,selectedItemIndex,frame) {
	var PopUpButton = NSPopUpButton.alloc().initWithFrame(frame),
        selectedItemIndex = (selectedItemIndex > -1) ? selectedItemIndex : 0;
        
    var items_names=[];
    
    for(var i=0; i<items.length; i++){
        items_names.push(items[i].name);
    }
    //log(items);
    PopUpButton.addItemsWithTitles(items_names);
    PopUpButton.selectItemAtIndex(selectedItemIndex);
    PopUpButton.setTarget=self;

	return PopUpButton;
}


export function getIndexforPopupButton(weight, style, all_weights){
    var index=0;
   // log(all_weights);
    for(var i=0; i<all_weights.length; i++){
        if (style == null && all_weights[i].weight == weight ) { 
            index=i;
            break;
        }
        else if (all_weights[i].name.toLowerCase().indexOf(style) !== -1 && all_weights[i].weight == weight ) { 
            index=i;
            break;
        }
        
    }
    return index;
}


export function getWeightfromPopupButton(index, name, all_weights){
    var weight=[];
    if(all_weights.length>0){
        for(var i=0; i<all_weights.length; i++){
            var str =  name.replace(" ", "");

            if (all_weights[i].name ==name) {
                weight.push({"name": all_weights[index].name, "font": all_weights[index].font, "weight": all_weights[index].weight, "variation": all_weights[index].variation});
                break;
            }
        }
    }else{
        weight=5;
    }
    return weight;
}
export function getIs_italic(font_name){
    var italic= undefined;
    if (font_name.toLowerCase().indexOf("italic") !== -1 ) {
        italic ="italic";
    }
    return italic;

}
export function getTextStyleByNameLabel(name, styles_list){
    var style=[];
    for(var i=0; i<styles_list.length; i++){
        if(styles_list[i].name==name){
            style.push(styles_list[i]); 
            break;
        }
    }
    return style[0];


}
export function getUserDefaults(domain) {
	return NSUserDefaults.alloc().initWithSuiteName(domain);
}


export function createBoldLabel(text,size,frame) {
	var label = NSTextField.alloc().initWithFrame(frame);

	label.setStringValue(text);
	label.setFont(NSFont.boldSystemFontOfSize(size));
	label.setBezeled(false);
	label.setDrawsBackground(false);
	label.setEditable(false);
	label.setSelectable(false);

	return label;
}

export function createNotSelectableInput(text,size,frame) {
	var label = NSTextField.alloc().initWithFrame(frame);

	label.setStringValue(text);
	label.setFont(NSFont.systemFontOfSize(size));
	label.setBezeled(false);
	label.setEditable(false);
	label.setSelectable(false);

	return label;
}
export function createLabel(text,size,frame) {
	var label = NSTextField.alloc().initWithFrame(frame);

	label.setStringValue(text);
	label.setFont(NSFont.systemFontOfSize(size));
	label.setBezeled(false);
	label.setDrawsBackground(false);
	label.setEditable(false);
	label.setSelectable(false);

	return label;
}

export function createCheckbox(item,flag,frame) {
	var checkbox = NSButton.alloc().initWithFrame(frame),
		flag = (flag == false) ? NSOffState : NSOnState;

	checkbox.setButtonType(NSSwitchButton);
	checkbox.setBezelStyle(0);
	checkbox.setTitle(item.name);
	checkbox.setTag(item.value);
	checkbox.setState(flag);

	return checkbox;
}

export function createColoredBlock(color, frame, darkmode) {
	var block = NSView.alloc().initWithFrame(frame);

    block.setWantsLayer(1);
    if(darkmode){
      var color_rgb=DarkMode(color,"Shape"); 

    }else{
       var color_rgb=hexToRgba(color); 

    }
   //console.log(color_rgb);
    //console.log(color_rgb);
    block.layer().cornerRadius = 2;
    block.layer().maskedCorners=true;
	  block.layer().setBackgroundColor(CGColorCreateGenericRGB(color_rgb.r/255,color_rgb.g/255,color_rgb.b/255,color_rgb.a/255));
    
    return block;
    //NSRectFill
}

export function changeColoredBlock(block, color) {
    var color_rgb=hexToRgba(color); 
	  block.layer().setBackgroundColor(CGColorCreateGenericRGB(color_rgb.r/255,color_rgb.g/255,color_rgb.b/255,color_rgb.a/255));
}


export function DarkMode(hex, element){
   // var hex = h.substr(0, 7);
   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.substr(0, 7));
   if(hex.length>7){
     var alpha = parseInt(hex.slice(7, 9), 16);
   }else{
     var alpha=255;
   }
   var r=  parseInt(result[1], 16);
   var g=  parseInt(result[2], 16);
   var b=  parseInt(result[3], 16);
   var gray_middle=127;


   // IF IS MONOTONE
   if( Math.abs(r-g)<50 && Math.abs(r-b)<50){
    var lightness= (r * 0.299 + g * 0.587 + b * 0.114);
    if (lightness > gray_middle){
      //console.log("is light"+lightness);
      //(lightness* -100)/255
      if(element=="container"){
        var darkmode= RGBToHSL("rgb(255,255,255)", "container", "light");
      }else if(element=="in_colored_container"){
        var darkmode= RGBToHSL("rgb(5,5,5)", "text", "dark");
      }else if(element=="Shape"){
        var darkmode= RGBToHSL("rgb("+r+","+g+","+b+")", "container", "light");
      }else{
        var darkmode= RGBToHSL("rgb("+r+","+g+","+b+")", "text" ,"light");
      }

    }else{
      if(element=="container"){
        var darkmode= RGBToHSL("rgb(255,255,255)", "container", "light");
      }else if(element=="in_colored_container"){
        var darkmode= RGBToHSL("rgb(5,5,5)", "text", "dark");
      } else if(element=="Shape"){
        var darkmode= RGBToHSL("rgb("+r+","+g+","+b+")", "container", "dark");
      }else{
        //180- (90+((lightness* 100)/gray_middle));
        var darkmode= RGBToHSL("rgb("+r+","+g+","+b+")", "text", "dark" );
      }

    }
    var darkmode_rgb= HSLToRGB(darkmode, false);

  //IF IS COLOR
  }else{
      //console.log("ITS COLORED");
      //console.log(element);

    //console.log("original rgb("+r+","+g+","+b+")");
    //var darkmode = RGBToHSL("rgb(" + r + "," + g + "," + b + ")", 0, -50);
    if(element=="container"){
      var darkmode= RGBToHSL("rgb(255,255,255)", "container", "light");
    }else if(element=="Shape" || element=="in_colored_container"){
      var darkmode= RGBToHSL("rgb("+r+","+g+","+b+")", "container", "color");
    }else{
      var darkmode= RGBToHSL("rgb("+r+","+g+","+b+")", "text", "color");
    }
    var darkmode_rgb= HSLToRGB(darkmode, false);

  }
  //console.log("---------------------");
    return result ? {
      r: darkmode_rgb.r,
      g: darkmode_rgb.g,
      b: darkmode_rgb.b,
      a: alpha
    } : null;

    
}
export function RGBToHex(rgb) {
  let ex = /^rgb\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){2}|((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s)){2})((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]))|((((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){2}|((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){2})(([1-9]?\d(\.\d+)?)|100|(\.\d+))%))\)$/i;
  if (ex.test(rgb)) {
      // choose correct separator
      let sep = rgb.indexOf(",") > -1 ? "," : " ";
      // turn "rgb(r,g,b)" into [r,g,b]
      rgb = rgb.substr(4).split(")")[0].split(sep);

      // convert %s to 0–255
      for (let R in rgb) {
          let r = rgb[R];
          if (r.indexOf("%") > -1)
              rgb[R] = Math.round(r.substr(0,r.length - 1) / 100 * 255);
              /* Example:
              75% -> 191
              75/100 = 0.75, * 255 = 191.25 -> 191
              */
      }

      let r = (+rgb[0]).toString(16),
          g = (+rgb[1]).toString(16),
          b = (+rgb[2]).toString(16);

      if (r.length == 1)
          r = "0" + r;
      if (g.length == 1)
          g = "0" + g;
      if (b.length == 1)
          b = "0" + b;
      
      return "#" + r + g + b;

  } else {
      return "Invalid input color";
  }
}

function HSLToRGB(hsl,isPct) {
  let ex = /^hsl\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}|(\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2})\)$/i;
  if (ex.test(hsl)) {
    
      let sep = hsl.indexOf(",") > -1 ? "," : " ";
      hsl = hsl.substr(4).split(")")[0].split(sep);
      isPct = isPct === true;

      let h = hsl[0],
          s = hsl[1].substr(0,hsl[1].length - 1) / 100,
          l = hsl[2].substr(0,hsl[2].length - 1) / 100;

      // strip label and convert to degrees (if necessary)
      if (h.indexOf("deg") > -1)
          h = h.substr(0,h.length - 3);
      else if (h.indexOf("rad") > -1)
          h = Math.round(h.substr(0,h.length - 3) / (2 * Math.PI) * 360);
      else if (h.indexOf("turn") > -1)
          h = Math.round(h.substr(0,h.length - 4) * 360);
      // keep hue fraction of 360 if ending up over
      if (h >= 360)
          h %= 360;
      
      let c = (1 - Math.abs(2 * l - 1)) * s,
          x = c * (1 - Math.abs((h / 60) % 2 - 1)),
          m = l - c/2,
          r = 0,
          g = 0,
          b = 0;
      
      if (0 <= h && h < 60) {
          r = c; g = x; b = 0;
      } else if (60 <= h && h < 120) {
          r = x; g = c; b = 0;
      } else if (120 <= h && h < 180) {
          r = 0; g = c; b = x;
      } else if (180 <= h && h < 240) {
          r = 0; g = x; b = c;
      } else if (240 <= h && h < 300) {
          r = x; g = 0; b = c;
      } else if (300 <= h && h < 360) {
          r = c; g = 0; b = x;
      }

      r = Math.round((r + m) * 255);
      g = Math.round((g + m) * 255);
      b = Math.round((b + m) * 255);
      return{
        r: r,
        g: g,
        b: b
      } ;

  } else {
      return "Invalid input color";
  }
}

function RGBToHSL(rgb,  type, mode) {
  let ex = /^rgb\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){2}|((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s)){2})((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]))|((((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){2}|((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){2})(([1-9]?\d(\.\d+)?)|100|(\.\d+))%))\)$/i;
  if (ex.test(rgb)) {
      let sep = rgb.indexOf(",") > -1 ? "," : " ";
      rgb = rgb.substr(4).split(")")[0].split(sep);
      
      // convert %s to 0–255
      for (let R in rgb) {
          let r = rgb[R];
          if (r.indexOf("%") > -1)
              rgb[R] = Math.round(r.substr(0,r.length - 1) / 100 * 255);
      }

      // make r, g, and b fractions of 1
      let r = rgb[0] / 255,
          g = rgb[1] / 255,
          b = rgb[2] / 255,

      // find greatest and smallest channel values
          cmin = Math.min(r,g,b),
          cmax = Math.max(r,g,b),
          delta = cmax - cmin,
          h = 0,
          s = 0,
          l = 0;

      // calculate hue
      // no difference
      if (delta == 0)
          h = 0;
      // red is max
      else if (cmax == r)
          h = ((g - b) / delta) % 6;
      // green is max
      else if (cmax == g)
          h = (b - r) / delta + 2;
      // blue is max
      else
          h = (r - g) / delta + 4;

      h = Math.round(h * 60);

      // make negative hues positive behind 360°
      if (h < 0)
          h += 360;

      // calculate lightness
      l = (cmax + cmin) / 2;

      // calculate saturation
      s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

      // multiply l and s by 100
      s = +(s * 100).toFixed(1);
      l = +(l * 100).toFixed(1);
      


      if(mode=="light"){
        if(type=="container"){
          
          var x = 100-l;
          var a=10;
          var c=2;
          var bi=0.96;
          var y= a*(Math.pow(bi, x))+c;
          l=y;

          //l = 100-l;

        }else{
          l = 100-l;

        }
        //(lightness* -100)/255
      }else if(mode=="dark"){
       
        if(type=="text"){
          var x = 100-l;
          var a=10;
          var c=5;
          var bi=0.96;
          var y= a*(Math.pow(bi, x))+c;
          l=100-y;

          //l = 100-l;

        }else{
          l = 100-l;
        }

      }else{

        //dont exced limits
        var s_color= -50;
        var transformed_color= s+s_color;
        if(transformed_color>=100){
          s=100;
        }else if(transformed_color<=0){
          s=0;
        }else{
          s+=s_color;
        }
        s=75;
        l=65;
        
      }
      //l_darkmode, s_color,
      if(l>100){
        var lu= 100;
      }else{
        var lu= l;

      }

     // console.log("transformed hsl(" + h + "," + s + "%," + lu + "%)");
      return "hsl(" + h + "," + s + "%," + lu + "%)";

  } else {
      return "Invalid input color";
  }
}




function HSLToHex(hsl) {
  let ex = /^hsl\(((((([12]?[1-9]?\d)|[12]0\d|(3[0-5]\d))(\.\d+)?)|(\.\d+))(deg)?|(0|0?\.\d+)turn|(([0-6](\.\d+)?)|(\.\d+))rad)((,\s?(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2}|(\s(([1-9]?\d(\.\d+)?)|100|(\.\d+))%){2})\)$/i;
  if (ex.test(hsl)) {
      let sep = hsl.indexOf(",") > -1 ? "," : " ";
      hsl = hsl.substr(4).split(")")[0].split(sep);

      let h = hsl[0],
          s = hsl[1].substr(0,hsl[1].length - 1) / 100,
          l = hsl[2].substr(0,hsl[2].length - 1) / 100;
  
      // strip label and convert to degrees (if necessary)
      if (h.indexOf("deg") > -1)
          h = h.substr(0,h.length - 3);
      else if (h.indexOf("rad") > -1)
          h = Math.round(h.substr(0,h.length - 3) * (180 / Math.PI));
      else if (h.indexOf("turn") > -1)
          h = Math.round(h.substr(0,h.length - 4) * 360);
      if (h >= 360)
          h %= 360;
      
      let c = (1 - Math.abs(2 * l - 1)) * s,
          x = c * (1 - Math.abs((h / 60) % 2 - 1)),
          m = l - c/2,
          r = 0,
          g = 0,
          b = 0;
      
      if (0 <= h && h < 60) {
          r = c; g = x; b = 0;
      } else if (60 <= h && h < 120) {
          r = x; g = c; b = 0;
      } else if (120 <= h && h < 180) {
          r = 0; g = c; b = x;
      } else if (180 <= h && h < 240) {
          r = 0; g = x; b = c;
      } else if (240 <= h && h < 300) {
          r = x; g = 0; b = c;
      } else if (300 <= h && h < 360) {
          r = c; g = 0; b = x;
      }
      // having obtained RGB, convert channels to hex
      r = Math.round((r + m) * 255).toString(16);
      g = Math.round((g + m) * 255).toString(16);
      b = Math.round((b + m) * 255).toString(16);
      
      // prepend 0s if necessary
      if (r.length == 1)
          r = "0" + r;
      if (g.length == 1)
          g = "0" + g;
      if (b.length == 1)
          b = "0" + b;
      
      return "#" + r + g + b;

  } else {
      return "Invalid input color";
  }
}

function hexToRgba(hex) {

   // var hex = h.substr(0, 7);
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.substr(0, 7));
    if(hex.length>7){
      var alpha = parseInt(hex.slice(7, 9), 16);
    }else{
      var alpha=255;
    }

    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
      a: alpha
    } : null;

  }
export function createDivider(frame) {
	var divider = NSView.alloc().initWithFrame(frame);

	divider.setWantsLayer(1);
	divider.layer().setBackgroundColor(CGColorCreateGenericRGB(204/255,204/255,204/255,1.0));

	return divider;
}
export function createField(value,frame) {
	var field = NSTextField.alloc().initWithFrame(frame);

	field.setStringValue(value);
    field.delegate = self

	return field;
}
export function createFieldnoBack(value,frame) {
	var field = NSTextField.alloc().initWithFrame(frame);

    field.setStringValue(value);
    field.setDrawsBackground(false);
    field.delegate = self

	return field;
}
export function createFieldControl(value,frame) {
	var field = NSControl.alloc().initWithFrame(frame);

	field.setStringValue(value);
    field.delegate = self

	return field;
}
export function setKeyOrder(alert,order) {
	for (var i = 0; i < order.length; i++) {
		var thisItem = order[i],
			nextItem = order[i+1];

		if (nextItem) thisItem.setNextKeyView(nextItem);
	}

	alert.window().setInitialFirstResponder(order[0]);
}

export function validateColorInput( code_array, name_array, add){  
    
    var validated_array=[];
    if(add){
      var a_length=code_array.length;
    }else{
      var a_length=code_array.length-1;

    }
    for(var i=0; i<a_length ; i++){
        var count_repeated=0;
        var code= code_array[i].stringValue();
/*
        for(var j=0; j<validated_array.length; j++){
          if(code==validated_array[j]){
            count_repeated++;
            break;

          }
        }
        */

        if(count_repeated==0){
          if(/^#[0-9A-F]{8}$/i.test(code) || /^#[0-9A-F]{6}$/i.test(code)){
              validated_array.push({"name":name_array[i].stringValue() , "code":code_array[i].stringValue() });

          }
        }
    }
   
    return validated_array;
}


export function OrganizeArrayTextStyles(styles){
    var array=[];
    var cur_style, cur_style_name;

    for(var i=0; i<styles.length; i++){
      
      var style_fontSize= styles[i].style.fontSize;
      var style_name= styles[i].name;

      if(style_name.indexOf("/") !== -1){
        var style_name_array= style_name.split("/");
        var s_name= style_name_array[0];

      }else{
        var s_name= style_name;


      }
        if(array.length==0){
            array.push({"group": s_name ,"styles": [styles[i]], "group_size":style_fontSize});
            cur_style_name=s_name;

        }else{
          var has_group=false;
          var has_group_id=0;
          for(var j=0; j<array.length; j++){
            if(s_name==array[j].group){
              has_group=true;
              has_group_id=j;
              break;
            }
          }
          if(has_group){
            array[has_group_id].styles.push( styles[i]);

          }else{
            array.push({"group": s_name ,"styles": [styles[i]], "group_size":style_fontSize});
            cur_style_name=s_name;

          }
        }

      }
    
    return array;
}




function updateElementStyle(element, style){
  element.sharedStyleId=style.id;
  element.sharedStyle=style;
  element.style=style.style;
  element.style.syncWithSharedStyle(style);

}

function addNewStyle(document,element ,style_type, style, added, styles){
  var this_name= "DarkModeSystem/"+element+"-"+added+"/lightMode";
  styles.push({
    name: this_name,
    style: style,
    styleType: style_type,
    document: document
  })
  return styles;
}

function getLayerArtboard(p){
  var parent_top=p;
  var artboar_id=p.id;
  if(parent_top.parent.type!="Page"){
    
    while(parent_top.type!="Artboard" && parent_top.type!="SymbolMaster"  && parent_top.type!="Page" ){

      parent_top= parent_top.parent;
      artboar_id= parent_top.id;
    }
  }
  return artboar_id;

}
export function reviewSettings( document , all_settings){
  console.log("Step 0 - Reviewing Settings...");
  //console.log(all_settings);
  var reviewed_settings=[]
  for(var i=0; i<all_settings.length; i++){
    var dark_id= all_settings[i].dark;
    var light_id= all_settings[i].light;

    if(all_settings[i].type=="text"){
      var sharedStyle_light = document.getSharedTextStyleWithID(light_id)
      var sharedStyle_dark = document.getSharedTextStyleWithID(dark_id)
    }else{
      var sharedStyle_light = document.getSharedLayerStyleWithID(light_id)
      var sharedStyle_dark = document.getSharedLayerStyleWithID(dark_id)
    }
      //console.log(sharedStyle_dark);
      //console.log(sharedStyle_light);

    if(sharedStyle_light===undefined || sharedStyle_dark===undefined){
     // console.log("there is one settings missing");
    }else{
      reviewed_settings.push(all_settings[i]);
    }

  }
  return reviewed_settings;
  
}

export function syncLayerwithStyles_best(Settings, sketch, document, page){
  //var all_layer= sketch.find('*', document.pages[page]);
  var all_shapes= sketch.find('Shape', document.pages[page]);
  var all_shapesPaths= sketch.find('ShapePath', document.pages[page]);
  var all_texts= sketch.find('Text', document.pages[page]);

  var layer_styles = document.sharedLayerStyles;
  var text_styles = document.sharedTextStyles;
  var count_added=document.sharedLayerStyles.length+document.sharedTextStyles.length;


  var all_settings= Settings.documentSettingForKey(document,'Styles');
  var all_settings_c= Settings.documentSettingForKey(document,'Styles_Containers');
  var all_settings_l= Settings.documentSettingForKey(document,'Styles_Layers');
  var all_settings_t= Settings.documentSettingForKey(document,'Styles_Texts');

  console.log("initial styles"+count_added);
  console.log("Step 1 - Validating...");
  
  var count=0;
  var colored_containers=[];
  var new_styles=[];
  var percentage=0;
  var count_shapePath_added=0;

  var container_min_width=200;
  var container_min_height=200;


  var count_c= all_settings_c.length;
  var count_l= all_settings_l.length;
  var count_t= all_settings_t.length;

  // DO CONTAINERS
  var percentage=0;
  var count_container_added=count_c;
  for(var i=0; i<all_shapesPaths.length;i++ ){
    if(all_shapesPaths[i].frame.width>container_min_width && all_shapesPaths[i].frame.height>container_min_height  && all_shapesPaths[i].shapeType=="Rectangle"){
      count++;
      if(percentage != parseInt(i*100 /all_shapesPaths.length)){
        console.log("Containers 1 - "+percentage+"%");
        percentage = parseInt(i*100 /all_shapesPaths.length);
      }

      var count_fills=0;
      for (var s=0; s<all_shapesPaths[i].style.fills.length; s++){
        if(all_shapesPaths[i].style.fills[s].enabled==true){
          var color= all_shapesPaths[i].style.fills[s].color;
          break;
        }
      }
      var color_rgb= hexToRgba(color);
      if( Math.abs(color_rgb.r-color_rgb.g)<50 && Math.abs(color_rgb.r-color_rgb.b)<50){
        var container= "container_monotone";

      }else{
      var container= "container_color";

      }
      //Processing layers and its shared styles 
      var hasStyle= elementHasStyle (layer_styles, all_shapesPaths[i].sharedStyleId) ;
      var isOutOfSync = true;
      if(hasStyle!=false){
        isOutOfSync = all_shapesPaths[i].style.isOutOfSyncWithSharedStyle(hasStyle);
      }
      var is_inside_colored_container= false;

     if(!hasStyle || hasStyle && isOutOfSync ){
      
       var hasMatchingStyle= elementHasMatchingStyleAndSetting(document,layer_styles, all_shapesPaths[i].style, all_settings_c, all_settings_l, all_settings_t, undefined, ["layer","layer","text"]);
       //var hasMatchingStyle= elementHasMatchingStyle(layer_styles, all_shapesPaths[i].style);

       // get setting with macthcing style
       var hasmach_butnot=false;
        if(hasMatchingStyle){
          for (var n=0; n<all_settings_c.length; n++){
            if(all_settings_c[n].light==hasMatchingStyle.id){
              if(all_settings_c[n].element != container){
                hasmach_butnot_setting=true;
                break;
              }else{
                break;
              }
            }
          }
        }
       if(!hasMatchingStyle || hasmach_butnot){
         //create new style
         count_container_added++;
         layer_styles= addNewStyle(document,"Contsainer","Layer", all_shapesPaths[i].style, count_container_added,layer_styles) ;
 
         //update element
         var last =layer_styles.length-1;
         updateElementStyle(all_shapesPaths[i], layer_styles[last]);

         //Create new setting
         var element_size=all_shapesPaths[i].frame;     
         var layer_artboard= getLayerArtboard(all_shapesPaths[i]);
         if(container== "container_color"){
           var frame_absolute= getFrameAbsoluteFrame(all_shapesPaths[i]);
           var this_frame= { "x":frame_absolute.x, "y": frame_absolute.y, "width": all_shapesPaths[i].frame.width, "height":all_shapesPaths[i].frame.height};
           colored_containers.push({"artboard": layer_artboard, "container":this_frame});  
         }
         //console.log("COLORED CONTAINER!!!"); 
          
         new_styles.push({"action":"new","type": "layer","element":container, "id":layer_styles[last].id});
 
       }else{
         //update element
         updateElementStyle(all_shapesPaths[i], hasMatchingStyle);

        //add setting if it doesn't exist
        var element_size=all_shapesPaths[i].frame;
        var layer_artboard= getLayerArtboard(all_shapesPaths[i]);
        if(container== "container_color"){
          var frame_absolute= getFrameAbsoluteFrame(all_shapesPaths[i]);
          var this_frame= { "x":frame_absolute.x, "y": frame_absolute.y, "width": all_shapesPaths[i].frame.width, "height":all_shapesPaths[i].frame.height};
          colored_containers.push({"artboard": layer_artboard, "container":this_frame}); 
        }
        //console.log("COLORED CONTAINER!!!"); 
    
         var hasSettings=ifStylesavedInSettings(document, all_settings_c,new_styles, hasMatchingStyle.id, "layer");
         if(!hasSettings){
          new_styles.push({"action":"link", "type": "layer","element":container, "id":hasMatchingStyle.id});
         }
       }
     //has synced style
     }else{
       //update element
       updateElementStyle(all_shapesPaths[i], hasStyle);

      //add setting if it doesn't exist
      var element_size=all_shapesPaths[i].frame;
      var layer_artboard= getLayerArtboard(all_shapesPaths[i]);
      if(container== "container_color"){
        var frame_absolute= getFrameAbsoluteFrame(all_shapesPaths[i]);
        var this_frame= { "x":frame_absolute.x, "y": frame_absolute.y, "width": all_shapesPaths[i].frame.width, "height":all_shapesPaths[i].frame.height};
        colored_containers.push({"artboard": layer_artboard, "container":this_frame});
      }
      //console.log("COLORED CONTAINER!!!"); 
       
      var hasSettings=ifStylesavedInSettings(document, all_settings_c,new_styles, hasStyle.id, "layer");
      if(!hasSettings){
        new_styles.push({"action":"save_setting", "type": "layer","element":container, "id":hasStyle.id});
        }
      }
    }
  }


  var count_shapePath_added=count_l;
  // DO SHAPES PATHS
  for(var i=0; i<all_shapesPaths.length;i++ ){
    if(all_shapesPaths[i].frame.width<container_min_width || all_shapesPaths[i].frame.height<container_min_height  || all_shapesPaths[i].shapeType!="Rectangle"){
    count++;
    if(percentage != parseInt(i*100 /all_shapesPaths.length)){
      console.log("Shapes paths 1 - "+percentage+"%");
      percentage = parseInt(i*100 /all_shapesPaths.length);
    }
    var count_fills=0;
    for (var s=0; s<all_shapesPaths[i].style.fills.length; s++){
      if(all_shapesPaths[i].style.fills[s].enabled==true){
        count_fills++;
        break;
      }
    }
    
    var element_size="small";

     //Processing layers and its shared styles 
     var hasStyle= elementHasStyle (layer_styles, all_shapesPaths[i].sharedStyleId) ;
     var isOutOfSync = true;
     if(hasStyle!=false){
       isOutOfSync = all_shapesPaths[i].style.isOutOfSyncWithSharedStyle(hasStyle);
     }
     var is_inside_colored_container= TextinsideColoredContainer(all_shapesPaths[i], colored_containers);

     if(!hasStyle || hasStyle && isOutOfSync ){
       //var hasMatchingStyle= elementHasMatchingStyle(layer_styles, all_shapesPaths[i].style);
       var hasMatchingStyle= elementHasMatchingStyleAndSetting(document,layer_styles, all_shapesPaths[i].style, all_settings_l, all_settings_c, all_settings_t, is_inside_colored_container, ["layer","layer","text"]);

       // is has matching style but one is hover a colored container and the other is not
       var hasmach_butnot=false;
        if(hasMatchingStyle){
          for (var n=0; n<new_styles.length; n++){
            if(new_styles[n].id==hasMatchingStyle.id ){
              if(new_styles[n].colored_container != is_inside_colored_container){
                hasmach_butnot=true;
                break;
              }else{
                break;
              }

            }
          }
        }
        
       if(!hasMatchingStyle || hasmach_butnot ){
         //create new style
         count_shapePath_added++;
         layer_styles= addNewStyle(document,"ShapePath","Layer", all_shapesPaths[i].style, count_shapePath_added,layer_styles) ;
 
         //update element
         var last =layer_styles.length-1;
         updateElementStyle(all_shapesPaths[i], layer_styles[last]);

         //Create new setting
         new_styles.push({"action":"new","type": "layer","colored_container":is_inside_colored_container,"element":element_size, "id":layer_styles[last].id, "layerName": all_shapesPaths[i].name});
 
       }else{
         //update element
         updateElementStyle(all_shapesPaths[i], hasMatchingStyle);

         //add setting if it doesn't exist
         var hasSettings=ifStylesavedInSettings(document, all_settings_l,new_styles, hasMatchingStyle.id, "layer");
         if(!hasSettings){
           new_styles.push({"action":"link", "type": "layer","colored_container":is_inside_colored_container,"element":element_size, "id":hasMatchingStyle.id, "layerName": all_shapesPaths[i].name});
         }
       }
     //has synced style
     }else{
       //update element
       updateElementStyle(all_shapesPaths[i], hasStyle);

      //add setting if it doesn't exist
      var hasSettings=ifStylesavedInSettings(document, all_settings_l,new_styles, hasStyle.id, "layer");
      if(!hasSettings){
        new_styles.push({"action":"save_setting", "type": "layer","colored_container":is_inside_colored_container,"element": element_size, "id":hasStyle.id, "layerName": all_shapesPaths[i].name});
 
      }
    }
  }
}

  //DO SHAPES
  var percentage=0;
  var count_shape_added=count_shapePath_added;
  for(var i=0; i<all_shapes.length;i++ ){
    count++;
    //progress
    if(percentage != parseInt(i*100 /all_shapes.length)){
      console.log("Shapes 1 - "+percentage+"%");
      percentage = parseInt(i*100 /all_shapes.length);
    }
    var element_size="small";

    //Processing layers and its shared styles 
    var hasStyle= elementHasStyle (layer_styles, all_shapes[i].sharedStyleId) ;
    var isOutOfSync = true;
    if(hasStyle!=false){
      isOutOfSync = all_shapes[i].style.isOutOfSyncWithSharedStyle(hasStyle);
    }
    var is_inside_colored_container= TextinsideColoredContainer(all_shapes[i], colored_containers);

    if(!hasStyle || hasStyle && isOutOfSync ){
      //var hasMatchingStyle= elementHasMatchingStyle(layer_styles, all_shapes[i].style);
      var hasMatchingStyle= elementHasMatchingStyleAndSetting(document,layer_styles, all_shapes[i].style, all_settings_l, all_settings_c, all_settings_t, is_inside_colored_container, ["layer","layer","text"]);

       // is has matching style but one is hover a colored container and the other is not
       var hasmach_butnot=false;
        if(hasMatchingStyle){
          for (var n=0; n<new_styles.length; n++){
            if(new_styles[n].id==hasMatchingStyle.id ){
              if(new_styles[n].colored_container != is_inside_colored_container){
                hasmach_butnot=true;
                break;
              }else{
                break;
              }

            }
            
            
          }
        }
       if(!hasMatchingStyle || hasmach_butnot ){
        //create new style
        count_shape_added++;
        layer_styles= addNewStyle(document,"Shape","Layer", all_shapes[i].style, count_shape_added, layer_styles) ;

        //update element
        var last =layer_styles.length-1;
        updateElementStyle(all_shapes[i], layer_styles[last]);

        //Create new setting
        new_styles.push({"action":"new","type": "layer","colored_container":is_inside_colored_container, "element": element_size, "id":layer_styles[last].id, "layerName": all_shapes[i].name});

      }else{
        //update element
        updateElementStyle(all_shapes[i], hasMatchingStyle);

        //add setting if it doesn't exist
        var hasSettings=ifStylesavedInSettings(document, all_settings_l,new_styles, hasMatchingStyle.id, "layer");
        if(!hasSettings){
          new_styles.push({"action":"link", "type": "layer","colored_container":is_inside_colored_container, "element": element_size, "id":hasMatchingStyle.id, "layerName": all_shapes[i].name});
        }
      }
    //has synced style
    }else{
      //update element
      updateElementStyle(all_shapes[i], hasStyle);

      //add setting if it doesn't exist
      var hasSettings=ifStylesavedInSettings(document, all_settings_l,new_styles, hasStyle.id, "layer");
      if(!hasSettings){
        new_styles.push({"action":"save_setting", "type": "layer", "colored_container":is_inside_colored_container, "element":element_size, "id":hasStyle.id, "layerName": all_shapes[i].name});

      }
    }
  }

  
  //DO TEXTS
  var percentage=0;
  var count_text_added=count_t;
  for(var i=0; i<all_texts.length;i++ ){
    count++;
    if(percentage != parseInt(i*100 /all_texts.length)){
      console.log("Texts 1 - "+percentage+"%");
      percentage = parseInt(i*100 /all_texts.length);

    }
    //Processing layers and its shared styles 
    var hasStyle= elementHasStyle (text_styles, all_texts[i].sharedStyleId) ;
    var isOutOfSync = true;
    if(hasStyle!=false){
      isOutOfSync = all_texts[i].style.isOutOfSyncWithSharedStyle(hasStyle);
    }
    var is_inside_colored_container= TextinsideColoredContainer(all_texts[i], colored_containers);

    if(!hasStyle || hasStyle && isOutOfSync ){
      //var hasMatchingStyle= elementHasMatchingStyle(text_styles, all_texts[i].style); 
      var hasMatchingStyle= elementHasMatchingStyleAndSetting(document,text_styles, all_texts[i].style, all_settings_t, all_settings_c, all_settings_l, is_inside_colored_container, ["text","layer","layer"]);

      // is has matching style but one is hover a colored container and the other is not
      var hasmach_butnot=false;
      var hasmach_butnot_setting=false;

      //if matching style founf is in new styles
      if(hasMatchingStyle){
        for (var n=0; n<new_styles.length; n++){
          if(new_styles[n].id==hasMatchingStyle.id ){
            if(new_styles[n].colored_container != is_inside_colored_container){
              hasmach_butnot=true;
              break;
            }else{
              break;
            }

          }
        }
      }
      var hasmach_butnot_setting=false;
      if(hasMatchingStyle && !hasmach_butnot){
        for (var n=0; n<all_settings_t.length; n++){
          if(all_settings_t[n].light==hasMatchingStyle.id){
            if(all_settings_t[n].element != "text"){
              hasmach_butnot_setting=true;
              break;
            }else{
              break;
            }

          }
         
        }
      }
     if(!hasMatchingStyle || hasmach_butnot || hasmach_butnot_setting){  
        //create new style
        count_text_added++;
        var layerName;
        if( all_texts[i].style.fontSize<13){
          layerName= "Text-Small";
        }else if( all_texts[i].style.fontSize<16){
          layerName= "Text-Body";
        }else{
          layerName= "Text-Heading";
        }
        text_styles= addNewStyle(document,layerName,"Text", all_texts[i].style, count_text_added,text_styles) ;

        //update element
        var last =text_styles.length-1;
        updateElementStyle(all_texts[i], text_styles[last]);

        //Create new setting
        new_styles.push({"action":"new","type": "text", "colored_container":is_inside_colored_container, "id":text_styles[last].id, "layerName": all_texts[i].name});

      }else{
        //update element
        updateElementStyle(all_texts[i], hasMatchingStyle);

        //add setting if it doesn't exist
        var hasSettings=ifStylesavedInSettings(document, all_settings_t,new_styles, hasMatchingStyle.id, "text");
        if(!hasSettings){
          new_styles.push({"action":"link", "type": "text","colored_container":is_inside_colored_container,  "id":hasMatchingStyle.id, "layerName": all_texts[i].name});
        
        }
      }
     
    //has synced style
    }else{
      //update element
      updateElementStyle(all_texts[i], hasStyle);

      //add setting if it doesn't exist
      var hasSettings=ifStylesavedInSettings(document, all_settings_t,new_styles, hasStyle.id, "text");
      if(!hasSettings){
        var is_inside_colored_container= TextinsideColoredContainer(all_texts[i], colored_containers);
        new_styles.push({"action":"save_setting", "type": "text", "colored_container":is_inside_colored_container,  "id":hasStyle.id, "layerName": all_texts[i].name});

      }

   }

  }
  //new_styles = new_container_styles.concat(new_styles);
  //console.log(colored_containers);
  //console.log("initial styles"+count_added);
  return {"layer":layer_styles, "text":text_styles, "new_styles": new_styles};

}
function TextinsideColoredContainer(text_element, colored_containers){
  
  var is_inside_colored_container=false;
  var layer_artboard= getLayerArtboard(text_element);
  var same_artboard=false;
  var frame_absolute= getFrameAbsoluteFrame(text_element);

  for(var c=0; c< colored_containers.length; c++){
    if(layer_artboard == colored_containers[c].artboard){
      same_artboard=colored_containers[c];
     
      if(frame_absolute.x >= same_artboard.container.x && frame_absolute.x <= (same_artboard.container.x+same_artboard.container.width)
      && frame_absolute.y >= same_artboard.container.y && frame_absolute.y <= (same_artboard.container.y+same_artboard.container.height)
      ){
        is_inside_colored_container=true;
      }
  }
}
  return is_inside_colored_container;
}
function getFrameAbsoluteFrame(p){
  let parent_top=p;
  let sum_x=p.frame.x;
  let sum_y=p.frame.y;
  if(parent_top.parent.type!="Page"){
    while(parent_top.type!="Artboard" && parent_top.type!="SymbolMaster"  && parent_top.type!="Page"  ){
      parent_top= parent_top.parent;
      if(parent_top.type!="Artboard" && parent_top.type!="SymbolMaster"  && parent_top.type!="Page"  ){
          sum_x+=parent_top.frame.x;
          sum_y+=parent_top.frame.y;
      }
    }
  }
  return {"x":sum_x, "y":sum_y};
}
function elementHasMatchingStyle(all_styles, style, this_settings){
  var repeated=false;
  //console.log(all_styles);
 

  for(var i= 0; i< all_styles.length; i++){
    var isOutOfSync = style.isOutOfSyncWithSharedStyle(all_styles[i]);
    var originLibrary = all_styles[i].getLibrary();

    if(!isOutOfSync && originLibrary==null){
      repeated=all_styles[i];
      break;
    }
  }
  
  return repeated;
  

}

function elementHasMatchingStyleAndSetting(document, all_styles, style, this_settings, otherSettings, otherSettings_2, is_inside_colored_container, type){
  var repeated=false;
  var is_in_my_setting=false;
  var is_in_other_Setting=false;
  //console.log(all_styles);
  for (var n=0; n<this_settings.length; n++){
      if(type[0] == "layer"){
        var setting_style= document.getSharedLayerStyleWithID(this_settings[n].light);
      }else{
        var setting_style= document.getSharedTextStyleWithID(this_settings[n].light);
      }
      var isOutOfSync = style.isOutOfSyncWithSharedStyle(setting_style);

      if(!isOutOfSync && this_settings[n].colored_container == is_inside_colored_container){
        is_in_my_setting=true;
        repeated=setting_style;
        break;
      }
  }
  if(!is_in_my_setting){
    for (var n=0; n<otherSettings.length; n++){
      if(type[1] == "layer"){
        var setting_style= document.getSharedLayerStyleWithID(otherSettings[n].light);
      }else{
        var setting_style= document.getSharedTextStyleWithID(otherSettings[n].light);
      }
      var isOutOfSync = style.isOutOfSyncWithSharedStyle(setting_style);
      //var originLibrary = all_styles[i].getLibrary();
      if(!isOutOfSync){
        is_in_other_Setting=true;
        break;
        }
    }
  }
  if(!is_in_my_setting && !is_in_other_Setting){
    for (var n=0; n<otherSettings_2.length; n++){
      if(type[2] == "layer"){
        var setting_style= document.getSharedLayerStyleWithID(otherSettings_2[n].light);
      }else{
        var setting_style= document.getSharedTextStyleWithID(otherSettings_2[n].light);
      }
      var isOutOfSync = style.isOutOfSyncWithSharedStyle(setting_style);
      //var originLibrary = all_styles[i].getLibrary();
      if(!isOutOfSync){
        is_in_other_Setting=true;
        break;
        }
    }
  }

  if(!is_in_my_setting && !is_in_other_Setting ){
    for(var i= 0; i< all_styles.length; i++){
      var isOutOfSync = style.isOutOfSyncWithSharedStyle(all_styles[i]);
      var originLibrary = all_styles[i].getLibrary();

      if(!isOutOfSync && originLibrary==null){
        repeated=all_styles[i];
        break;
      }
    }
  }
  
  return repeated;
  

}


function ifStylesavedInSettings(document, all_settings, new_styles,  style_id, type){
  var repeated=false;
  //console.log(all_styles);
 
  for(var i= 0; i< new_styles.length; i++){ 
    if(style_id == new_styles[i].id ){
      repeated=i;
      break;
    }
  }
  //console.log(all_styles);
  for(var i= 0; i< all_settings.length; i++){ 
   
    if( style_id == all_settings.light ){
      /*
      if(type == "layer"){
        var style_dark=document.getSharedLayerStyleWithID(all_settings.dark );
        var style_light=document.getSharedLayerStyleWithID(all_settings.light );
      }else{
        var style_dark=document.getSharedTextStyleWithID(all_settings.dark );
        var style_light=document.getSharedTextStyleWithID(all_settings.light );
        
      }
      */
     if(type == "layer"){
        var style_dark=document.getSharedLayerStyleWithID(all_settings.dark );
      }else{
        var style_dark=document.getSharedTextStyleWithID(all_settings.dark );
        
    }
    if(style_dark!=undefined){
      repeated=all_settings[i];
    }
    break;
    }
  }
  return repeated;
}

export function createDarkModeStyle(Settings, document,styles_layer,styles_text, new_styles ){

    console.log(".........................................");
    console.log("Step 2 - Create Dark Mode Layer Styles...");
    var percentage_layer=0;
    var percentage_text=0;
    
    var s_styles= Settings.documentSettingForKey(document,'Styles');
    var s_styles_c= Settings.documentSettingForKey(document,'Styles_Containers');
    var s_styles_l= Settings.documentSettingForKey(document,'Styles_Layers');
    var s_styles_t= Settings.documentSettingForKey(document,'Styles_Texts');

 
    //layer color
    var new_styles_layer= styles_layer;
    var new_styles_text= styles_text;

    //console.log("number of styles"+new_styles.length);
    //DO LAYERS
    for(var i=0; i<new_styles.length; i++){
      //VIEW OF PROGRESS
      if(parseInt(percentage_layer) != parseInt(i*100 /new_styles.length)){
        console.log("Step 2 - "+percentage_layer+"%");
        percentage_layer = parseInt(i*100 /new_styles.length);
      }

      
      //CREATE STYLE LAYER
      if(new_styles[i].type=="layer"){
        //GET SHARED STYLE
        var shared_style = getStyleById(styles_layer, new_styles[i].id);
        // var shared_style = document.getSharedLayerStyleWithID(new_styles[i].id);
        var s_style_name= shared_style.name;
  
  
  
        //GET CLEAN NAMES
        if( s_style_name.includes("lightMode")){
          var clean_name = s_style_name.replace("/lightMode", "").replace(" ", "");
        }else{
          var clean_name = s_style_name.replace(" ", "");
          shared_style.name= shared_style.name+"/lightMode";
  
        }
        var dark_name = clean_name+"/DarkMode";
 
        new_styles_layer.push({
            name: dark_name,
            style: shared_style.style,
            styleType: "Layer",
            document: document
        })
        var last_style=new_styles_layer.length-1;
        var transformMode;
        
         if(new_styles[i].colored_container==true ){
          transformMode= "in_colored_container";
        }else if(new_styles[i].element == "small"){
          transformMode= "Shape";
        }else{
          transformMode= "container";
        }

        //change Fill
        if( shared_style.style.fills.length>0){
          //loop through all fills
          for(var f=0; f<shared_style.style.fills.length; f++){
            //if gradient
            if(shared_style.style.fills[f].fillType=="Gradient"){
              for(var g=0; g<shared_style.style.fills[f].gradient.stops.length; g++){
                var newcolor= transformColor(shared_style.style.fills[f].gradient.stops[g].color, transformMode);
                new_styles_layer[last_style].style.fills[f].gradient.stops[g].color=newcolor;
              }
            //normal fill
            }else{
              var newcolor= transformColor(shared_style.style.fills[f].color, transformMode);
              new_styles_layer[last_style].style.fills[f].color= newcolor;

            }
          }
        }
        //change border
        if( shared_style.style.borders.length>0){
          //loop through all fills
          for(var b=0; b<shared_style.style.borders.length; b++){
            //iff gradient
            if(shared_style.style.borders[b].fillType=="Gradient"){
              for(var g=0; g<shared_style.style.borders[b].gradient.stops.length; g++){
                var newcolor= transformColor(shared_style.style.borders[b].gradient.stops[g].color, transformMode);
                new_styles_layer[last_style].style.borders[b].color=newcolor;
              }
            //normal fill
            }else{
              var newcolor= transformColor(shared_style.style.borders[b].color, transformMode);
              new_styles_layer[last_style].style.borders[b].color=newcolor;

            }
          }
        }

        //change shadows
        if( shared_style.style.shadows.length>0){
          for(var s=0; s<shared_style.style.shadows.length; s++){
            var newcolor= transformColor(shared_style.style.shadows[s].color, transformMode);
            new_styles_layer[last_style].style.shadows[s].color= newcolor;

          }
        }

        //change inner shadows
        if( shared_style.style.innerShadows.length>0){
          for(var s=0; s<shared_style.style.innerShadows.length; s++){
            var newcolor= transformColor(shared_style.style.innerShadows[s].color, transformMode);
            new_styles_layer[last_style].style.innerShadows[s].color= newcolor;

          }
        }

        //add setting
        s_styles.push({"type": "layer","colored_container": new_styles[i].colored_container, "element":new_styles[i].element, "light": shared_style.id, "dark":new_styles_layer[last_style].id})

        if(new_styles[i].element==="small" ){
          s_styles_l.push({"type": "layer","colored_container": new_styles[i].colored_container, "element":new_styles[i].element, "light": shared_style.id, "dark":new_styles_layer[last_style].id})
        }else{
          s_styles_c.push({"type": "layer", "colored_container": new_styles[i].colored_container, "element":new_styles[i].element, "light": shared_style.id, "dark":new_styles_layer[last_style].id})

        }
        //console.log({"type": "layer", "light": shared_style.id, "dark":new_styles_layer[last_style].id});
        //console.log( shared_style.id);
      //CREATE TEXT LAYER
      }else{
        //GET SHARED STYLE
        var shared_style = getStyleById(styles_text, new_styles[i].id);
        // var shared_style = document.getSharedLayerStyleWithID(new_styles[i].id);
       //console.log(shared_style);
        var s_style_name= shared_style.name;
        if( s_style_name.includes("lightMode")){
          var clean_name = s_style_name.replace("/lightMode", "").replace(" ", "");
        }else{
          var clean_name = s_style_name.replace(" ", "");
          shared_style.name= shared_style.name+"/lightMode";
  
        }
        var dark_name = clean_name+"/DarkMode";



        new_styles_text.push({
          name: dark_name,
          style: shared_style.style,
          styleType: "Layer",
          document: document
        })
        var last_style=new_styles_text.length-1;

        if(new_styles[i].colored_container==true ){
            transformMode= "in_colored_container";
          }else{
            transformMode= "Text";
          }

        //CHANGE TEXT COLOR
        var layer_style_color= shared_style.style.textColor;

        var newcolor= transformColor(layer_style_color, transformMode);

        new_styles_text[last_style].style.textColor= newcolor;
        s_styles.push({"type": "text","colored_container":new_styles[i].colored_container,  "element":"text", "light": shared_style.id, "dark":new_styles_text[last_style].id})
        s_styles_t.push({"type": "text","colored_container": new_styles[i].colored_container, "element":"text", "light": shared_style.id, "dark":new_styles_text[last_style].id})
        
      }
    }
    
    return {"layer":new_styles_layer, "text":new_styles_text, "settings": s_styles, "settings_c": s_styles_c , "settings_l": s_styles_l, "settings_t": s_styles_t};

}

function transformColor(color, type){
  if(color.length>7){
    var alpha = color.slice(7, 9);
  }else{
    var alpha="ff";
  }
  var dark_hex_hex= DarkMode(color,type);
  var dark_hex= RGBToHex("rgb("+dark_hex_hex.r+","+dark_hex_hex.g+","+dark_hex_hex.b+")");
  var dark_hex_alpha= dark_hex+alpha;

  return dark_hex_alpha;

}


function getSettingStyle(id, dark, all_settings){
  var opositde_mode=false;
  //console.log(all_styles);

  for(var i= 0; i< all_settings.length; i++){
    if(i==all_settings.length-1 || i==all_settings.length-2){
    //console.log(all_settings[i])
    }

    if(all_settings[i].light== id && dark==true){
     // console.log(opositde_mode)
      opositde_mode=all_settings[i].dark;
      break;
    }
    if(all_settings[i].dark== id && dark==false){
      //console.log(opositde_mode)
      opositde_mode=all_settings[i].light;
      break;
    }
  }
  return opositde_mode;

}



export function SwitchDarkMode_best(Settings, sketch, document, page , layer_styles, text_styles, dark){
    console.log(".........................................");
    var all_layer= sketch.find('*', document.pages[page]);      
    var all_artboards= sketch.find('Artboard', document.pages[page]);
    var all_shapes= sketch.find('Shape', document.pages[page]);
    var all_shapesPaths= sketch.find('ShapePath', document.pages[page]);
    var all_texts= sketch.find('Text', document.pages[page]);
    var all_settings= Settings.documentSettingForKey(document, 'Styles');

    if(dark){
      var this_mode="lightMode";
      var to_mode="DarkMode";
    }else{
      var this_mode="DarkMode";
      var to_mode="lightMode";
    }
    var count_switch=0;
    console.log("Step 4 - Switch to "+to_mode);
    var percentage=0;
    for(var i=0; i<all_shapes.length;i++ ){
      if(percentage != parseInt(i*100 /all_shapes.length)){
        console.log("Shapes 4 - "+percentage+"%");
        percentage = parseInt(i*100 /all_shapes.length);
  
      }
      
      var style_oposite_id= getSettingStyle(all_shapes[i].sharedStyleId , dark,all_settings);
      if(style_oposite_id!=false){
        //console.log(style_oposite_id);
        var style_oposite = document.getSharedLayerStyleWithID(style_oposite_id);
        //console.log(style_oposite);
        
        if(style_oposite!=undefined){
        
          all_shapes[i].sharedStyleId=style_oposite.id;
          all_shapes[i].sharedStyle=style_oposite;
          all_shapes[i].style=style_oposite.style;
          all_shapes[i].style.syncWithSharedStyle(style_oposite);
        }

      }
    }

    var percentage=0;
    for(var i=0; i<all_shapesPaths.length;i++ ){
      if(percentage != parseInt(i*100 /all_shapesPaths.length)){
        console.log("Shapes Paths 4 - "+percentage+"%");
        percentage = parseInt(i*100 /all_shapesPaths.length);
  

      }
      //console.log("shape id "+all_shapesPaths[i].sharedStyleId);
      
      var style_oposite_id= getSettingStyle(all_shapesPaths[i].sharedStyleId,dark,all_settings);
      //console.log(all_shapesPaths[i].sharedStyleId);

      //console.log("shape"+style_oposite_id);
      if(style_oposite_id!=false){
        //console.log("style_oposite_id");
        var style_oposite = document.getSharedLayerStyleWithID(style_oposite_id);
        if(style_oposite!=undefined){

          all_shapesPaths[i].sharedStyleId=style_oposite.id;
          all_shapesPaths[i].sharedStyle=style_oposite;
          all_shapesPaths[i].style=style_oposite.style;
          all_shapesPaths[i].style.syncWithSharedStyle(style_oposite);
          count_switch++;

        }
      }
    }

    var percentage=0;
    for(var i=0; i<all_texts.length;i++ ){
      if(percentage != parseInt(i*100 /all_texts.length)){
        console.log("Texts 4 - "+percentage+"%");
        percentage = parseInt(i*100 /all_texts.length);
  
      }

      var style_oposite_id= getSettingStyle(all_texts[i].sharedStyleId, dark,all_settings);
      if(style_oposite_id!=false){
        var style_oposite = document.getSharedTextStyleWithID(style_oposite_id);
        if(style_oposite!=undefined){

          all_texts[i].sharedStyleId=style_oposite.id;
          all_texts[i].sharedStyle=style_oposite;
          all_texts[i].style=style_oposite.style;
          all_texts[i].style.syncWithSharedStyle(style_oposite);
          count_switch++;

        }
      }

    }
    if(count_switch>0){
      var percentage=0;
      for(var i=0; i<all_artboards.length;i++ ){
        console.log("Artboard - "+i);

        if(percentage != parseInt(i*100 /all_artboards.length)){
          console.log("Artboards 4 - "+percentage+"%");
          percentage = parseInt(i*100 /all_artboards.length);
        }

        //CHANGE TEXT COLOR
        if( all_artboards[i].background.enabled==false){
          var layer_style_color= "#ffffff";
          
        }else{
          var layer_style_color= all_artboards[i].background.color;
        }

        var alpha="ff";
        var dark_hex_hex= DarkMode(layer_style_color, "Artboard");
        var dark_hex= RGBToHex("rgb("+dark_hex_hex.r+","+dark_hex_hex.g+","+dark_hex_hex.b+")");


        var new_artboard_color=dark_hex+alpha;
        all_artboards[i].background.color=new_artboard_color;
        all_artboards[i].background.enabled=true;

      }
    }
    return count_switch;
  
}