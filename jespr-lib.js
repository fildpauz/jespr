/* 
 * Title: jespr-lib.js
 * Author: Ralph L. ROSE
 * E-mail address: rose@waseda.jp
 * Description: This javascript library defines the objects
 * necessary to run a JESPR experiment.
 * License: The MIT License (MIT)
 */

"use strict";

/*
 * The Region object defines a region of text to be displayed in
 * a self-paced-reading experiment.
 * @param id - The ID for this region
 * @param text - The string to be displayed at this region
 * @param index - The ordered index of this region within a sequence of regions
 * @param location - The location of this region relative to the region of interest
 * @param item - The experimental item that this region is a member of
 */
function Region(itemId, text, index, roiIndex){
    this.id = itemId + "_" + index;
    this.itemId = itemId;
    this.text = text;
    this.index = index;
    this.roiRelPosition = roiIndex ==="NA" ? "NA" : index - roiIndex;
    this.html = this.createHtml();
}

/*
 * Changes the currently displayed text content to masked text of equal length
 */
Region.prototype.mask = function(char){
    var maskChar = typeof char === 'undefined' ? "!" : char;
    this.html.textContent = this.text.replace(/[^\ ]/g, maskChar);
    return this;
};

/*
 * Changes the currently displayed masked text content to the region's predefined text
 */
Region.prototype.unmask = function(){
    this.html.textContent = this.text;
    return this;
};

/*
 * For the given region, a <span> object is created with the given ID and
 * index, and with text of length equal to the original text.
 * @param id - The ID for this region
 * @param text - The string to be displayed at this region
 * @param index - The ordered index of this region within a sequence of regions
 * @returns A <span> object with the associated mark-up
 */
Region.prototype.createHtml = function(){
    var s = document.createElement("span");
    s.id = this.id;
    s.className = "region";
    s.textContent = this.text;
    return s;
};

Region.prototype.lockWidth = function(){
    // This function will only be effective after the region has been added
    // to the DOM and display is not 'none'. (but visibility may be 'hidden').
    var width = this.html.offsetWidth;
    this.html.style.width = width + "px";
};

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
function Item(id, text, orientation, fixationChar, maskChar, display, prompt, options, feedbackOptions, setName, groupName, tags){
    this.id = id;
    this.text = text; // Is it useful to store this as plain text: .replace(/\|/g, ' ') ?
    if (orientation === 'horizontal' | orientation === 'vertical') {
        this.orientation = orientation;
    } else {
        this.orientation = "horizontal"; // default to horizontal
    }
    this.fixationChar = fixationChar;
    this.maskChar = maskChar;
    this.display = display;
    this.feedbackOptions = feedbackOptions;
    this.regions = this.parseRegions();
    this.curRegionIndex = undefined;   // The index of the current SPR region being displayed
    this.prompt = prompt;
    this.options = options;
    this.optionOrder = "random"; // TODO: Implement a way for this to be set in json file
    this.showFeedback = false;
    this.setName = setName; // Name of stimulus set as given in json design object
    this.groupName = groupName; // Name of stimulus group as given in json design object
    this.tags = tags; // An array of strings which tag the item (e.g., experimental condition)
    this.html = this.createHtml();
    this.timeData = [];
}

Item.prototype.show = function(frame){
    this.frame = frame;
    this.frame.appendChild(this.html); // add to DOM
    this.html.style.display = "block"; // show it
    this.curRegionIndex = -1; // represents the fixation mark
};

Item.prototype.hide = function(){
    this.html.style.display = "none";  // hide it
    this.frame.removeChild(this.html); // remove from DOM
    // TODO: Add data to hidden field in form (?)
};

Item.prototype.processKeydown = function(keyCode, elapsedTime){
    var result = "continue";
    switch (keyCode){
        case 32: // space bar
            if (this.curRegionIndex === -1){ // fixation mark is showing
                this.saveData(this.id + "_fixation", "NA", elapsedTime, keyCode, this.fixationChar);
                var fixationP = document.getElementById(this.id + "_fixation");
                fixationP.style.display = "none";
                var stimulusP = document.getElementById(this.id + "_stimulus");
                stimulusP.style.display = "block";
                for (var i=0; i<this.regions.length; i++){
                    this.regions[i].unmask();
                    this.regions[i].lockWidth();
                    this.regions[i].mask(this.maskChar);
                }
                stimulusP.style.visibility = "visible";
                this.curRegionIndex++;
                this.regions[this.curRegionIndex].unmask();
            } else if (this.curRegionIndex < this.regions.length-1){ // non-final SPR region is showing
                var curRegion = this.regions[this.curRegionIndex];
                this.saveData(curRegion.id, this.curRegionIndex, elapsedTime, keyCode, curRegion.text);
                if (this.display === "moving window"){
                    curRegion.mask(this.maskChar);
                }
                var nextRegion = this.regions[this.curRegionIndex+1];
                nextRegion.unmask();
                this.curRegionIndex++;
            } else if (this.curRegionIndex === this.regions.length-1){ // final SPR region is showing
                var curRegion = this.regions[this.curRegionIndex];
                this.saveData(curRegion.id, this.curRegionIndex, elapsedTime, keyCode, curRegion.text);
                this.curRegionIndex++;
                if (typeof this.prompt !== 'undefined'){
                    var stimulusP = document.getElementById(this.id + "_stimulus");
                    stimulusP.style.display = "none";
                    var promptP = document.getElementById(this.id + "_prompt");
                    promptP.style.display = "block";
                    promptP.style.visibility = "visible";
                } else {
                    this.hide();
                    result = "end of screen";
                }
            } else if (this.curRegionIndex === this.regions.length){ // prompt is showing
                // prompt is showing, but non-answer key pressed -- ignore
            } else if (this.curRegionIndex === this.regions.length+1){ // feedback is showing
                var feedbackP = document.getElementById(this.id + "_feedback");
                this.saveData(this.id + "_feedback", "NA", elapsedTime, keyCode, feedbackP.dataset.feedback);
                this.hide();
                result = "end of screen";
            } else {
                // This case should never be reached, but if it is, end item
                // to prevent getting stuck in an infinite loop
                this.hide();
                result = "end of screen";
            }
            break;
        // Option 1 buttons (on left-hand side of keyboard)
        case 49:      // digit 1
        case 113, 81: // q,Q
        case 97, 65:  // a,A
        case 122, 90: // z,Z
            if (this.curRegionIndex === this.regions.length){
                var promptP = document.getElementById(this.id + "_prompt");
                this.saveData(this.id + "_prompt", "NA", elapsedTime, keyCode, promptP.dataset.string);
                if (this.showFeedback){
                    promptP.style.display = "none";
                    var feedbackP = document.getElementById(this.id + "_feedback");
                    var feedbackSpan = document.getElementById(this.id + "_feedback_left");
                    feedbackSpan.style.display = "inline-block";
                    feedbackP.style.display = "block";
                    feedbackP.style.visibility = "visible";
                    feedbackP.dataset.feedback = feedbackSpan.dataset.string;
                    this.curRegionIndex++;
                } else {
                    this.hide();
                    result = "end of screen";
                }
            }
            break;
        // Option 2 buttons (on right-hand side of keyboard)
        case 48:      // digit 0
        case 112, 80: // p,P
        case 108, 76: // l,L
        case 109, 77: // m,M
            if (this.curRegionIndex === this.regions.length){
                var promptP = document.getElementById(this.id + "_prompt");
                this.saveData(this.id + "_prompt", "NA", elapsedTime, keyCode, promptP.dataset.string);
                if (this.showFeedback){
                    promptP.style.display = "none";
                    var feedbackP = document.getElementById(this.id + "_feedback");
                    var feedbackSpan = document.getElementById(this.id + "_feedback_right");
                    feedbackSpan.style.display = "inline-block";
                    feedbackP.style.display = "block";
                    feedbackP.style.visibility = "visible";
                    feedbackP.dataset.feedback = feedbackSpan.dataset.string;
                    this.curRegionIndex++;
                } else {
                    this.hide();
                    result = "end of screen";
                }
            }
            break;
        default:
            // Pressed other key -- do nothing
    }
    return result;
};

Item.prototype.saveData = function(regionId, index, elapsedTime, keyCode, string){
    var roiRelPosition = typeof index === 'number' ? this.regions[index].roiRelPosition : "NA";
    roiRelPosition = typeof roiRelPosition === 'undefined' ? "NA" : roiRelPosition;
    var data = { "regionId": regionId,
                 "elapsedTime": elapsedTime,
                 "keyCode": keyCode,
                 "string": string,
                 "roiRelPosition": roiRelPosition };
    this.timeData.push(data);
};

Item.prototype.getData = function(participant, maxTags){
    var result = "";
    for (var i=0; i<this.timeData.length; i++){
        var data = this.timeData[i];
        var line = "\"" + participant + "\",\"" + this.id + "\"";
        line = line + ",\"" + data["regionId"] + "\"," + data["roiRelPosition"];
        line = line + "," + data["elapsedTime"] + "," + data["keyCode"];
        line = line + ",\"" + data["string"] + "\"";
        if (this.setName === "NA"){
            line = line + ",NA";
        } else {
            line = line + ",\"" + this.setName + "\"";
        }
        if (this.groupName === "NA"){
            line = line + ",NA";
        } else {
            line = line + ",\"" + this.groupName + "\"";
        }
        for (var j=0; j<this.tags.length; j++){
            if (this.tags[j].length > 0){
                line = line + ",\"" + this.tags[j] + "\"";
            } else {
                line = line + ",NA";
            }
        }
        for (var k=this.tags.length; j<maxTags; j++){ line = line + ",NA"; }
        line = line + "\n";
        result = result + line;
    }
    return result;
};

/*
 * 
 * @param item - The Item object from which the html object should be created
 * @returns A <div> object with the associated mark-up
 */
Item.prototype.createHtml = function(){
    var itemDiv = document.createElement("div");
    itemDiv.className = "item";
    itemDiv.id = this.id;
    var fixationP = document.createElement("p");
    fixationP.id = this.id + "_fixation";
    fixationP.className = "fixation";
    fixationP.textContent = this.fixationChar;
    itemDiv.appendChild(fixationP);
    // split string into regions
    var itemP = document.createElement("p"); // create p container for regions
    itemP.id = this.id + "_stimulus";
    itemP.className = "stimulus";
    // for each region
    for (var i=0; i<this.regions.length; i++){
        // add span to div
        if (i>0){
            if (this.orientation === 'horizontal'){ // single-line SPR type
                var space1 = document.createTextNode(" ");
                itemP.appendChild(space1);
            } else if (this.orientation === 'vertical'){ // multi-line SPR type
                var br1 = document.createElement("br");
                itemP.appendChild(br1);
            } else {
                // Should never reach this point
            }
        }
        itemP.appendChild(this.regions[i].mask(this.maskChar).html);
    }
    itemDiv.appendChild(itemP);
    if (typeof this.prompt !== 'undefined'){
        // Add prompt and options
        var promptP = document.createElement("p");
        promptP.id = this.id + "_prompt";
        promptP.className = "prompt";
        var promptText = document.createTextNode(this.prompt);
        promptP.appendChild(promptText);
        var br2 = document.createElement("br");
        promptP.appendChild(br2);
        if (this.optionOrder === "random"){ shuffle(this.options); }
        var leftOption = document.createElement("span");
        leftOption.id = this.id + "_option_1";
        leftOption.className = "option";
        leftOption.textContent = this.options[0]["string"];
        promptP.appendChild(leftOption);
        var space2 = document.createTextNode(" ");
        promptP.appendChild(space2);
        var rightOption = document.createElement("span");
        rightOption.id = this.id + "_option_2";
        rightOption.className = "option";
        rightOption.textContent = this.options[1]["string"];
        promptP.appendChild(rightOption);
        promptP.dataset.string = this.prompt + "|" + this.options[0]["string"] + "|" + this.options[1]["string"];
        itemDiv.appendChild(promptP);
        if (typeof this.options[0]["feedback"] !== 'undefined' || typeof this.options[0]["feedback-option"] !== 'undefined'){
            // Add feedback element
            var feedbackP = document.createElement("p");
            feedbackP.id = this.id + "_feedback";
            feedbackP.className = "feedback";
            var leftFeedback = document.createElement("span");
            leftFeedback.id = this.id + "_feedback_left";
            leftFeedback.className = "feedback";
            if (typeof this.options[0]["feedback-option"] !== 'undefined'){
                leftFeedback.textContent = this.feedbackOptions[this.options[0]["feedback-option"]]["string"];
                if (this.feedbackOptions[this.options[0]["feedback-option"]]["text-color"] !== 'undefined'){
                    leftFeedback.style.color = this.feedbackOptions[this.options[0]["feedback-option"]]["text-color"];
                }
                leftFeedback.dataset.string = this.options[0]["feedback-option"];
            } else {
                leftFeedback.textContent = this.options[0]["feedback"];
                if (this.options[0]["text-color"] !== 'undefined'){
                    leftFeedback.style.color = this.options[0]["text-color"];
                }
                leftFeedback.dataset.string = this.options[0]["feedback"];
            }
            feedbackP.appendChild(leftFeedback);
            var rightFeedback = document.createElement("span");
            rightFeedback.id = this.id + "_feedback_right";
            rightFeedback.className = "feedback";
            if (typeof this.options[1]["feedback-option"] !== 'undefined'){
                rightFeedback.textContent = this.feedbackOptions[this.options[1]["feedback-option"]]["string"];
                if (this.feedbackOptions[this.options[1]["feedback-option"]]["text-color"] !== 'undefined'){
                    rightFeedback.style.color = this.feedbackOptions[this.options[1]["feedback-option"]]["text-color"];
                }
                rightFeedback.dataset.string = this.options[1]["feedback-option"];
            } else {
                rightFeedback.textContent = this.options[1]["feedback"];
                if (this.options[1]["text-color"] !== 'undefined'){
                    rightFeedback.style.color = this.options[1]["text-color"];
                }
                rightFeedback.dataset.string = this.options[1]["feedback"];
            }
            feedbackP.appendChild(rightFeedback);
            this.showFeedback = true;
            itemDiv.appendChild(feedbackP);
        }
    }
    return itemDiv;
};

/*
 * Parses a region-delimited text (with '|'), creates Region objects for each
 * and returns an array of these objects.
 * @param id - The Item ID; will be used to create sub-IDs for Regions
 * @param text - The delimited text string to be parsed
 * @returns An array containing the Region objects
 */
Item.prototype.parseRegions = function(){
    var regionArr = [];
    var regions = this.text.split("|");
    var roiIndex = this.getRoi(regions);
    if (roiIndex !== "NA"){
        regions[roiIndex] = regions[roiIndex].replace('{','').replace('}','');
    }
    for (var i=0; i<regions.length; i++){
        var region = new Region(this.id, regions[i], i, roiIndex, this);
        regionArr.push(region);
    }
    return regionArr;
};

/*
 * A helper function to find the region marked as the region of interest
 * @param regions - An array of texts representing the experimental regions
 * @returns An integer representing the 0-indexed region of the array marked
 * as the region of interest (with curly braces {}), or -1 if not found
 */
Item.prototype.getRoi = function(regions){
    var result = "NA";
    for (var i=0; i<regions.length; i++){
        var r = regions[i].trim();
        if (r.charAt(0) === '{' && r.charAt(r.length-1) === '}'){
            result = i;
            break; // assumes only one ROI per item
        }
    }
    return result;
};

/*
 * The Title object merely defines the parameters related to a title screen
 * @param text - The text of the title of the experiment
 * @param primaryInvestigators - An array of names of the primary investigators
 * @param otherInvestigators - An array of names of other investigators
 */
function Title(text, primaryInvestigators, otherInvestigators){
    this.id = "title";
    this.text = text;
    this.primaryInvestigators = primaryInvestigators;
    this.otherInvestigators = otherInvestigators;
    this.html = this.createHtml();
    this.frame = undefined;
    this.showTime;
    this.elapsedTime;
    this.keyCode;
}

Title.prototype.show = function(frame, elapsedTime){
    this.frame = frame;
    this.frame.appendChild(this.html); // add to DOM
    this.html.style.display = "block"; // show it
    this.showTime = elapsedTime;
};

Title.prototype.hide = function(){
    this.html.style.display = "none";  // hide it
    this.frame.removeChild(this.html); // remove from DOM
};

Title.prototype.processKeydown = function(keyCode, elapsedTime, minTime){
    var result = "continue";
    if (elapsedTime - this.showTime > minTime){
        switch (keyCode){
            case 32: // space bar
                this.elapsedTime = elapsedTime;
                this.keyCode = keyCode;
                this.hide();
                result = "end of screen";
                break;
            default:
                // Pressed other key -- do nothing
        }
    }
    return result;
};

Title.prototype.getData = function(participant, maxTags){
    var result = "\"" + participant + "\",\"" + this.id + "\",NA,NA,\"" + this.elapsedTime + "\",\"" + this.keyCode + "\",\"" + truncateText(this.text, 40) + "\",NA,NA";
    for (var i=0; i<maxTags; i++){ result = result + ",NA"; }
    result = result + "\n";
    return result;
};

/*
 * Creates a <div> object to show the experiment title and investigators' names
 * @returns a <div> object containing the opening screen info
 */
Title.prototype.createHtml = function(){
    // create the title div
    var titleDiv = document.createElement("div");
    titleDiv.className = "title";
    // create and add the title
    var titleP = document.createElement("p");
    titleP.className = "title";
    titleP.textContent = this.text;
    titleDiv.appendChild(titleP);
    // create and add investigator info
    var investigators = document.createElement("p");
    investigators.className = "investigators";
    var pi = ""; // primary investigator list
    var oi = ""; // other investigator list
    for (var i=0; i<this.primaryInvestigators.length; i++){
        if (pi.length > 0) { pi = pi.concat(", "); }
        pi = pi.concat(this.primaryInvestigators[i]);
    }
    var primary = document.createElement("span");
    primary.className = "primary-investigators";
    primary.textContent = pi;
    for (var i=0; i<this.otherInvestigators.length; i++){
        if (oi.length > 0) { pi = pi.concat(", "); }
        oi = oi.concat(this.otherInvestigators[i]);
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
};

/*
 * The Instructions object merely defines the parameters related to an instructions screen
 * @param text - The instructions text (with html allowed)
 */
function Instructions(id, text){
    this.id = id;
    this.text = text;
    this.html = this.createHtml();
    this.frame = undefined;
    this.showTime;
    this.elapsedTime;
    this.keyCode;
}

/*
 * Shows the Instructions element
 * @param {type} frame - the DOM element inside which the Instructions will be shown
 */
Instructions.prototype.show = function(frame, elapsedTime){
    this.frame = frame;
    this.frame.appendChild(this.html); // add to DOM
    this.html.style.display = "block"; // show it
    this.showTime = elapsedTime;
};

/*
 * Hides the Instructions element and removes it from DOM.
 */
Instructions.prototype.hide = function(){
    this.html.style.display = "none";  // hide it
    this.frame.removeChild(this.html); // remove from DOM
};

Instructions.prototype.processKeydown = function(keyCode, elapsedTime, minTime){
    var result = "continue";
    if (elapsedTime - this.showTime > minTime){
        switch (keyCode){
            case 32: // space bar
                this.elapsedTime = elapsedTime;
                this.keyCode = keyCode;
                this.hide();
                result = "end of screen";
                break;
            default:
                // Pressed other key -- do nothing
        }
    }
    return result;
};

/*
 * Creates a <div> object to show the instructions
 * @returns a <div> object containing the instructions screen info
 */
Instructions.prototype.createHtml = function(){
    var instructionsDiv = document.createElement("div");
    instructionsDiv.className = "instructions";
    instructionsDiv.innerHTML = this.text;
    return instructionsDiv;
};

Instructions.prototype.getData = function(participant, maxTags){
    var result = "\"" + participant + "\",\"" + this.id + "\",NA,NA,\"" + this.elapsedTime + "\",\"" + this.keyCode + "\",\"" + truncateText(this.text, 20) + "\",NA,NA";
    for (var i=0; i<maxTags; i++){ result = result + ",NA"; }
    result = result + "\n";
    return result;
};

/*
 * The Screen object corresponds to one screen in the experimental process,
 * including a title screen, an instructions screen or a stimulus item screen.
 * Screen objects constitute the basic sequence of the experiment.
 * @param type - The type of screen: Title, Instructions, or Item
 * @param object - The object with information related to the screen
 */
function Screen(type, object){
    this.type = type; // possible values: title, instructions, item
    this.object = object;
}

Screen.prototype.processKeydown = function(keyCode, elapsedTime, minTime){
    return this.object.processKeydown(keyCode, elapsedTime, minTime);
};

Screen.prototype.getData = function(participant, maxTags){
    return this.object.getData(participant, maxTags);
};

/*
 * The Experiment object corresponds to the whole experiment and contains all
 * the parameters, settings and stimuli of the experiment. It is the top-level
 * object in the SPR architecture.
 * @param design - A json-formatted object containing the experimental design
 * @param form - the html <form> object that will handle the data values on submit
 */
function Experiment(design, form){
    // For binding 'this' inside listeners
    var self = this;
    // General experiment settings and parameters
    this.title = typeof design["title"] !== 'undefined' ? design["title"].trim() : "A Self-paced Reading Experiment";
    this.fontname = typeof design["font-name"] !== 'undefined' ? design["font-name"].trim() : "Courier new";
    this.fontsize = typeof design["font-size"] !== 'undefined' ? Number(design["font-size"].trim()) : 12;
    this.fontsize = !isNaN(this.fontsize) ? this.fontsize : 12;
    // Following colors must be HTML supported color names; e.g., http://www.w3schools.com/colors/colors_names.asp
    this.textcolor = typeof design["text-color"] !== 'undefined' ? design["text-color"].trim() : "black";
    this.textcolor = isValidColor(this.textcolor) ? this.textcolor : "black";
    this.backgroundcolor = typeof design["background-color"] !== 'undefined' ? design["background-color"].trim() : "white";
    this.backgroundcolor = isValidColor(this.backgroundcolor) ? this.backgroundcolor : "white";
    this.display = this.getStringSetting("display", design["display"], ["moving window","cumulative"], "moving window");
    this.orientation = this.getStringSetting("orientation", design["orientation"], ["horizontal","vertical"], "horizontal");
    // Following must be only one character in length
    this.fixationchar = typeof design["fixation-character"] !== 'undefined' ? design["fixation-character"].trim().substr(0,1) : "+";
    this.maskchar = typeof design["masking-character"] !== 'undefined' ? design["masking-character"].trim().substr(0,1) : "_";
    this.minInstructionTime = typeof design["min-instruction-time"] !== 'undefined' ? design["min-instruction-time"] : 3000;
    this.idList = []; // Used during validation to ensure that all IDs are unique
    
    // Info about json object containing experimental design
    this.design = design; // json object containing the design, stimuli, etc.
    this.designValidated = false;    // Boolean to indicate whether design file has been validated
    this.feedbackOptions = this.parseFeedbackOptions(design["feedback-options"]);
    this.maxTags = 0; // The largest number of tags in any item; needed to ensure number of columns in data output

    // variables for experiment flow and execution
    this.form = form;
    this.frame = this.createFrame();
    this.log = "";  // For keeping track of messages sent to jesprLog();
    this.screens = [];  // List of all screen divs in the experiment: title, instructions, stimulus items
    this.curScreenIndex;   // The index of the current screen in screenInfo array being displayed.
    this.startTime;     // The start time of the experiment. Timing results are relative to this.
    this.keystate = "up"; // for monitoring keyup/keydown and ensuring one-step-at-a-time process
    this.participant;   // A string to identify the experimental participant, defaults to startTime
    this.showResultsDisplay = typeof design["show-results-display"] !== 'undefined' ? design["show-results-display"] : false;
    this.showLogDisplay = typeof design["show-log-display"] !== 'undefined' ? design["show-log-display"] : false;
    this.callbackFunction; // An optional callback function to call when experiment ends

    Experiment.prototype.processKeydown = function(e){
        var elapsedTime = Date.now() - self.startTime;
        if (this.keystate !== "down"){
            this.keystate = "down";
            var keyCode = e.which || e.keyCode;
            var result = self.screens[self.curScreenIndex].processKeydown(keyCode, elapsedTime, self.minInstructionTime);
            if (result === "end of screen"){
                self.curScreenIndex++;
                if (self.curScreenIndex < self.screens.length){
                    self.screens[self.curScreenIndex].object.show(self.frame, elapsedTime);
                    self.jesprLog("Starting screen: " + self.screens[self.curScreenIndex].object.id);
                } else {
                    self.endExperiment();
                }
            } else if (result === "continue"){
                // Continue with the same screen; nothing else to do here
            }
        }
    };
    
    Experiment.prototype.processKeyup = function(e){
        this.keystate = "up";
    };
}

Experiment.prototype.startExperiment = function(callback){
    this.startTime = Date.now();
    this.participant = this.setParticipant();
    this.callbackFunction = callback;
    document.body.addEventListener("keydown", this.processKeydown);
    document.body.addEventListener("keyup", this.processKeyup);
    window.focus();  // to make sure the window is listening for keypress events
    this.curScreenIndex = 0;
    this.screens[this.curScreenIndex].object.show(this.frame, 0);
    this.jesprLog("Starting screen: " + this.screens[this.curScreenIndex].object.id);
};

Experiment.prototype.endExperiment = function(){
    document.body.removeEventListener("keydown", this.processKeydown);
    document.body.removeEventListener("keyup", this.processKeyup);
    this.frame.style.display = "none";
    document.body.removeChild(this.frame);
    this.createResults();
    this.createLog();
    if (typeof this.callbackFunction === "function"){
        this.callbackFunction();
    }
};

Experiment.prototype.createResults = function(){
    var container = document.createElement("div");
    container.className = "center";
    var hdr = document.createElement("h2");
    hdr.textContent = "Experimental results";
    container.appendChild(hdr);
    var data = this.getData();
    var resultsDisplay = document.createElement("textarea");
    resultsDisplay.id = "resultsDisplay";
    resultsDisplay.name = "jesprResults";
    resultsDisplay.className = "results";
    resultsDisplay.value = data;
    resultsDisplay.rows = 12;
    resultsDisplay.readOnly = true;
    resultsDisplay.wrap = "soft";
    if (this.showResultsDisplay){
        resultsDisplay.style.display = "inline-block";
    }
    container.appendChild(resultsDisplay);
    this.form.appendChild(container);
};

Experiment.prototype.createLog = function(){
    var container = document.createElement("div");
    container.className = "center";
    var hdr = document.createElement("h2");
    hdr.textContent = "JESPR log";
    container.appendChild(hdr);
    var logDisplay = document.createElement("textarea");
    logDisplay.id = "logDisplay";
    logDisplay.name = "jesprLog";
    logDisplay.className = "log";
    logDisplay.value = this.log;
    logDisplay.rows = 12;
    logDisplay.readOnly = true;
    logDisplay.wrap = "soft";
    if (this.showLogDisplay){
        logDisplay.style.display = "inline-block";
    }
    container.appendChild(logDisplay);
    this.form.appendChild(container);
};

Experiment.prototype.getData = function(){
    var result = "\"participant\",\"itemId\",\"regionId\",\"roiRelPosition\",\"elapsedTime\",\"keyCode\",\"string\",\"setName\",\"groupName\"";
    for (var i=1; i<=this.maxTags; i++){ result = result + ",\"tag" + i + "\""; }
    result = result + "\n";
    for (var j=0; j<this.screens.length; j++){
        result = result + this.screens[j].getData(this.participant, this.maxTags);
    }
    return result;
};

Experiment.prototype.setParticipant = function(){
    var d = new Date();
    d.setTime(this.startTime);
    var result = d.toISOString();
    // TODO Give user chance to provide an identifier via Experiment constructor
    // or to input an identifier via a popup input box.
    return result;
};

Experiment.prototype.parseFeedbackOptions = function(design){
    var result = {};
    for (var i=0; i<design.length; i++){
        result[design[i]["name"]] = {};
        result[design[i]["name"]]["string"] = design[i]["string"];
        result[design[i]["name"]]["text-color"] = this.textcolor;
        if (typeof design[i]["text-color"] !== 'undefined'){
            if (isValidColor(design[i]["text-color"])){
                result[design[i]["name"]]["text-color"] = design[i]["text-color"];
            }
        }
    }
    return result;
};

Experiment.prototype.loadDesign = function(){
    if (this.designValidated){
        // Create title screen
        this.screens.push(this.loadTitleScreen(this.design));
        if (this.design["instruction-screens"]){
            // load pre-practice instructions
            this.screens = this.screens.concat(this.loadInstructions(this.design["instruction-screens"]));
        }
        if (this.design["practice-stimuli"]){
            // load practice stimuli
            this.screens = this.screens.concat(this.loadStimuliGroup(this.design["practice-stimuli"], "NA"));
        }
        if (this.design["post-practice-instruction-screens"]){
            // load post-practice instructions
            this.screens = this.screens.concat(this.loadInstructions(this.design["post-practice-instruction-screens"]));
        }
        if (this.design["experiment-stimuli"]){
            // load stimulus sets
            this.screens = this.screens.concat(this.loadStimuliSets(this.design["experiment-stimuli"]));
        }
        if (this.design["instruction-screens"]){
            // load ending
            this.screens = this.screens.concat(this.loadInstructions(this.design["ending-screens"]));
        }
        this.jesprLog("Loaded " + this.screens.length + " screens");
    } else {
        this.displayErrorMessage("Cannot load an unvalidated design: Run validateDesign() on Experiment object first.");
        this.jesprLog("Cannot load an unvalidated design: Run validateDesign() on Experiment object first.");
    }
};

Experiment.prototype.loadTitleScreen = function(design){
    var pi = [];
    var oi = [];
    for (var i=0; i<design["investigators"].length; i++){
        if (design["investigators"][i]["primary"]){
            pi.push(design["investigators"][i]["primary"]);
        } else if (design["investigators"][i]["other"]){
            oi.push(design["investigators"][i]["other"]);
        }
    }
    var title = new Title(this.title, pi, oi);
    var screen = new Screen("title", title);
    return screen;
};

Experiment.prototype.loadInstructions = function(design){
    var screens = [];
    for (var i=0; i<design.length; i++){
        var instructions = new Instructions(design[i]["id"], design[i]["string"]);
        var screen = new Screen("instructions", instructions);
        screens.push(screen);
    }
    return screens;
};

Experiment.prototype.loadStimuliSets = function(design){
    var screens = [];
    var sets = [];
    var order = this.getOrder(design["order"]);
    var merge = this.getMerge(design["merge"]);
    for (var i=0; i<design["stimuli-sets"].length; i++){
        var setDesign =design["stimuli-sets"][i]["stimuli-set"];
        sets.push(this.loadStimuliGroups(setDesign, order, merge));;
    }
    if (order === "random") { shuffle(sets); }
    if (merge) {
        screens = mergeArrays(sets, "random"); // TODO: pass merge method value through
    } else {
        for (var k=0; k<sets.length; k++){
            screens = screens.concat(sets[k]);
        }
    }
    return screens;
};

Experiment.prototype.loadStimuliGroups = function(design, ord, mrg){
    var set = [];
    var setName = typeof design["name"] !== 'undefined' ? design["name"] : "NA";
    var order = this.getOrder(design["order"], ord);
    var merge = this.getMerge(design["merge"], mrg);
    var groups = [];
    for (var j=0; j<design["groups"].length; j++){
        var groupDesign = design["groups"][j]["group"];
        var group = this.loadStimuliGroup(groupDesign, setName, order);
        groups.push(group);
    }
    if (order === "random") {
        shuffle(groups);
    }
    if (merge) {
        set = mergeArrays(groups, "random"); // TODO: pass merge method value through
    } else {
        for (var k=0; k<groups.length; k++){
            set = set.concat(groups[k]);
        }
    }
    return set;
};

Experiment.prototype.loadStimuliGroup = function(design, setName, ord){
    var screens = [];
    var groupName = typeof design["name"] !== 'undefined' ? design["name"] : "NA";
    var order = this.getOrder(design["order"], ord);
    // go through items array and create screenInfo object for each item
    for (var i=0; i<design["items"].length; i++){
        var item = design["items"][i]["item"];
        var id = item["id"];
        var tags = typeof item["tags"] !== 'undefined' ? item["tags"] : [];
        if (tags.length > this.maxTags){ this.maxTags = tags.length; } // update maxTags, if necessary
        var text = item["string"];
//        var orientation = typeof item["orientation"] !== 'undefined' ? design["items"][i]["item"]["orientation"] : this.orientation;
        var prompt = item["prompt"];
        var options = item["options"];
        var item = new Item(id, text, this.orientation, this.fixationchar, this.maskchar, this.display, prompt, options, this.feedbackOptions, setName, groupName, tags);
        // Create the Screen object and push it to the sceens array
        var screen = new Screen("stimuli", item);
        screens.push(screen);
    }
    if (order === "random"){
        shuffle(screens);
    }
    return screens;
};

/*
 * Determines the "order" value or defaults to "fixed" if undefined
 * @param   object containing "order" key-value pair
 * @returns "fixed" or "random"
 */
Experiment.prototype.getOrder = function(order, fallbackValue){
    var result = typeof fallbackValue !== 'undefined' ? fallbackValue : "fixed"; // default
    if (typeof order !== 'undefined'){
        if (order === "random"){
            result = "random";
        } else if (order === "fixed"){
            order = "fixed";
        } else {
            this.jesprLog("Unexpected value for 'order'. Using default/fallback value: '" + result + "'.");
        }
    }
    return result;
};

/*
 * Determines the "merge" value or defaults to "true" if undefined
 * @param   object containing "order" key-value pair
 * @returns "fixed" or "random"
 */
Experiment.prototype.getMerge = function(merge, fallbackValue){
    var result = typeof fallbackValue !== 'undefined' ? fallbackValue : false; // default
    if (typeof merge !== 'undefined'){
        if (merge === "false"){
            result = false;
        } else if (merge === "true"){
            result = true;
        } else {
            this.jesprLog("Unexpected value for 'merge'. Using default/fallback value: '" + result + "'.");
        }
    }
    return result;
};

/*
 * 
 * @returns A <div> object representing the main experiment frame
 */
Experiment.prototype.createFrame = function(){
  var frame = document.createElement("div");
  frame.className = "experiment-frame";
  frame.style.backgroundColor = this.backgroundcolor;
  frame.style.color = this.textcolor;
  frame.style.fontFamily = this.fontname;
  frame.style.fontSize = this.fontsize + "pt";
  document.body.appendChild(frame);
  return frame;
};

Experiment.prototype.getStringSetting = function(name, value, options, fallback){
    var result = fallback;
    if (typeof value === 'undefined') {
        this.jesprLog("No value for " + name + " setting. Using default value: '" + fallback + "'");
    } else if (options.some(function(o){ return value.trim().toLowerCase() === o.trim().toLowerCase(); })){
        result = value.toLowerCase().trim();
    } else {
        this.jesprLog("Invalid value for " + name + " setting. Using default value: '" + fallback + "'");
    }
    return result;
};

// Helper functions for validating design
Experiment.prototype.validateDesign = function(){
    this.designValidated = false;
    this.jesprLog("Validating design");
    var result = true;
    // Check structure of feedback-options
    if (this.design["feedback-options"]){
        this.jesprLog("Checking feedback-options");
        if (!this.isValidFeedbackOptions(this.design["feedback-options"])){
            result = false;
        }
    }
    // Check structure of pre-practice instructions
    this.jesprLog("Checking pre-practice instruction screens");
    if (this.design["instruction-screens"]){
        if (!this.isValidInstructionScreen(this.design["instruction-screens"])){
            result = false;
        }
    } else {
        this.jesprLog("No pre-practice instruction screens");
    }
    this.jesprLog("Result = " + result);
    // Check structure of practice items
    this.jesprLog("Checking practice stimuli");
    if (this.design["practice-stimuli"]){
        if (!this.isValidGroup(this.design["practice-stimuli"])){
            result = false;
        }
    } else {
        this.jesprLog("No practice stimuli");
    }
    this.jesprLog("Result = " + result);
    // Check structure of post-practice instructions
    this.jesprLog("Checking post-practice instruction screens");
    if (this.design["post-practice-instruction-screens"]){
        if (!this.isValidInstructionScreen(this.design["post-practice-instruction-screens"])){
            result = false;
        }
    } else {
        this.jesprLog("No post-practice instruction screens");
    }
    this.jesprLog("Result = " + result);
    // Check structure of experimental stimuli
    this.jesprLog("Checking experimental-stimuli");
    if (this.design["experiment-stimuli"]){
        if (!this.isValidExptStimuli(this.design["experiment-stimuli"])){
            result = false;
        }
    } else {
        this.displayErrorMessage("No experimental stimuli section was found in the json object");
        this.jesprLog("No experimental stimuli section was found in the json object");
        result = false;
    }
    this.jesprLog("Result = " + result);
    this.designValidated = result;
    return result;
};

Experiment.prototype.isValidFeedbackOptions = function(design){
   var result = true;
   for (var i=0; i<design.length; i++){
       var feedbackOption = design[i];
       if (typeof feedbackOption["name"] === 'undefined'){
           this.displayErrorMessage("No 'name' value found for feedback-option");
           this.jesprLog("No 'name' value found for feedback-option");
           result = false;
       }
       if (typeof feedbackOption["string"] === 'undefined'){
           this.displayErrorMessage("No 'string' value found for feedback-option");
           this.jesprLog("No 'string' value found for feedback-option");
           result = false;
       }
       if (typeof feedbackOption["text-color"] !== 'undefined'){
            if (!isValidColor(feedbackOption["text-color"])){
                this.displayErrorMessage("Invalid color name for feedback-option: " + feedbackOption["text-color"]);
                this.jesprLog("Invalid color name for feedback-option: " + feedbackOption["text-color"]);
                result = false;
            }
       }
   }
   return result;
};

Experiment.prototype.isValidExptStimuli = function(stimuli){
    var result = true;
    if (!stimuli["stimuli-sets"]){
        this.displayErrorMessage("No 'stimuli-sets' name-value pair in experimental stimuli section");
        this.jesprLog("No 'stimuli-sets' name-value pair in experimental stimuli section");
        result = false;
    } else if (stimuli["stimuli-sets"].length < 1){
        this.displayErrorMessage("No 'stimuli-set' found in experimental stimuli sets section");
        this.jesprLog("No 'stimuli-set' found in experimental stimuli sets section");
        result = false;
    } else if (!this.isValidStringSetting(stimuli["order"], ["fixed","random"])){
        this.displayErrorMessage("Incorrect setting for 'order' in stimuli: " + stimuli["order"]);
        this.jesprLog("Incorrect setting for 'order' in stimuli: " + stimuli["order"]);
        result = false;
    } else if (!this.isValidStringSetting(stimuli["merge"], ["true","false"])){
        this.displayErrorMessage("Incorrect setting for 'merge' in stimuli: " + stimuli["merge"]);
        this.jesprLog("Incorrect setting for 'merge' in stimuli: " + stimuli["merge"]);
        result = false;
    } else {
        for (var i=0; i<stimuli["stimuli-sets"].length; i++){
            if (typeof(stimuli["stimuli-sets"][i]["stimuli-set"]) === 'undefined') {
                this.displayErrorMessage("Unknown name in stimuli: expected 'stimuli-set'");
                this.jesprLog("Unknown name in stimuli: expected 'stimuli-set'");
                result = false;
            } else if (!this.isValidStimuliSet(stimuli["stimuli-sets"][i]["stimuli-set"])){
                result = false;
            }
        }
    }
    return result;
};

Experiment.prototype.isValidStimuliSet = function(stimuliSet){
    var result = true;
    if (!stimuliSet["groups"]){
        this.displayErrorMessage("No 'group' name-value pair in experimental stimuli section");
        this.jesprLog("No 'group' name-value pair in experimental stimuli section");
        result = false;
    } else if (stimuliSet["groups"].length < 1){
        this.displayErrorMessage("No stimuli 'group' found in experimental stimuli section");
        this.jesprLog("No stimuli 'group' found in experimental stimuli section");
        result = false;
    } else if (!this.isValidStringSetting(stimuliSet["order"], ["fixed","random"])){
        this.displayErrorMessage("Incorrect setting for 'order' in stimuli-set: " + stimuliSet["order"]);
        this.jesprLog("Incorrect setting for 'order' in stimuli-set: " + stimuliSet["order"]);
        result = false;
    } else if (!this.isValidStringSetting(stimuliSet["merge"], ["true","false"])){
        this.displayErrorMessage("Incorrect setting for 'merge' in stimuli-set: " + stimuliSet["merge"]);
        this.jesprLog("Incorrect setting for 'merge' in stimuli-set: " + stimuliSet["merge"]);
        result = false;
    } else {
        for (var i=0; i<stimuliSet["groups"].length; i++){
            if (typeof(stimuliSet["groups"][i]["group"]) === 'undefined') {
                this.displayErrorMessage("Unknown name in stimuli: expected 'group'");
                this.jesprLog("Unknown name in stimuli: expected 'group'");
                result = false;
            } else if (!this.isValidGroup(stimuliSet["groups"][i]["group"])){
                result = false;
            }
        }
    }
    return result;
};

Experiment.prototype.isValidInstructionScreen = function(instructions){
    var result = true;
    for (var i=0; i<instructions.length; i++){
        var instruction = instructions[i];
        // Check ID validity
        if (!instruction["id"]){
            this.displayErrorMessage("Instruction has no id");
            this.jesprLog("Instruction has no id");
            result = false;
        } else if (!isValidId(instruction["id"])){
            this.displayErrorMessage("Instruction id is not valid: " + instruction["id"]);
            this.jesprLog("Instruction id is not valid: " + instruction["id"]);
            result = false;
        } else if (this.idList.some(function(id){ return instruction["id"] === id; })){
            this.displayErrorMessage("Instruction id is not unique: " + instruction["id"]);
            this.jesprLog("Instruction id is not unique: " + instruction["id"]);
            result = false;
        } else {
            this.idList.push(instruction["id"]);
        }
        // Check string validity
        if (typeof(instruction["string"]) === 'undefined'){
            this.displayErrorMessage("No `string` element found in instruction screen");
            this.jesprLog("No `string` element found in instruction screen");
            result = false;
        } else if (instruction["string"].length < 1){ // Will this allow an array?
            this.displayErrorMessage("Empty string in instructions");
            this.jesprLog("Empty string in instructions");
            result = false;
        }
    }
    return result;
};

Experiment.prototype.isValidGroup = function(group){
    var result = true;
    if (!group["items"]){
        this.displayErrorMessage("No 'items' name-value pair in stimuli");
        this.jesprLog("No 'items' name-value pair in stimuli");
        result = false;
    } else if (group["items"].length < 1){
        this.displayErrorMessage("No 'item' found in items list");
        this.jesprLog("No 'item' found in items list");
        result = false;
    } else if (!this.isValidStringSetting(group["order"], ["fixed","random"])){
        this.displayErrorMessage("Incorrect setting for 'order' in group: " + group["order"]);
        this.jesprLog("Incorrect setting for 'order' in group: " + group["order"]);
        result = false;
    } else {
        for (var i=0; i<group["items"].length; i++){
            if (typeof(group["items"][i]["item"]) === 'undefined'){
                this.displayErrorMessage("Unknown name in items: expected 'item'");
                this.jesprLog("Unknown name in items: expected 'item'");
                result = false;
            } else if (!this.isValidItem(group["items"][i]["item"])){
                result = false;
            }
        }
    }
    return result;
};

Experiment.prototype.isValidItem = function(item){
    var result = true;
    if (!item["id"]){
        this.displayErrorMessage("Stimulus item has no id");
        this.jesprLog("Stimulus item has no id");
        result = false;
    } else {
        if (!isValidId(item["id"])){
            this.displayErrorMessage("Item id is not valid: " + item["id"]);
            this.jesprLog("Item id is not valid: " + item["id"]);
            result = false;
        }
        if (this.idList.some(function(id){ return item["id"] === id; })){
            this.displayErrorMessage("Item id is not unique: " + item["id"]);
            this.jesprLog("Item id is not unique: " + item["id"]);
            result = false;
        } else {
            this.idList.push(item["id"]);
        }
        this.jesprLog("Checking item: " + item["id"]);
        if (!item["string"]){
            this.displayErrorMessage("Item " + item["id"] + " has no string!");
            this.jesprLog("Item " + item["id"] + " has no string!");
            result = false;
        } else if (item["string"].length < 1){
            this.displayErrorMessage("Empty string found!");
            this.jesprLog("Empty string found!");
            result = false;
        }
    }
    return result;
};

Experiment.prototype.isValidStringSetting = function(string, settings){
    return settings.some(function(s){
        return string.trim().toLowerCase() === s.trim().toLowerCase();
    });
};

//// Logging and error reporting

/*
 * Log administrative messages about experiment operation
 */
Experiment.prototype.jesprLog = function(message){
    var msg = Date() + ": " + message;
    console.log(msg);
    this.log = this.log + msg + "\n";
};

/*
 * Display an error box with an error message
 */
Experiment.prototype.displayErrorMessage = function(message){
    alert(message);
};

//// General Helper Functions

/*
 * Check that the color name provided is one of the 147 HTML valid color names
 * (e.g., http://www.w3schools.com/colors/colors_hex.asp).
 * Credit: http://stackoverflow.com/questions/6386090/validating-css-color-names
 * @param stringToTest - the string to be tested for validity (e.g., black, red)
 * @returns true if string is a valid color name; false otherwise
 */
function isValidColor(stringToTest) {
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

function mergeArrays(arrays, method){
    var result = [];
    if (method === "random"){
        result = mergeArraysRandomly(arrays.slice(0));
    } else if (method === "sequential"){
        // merge arrays in a sequential manner
    }
    return result;
}

function mergeArraysRandomly(arrays){
    var result = [];
    if (arrays.length>1) {
        // get random array and take the top item and push to result
        var randomIndex = Math.floor(Math.random() * arrays.length);
        result.push(arrays[randomIndex].shift());
        return result.concat(mergeArraysRandomly(arrays.filter(function(arr){
            return arr.length > 0;
        })));
    } else if (arrays.length === 1){
        // there's only one array left in arrays; return just it and stop recursion
        return arrays[0];
    } else {
        // something's wrong: we should never reach here...
    }
    return;
}

function isValidId(id){
    return id.match(/^[A-Za-z][A-Za-z0-9\.\_\-]*[A-Za-z0-9]$/g) !== null;
}

function truncateText(text, len){
    var result = text;
    if (text.length > len){
        result = text.substr(0,57) + "...";
    }
    return result;
}