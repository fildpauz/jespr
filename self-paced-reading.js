/*
 * Title: self-paced-reading.js
 * Author: Ralph L. ROSE
 * E-mail address: rose@waseda.jp
 * Description: This javascript library is designed to support the
 * execution of self-paced reading experiments via a web browser.
 */

/*
 * Script-wide variables
 */
var exptDesign;     // json object containing the design, stimuli, etc.
var designValidated = false;    // Boolean to indicate whether design file has been validated
var exptTitle = "No title";      // Title of experiment
var exptFontname = "Courier new";   // Font to be used for main display elements
var exptFontsize = "12";   // Base font size to be used for main display elements
// Following colors must be HTML supported color names; e.g., http://www.w3schools.com/colors/colors_names.asp
var exptTextcolor = "black";    // Basic textcolor for stimuli and instructions
var exptBackgroundcolor = "white";  // Basic background color for all screens
var exptDisplay = "Moving window";  // Type of Self-paced Reading display
// Following must be only one character in length
var exptMaskchar = "_";     // Char to use as masking character during trials
var exptFixationchar = "+";     // Char to use as fixation symbol between trials
var exptForm;       // HTML form object that will contain and return the experimental data. Must be named "SPRForm".
var exptFrame;      // Top level div container for experiment display
var screenInfo = [];  // List of all screen divs in the experiment: title, instructions, stimulus items
var curScreenIndex;   // The index of the current screen in screenInfo array being displayed.
var curRegionIndex;   // The index of the current SPR region being displayed
var startTime;        // Reference time for the beginning of the experiment
var curData = "";          // Variable to hold reaction time data for current item

/*
 * A function to run the whole experiment from initialization to administration
 * to clean-up afterward.
 */
function doExperiment(){
    //loadExperiment();
    initDisplay();
    startTime = Date.now();
    document.body.addEventListener("keypress", processKeyPress);
    window.focus();
    curScreenIndex = 0;
    showScreen(curScreenIndex);
}

/*
 * Handle all key press events and advance the experiment.
 */
function processKeyPress(e){
    var elapsedTime = Date.now() - startTime;
    var keyCode = e.keyCode;
    if (curScreenIndex < screenInfo.length-1){
        var curScreenType = screenInfo[curScreenIndex]["type"];
        switch (curScreenType) {
            case "title":
            case "instructions":
                processStaticScreen(keyCode);
                break;
            case "item":
                processInteractiveScreen(keyCode, elapsedTime);
                break;
            default:
        }
    } else {
        endExperiment();
    }
}

/*
 * Function to end experiment and close off any loose ends, programmatically
 */
function endExperiment(){
    document.body.removeEventListener("keypress", processKeyPress);
    exptForm.removeChild(exptFrame);
    alert(document.getElementById("practice01").value);
}

/*
 * Processes the keypress when the currently displayed screen is a title or
 * instructions screen and advances to the next screen accordingly
 * @param {type} keyCode
 */
function processStaticScreen(keyCode){
    switch (keyCode) {
        case 32: // space bar
            removeScreen(curScreenIndex);
            curScreenIndex++;
            showScreen(curScreenIndex);
            break;
        case 49: // digit 1
            break;
        case 48: // digit 0
            break;
        default:
            console.log("e.keyCode = " + keyCode);
    }
}

/*
 * 
 * @param keyCode
 * @param elapsedTime
 */
function processInteractiveScreen(keyCode, elapsedTime){
    switch (keyCode) {
        case 32: // space bar
            var info = screenInfo[curScreenIndex];
            var id = info["id"];
            var regionsInfo = info["regionsInfo"];
            var curRegionInfo = regionsInfo[curRegionIndex];
            var nextRegionInfo = regionsInfo[curRegionIndex+1];
            saveRegionData(id, curRegionInfo["id"], elapsedTime, keyCode);
            if (curRegionIndex == 0){ // fixation char is showing
                var fixationP = document.getElementById(curRegionInfo["id"]);
                fixationP.style.display = "none"; // hide fixation
                var regionSpan = document.getElementById(nextRegionInfo["id"]);
                regionSpan.textContent = nextRegionInfo["string"];
                var itemP = document.getElementById(id.concat("-stimulus"));
                itemP.style.display = "block"; // show the whole stimulus
                curRegionIndex++;
            } else if (curRegionIndex < regionsInfo.length-1) {
                var nextRegionSpan = document.getElementById(nextRegionInfo["id"]);
                nextRegionSpan.textContent = nextRegionInfo["string"];
                if (exptDisplay == "Moving window"){
                    var curRegionSpan = document.getElementById(curRegionInfo["id"]);
                    curRegionSpan.textContent = curRegionInfo["string"].replace(/./g, exptMaskchar);
                }
                curRegionIndex++;
            } else { // No more regions, so go to next screen and save curData
                processStaticScreen(keyCode);
                document.getElementById(id).value += curData;
                curData = ""; // reset curData variable
            }
            console.log(id + "\t"+ curRegionInfo["id"] + "\t" + elapsedTime + "\t" + keyCode + "\n");
            break;
        case 49: // digit 1
            break;
        case 48: // digit 0
            break;
        default:
            console.log("e.keyCode = " + keyCode);
    }
}

/*
 * Saves the reaction time measure for the current region in the item ID hidden
 * variable in the sprForm. The keyCode is also saved.
 * @param itemId
 * @param regionId
 * @param elapsedTime
 * @param keyCode
 */
function saveRegionData(itemId, regionId, elapsedTime, keyCode){
//    var data = document.getElementById(itemId).value;
    var newData = regionId + "\t" + elapsedTime + "\t" + keyCode + "\n";
//    document.getElementById(itemId).value += newData; // I don't understand why this didn't work cumulatively: Only the last region got saved...
    curData += newData;
}

/*
 * Displays the screen indexed in screenInfo indexed by the param.
 * @param index indicating the index of the screen in screenInfo array to display
 */
function showScreen(index){
    if (index < 0 || index >= screenInfo.length) {
        displayErrorMessage("Error in 'showScreen()': index is out of range.");
        sprLog("Error in 'showScreen()': index is out of range.");
        return;
    } else {
        var nextScreen = screenInfo[curScreenIndex];
        var nextDiv = nextScreen["div"];
        exptFrame.appendChild(nextDiv);  // add it to DOM
        if (nextScreen["type"] == "item") {
            curRegionIndex = 0;
            var id = nextScreen["id"];
            var hiddenVar = document.createElement("input");
            hiddenVar.id = id;
            hiddenVar.type = "hidden";
            hiddenVar.name = id;
            hiddenVar.value = "";
            exptForm.appendChild(hiddenVar);
        }
        nextDiv.style.display = "block"; // show it
    }
}

/*
 * Removes the screen indexed by the param.
 * @param index indicating the index of the screen in screenInfo array to remove
 */
function removeScreen(index){
    if (index < 0 || index >= screenInfo.length) {
        displayErrorMessage("Error in 'removeScreen()': index is out of range.");
        sprLog("Error in 'removeScreen()': index is out of range.");
    } else {
        var curDiv = screenInfo[curScreenIndex]["div"];
        curDiv.style.display = "none"; // hide it
        exptFrame.removeChild(curDiv); // remove it from DOM
        curRegionIndex = undefined; // set to undefined index
    }
}

/*
 * Load general experimental parameters and validate json object describing design
 * @returns a boolean to indicate whether json object is valid (true) or not.
 */
function loadExperiment(design){
    if (!designValidated) {
        sprLog("Loading a non-validated design! Be sure to call isValidDesign() on design object first");
        exptDesign = design;
    } else if (design != exptDesign) {
        sprLog("Loading a design different than the one previously validated!");
        exptDesign = design;
    } else {
        sprLog("Loading design object");
    }
    setTitle(design);
    setFontname(design);
    setFontsize(design);
    setTextcolor(design);
    setBackgroundcolor(design);
    setDisplay(design);
    setMaskchar(design);
    setFixationchar(design);
    // Populate the screenInfo array with the sequence of screens for the whole experiment
    screenInfo.push(getTitleScreenInfo(design));
    screenInfo = screenInfo.concat(getInstructionScreensInfo(design["instruction-screens"]));
    screenInfo = screenInfo.concat(getStimuliGroupScreensInfo(design["practice-stimuli"]));
    screenInfo = screenInfo.concat(getInstructionScreensInfo(design["post-practice-instruction-screens"]));
    screenInfo = screenInfo.concat(getStimuliSetsScreensInfo(design["experiment-stimuli"]));
}

/*
 * Gets the title and investigator info from the json design object and returns
 * an object that represents info for the experiment title screen.
 * @param   design - the json experiment design object
 * @returns {undefined}
 */
function getTitleScreenInfo(design){
    // create the title div
    var titleDiv = document.createElement("div");
    titleDiv.className = "title";
    // create and add the title
    var title = document.createElement("h1");
    title.textContent = exptTitle; // Is it necessary to have the exptTitle object?
    titleDiv.appendChild(title);
    // create and add investigator info
    var investigators = document.createElement("p");
    investigators.className = "investigators";
    var pi = ""; // primary investigator list
    var oi = ""; // other investigator list
    for (var i=0; i<design["investigators"].length; i++){
        if (typeof(design["investigators"][i]["primary"]) !== 'undefined') {
            if (pi.length > 0) { pi = pi.concat(", "); }
            pi = pi.concat(design["investigators"][i]["primary"]);
        } else if (typeof(design["investigators"][i]["other"]) !== 'undefined') {
            if (oi.length > 0) { oi = oi.concat(", "); }
            oi = oi.concat(design["investigators"][i]["other"]);
        } else {
            sprLog("Unknown type of investigator in investigator list: 'primary'/'other' expected.");
        }
    }
    var primary = document.createElement("span");
    primary.className = "primary-investigators";
    primary.textContent = pi;
    var space = document.createTextNode(" ");
    var other = document.createElement("span");
    other.className = "other-investigators";
    other.textContent = oi;
    investigators.appendChild(primary);
    investigators.appendChild(space);
    investigators.appendChild(other);
    titleDiv.appendChild(investigators);
    var titleScreenInfo = { "type" : "title" };
    titleScreenInfo["div"] = titleDiv;
    return titleScreenInfo;
}

/*
 * Gets instructions info from the json design object and returns
 * an array that represents info for the screen(s).
 * @param   design - the json instructions design object
 * @returns {undefined}
 */
function getInstructionScreensInfo(design){
    var screens = [];
    for (var i=0; i<design.length; i++){
        // Create the div container for the instructions
        var instructionsDiv = document.createElement("div");
        instructionsDiv.className = "instructions";
        instructionsDiv.textContent = design[i]["instruction-screen"];
        // Create the screenInfo object and push it to the array
        var scrnInfo = { "type": "instructions" };
        scrnInfo["div"] = instructionsDiv;
        screens.push(scrnInfo);
    }
    return screens;
}

/*
 * Gets item screens info from the json design object and returns
 * an array that represents info for the screen(s).
 * @param   design - the json stimuli group design object
 * @returns array of items
 */
function getStimuliGroupScreensInfo(design){
    var screens = [];
    var order = getOrder(design["order"]);
    // go through items array and create screenInfo object for each item
    for (var i=0; i<design["items"].length; i++){
        // Create the div container for the item
        var itemDiv = document.createElement("div");
        itemDiv.className = "item";
        var itemId = design["items"][i]["item"]["id"];
        itemDiv.id = itemId;
        var fixationP = document.createElement("p");
        fixationP.id = itemId.concat("-fixation");
        fixationP.className = "fixation";
        fixationP.textContent = exptFixationchar;
        itemDiv.appendChild(fixationP);
        var regionsInfo = []; // the info array for the regions
        var fixationInfo = { "id": itemId.concat("-fixation"),
                             "string": exptFixationchar };
        regionsInfo.push(fixationInfo);
        if (design["items"][i]["item"]["string"]){ // single-line SPR type
            // split string into regions
            var regions = design["items"][i]["item"]["string"].split("|");
            var itemP = document.createElement("p"); // create p container for regions
            itemP.id = itemId.concat("-stimulus");
            itemP.className = "stimulus";
            // for each region
            for (var j=0; j<regions.length; j++){
                // create a regionInfo object with region ID and region text
                var regionInfo = { "id": itemId.concat("_").concat(j+1),
                                   "string": regions[j].trim() };
                // add regionInfo to regionsInfo array
                regionsInfo.push(regionInfo);
                // create a span with region ID and text content with masking char
                var regionSpan = document.createElement("span");
                regionSpan.id = regionInfo["id"];
                regionSpan.className = "region";
                regionSpan.textContent = regionInfo["string"].replace(/./g, exptMaskchar);
                // add span to div
                if (j>0){
                    var space = document.createTextNode(" ");
                    itemP.appendChild(space);
                }
                itemP.appendChild(regionSpan);
            }
            itemDiv.appendChild(itemP);
        } else if (design["items"][i]["item"]["strings"]){ // multi-line SPR type
            // TODO: implement the multi-line strings handler
        }
        // Create the screenInfo object and push it to the array
        var scrnInfo = { "type": "item" };
        scrnInfo["id"] = itemId;
        scrnInfo["regionsInfo"] = regionsInfo;
        scrnInfo["div"] = itemDiv;
        screens.push(scrnInfo);
    }
    if (order === "random"){
        shuffle(screens);
    }
    return screens;
}

/*
 * Gets item screens info from the json design object and returns
 * an array that represents info for the screen(s).
 * @param   design - the json stimuli group design object
 * @returns array of items
 */
function getStimuliSetsScreensInfo(design){
    var screens = [];
    var order = getOrder(design["order"]);
    
    return screens;
}

/*
 * Determines the "order" value or defaults to "fixed" if undefined
 * @param   object containing "order" key-value pair
 * @returns "fixed" or "random"
 */
function getOrder(order){
    var result = "fixed"; // default
    if (order !== 'undefined'){
        if (order["order"] == "random"){
            result = "random";
        } else if (order["order"] != "fixed"){
            sprLog("Unexpected value for 'order'. Using default 'fixed'.");
        }
    }
    return result;
}

/*
 * Initialize experimental display
 */
function initDisplay(){
  // create exptFrame
  exptForm = document.getElementsByName("SPRForm")[0];
  if (exptForm === 'undefined'){
      displayErrorMessage("The HTML document does not contain a form named \'SPRForm\'. Discontinuing experiment.");
      sprLog("The HTML document does not contain a form named \'SPRForm\'");
      return;
  }
  exptFrame = document.createElement("div");
  exptFrame.className = "experiment-frame";
  exptForm.appendChild(exptFrame);
  // create title screen
//  var titleDiv = createTitleDiv();
//  exptFrame.appendChild(titleDiv);
  // create instructions frame
  // create elements of exptFrame
  // populate elements with initial values
  // show title
//  titleDiv.style.display = "block";
 }

/*
 * Creates a div element and populates it with html containing the
 * experiment title and names of investigators
 * @param   design - the json experiment design object
 * @returns a div element containing title and other info
 */
function createTitleDiv(design){
    // create the title div
    var titleDiv = document.createElement("div");
    titleDiv.className = "title";
    // create and add the title
    var title = document.createElement("h1");
    title.textContent = design["title"];
    titleDiv.appendChild(title);
    var investigators = document.createElement("p");
    investigators.className = "investigators";
    var pi = ""; // primary investigator list
    var oi = ""; // other investigator list
    for (var i=0; i<design["investigators"].length; i++){
        if (typeof(design["investigators"][i]) === 'primary') {
            if (pi.length > 0) { pi = pi.concat(", "); }
            pi = pi.concat("<b>", design["investigators"][i]["primary"], "</b>");
        } else if (typeof(design["investigators"][i]) === 'other') {
            if (oi.length > 0) { oi = oi.concat(", "); }
            oi = oi.concat(design["investigators"][i]["other"]);
        } else {
            sprLog("Unknown type of investigator in investigator list: 'primary'/'other' expected.");
        }
    }
    investigators.textContent = pi.concat(" ").concat(oi).trim();
    titleDiv.appendChild(investigators);
    return titleDiv;
}

/*
 * Log administrative messages about experiment operation
 */
function sprLog(message){
    console.log(Date() + ": " + message);
    // TODO: Store the messages in a variable and submit together with expt data
}

/*
 * Display an error box with an error message
 */
function displayErrorMessage(message){
    alert(message);
}

/*
 * Set title from design file or leave as default
 */
function setTitle(design){
    if (typeof design["title"] !== 'undefined'){
        exptTitle = design["title"].trim();
        sprLog("Set title: \'" + exptTitle + "\'");
    } else {
        sprLog("Title unchanged: \'" + exptTitle + "\'");
    }
}

/*
 * Set font name from design file or leave as default
 */
function setFontname(design){
    if (typeof design["font-name"] !== 'undefined'){
        exptFontname = design["font-name"].trim();
        sprLog("Set font name: \'" + exptFontname + "\'");
    } else {
        sprLog("Font name unchanged: \'" + exptFontname + "\'");
    }
}

/*
 * Set font size from design file or leave as default
 */
function setFontsize(design){
    if (typeof design["font-size"] !== 'undefined'){
        exptFontsize = design["font-size"].trim();
        sprLog("Set font size: \'" + exptFontsize + "\'");
    } else {
        sprLog("Font size unchanged: \'" + exptFontsize + "\'");
    }
}

/*
 * Set text color from design file or leave as default
 */
function setTextcolor(design){
    if (typeof design["text-color"] !== 'undefined'){
        if (validTextColour(design["text-color"])){
            exptTextcolor = design["text-color"].trim();
            sprLog("Set text color: \'" + exptTextcolor + "\'");
        } else {
            displayErrorMessage("The color \'" + design["text-color"] + "\' is not defined. Using default text color, \'" + exptTextcolor + "\'.");
            sprLog("Text color unchanged: \'" + exptTextcolor + "\'");
        }
    } else {
        sprLog("Text color unchanged: \'" + exptTextcolor + "\'");
    }
}

/*
 * Set text color from design file or leave as default
 */
function setBackgroundcolor(design){
    if (typeof design["background-color"] !== 'undefined'){
        if (validTextColour(design["background-color"])){
            exptBackgroundcolor = design["background-color"].trim();
            sprLog("Set background color: \'" + exptBackgroundcolor + "\'");
        } else {
            displayErrorMessage("The color \'" + design["background-color"] + "\' is not defined. Using default background color, \'" + exptTextcolor + "\'.");
            sprLog("Background color unchanged: \'" + exptBackgroundcolor + "\'");
        }
    } else {
        sprLog("Background color unchanged: \'" + exptBackgroundcolor + "\'");
    }
}

/*
 * Set display type from design file or leave as default
 */
function setDisplay(design){
    if (typeof design["display"] !== 'undefined'){
        if (design["display"] == "cumulative" || design["display"] == "moving window"){
            exptDisplay = design["display"].trim();
            sprLog("Set display: \'" + exptDisplay + "\'");
        } else {
            sprLog("Display unchanged: \'" + exptDisplay + "\'");
        }
    } else {
        sprLog("Display unchanged: \'" + exptDisplay + "\'");
    }
}

/*
 * Set masking character from design file or leave as default
 * Only the first character will be saved.
 */
function setMaskchar(design){
    if (typeof design["masking-character"] !== 'undefined'){
        exptMaskchar = design["masking-character"].trim().substr(0,1);
        sprLog("Set masking character: \'" + exptMaskchar + "\'");
    } else {
        sprLog("Masking character unchanged: \'" + exptMaskchar + "\'");
    }
}

/*
 * Set fixaction character from design file or leave as default
 * Only the first character will be saved.
 */
function setFixationchar(design){
    if (typeof design["fixation-character"] !== 'undefined'){
        exptFixationchar = design["fixation-character"].trim().substr(0,1);
        sprLog("Set fixation character: \'" + exptFixationchar + "\'");
    } else {
        sprLog("Fixation character unchanged: \'" + exptFixationchar + "\'");
    }
}

/*
 * Check that the color name provided is one of the 147 HTML valid color
 * names. Code from http://stackoverflow.com/questions/6386090/validating-css-color-names
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

function isValidDesign(design){
    exptDesign = design;
    sprLog("Validating design");
    var result = true;
    // Check structure of pre-practice instructions
    sprLog("Checking pre-practice instruction screens");
    if (design["instruction-screens"]){
        if (!isValidInstructionScreen(design["instruction-screens"])){
            result = false;
        }
    } else {
        sprLog("No pre-practice instruction screens");
    }
    // Check structure of practice items
    sprLog("Checking practice stimuli");
    if (design["practice-stimuli"]){
        if (!isValidGroup(design["practice-stimuli"])){
            result = false;
        }
    } else {
        sprLog("No practice stimuli");
    }
    // Check structure of post-practice instructions
    sprLog("Checking post-practice instruction screens");
    if (design["post-practice-instruction-screens"]){
        if (!isValidInstructionScreen(design["post-practice-instruction-screens"])){
            result = false;
        }
    } else {
        sprLog("No post-practice instruction screens");
    }
    // Check structure of experimental stimuli
    sprLog("Checking experimental-stimuli");
    if (design["experiment-stimuli"]){
        if (!isValidExptStimuli(design["experiment-stimuli"])){
            result = false;
        }
    } else {
        displayErrorMessage("No experimental stimuli section was found in the json object");
        sprLog("No experimental stimuli section was found in the json object");
        result = false;
    }
    return result;
}

function isValidExptStimuli(stimuli){
    var result = true;
    if (!stimuli["stimuli-sets"]){
        displayErrorMessage("No 'stimuli-sets' name-value pair in experimental stimuli section");
        sprLog("No 'stimuli-sets' name-value pair in experimental stimuli section");
        result = false;
    } else if (stimuli["stimuli-sets"].length < 1){
        displayErrorMessage("No 'stimuli-set' found in experimental stimuli sets section");
        sprLog("No 'stimuli-set' found in experimental stimuli sets section");
        result = false;
    } else {
        for (var i=0; i<stimuli["stimuli-sets"].length; i++){
            if (typeof(stimuli["stimuli-sets"][i]["stimuli-set"]) === 'undefined') {
                displayErrorMessage("Unknown name in stimuli: expected 'stimuli-set'");
                sprLog("Unknown name in stimuli: expected 'stimuli-set'");
                result = false;
            } else if (!isValidStimuliSet(stimuli["stimuli-sets"][i]["stimuli-set"])){
                result = false;
            }
        }
    }
    return result;
}

function isValidStimuliSet(stimuliSet){
    var result = true;
    if (!stimuliSet["groups"]){
        displayErrorMessage("No 'group' name-value pair in experimental stimuli section");
        sprLog("No 'group' name-value pair in experimental stimuli section");
        result = false;
    } else if (stimuliSet["groups"].length < 1){
        displayErrorMessage("No stimuli 'group' found in experimental stimuli section");
        sprLog("No stimuli 'group' found in experimental stimuli section");
        result = false;
    } else {
        for (var i=0; i<stimuliSet["groups"].length; i++){
            if (typeof(stimuliSet["groups"][i]["group"]) === 'undefined') {
                displayErrorMessage("Unknown name in stimuli: expected 'group'");
                sprLog("Unknown name in stimuli: expected 'group'");
                result = false;
            } else if (!isValidGroup(stimuliSet["groups"][i]["group"])){
                result = false;
            }
        }
    }
    return result;
}

function isValidInstructionScreen(instructions){
    var result = true;
    for (var i=0; i<instructions.length; i++){
        if (typeof(instructions[i]["instruction-screen"]) === 'undefined'){
//            console.log(instructions[i]);
            displayErrorMessage("Unknown name in instructions: expected 'instruction-screen'");
            sprLog("Unknown name in instructions: expected 'instruction-screen'");
            result = false;
        } else if (instructions[i].length < 1){ // Will this allow an array?
            displayErrorMessage("Empty string in instructions");
            sprLog("Empty string in instructions");
            result = false;
        }
    }
    return result;
}

function isValidGroup(group){
    var result = true;
    if (!group["items"]){
        displayErrorMessage("No 'items' name-value pair in stimuli");
        sprLog("No 'items' name-value pair in stimuli");
        result = false;
    } else if (group["items"].length < 1){
        displayErrorMessage("No 'item' found in items list");
        sprLog("No 'item' found in items list");
        result = false;
    } else {
        for (var i=0; i<group["items"].length; i++){
            if (typeof(group["items"][i]["item"]) === 'undefined'){
                displayErrorMessage("Unknown name in items: expected 'item'");
                sprLog("Unknown name in items: expected 'item'");
                result = false;
            } else if (!isValidItem(group["items"][i]["item"])){
                result = false;
            }
        }
    }
    return result;
}

function isValidItem(item){
    var result = true;
    if (!item["id"]){
        displayErrorMessage("Stimulus item has no id");
        sprLog("Stimulus item has no id");
        result = false;
    } else {
        sprLog("Checking item: " + item["id"]);
        if (!item["strings"]){
            if (!item["string"]){
                displayErrorMessage("Item has no string(s)!");
                sprLog("Item has no string(s)!");
                result = false;
            } else if (item["string"].length < 1){
                displayErrorMessage("Empty string found!");
                sprLog("Empty string found!");
                result = false;
            }
        } else {
            for (i=0; i<item["strings"].length; i++){
                if (typeof(item["strings"][i]["string"]) === 'undefined'){
                    displayErrorMessage("Unknown name in strings: expected 'string'");
                    sprLog("Unknown name in strings: expected 'string'");
                    result = false;
                } else if (item["strings"][i]["string"].length < 1) {
                    displayErrorMessage("Empty string found!");
                    sprLog("Empty string found!");
                    result = false;
                }
            }
        }
    }
    return result;
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