/* 
 * Title: jespr-sample2.js
 * Author: Ralph L. ROSE
 * E-mail address: rose@waseda.jp
 * Description: This file defines an experimental design to be used in a
 * JESPR experiment. The stimuli test agreement attraction and are adapted
 * from Pearlmutter, Garnsey, and Bock (1999): http://dx.doi.org/10.1006/jmla.1999.2653
 * and Tucker and Wagers (201?): https://people.ucsc.edu/~gmcguir1/LabReport/TuckerWagersLRC.pdf.
 * Fillers are adpated from Patil, Vasishth, and Lewis (2016): https://doi.org/10.3389/fpsyg.2016.00329
 * and Lucy MacGregor (used in Corley, MacGregor, and Donaldson, 2006: https://doi.org/10.1016/j.cognition.2006.10.010).
 * License: The MIT License (MIT)
 */

var jesprExperimentDesign =
{
    "title": "Self-paced reading experiment",
    "investigators": [
        {
            "primary": "Ralph Rose"
        }
    ],
    "font-name": "Arial",
    "font-size": "15",
    "text-color": "black",
    "background-color": "lightgray",
    "display": "cumulative",
    "orientation": "horizontal",
    "masking-character": "*",
    "fixation-character": "+",
    "min-instruction-time": "2500",
    "show-progress-bar": "true",
    "input-method": "keyboard",
    "quote-mark": "curly_brackets",
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
            "string": "<p>Thank you for participating in this experiment. This experiment uses a technique called <i>self-paced reading</i>. Very simply, you will read through several sentences, controlling the pace of reading on your own, word-by-word, using your computer keyboard. Before each sentence, you will see a fixation symbol: <b>+</b>. After you press the <b>[space]</b> bar, a sentence will appear on the screen, but all the words but the first will be masked with <b>***</b>'s. Press <b>[space]</b> to reveal the next word and read it. Then continue pressing the <b>[space]</b> bar to reveal and read the words one by one; thereby reading through the sentence at your own pace. Read as quickly as you can, but also read for full comprehension.</p><p>After each sentence, there will be a comprehension question about the sentence. The question will have two answer options. Select your answer by tapping one of the keys <b>1/Q/A/Z</b> for the left-hand option or one of the keys <b>0/P/L/M</b> for the right-hand option. In this experiment, the options will always be 'yes' and 'no', but be aware that the left-right position of the options may change.</p>"
        },
        {
            "id": "instruction2",
            "string": "<p>Following are three practice items. Remember to use the <b>[space]</b> bar on your keyboard to read through the words in each sentence, and then use one of the <b>1/Q/A/Z</b> or <b>0/P/L/M</b> keys for answering comprehension questions.</p>"
        }
    ],
    "practice-stimuli": {
        "order": "fixed",
        "items": [
            {
                "item": {
                    "id": "practice01",
                    "string": "The|playful|dog|jumped|up|on|its|owner's|lap|to|get|a|tasty|treat.",
                    "prompt": "Did the dog jump?",
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
                    "id": "practice02",
                    "string": "Helena's|son|was|playing|soccer|with|his|friends|at|the|public|park|last|Saturday.",
                    "prompt": "Did Helena's son meet his friends at the park?",
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
                    "id": "practice03",
                    "string": "A|squirrel|managed|to|get|inside|the|attic|of|the|house|but|couldn't|escape.",
                    "prompt": "Did the squirrel get out of the attic?",
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
    },
    "post-practice-instruction-screens": [
        {
            "id": "instruction3",
            "string": "<p>That is the end of the practice items. Be sure to read all of the sentences closely for comprehension.</p><p>When ready, press the <b>[space]</b> bar to begin the actual experiment.</p><p>There are 56 sentences to read. If you feel tired, feel free to take a short break anytime. However, please do NOT pause in the middle of a sentence or question. Instead, please take a break when you see the fixation symbol: <b>+</b>.</p><p>Finally, note that there is a thin black progress bar at the bottom of the screen that will show how far through the experiment you have progressed.</p>"
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
                                "name": "grammatical",
                                "order": "random",
                                "items": [
                                    {
                                        "item": {
                                            "id": "item01",
                                            "tags": [ "singular", "match" ],
                                            "string": "The|slogan|on|the|poster|{was}|designed|to|get|attention.",
                                            "prompt": "Was there a slogan on the poster?",
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
                                            "id": "item02",
                                            "tags": [ "singular", "match" ],
                                            "string": "The|picture|on|the|postcard|{was}|of|a|village|church|in|the|south|of|France.",
                                            "prompt": "Was the village church in the north of France?",
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
                                            "id": "item03",
                                            "tags": [ "singular", "mismatch" ],
                                            "string": "The|mistake|in|the|programs|{was}|disastrous|for|the|small|software|company.",
                                            "prompt": "Did the mistake cause problems for the company?",
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
                                            "id": "item04",
                                            "tags": [ "plural", "match" ],
                                            "string": "The|problems|in|the|schools|{were}|solved|by|firing|the|superintendent.",
                                            "prompt": "Did the superintendent continue working?",
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
                                            "id": "item05",
                                            "tags": [ "singular", "mismatch" ],
                                            "string": "The|label|on|the|bottles|{was}|a|warning|about|the|toxic|effects|of|the|drug.",
                                            "prompt": "Did the bottles have a warning on them?",
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
                                            "id": "item06",
                                            "tags": [ "plural", "match" ],
                                            "string": "The|names|on|the|billboards|{were}|of|a|prominent|local|politician.",
                                            "prompt": "Did the billboards advertise a local business?",
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
                                            "id": "item07",
                                            "tags": [ "plural", "mismatch" ],
                                            "string": "The|crimes|in|the|city|{were}|a|reflection|of|the|violence|in|today's|society.",
                                            "prompt": "Were there a numer of crimes in the city?",
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
                                            "id": "item08",
                                            "tags": [ "plural", "mismatch" ],
                                            "string": "The|defects|in|the|car|{were}|unknown|to|consumers|and|government|regulators.",
                                            "prompt": "Did the consumers know about the car's defects?",
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
                                            "id": "item09",
                                            "tags": [ "singular", "match" ],
                                            "string": "The|decision|to|pass|the|student|{was}|difficult|for|the|teacher.",
                                            "prompt": "Did the teacher have to make a difficult decision?",
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
                                            "id": "item10",
                                            "tags": [ "singular", "match" ],
                                            "string": "The|request|to|begin|the|project|{was}|overwhelming|because|of|the|cost.",
                                            "prompt": "Was the cost of the project quite low?",
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
                                            "id": "item11",
                                            "tags": [ "singular", "mismatch" ],
                                            "string": "The|proposal|to|help|the|refugees|{was}|honorable|but|misguided.",
                                            "prompt": "Was the proposal designed to help refugees?",
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
                                            "id": "item12",
                                            "tags": [ "singular", "mismatch" ],
                                            "string": "The|movement|to|subsidize|the|drugs|{was}|impressive|in|size.",
                                            "prompt": "Was the drug subsidy movement small?",
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
                                            "id": "item13",
                                            "tags": [ "plural", "match" ],
                                            "string": "The|attempts|to|rescue|the|soldiers|{were}|successful|in|the|spring.",
                                            "prompt": "Were the soldiers rescued?",
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
                                            "id": "item14",
                                            "tags": [ "plural", "match" ],
                                            "string": "The|efforts|to|save|the|trees|{were}|disappointing|to|the|volunteer.",
                                            "prompt": "Were the efforts designed to save the volunteer?",
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
                                            "id": "item15",
                                            "tags": [ "plural", "mismatch" ],
                                            "string": "The|plots|to|assassinate|the|leader|{were}|unsuccessful|every|time.",
                                            "prompt": "Did the leader survive the assassination attempts?",
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
                                            "id": "item16",
                                            "tags": [ "plural", "mismatch" ],
                                            "string": "The|bids|to|acquire|the|company|{were}|rejected|by|the|board.",
                                            "prompt": "Did the board approve the bids?",
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
                        },
                        {
                            "group": {
                                "name": "ungrammatical",
                                "order": "random",
                                "items": [
                                    {
                                        "item": {
                                            "id": "item17",
                                            "tags": [ "singular", "match" ],
                                            "string": "The|memo|from|the|accountants|{were}|about|the|delinquent|tax|return.",
                                            "prompt": "Did the accountants write a memo?",
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
                                            "id": "item18",
                                            "tags": [ "singular", "match" ],
                                            "string": "The|door|to|the|offices|{were}|left|unlocked|by|the|cleaning|service.",
                                            "prompt": "Did the cleaning service lock the door?",
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
                                            "id": "item19",
                                            "tags": [ "singular", "mismatch" ],
                                            "string": "The|check|from|the|stockbroker|{were}|a|dividend|on|a|long-term|bond.",
                                            "prompt": "Does the long-term bond pay dividends?",
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
                                            "id": "item20",
                                            "tags": [ "singular", "mismatch" ],
                                            "string": "The|key|to|the|cabinet|{were}|rusty|from|many|years|of|disuse.",
                                            "prompt": "Did somebody use the key recently?",
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
                                            "id": "item21",
                                            "tags": [ "plural", "match" ],
                                            "string": "The|warnings|from|the|experts|{was}|a|shock|to|the|residents|of|the|city.",
                                            "prompt": "Did the experts issue warnings to the residents?",
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
                                            "id": "item22",
                                            "tags": [ "plural", "match" ],
                                            "string": "The|letters|from|the|lawyer|{was}|received|in|San|Francisco|in|late|March.",
                                            "prompt": "Were the letters sent to San Francisco in May?",
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
                                            "id": "item23",
                                            "tags": [ "plural", "mismatch" ],
                                            "string": "The|bridges|to|the|islands|{was}|about|ten|miles|off|the|main|highway.",
                                            "prompt": "Did the bridges connect to the islands?",
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
                                            "id": "item24",
                                            "tags": [ "plural", "mismatch" ],
                                            "string": "The|entrances|to|the|laboratory|{was}|hard|to|locate|on|the|diagram.",
                                            "prompt": "Did the diagram show the entrances clearly?",
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
                                            "id": "item25",
                                            "tags": [ "singular", "match" ],
                                            "string": "The|opportunity|to|meet|the|senators|{were}|unbelievable|to|the|voters.",
                                            "prompt": "Was there a chance to meet the senators?",
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
                                            "id": "item26",
                                            "tags": [ "singular", "match" ],
                                            "string": "The|promise|to|fix|the|cars|{were}|broken|by|the|overworked|mechanic.",
                                            "prompt": "Did the mechanic keep the promise?",
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
                                            "id": "item27",
                                            "tags": [ "singular", "mismatch" ],
                                            "string": "The|mission|to|feed|the|hostage|{were}|discovered|by|the|gang.",
                                            "prompt": "Did the gang discover the mission?",
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
                                            "id": "item28",
                                            "tags": [ "singular", "mismatch" ],
                                            "string": "The pledge|to|implement|the|agreement|{were}|honored|by|the|nation.",
                                            "prompt": "Did the nation reject the agreement?",
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
                                            "id": "item29",
                                            "tags": [ "plural", "match" ],
                                            "string": "The|campaigns|to|censure|the|candidate|{was}|overly|aggressive|in|tone.",
                                            "prompt": "Was there a campaign to censure the candidate?",
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
                                            "id": "item30",
                                            "tags": [ "plural", "match" ],
                                            "string": "The|agreements|to|house|the|dog|{was}|rejected|by|the|roommate.",
                                            "prompt": "Did the roommate accept the agreement?",
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
                                            "id": "item31",
                                            "tags": [ "plural", "mismatch" ],
                                            "string": "The|mandates|to|relinquish|the|claims|{was}|issued|by|the|court.",
                                            "prompt": "Did the court issue the mandates?",
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
                                            "id": "item32",
                                            "tags": [ "plural", "mismatch" ],
                                            "string": "The|commitments|to|teach|the|children|{was}|made|by|every|teacher.",
                                            "prompt": "Did the children make a commitment to the teachers?",
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
            },
            {
                "stimuli-set": {
                    "name": "fillers",
                    "order": "random",
                    "merge": "true",
                    "groups": [
                        {
                            "group": {
                                "name": "grammatical",
                                "order": "random",
                                "items": [
                                    {
                                        "item": {
                                            "id": "filler01",
                                            "string": "It|was|such|a|nice|day|that|Philip|had|his|lunch|on|the|grass.",
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
                                            "string": "Betty|thought|they|could|have|tomato|soup|and|potato|salad.",
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
                                            "string": "The|prices|have|definitely|gone|up|since|the|management|changed.",
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
                                            "string": "There|was|a|dead|mouse|under|Bill's|sofa|last|week.",
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
                                            "string": "Allan|said|we|should|go|into|town|at|the|weekend.",
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
                                            "string": "It|was|the|last|match|of|the|season|and|Bradley's|team|won!",
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
                                            "string": "June|says|there's|all|sorts|of|chemicals|in|cosmetics.",
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
                                            "string": "Alexa|said|that|she'd|been|really|busy|but|she'd|get|it|all|done.",
                                            "prompt": "Did Alexa say that she had been lazy?",
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
                                            "string": "The|firefighter|that|Henry|recommended|for|the|new|job|cut|himself|on|broken|glass.",
                                            "prompt": "Did Henry cut himself on broken glass?",
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
                                            "string": "The|engineer|that|Peter|visited|convinced|himself|that|the|building|was|safe.",
                                            "prompt": "Did Peter convince himself about the safety of the building?",
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
                                            "string": "The|electrician|that|John|consulted|about|the|problems|blamed|himself|for|the|fire.",
                                            "prompt": "Did John blame himself for the fire?",
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
                                            "string": "The|mechanic|that|Brian|found|in|the|newspaper|taught|himself|everything|about|boats.",
                                            "prompt": "Did Brian teach himself everything about boats?",
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
                                            "string": "The|famous|senator|that|Robert|volunteered|for|compared|himself|to|past|presidents.",
                                            "prompt": "Was Robert's senator famous?",
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
                                            "id": "filler14",
                                            "string": "The|rancher|that|Paul|chose|exhausted|himself|after|building|a|barn|on|the|hill.",
                                            "prompt": "Did the rancher build a barn on the hill?",
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
                                            "id": "filler15",
                                            "string": "The|truck|driver|that|Frank|met|hated|himself|for|smoking|so|heavily.",
                                            "prompt": "Did Frank meet any truck drivers?",
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
                                            "id": "filler16",
                                            "string": "The|construction|worker|that|David|drove|by|hit|himself|on|the|face|by|accident.",
                                            "prompt": "Did the construction worker hit himself?",
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
                                            "id": "filler17",
                                            "string": "The|rude|receptionist|that|Melinda|spoke|with|locked|herself|out|of|the|office.",
                                            "prompt": "Did Melinda lock herself out of the office?",
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
                                            "id": "filler18",
                                            "string": "The|cheerleader|that|Tanya|heard|in|the|big|stadium|gave|herself|a|sore|throat.",
                                            "prompt": "Was the cheerleader too quiet?",
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
                                            "id": "filler19",
                                            "string": "The|beautician|that|Amy|interviewed|in|the|magazine|educated|herself|through|hard|work.",
                                            "prompt": "Was the beautician interviewed by Amy in the magazine?",
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
                                            "id": "filler20",
                                            "string": "The|cosmetician|that|Janice|photographed|for|the|local|newspaper|poisoned|herself.",
                                            "prompt": "Did Janice poison herself?",
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
                                            "id": "filler21",
                                            "string": "The|flight|attendant|that|Wendy|troubled|restrained|herself|from|getting|impatient.",
                                            "prompt": "Did Wendy trouble the flight attendant?",
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
                                            "id": "filler22",
                                            "string": "The|hairdresser|that|Betsy|kept|at|work|all|day|drove|herself|home|at|midnight.",
                                            "prompt": "Did the hairdresser drive herself home at night?",
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
                                            "id": "filler23",
                                            "string": "The|teacher|that|Helen|called|for|a|meeting|sent|herself|an|e-mail|reminder.",
                                            "prompt": "Did the teacher send herself an email?",
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
                                            "id": "filler24",
                                            "string": "The|beauty|consultant|that|Isabelle|met|covered|herself|with|ocean|mud.",
                                            "prompt": "Did the beauty consultant cover herself with ocean mud?",
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
            "string": "This is the end of the experiment.<br/>Thank you for participating!<br/><br/>(Press <b>[space]</b> to finish.)"
        }
    ]
};
