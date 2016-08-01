/* 
 * Title: spr-objects.js
 * Author: Ralph L. ROSE
 * E-mail address: rose@waseda.jp
 * Description: This javascript library defines prototypes that may be used
 * to support the execution of a self-paced-reading experiment. It is designed
 * to be used by self-paced-reading.js 
 */

"use strict";

var exptFixationchar;
var exptMaskchar;

/*
 * The Region object defines a region of text to be displayed in
 * a self-paced-reading experiment.
 * @param id - The ID for this region
 * @param text - The string to be displayed at this region
 * @param index - The ordered index of this region within a sequence of regions
 * @param location - The location of this region relative to the region of interest
 * @param item - The experimental item that this region is a member of
 */
function Region(id, text, index, location, item){
    this.id = id;
    this.text = text;
    this.index = index;
    this.location = location;
    this.html = createRegionHtml(this.id, this.index, this.text);
    this.mask = function(){
        var maskChar = exptMaskchar === 'undefined' ? "_" : exptMaskchar;
        this.html.textContent = text.replace(/./g, maskChar);
        return this;
    };
    this.unmask = function(){
        this.html.textContent = this.text;
        return this;
    }
}

/*
 * For the given region, a <span> object is created with the given ID and
 * index, and with text of length equal to the original text.
 * @param id - The ID for this region
 * @param text - The string to be displayed at this region
 * @param index - The ordered index of this region within a sequence of regions
 * @returns A <span> object with the associated mark-up
 */
function createRegionHtml(id, index, text){
    var s = document.createElement("span");
    s.id = id.concat(index);
    s.className = "region";
    s.textContent = text;
    return s;
}

/*
 * The Item object represents one experimental item containing a stimulus
 * (a set of self-paced-reading regions) and optionally a follow-up question
 * with response options and feedback
 * @param id - The ID for this item
 * @param text - The text string for this item where regions are delimited
 * with the vertical bar '|' and the region of interest (ROI) is surrounded
 * by curly braces: {}
 * @param isHorizontal - An optional parameter to indicate whether the regions
 * are presented horizontally (i.e., one-sentence stimuli) or vertically (i.e.,
 * multi-sentence stimuli). [default=true]
 */
function Item(id, text, isHorizontal){
    if (isHorizontal === 'undefined') { isHorizontal = true; }
    this.id = id;
    this.text = text; // Is it useful to store this as plain text: .replace(/\|/g, ' ') ?
    this.regions = parseRegions(this);
    this.curRegionIndex = 'undefined';   // The index of the current SPR region being displayed
    this.prompt = 'undefined';  // The prompt and options variables need to be
    this.options = 'undefined'; // explicitly set
    this.optionOrder = "fixed";
    this.condition = []; // An array of values representing the experimental conditions
    this.html = createItemHtml(this);
}

/*
 * 
 * @param item - The Item object from which the html object should be created
 * @returns A <div> object with the associated mark-up
 */
function createItemHtml(item){
    var itemDiv = document.createElement("div");
    itemDiv.className = "item";
    itemDiv.id = item.id;
    var fixationP = document.createElement("p");
    fixationP.id = item.id.concat("-fixation");
    fixationP.className = "fixation";
    fixationP.textContent = exptFixationchar;
    itemDiv.appendChild(fixationP);
    if (this.isHorizontal){ // single-line SPR type
        // split string into regions
        var itemP = document.createElement("p"); // create p container for regions
        itemP.id = item.id.concat("-stimulus");
        itemP.className = "stimulus";
        // for each region
        for (var i=0; i<this.regions.length; i++){
            // add span to div
            if (i>0){
                var space = document.createTextNode(" ");
                itemP.appendChild(space);
            }
            itemP.appendChild(regions[i].mask().html);
        }
        itemDiv.appendChild(itemP);
    } else { // multi-line SPR type
        // TODO: create a multi-line version
    }
    return itemDiv;
}

/*
 * Parses a region-delimited text (with '|'), creates Region objects for each
 * and returns an array of these objects.
 * @param id - The Item ID; will be used to create sub-IDs for Regions
 * @param text - The delimited text string to be parsed
 * @returns An array containing the Region objects
 */
function parseRegions(item){
    var regionArr = [];
    var regions = item.text.split("|");
    var roiIndex = getRoi(regions);
    if (roiIndex != -1){
        regions[roiIndex] = regions[roiIndex].replace('{','').replace('}','');
    }
    for (var i=0; i<regions.length; i++){
        var region = new Region(item.id, regions[i], i+1, roiIndex, item);
        regionArr.push(region);
    }
    return regionArr;
}

/*
 * A helper function to find the region marked as the region of interest
 * @param regions - An array of texts representing the experimental regions
 * @returns An integer representing the 0-indexed region of the array marked
 * as the region of interest (with curly braces {}), or -1 if not found
 */
function getRoi(regions){
    var result = -1;
    for (var i=0; i<regions.length; i++){
        var r = regions[i].trim();
        if (r.charAt(0) === '{' && r.charAt(r.length-1) === '}'){
            result = i;
            break;
        }
    }
    return result;
}

/*
 * The Title object merely defines the parameters related to a title screen
 * @param text - The text of the title of the experiment
 * @param primaryInvestigators - An array of names of the primary investigators
 * @param otherInvestigators - An array of names of other investigators
 */
function Title(text, primaryInvestigators, otherInvestigators){
    this.text = text;
    this.primaryInvestigators = primaryInvestigators;
    this.otherInvestigators = otherInvestigators;
    this.html = createTitleHtml(this);
}

/*
 * Creates a <div> object to show the experiment title and investigators' names
 * @param title - The Title object
 * @returns a <div> object containing the opening screen info
 */
function createTitleHtml(title){
    // create the title div
    var titleDiv = document.createElement("div");
    titleDiv.className = "title";
    // create and add the title
    var t = document.createElement("h1");
    t.textContent = title.text;
    titleDiv.appendChild(t);
    // create and add investigator info
    var investigators = document.createElement("p");
    investigators.className = "investigators";
    var pi = ""; // primary investigator list
    var oi = ""; // other investigator list
    for (var i=0; i<title.primaryInvestigators.length; i++){
        if (pi.length > 0) { pi = pi.concat(", "); }
        pi = pi.concat(title.primaryInvestigators[i]);
    }
    var primary = document.createElement("span");
    primary.className = "primary-investigators";
    primary.textContent = pi;
    for (var i=0; i<title.otherInvestigators.length; i++){
        if (oi.length > 0) { pi = pi.concat(", "); }
        oi = oi.concat(title.otherInvestigators[i]);
    }
    var other = document.createElement("span");
    other.className = "other-investigators";
    other.textContent = oi;
    investigators.appendChild(primary);
    var space = document.createTextNode(" ");
    investigators.appendChild(space);
    investigators.appendChild(other);
    titleDiv.appendChild(investigators);
    return titleDiv;
}

/*
 * The Instructions object merely defines the parameters related to an instructions screen
 * @param text - The instructions text (with html allowed)
 */
function Instructions(text){
    this.text = text;
    this.html = createInstructionsHtml(this);
}

/*
 * Creates a <div> object to show the instructions
 * @param instructions - The Instructions object
 * @returns a <div> object containing the instructions screen info
 */
function createInstructionsHtml(instructions){
    var instructionsDiv = document.createElement("div");
    instructionsDiv.className = "instructions";
    instructionsDiv.textContent = instructions.text;
    return instructionsDiv;
}

/*
 * The Screen object corresponds to one screen in the experimental process,
 * including a title screen, an instructions screen or a stimulus item screen.
 * Screen objects constitute the basic sequence of the experiment.
 * @param type - The type of screen: Title, Instructions, or Item
 * @param object - The object with information related to the screen
 * @param next - The next screen object in the experimental sequence
 */
function Screen(type, object, nextScreen){
    this.type = type; // possible values: title, instructions, item
    this.object = object;
    this.nextScreen = nextScreen;
    this.processKeydown = function(keyCode, elapsedTime){
        switch (this.type){
            case "title":
            case "instructions":
                // TODO
                break;
            case "item":
                // TODO
                break;
            default:
                // TODO: error message
        }
    };
}

/*
 * The Experiment object corresponds to the whole experiment and contains all
 * the parameters, settings and stimuli of the experiment. It is the top-level
 * object in the SPR architecture.
 * @param design - A json-formatted object containing the experimental design
 * @param form - the html <form> object that will handle the data values on submit
 */
function Experiment(design, form){
    this.design = design; // json object containing the design, stimuli, etc.
    this.designValidated = false;    // Boolean to indicate whether design file has been validated

    // General experiment settings and parameters
    this.title = design["title"] !== 'undefined' ? design["title"].trim() : "A Self-paced Reading Experiment";
    this.fontname = design["font-name"] !== 'undefined' ? design["font-name"].trim() : "Courier new";
    this.fontsize = design["font-size"] !== 'undefined' ? design["font-size"].trim() : "12";
    // Following colors must be HTML supported color names; e.g., http://www.w3schools.com/colors/colors_names.asp
    this.textcolor = design["text-color"] !== 'undefined' ? design["text-color"].trim() : "black";
    this.textcolor = validTextColour(this.textcolor) ? this.textcolor : "black";
    this.backgroundcolor = design["background-color"] !== 'undefined' ? design["background-color"].trim() : "white";
    this.backgroundcolor = validTextColour(this.backgroundcolor) ? this.backgroundcolor : "white";
    this.display = design["display"] !== 'undefined' ? design["display"].trim() : "Moving window";
    // Following must be only one character in length
    this.fixationchar = design["fixation-character"] !== 'undefined' ? design["fixation-character"].trim().substr(0,1) : "+";
    this.maskchar = design["masking-character"] !== 'undefined' ? design["masking-character"].trim().substr(0,1) : "_";
    
    // variables for experiment flow and execution
    this.form = form;
    this.frame = createExptFrame();
    this.screens = [];  // List of all screen divs in the experiment: title, instructions, stimulus items
    this.curScreenIndex;   // The index of the current screen in screenInfo array being displayed.
    
    // object methods
    this.startExperiment = function(){};
    this.processKeydown = function(keyCode, time){};
    this.endExperiment = function(){};
    this.validateDesign = function(){};
    this.loadStimuli = function(){};
}

/*
 * 
 * @returns A <div> object representing the main experiment frame
 */
function createExptFrame(){
  var frame = document.createElement("div");
  frame.className = "experiment-frame";
  document.body.appendChild(frame);
  return frame;
}

//// General Helper Functions

/*
 * Check that the color name provided is one of the 147 HTML valid color names
 * (e.g., http://www.w3schools.com/colors/colors_hex.asp).
 * Credit: http://stackoverflow.com/questions/6386090/validating-css-color-names
 * @param stringToTest - the string to be tested for validity (e.g., black, red)
 * @returns true if string is a valid color name; false otherwise
 */
function validTextColour(stringToTest) {
    //Alter the following conditions according to your need.
    if (stringToTest === "") { return false; }
    if (stringToTest === "inherit") { return false; }
    if (stringToTest === "transparent") { return false; }

    var image = document.createElement("img");
    image.style.color = "rgb(0, 0, 0)";
    image.style.color = stringToTest;
    if (image.style.color !== "rgb(0, 0, 0)") { return true; }
    image.style.color = "rgb(255, 255, 255)";
    image.style.color = stringToTest;
    return image.style.color !== "rgb(255, 255, 255)";
}

/*
 * Shuffles an array object in place and returns the object
 * Credit: https://github.com/coolaj86/knuth-shuffle
 * @param an array
 * @return the shuffled array
 */
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}