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
var exptFrame;      // Top level div container for experiment display
var exptFontname = "Courier new";   // Font to be used for main display elements
var exptFontsize = "12";   // Base font size to be used for main display elements
// Following colors must be HTML supported color names; e.g., http://www.w3schools.com/colors/colors_names.asp
var exptTextcolor = "black";    // Basic textcolor for stimuli and instructions
var exptBackgroundcolor = "white";  // Basic background color for all screens
var exptDisplay = "Moving window";  // Type of Self-paced Reading display
// Following must be only one character in length
var exptMaskchar = "_";     // Char to use as masking character during trials
var exptFixationchar = "+";     // Char to use as fixation symbol between trials

/*
 * A function to run the whole experiment from initialization to administration
 * to clean-up afterward.
 */
function doExperiment(){
    loadExperiment();
    initExperiment();
}

/*
 * Load experimental design and stimuli
 */
function loadExperiment(design){
    exptTitle = getTitle(design);
    exptFontname = getFontname(design);
    exptFontsize = getFontsize(design);
    exptTextcolor = getTextcolor(design);
    exptBackgroundcolor = getBackgroundcolor(design);
    exptDisplay = getDisplay(design);
}

/*
 * Initialize experimental display
 */
function initExperiment(){
  // create exptFrame
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
 * Get title from design file or leave as default
 */
function getTitle(design){
    if (typeof design["title"] !== 'undefined'){
        return design["title"];
        sprLog("Set title: \'" + design["title"] + "\'");
    } else {
        return exptTitle;
        sprLog("Title unchanged: \'" + exptTitle + "\'");
    }
}

/*
 * Get font name from design file or leave as default
 */
function getFontname(design){
    if (typeof design["font-name"] !== 'undefined'){
        return design["font-name"];
        sprLog("Set font name: \'" + design["font-name"] + "\'");
    } else {
        return exptFontname;
        sprLog("Font name unchanged: \'" + exptFontname + "\'");
    }
}

/*
 * Get font size from design file or leave as default
 */
function getFontsize(design){
    if (typeof design["font-size"] !== 'undefined'){
        return design["font-size"];
        sprLog("Set font size: \'" + design["font-size"] + "\'");
    } else {
        return exptFontsize;
        sprLog("Font size unchanged: \'" + exptFontsize + "\'");
    }
}

/*
 * Get text color from design file or leave as default
 */
function getTextcolor(design){
    if (typeof design["text-color"] !== 'undefined'){
        if (validTextColour(design["text-color"])){
            return design["text-color"];
            sprLog("Set text color: \'" + design["text-color"] + "\'");
        } else {
            displayErrorMessage("The color \'" + design["text-color"] + "\' is not defined. Using default text color, \'" + exptTextcolor + "\'.");
            return exptTextcolor;
            sprLog("Text color unchanged: \'" + exptTextcolor + "\'");
        }
    } else {
        return exptTextcolor;
        sprLog("Text color unchanged: \'" + exptTextcolor + "\'");
    }
}

/*
 * Get text color from design file or leave as default
 */
function getBackgroundcolor(design){
    if (typeof design["background-color"] !== 'undefined'){
        if (validTextColour(design["background-color"])){
            return design["background-color"];
            sprLog("Set background color: \'" + design["background-color"] + "\'");
        } else {
            displayErrorMessage("The color \'" + design["background-color"] + "\' is not defined. Using default background color, \'" + exptTextcolor + "\'.");
            return exptBackgroundcolor;
            sprLog("Background color unchanged: \'" + exptBackgroundcolor + "\'");
        }
    } else {
        return exptBackgroundcolor;
        sprLog("Background color unchanged: \'" + exptBackgroundcolor + "\'");
    }
}

/*
 * Get display type from design file or leave as default
 */
function getDisplay(design){
    if (typeof design["display"] !== 'undefined'){
        if (design["display"] == "cumulative" || design["display"] == "moving window"){
            return design["display"];
            sprLog("Set display: \'" + design["display"] + "\'");
        } else {
            return exptDisplay;
            sprLog("Display unchanged: \'" + exptDisplay + "\'");
        }
    } else {
        return exptDisplay;
        sprLog("Display unchanged: \'" + exptDisplay + "\'");
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