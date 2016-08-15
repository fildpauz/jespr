# JESPR
A javascript library for conducting browser-based self-paced reading experiments.

## Overview

JESPR is a javascript library that is designed to help language researchers to conduct self-paced reading experiments (i.e., as described in Just and Carpenter 19??) through a browser interface. JESPR is compatible with all modern browsers that can process javascript and can be set up to run on a local machine, or remotely, enabling the possibility of gathering data through crowd-sourcing services. The experimental procedure and interface is highly customizable and data output can be easily imported into analysis applications such as Excel or R. Development is ongoing, and future plans include adding capability for touch-enabled and small form-factor screens.

## Motivation

There are already a wide variety of powerful applications for conducting self-paced reading experiments. Many of these will interface with high-resolution hardware keypads for highly sensitive reaction-time measurements. But not all self-paced reading experiments require such high resolution. Furthermore, these applications typically require local installation and active management by the experimenter for each experimental participant. Recently, though, linguists are finding it useful to conduct experiments and gather data through on-line web-forms and applications or through crowd-sourcing services.

Recent work by ???? has even shown that self-paced reading experiments can be conducted via Amazon's Mechanical Turk crowd-sourcing service and can generate reliable observations of some well-known experimental effects. As yet, however, there are very few Javascript-based solutions for conducting self-paced reading experiments via a web browser (????'s work used ?Flash? technology, which now, unfortunately, is being phased out of use by many browser developers). JESPR is therefore my contribution to this developing area.

JESPR stands for "Javascript-Enabled Self-Paced Reading".

## Getting started with JESPR

In order to use JESPR, there are four files you will need to be aware of.

* `jesper-library.js` -- This is the main library file. If you just want to run experiments, then you should never even have to open this file; just make the appropriate references to it in the `html` file.
* `jespr.html` -- This is the file that would be loaded into the browser and contains the appropriate references to the JESPR library, stylesheet, and design file, and also contains the code to launch the experiment. The body of this file may be edited to add some pre-experiment or post-experiment content, as desired; say, a consent form, or a post-experiment debriefing text.
* `jesper.css` -- This is the stylesheet for the design and layout of various elements in the operation of JESPR. This should probably not be edited unless you know what you're doing.
* `jesper-sample1.js` -- This is the core of the experiment and the most important file for the experimenter. This file sets the global parameters of the experiment as well as lists all of the experimental stimuli.

In `jespr.html`, the other three files are referenced in the `<HEAD>` section as follows.

```
<script src="jespr-sample1.js"></script>
<script src="jespr-library.js"></script>
<link href="jesper.css" rel="stylesheet" type="text/css"/>
```

When running an experiment locally, the four files could be placed in the same directory and the `jesper.html` file could be opened in a browser and run without any Internet connection. However, for a remote administration, some changes may be necessary depending on the situation. Following are a couple of likely scenarios.

* _Host all the files on a web server._ Actually, this is pretty easy -- Put all the files in the same directory on the web server and then leave the references as above.
* _Conduct an experiment via Mechanical Turk._ MT does not allow the uploading of additional files, so they would have to be hosted on a separate server. In this case, the `<HEAD>` references above would need to be updated to give the full URI path to where the files are located. An alternative solution would be to copy the contents of the three files into the source `html` of the MT HIT. This should be attempted only by those who know what they are doing.

## Designing a JESPR experiment

The main task of getting a JESPR experiment ready is to create the design file (e.g., `jesper-sample1.js` above). The design file must be laid out using the JSON (JavaScript Object Notation) data format. If this is not familiar to you, a gentle introduction can be found at the W3C Schools. For those not confident with how to construct and error-check JSON format, it may be useful to use an editor. A search for "json editor" or "json online editor" will yield several good options.

===

The following sections explain how to organize the design file as well as what setting options are available and what they do. Those marked with an asterisk (*) are required in the design file.

### title

This is the title of the experiment and will be shown on an obligatory title screen together with the investigators names below.

### investigators

This is a list of the investigators and will be displayed on the title screen. the `primary` investigators will be listed first and in bold face and `other` investigators will listed afterward in the normal font face.

### font-name (default: `Courier new`)

The name of the desired font to be used as the base font for all text in the experiment. The actual font used will be somewhat browser and system-dependent, so using a web-safe font (e.g., Arial, Times New Roman) is recommended.

### font-size (default: `12`)

The size of the font in `pt` units (but without the units). While any desired font size setting is possible, experimenters should confirm that their selected font size does not result in wrapping of stimulus sentences (which might produced systematic latencies in keypress timings).

### text-color (default: `black`)

The color of all text in the experiment (with the optional exception of feedback; see below). Colors are limited to one of the 147 HTML valid color names (e.g., http://www.w3schools.com/colors/colors_hex.asp).

### background-color (default: `white`)

The color of the screen background throughout the experiment. Colors are limited to one of the 147 HTML valid color names (e.g., http://www.w3schools.com/colors/colors_hex.asp).

### display (default: `moving window`)

This determines how the regions of each stimulus item will be displayed:

* `moving window` -- As each region is unmasked, the previously displayed window is masked, yielding a display where only one region is visible at a time.
* `cumulative` -- Unmasked regions remain unmasked for the continuation of the stimulus.

### orientation (default: `horizontal`)

This determines the orientation of the stimulus regions.

* `horizontal` -- The regions are arranged on a single line, horizontally. This would be the typical arrangement for stimuli where the entire stimulus is one sentence, and each region is one (or more) words.
* `vertical` -- The regions are arranged vertically, in the center of the screen. This would be teh typical arrangement for stimuli that are, say, short stories, and each region is one sentence in the story.

### masking-character (default: `_`)

This is the character that will be used to mask each region, by substituting the character for all non-whitespace characters (including punctuation) within the region. Note that different potential masking characters (e.g., `_`, `*`, `X`) will have different widths in different fonts and could result in some unusual display effects during the experiment. Therefore, carefully consider `font-name`, `font-size`, and `masking-character` together.

### fixation-character (default: `+`);

At the beginning of each stimulus item, a fixation character will be displayed as is typical in self-paced reading experiments. The selected fixation character will be presented at a font-size approximately 5 times the normal font size.

### feedback-options

Feedback to the experimental participant may be given during the experiment regarding their responses to optional post-stimulus prompts (e.g., comprehension questions). `feedback-options` is the place to define one or more generic feedback options that may be used through the experiment. Each option has three parameters, as follows.

* `name` * -- the name of the option. This is used within the design file to indicate which responses should receive which feedback-option. This name is never displayed to the experimental participant, but will be used in the data output to indicate which feedback was given.
* `string` * -- the actual feedback to be given to the participant (e.g., _That's correct_, _That's not correct_).
* `text-color` -- The (optional) color in which the feedback text will be displayed (e.g., `red` for _That's not correct_). Colors are limited to one of the 147 HTML valid color names (e.g., http://www.w3schools.com/colors/colors_hex.asp).

===

The procedure of a JESPR experiment is as follows, where the obligatory items are marked with an asterisk (*).

* Title screen *
* Instruction screens
* Practice item screens
* Post-practice instruction screens
* Experimental item screens *
* Post-experiment instruction screens

The following sections explain how each of these items are described in the design file.

### Title screen *

### Instruction screens

### Practice item screens

### Post-practice instruction screens

### Experimental item screens *

### Post-experiment instruction screens
