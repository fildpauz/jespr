/* 
 * Title: jespr-sample2.js
 * Author: Ralph L. ROSE
 * E-mail address: rose@waseda.jp
 * Description: This file defines an experimental design to be used in a
 * JESPR experiment. The stimuli test agreement attraction and are taken
 * from Pearlmutter, Garnsey, and Bock (1999): http://dx.doi.org/10.1006/jmla.1999.2653
 * License: The MIT License (MIT)
 */

var jesprExperimentDesign =
{
    "title": "Agreement attraction",
    "investigators": [
        {
            "primary": "Ima Jeanyuss"
        },
        {
            "other": "Dawn Tchannou"
        }
    ],
    "font-name": "Arial",
    "font-size": "15",
    "text-color": "black",
    "background-color": "lightgray",
    "display": "cumulative",
    "orientation": "horizontal",
    "masking-character": "*",
    "fixation-character": "X",
    "min-instruction-time": "3000",
    "show-results-display": "true",
    "show-log-display": "true",
    "feedback-options": [
        {
            "name": "correct",
            "string": "That's correct",
            "text-color": "green"
        },
        {
            "name": "incorrect",
            "string": "That's not correct",
            "text-color": "red"
        }
    ],
    "instruction-screens": [
        {
            "id": "instruction1",
            "string": "blah1 blah1 blah1"
        },
        {
            "id": "instruction2",
            "string": "blah2 blah2 blah2"
        }
    ],
    "practice-stimuli": {
        "order": "fixed",
        "items": [
            {
                "item": {
                    "id": "practice01",
                    "string": "blah1|blah2|blah3|{blah4}|blah5",
                    "prompt": "Whah blah bleeh bluh blah?",
                    "options": [
                        {
                            "string": "bleh",
                            "feedback-option": "correct"
                        },
                        {
                            "string": "blih",
                            "feedback-option": "incorrect"
                        }
                    ]
                }
            },
            {
                "item": {
                    "id": "practice02",
                    "string": "blech1|{blech2}|blech3|blech4|blech5",
                    "prompt": "Whach blach bleech bluch blach?",
                    "options": [
                        {
                            "string": "blich",
                            "feedback": "Correct"
                        },
                        {
                            "string": "blech",
                            "feedback": "Incorrect"
                        }
                    ]
                }
            }
        ]
    },
    "post-practice-instruction-screens": [
        {
            "id": "instruction3",
            "string": "blah3 blah3 blah3"
        }
    ],
    "experiment-stimuli": {
        "order": "fixed",
        "merge": "true",
        "stimuli-sets": [
            {
                "stimuli-set": {
                    "name": "agreement",
                    "order": "random",
                    "merge": "true",
                    "groups": [
                        {
                            "group": {
                                "name": "match",
                                "order": "random",
                                "items": [
                                    {
                                        "item": {
                                            "id": "item01",
                                            "tags": [ "singular" ],
                                            "string": "The slogan on the poster was designed to get attention."
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "item02",
                                            "tags": [ "singular" ],
                                            "string": "The picture on the postcard was of a village church in the south of France."
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "item03",
                                            "tags": [ "singular" ],
                                            "string": "The mistake in the program was disastrous for the small software company."
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "item04",
                                            "tags": [ "singular" ],
                                            "string": "The label on the bottle was a warning about the toxic effects of the drug."
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "item05",
                                            "tags": [ "plural" ],
                                            "string": "The problems in the school were solved by firing the superintendent."
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "item06",
                                            "tags": [ "plural" ],
                                            "string": "The names on the billboard were of a prominent local politician."
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "item07",
                                            "tags": [ "plural" ],
                                            "string": "The crimes in the city were a reflection of the violence in today’s society."
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "item08",
                                            "tags": [ "plural" ],
                                            "string": "The defects in the car were unknown to consumers and government regulators."
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "group": {
                                "name": "mismatch",
                                "order": "random",
                                "items": [
                                    {
                                        "item": {
                                            "id": "item09",
                                            "tags": [ "singular" ],
                                            "string": "The door to the office were left unlocked by the cleaning service."
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "item10",
                                            "tags": [ "singular" ],
                                            "string": "The memo from the accountant were about the delinquent tax return."
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "item11",
                                            "tags": [ "singular" ],
                                            "string": "The check from the stockbroker were a dividend on a long-term bond."
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "item12",
                                            "tags": [ "singular" ],
                                            "string": "The key to the cabinet were rusty from many years of disuse."
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "item13",
                                            "tags": [ "plural" ],
                                            "string": "The letters from the lawyer was received in San Francisco in late March."
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "item14",
                                            "tags": [ "plural" ],
                                            "string": "The entrances to the laboratory was hard to locate on the diagram."
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "item15",
                                            "tags": [ "plural" ],
                                            "string": "The warnings from the expert was a shock to the residents of the city."
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "item16",
                                            "tags": [ "plural" ],
                                            "string": "The bridges to the island was about ten miles off the main highway."
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "group": {
                                "name": "my filler group",
                                "order": "fixed",
                                "items": [
                                    {
                                        "item": {
                                            "id": "filler01",
                                            "string": "Donec|tempor,|magna|quis|efficitur|rutrum,|ligula|nisi."
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "filler02",
                                            "string": "Quisque|ac|velit|viverra,|dictum|velit|a,|tempus."
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            },
            {
                "stimuli-set": {
                    "name": "fillers",
                    "order": "random",
                    "merge": "true",
                    "groups": [
                        {
                            "group": {
                                "name": "fillers",
                                "order": "random",
                                "items": [
                                    {
                                        "item": {
                                            "id": "filler01",
                                            "string": "It was such a nice day that Philip had his lunch on the grass.",
                                            "prompt": "Did Philip have lunch in the house?",
                                            "options": [
                                                {
                                                    "string": "yes",
                                                    "feedback-option": "incorrect"
                                                },
                                                {
                                                    "string": "no",
                                                    "feedback-option": "correct"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "filler02",
                                            "string": "Betty thought they could have tomato soup and potato salad.",
                                            "prompt": "Does Betty think they can have potato salad?",
                                            "options": [
                                                {
                                                    "string": "yes",
                                                    "feedback-option": "correct"
                                                },
                                                {
                                                    "string": "no",
                                                    "feedback-option": "incorrect"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "filler03",
                                            "string": "The prices have definitely gone up since the management changed.",
                                            "prompt": "Have the prices gone down?",
                                            "options": [
                                                {
                                                    "string": "yes",
                                                    "feedback-option": "incorrect"
                                                },
                                                {
                                                    "string": "no",
                                                    "feedback-option": "correct"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "filler04",
                                            "string": "There was a dead mouse under Bill's sofa last week.",
                                            "prompt": "Did Bill find a dead cockroach under the sofa?",
                                            "options": [
                                                {
                                                    "string": "yes",
                                                    "feedback-option": "incorrect"
                                                },
                                                {
                                                    "string": "no",
                                                    "feedback-option": "correct"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "filler05",
                                            "string": "Allan said we should go into town at the weekend.",
                                            "prompt": "Did Allan suggest visiting town?",
                                            "options": [
                                                {
                                                    "string": "yes",
                                                    "feedback-option": "correct"
                                                },
                                                {
                                                    "string": "no",
                                                    "feedback-option": "incorrect"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "filler06",
                                            "string": "It was the last match of the season and Bradley's team won!",
                                            "prompt": "Did Bradley's team win the match?",
                                            "options": [
                                                {
                                                    "string": "yes",
                                                    "feedback-option": "correct"
                                                },
                                                {
                                                    "string": "no",
                                                    "feedback-option": "incorrect"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "filler07",
                                            "string": "June says there's all sorts of chemicals in cosmetics.",
                                            "prompt": "Is June talking about health foods?",
                                            "options": [
                                                {
                                                    "string": "yes",
                                                    "feedback-option": "incorrect"
                                                },
                                                {
                                                    "string": "no",
                                                    "feedback-option": "correct"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "filler08",
                                            "string": "Alexa said that she'd been really busy but she'd get it all done.",
                                            "prompt": "Did Alexa say that she had been busy?",
                                            "options": [
                                                {
                                                    "string": "yes",
                                                    "feedback-option": "incorrect"
                                                },
                                                {
                                                    "string": "no",
                                                    "feedback-option": "correct"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "filler09",
                                            "string": "",
                                            "prompt": "",
                                            "options": [
                                                {
                                                    "string": "yes",
                                                    "feedback-option": "incorrect"
                                                },
                                                {
                                                    "string": "no",
                                                    "feedback-option": "correct"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "filler10",
                                            "string": "",
                                            "prompt": "",
                                            "options": [
                                                {
                                                    "string": "yes",
                                                    "feedback-option": "incorrect"
                                                },
                                                {
                                                    "string": "no",
                                                    "feedback-option": "correct"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "filler11",
                                            "string": "",
                                            "prompt": "",
                                            "options": [
                                                {
                                                    "string": "yes",
                                                    "feedback-option": "incorrect"
                                                },
                                                {
                                                    "string": "no",
                                                    "feedback-option": "correct"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "filler12",
                                            "string": "",
                                            "prompt": "",
                                            "options": [
                                                {
                                                    "string": "yes",
                                                    "feedback-option": "incorrect"
                                                },
                                                {
                                                    "string": "no",
                                                    "feedback-option": "correct"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "filler13",
                                            "string": "",
                                            "prompt": "",
                                            "options": [
                                                {
                                                    "string": "yes",
                                                    "feedback-option": "incorrect"
                                                },
                                                {
                                                    "string": "no",
                                                    "feedback-option": "correct"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "filler14",
                                            "string": "",
                                            "prompt": "",
                                            "options": [
                                                {
                                                    "string": "yes",
                                                    "feedback-option": "incorrect"
                                                },
                                                {
                                                    "string": "no",
                                                    "feedback-option": "correct"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "filler15",
                                            "string": "",
                                            "prompt": "",
                                            "options": [
                                                {
                                                    "string": "yes",
                                                    "feedback-option": "incorrect"
                                                },
                                                {
                                                    "string": "no",
                                                    "feedback-option": "correct"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "filler16",
                                            "string": "",
                                            "prompt": "",
                                            "options": [
                                                {
                                                    "string": "yes",
                                                    "feedback-option": "incorrect"
                                                },
                                                {
                                                    "string": "no",
                                                    "feedback-option": "correct"
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    },
    "ending-screens": [
        {
            "id": "instruction4",
            "string": "This is the end of the self-paced-reading experiment.<br/>Thank you for participating!"
        }
    ]
};
