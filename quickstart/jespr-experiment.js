/* 
 * Title: jespr-experiment.js
 * Author: Ralph L. ROSE
 * E-mail address: rose@waseda.jp
 * Description: This file defines an experimental design to be used in a
 * JESPR experiment.
 * License: The MIT License (MIT)
 */

// The jesprExperimentDesign variable is a JSON object. Quick
// information about the JSON syntax can be found here:
// https://en.wikipedia.org/wiki/JSON#Data_types.2C_syntax_and_example

var jesprExperimentDesign = {
  // The following general experiment-wide settings are obligatory
  "title": "JESPR Demo",
  "investigators": {
    "primary": ["Ralph Rose"], // comma-separated list of names in quote-marks
    "other": ["Winnie Waseda", "Bubba Takada"]
  },
  // The font-name will be passed directly to the browser for rendering. Hence, it
  // is advisable to use a generic name like "serif", "sans-serif", or "monospace"
  // or to specify one of the commonly available fonts on various systems (e.g.,
  // as listed here: http://web.mit.edu/jmorzins/www/fonts.html).
  "font-name": "Arial",
  "font-size": "15",
  // Colors must be one of 147 HTML colors (e.g., http://www.w3schools.com/colors/colors_hex.asp)
  "text-color": "black",
  "background-color": "lightgray",
  "display": "cumulative", // or "moving window"
  "orientation": "horizontal", // or "vertical"
  "masking-character": "*", // or "_", "-", "+", for example
  "fixation-character": "+", // or "X", for example
  "min-instruction-time": "1500", // how long an instruction screen must appear before a user may continue
  "show-progress-bar": "true",  // If true, a thin bar will appear across bottom of screen to show progress through exeriment
  "input-method": "keyboard", // or "html-button"
  // If either of the following are true, after completion of experiment, a read-only
  // text box will appear on the host html page containing the csv results or the
  // JESPR event log, respectively.
  "show-results-display": "true",
  "show-log-display": "true",
  // The feedback-options are optional. Any number may be defined, but currently,
  // only two options are displayed when an item prompt is defined.
  "feedback-options": [{
      "feedback-option": {
        "name": "correct", // must be a unique name in the experiment file.
        "string": "Yes, that's correct",
        "text-color": "green" // must be valid HTML color (see above)
      }
    },
    {
      "feedback-option": {
        "name": "incorrect", // must be a unique name in the experiment file.
        "string": "No, that's not correct",
        "text-color": "red" // must be valid HTML color (see above)
      }
    }
  ],
  // The (optional) instruction-screens will be shown prior to the practice stimuli. 
  "instruction-screens": [{
      "instruction-screen": {
        "id": "instruction1", // Must be a unique identifier
        // Limited HTML mark-up is possible: <p>, <br/>, <b>, <i>, <u>
        "string": "<p><b>JESPR</b> stands for <i>Javascript-Enabled Self-Paced Reading</i> and is a library for conducting self-paced reading experiments via a web browser. This short demo should give you a quick introduction to the main capabilities that JESPR provides while letting you experience how a JESPR-based experiment proceeds.</p><p>Proceed through the demo by pressing the <b>[space]</b> bar on your keyboard.</p>"
      }
    },
    {
      "instruction-screen": {
        "id": "instruction2",
        "string": "<p>The previous screen and this screen illustrate <i>instruction</i> screens which can display relatively free-form text to the participant for the purpose of explanation or guidance.</p><p>Some minimal formatting of these screens can be done using html mark-up to make paragraphs, line breaks, or <b>bold</b>, <i>italicized</i>, or <u>underlined</u> text.</p><p>Press the <b>[space]</b> bar again to continue and begin seeing some self-paced reading-like presentation. Occasionally, there will be some prompts.  To respond to prompts, press <b>1/q/a/z</b> to choose the left-hand option or <b>0/p/l/m</b> to choose the right-hand option.</p>"
      }
    }
  ],
  // The practice-stimuli are optional.
  "practice-stimuli": {
    "order": "fixed", // or "random"
    "items": [{
        "item": {
          "id": "practice01", // must be a unique id
          // Regions delimited by vertical bar '|'; Region of interest surrounded with curly brackets {}
          "string": "Here|is|a|typical|stimulus|item|showing|a|cumulative|display."
        }
      },
      {
        "item": {
          "id": "practice02",
          "string": "Each|region|is|shown|one|at|a|time,|with|past|regions|remaining|unmasked",
          "prompt": "Did you see a cumulative display?",
          "options": [{
              "option": {
                "string": "Yes",
                "feedback": "That's right."        // Either use a specific feedback string here
                //"feedback-option": "correct"     // Or one of the experiment-wide name feedback options (above)
              }
            },
            {
              "option": {
                "string": "No",
                "feedback": "Actually, you did..."
                //"feedback-option": "incorrect"
              }
            }
          ]
        }
      },
      {
        "item": {
          "id": "practice03",
          "string": "JESPR|can|also|display|using|a|moving|window|technique."
        }
      },
      {
        "item": {
          "id": "practice04",
          "string": "Previous|regions|are|masked|after|a|new|region|is|unmasked.",
          "prompt": "Did you see a moving window display?",
          "options": [{
              "option": {
                "string": "Yes",
                "feedback": "Actually you didn't: This setting can't be changed in the middle of an experiment."
              }
            },
            {
              "option": {
                "string": "No",
                "feedback": "That's right: This setting can't be changed in the middle of an experiment."
              }
            }
          ]
        }
      },
      {
        "item": {
          "id": "practice05",
          "string": "If longer regions|are desired,|that's also possible,|as shown here."
        }
      },
      {
        "item": {
          "id": "practice06",
          "string": "Regions can also|be displayed vertically;|like sentences|in a story."
        }
      },
      {
        "item": {
          "id": "practice07",
          "string": "But right now|the setting is|for horizontal display.",
          "prompt": "Which kind of display direction did you see?",
          "options": [{
              "option": {
                "string": "horizontal display",
                "feedback": "Yes!"
              }
            },
            {
              "option": {
                "string": "vertical display",
                "feedback": "Uh, no. It was horizontal, actually."
              }
            }
          ]
        }
      }
    ]
  },
  // The post-practice-instruction-screens are optional.
  "post-practice-instruction-screens": [{
    "instruction-screen": {
      "id": "instruction3",
      "string": "<p>So far, the items you've seen  might constitute what would be the practice portion of a <b>JESPR</b> experiment. From now, you'll see some test stimuli. In fact, they won't look much different from the practice stimuli, but under the hood, JESPR is ordering and merging groups of stimuli in a manner as specified by the investigator. This ordering and merging is done on a per-participant basis.</p><p>Go through the following stimuli to see how certain test conditions and filler items are merged together. You might also notice some other differences in the feedback messages.</p>"
    }
  }],
  // The experiment-stimuli node is required and must contain
  // at least one sequence of the following hierarchy:
  // stimuli-sets / stimuli-set / groups / group / items / item
  "experiment-stimuli": {
    "order": "fixed",
    "merge": "true",
    "stimuli-sets": [{
      "stimuli-set": {
        "name": "my stimuli", // This name will be output to the results file; can be used to identify one condition
        "order": "random",
        "merge": "true",
        "groups": [{
            "group": {
              "name": "my test group", // This name will be output to the results file; can be used to identify one condition
              "order": "random",
              // Any number of items may be defined here.
              "items": [{
                  "item": {
                    "id": "item01",
                    // These (optional) tags will be output to the results file; can be
                    // used to identify further conditions; number of tags is not limited
                    "tags": ["tag_a", "tag_x"],
                    // Regions delimited by vertical bar '|'; Region of interest surrounded with curly brackets {}
                    "string": "The|quick|brown|fox|jumped|{over}|the|lazy|dogs."
                  }
                },
                {
                  "item": {
                    "id": "item02",
                    "tags": ["tag_a", "tag_y"],
                    "string": "Those|who|believe|in|telekinetics,|{raise}|my|hand."
                  }
                },
                {
                  "item": {
                    "id": "item03",
                    "tags": ["tag_b", "tag_x"],
                    "string": "I'd|rather|{live}|with|a|good|question|than|a|bad|answer."
                  }
                },
                {
                  "item": {
                    "id": "item04",
                    "tags": ["tag_b", "tag_y"],
                    "string": "If|the|facts|don't|fit|the|{theory,}|change|the|facts."
                  }
                }

              ]
            }
          },
          {
            "group": {
              "name": "my filler group",
              "order": "fixed",
              "items": [{
                  "item": {
                    "id": "filler01",
                    "string": "This|is|filler|one,|just|to|make|sure|you're|paying|attention.",
                    "prompt": "What is the name of this Javascript library?",
                    "options": [{
                        "option": {
                          "string": "JESPR",
                          "feedback-option": "correct"
                        }
                      },
                      {
                        "option": {
                          "string": "DM-PrimeLab",
                          "feedback-option": "incorrect"
                        }
                      }
                    ]
                  }
                },
                {
                  "item": {
                    "id": "filler02",
                    "string": "This|is|filler|two,|which|has|no|influence|on|the|data.",
                    "prompt": "Who is credited with the idea of the self-paced reading task?",
                    "options": [{
                        "option": {
                          "string": "Just, Carpenter, and Woolley",
                          "feedback-option": "correct"
                        }
                      },
                      {
                        "option": {
                          "string": "Kukla, Fran, and Ollie",
                          "feedback-option": "incorrect"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }]
  },
  "ending-screens": [{
      "instruction-screen": {
        "id": "instruction4",
        "string": "<p>After an experiment is completed, it is possible to display some free-form instruction, guidance, or debriefing screens, if desired. The current screen would be an example.</p><p>As for the experimental data, it is currently stored in the browser, and can be transmitted to the investigator as a data field in a HTML form submission. Furthermore, if desired, the data can be displayed for immediate review in the browser page. After finishing this experiment, please take a look at the data output. It is rendered in csv-format which can easily be imported to such data analysis applications as Excel or R. Furthermore, notice that the regions of interest are already highlighted in the data so that one can immediately execute an analysis.</p><p>Finally, besides the data, a log file of various events during the experiment operation is kept and this can be submitted as form data as well as viewed in the browser, if desired. Please take a look at it afterward.</p>"
      }
    },
    {
      "instruction-screen": {
        "id": "instruction5",
        "string": "<p>That's the end of the <b>JESPR</b> demo. Thanks for trying it out.  Feel free to try it again, if you like, to see how randomization results in a different ordering of the stimulus items. Or, if you're already persuaded to make use of <b>JESPR</b> in your own experiments, go to the Github <b>JESPR</b> page to read more and to get started.</p><p><b>Thank you <i>very</i> much!</b></p>"
      }
    }
  ]
};