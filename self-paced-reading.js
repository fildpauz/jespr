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

/*
 * A function to run the whole experiment from initialization to administration
 * to clean-up afterward.
 */
function doExperiment(){
    //loadExperiment();
    initExperiment();
}

/*
 * Load experimental design and stimuli
 */
function loadExperiment(design){
    setTitle(design);
    setFontname(design);
    setFontsize(design);
    setTextcolor(design);
    setBackgroundcolor(design);
    setDisplay(design);
    setMaskchar(design);
    setFixationchar(design);
}

/*
 * Initialize experimental display
 */
function initExperiment(){
  // create exptFrame
  exptForm = document.getElementsByName("SPRForm")[0];
  if (exptForm === 'undefined'){
      sprLog("The HTML document does not contain a form named \'SPRForm\'");
      displayErrorMessage("The HTML document does not contain a form named \'SPRForm\'. Discontinuing experiment.");
  }
  exptFrame = document.createElement("div");
  exptFrame.style.class = "experiment-frame";
  exptForm.appendChild(exptFrame);
  // create elements of exptFrame
  // populate elements with initial values
  // show title
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
        return design["masking-character"].trim().substr(0,1);
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
        sprLog("Set fixation character: \'" + exptFixationkchar + "\'");
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