/* 
 * Title: jespr-sample3.js
 * Author: Ralph L. ROSE
 * E-mail address: rose@waseda.jp
 * Description: This file defines an experimental design for use in a
 * perceptual study of filled pauses (uh/um) in text. This is a follow-on
 * from my perceptual study of filled pauses in speech.
 * License: The MIT License (MIT)
 */

var jesprExperimentDesign =
        {
            "title": "Reading sentences in English<br/>A self-paced reading experiment",
            "investigators": [
                {
                    "primary": "Ralph Rose"
                }
            ],
            "font-name": "Arial",
            "font-size": "15",
            "text-color": "black",
            "background-color": "lightgray",
            "display": "moving window",
            "orientation": "horizontal",
            "masking-character": "*",
            "fixation-character": "+",
            "min-instruction-time": "2500",
            "show-progress-bar": "true",
            "input-method": "keyboard",
            "quote-mark": "curly_brackets",
            "show-results-display": "true",
            "show-log-display": "true",
            "option-order": "fixed",
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
                    "string": "<p>Thank you for participating in this experiment. This experiment uses a technique called <i>self-paced reading</i>. Very simply, you will read through several sentences, controlling the pace of reading on your own, word-by-word, using your computer keyboard. Before each sentence, you will see a fixation symbol: <b>+</b>. After you press the <b>[space]</b> bar, a sentence will appear on the screen, but all the words but the first will be masked with <b>***</b>'s. Press <b>[space]</b> to reveal the next word and read it. Then continue pressing the <b>[space]</b> bar to reveal and read the words one by one; thereby reading through the sentence at your own pace. Read as quickly as you can, but also read for full comprehension.</p><p>The sentences have been taken from various Internet sources and may contain some unusual or uncommon features.</p><p>&nbsp;</p><p>[Note: If desired, this experiment can run in full screen by pressing the <b>[Enter]</b> key. But this might not work in all browsers (especially Internet Explorer).]</p>"
                },
                {
                    "id": "instruction2",
                    "string": "<p>After each sentence, you must answer one question about the sentence: <i>Is the sentence grammatical or ungrammatical?</i></p><p>What is grammatical?</p><p>You should judge grammaticality in terms of the structure of the sentence:  Does it contain all the words that are necessary for the idea it expresses? Are the words in the right order? Is there correct subject-verb agreement, and so on.</p><p>Do NOT judge a sentence as ungrammatical just because it has some mechanical mistakes (missing punctuation, incorrect capitalization), a colloquial form (non-standard usage like <i>ain't</i>, prepositions at end of sentence), or because it contains some filler expressions (<i>uh</i>, <i>um</i>, <i>like</i>).</p><p>Importantly, don't try to memorize and analyze the sentences.  Instead, base your judgments on your intuition or feeling. Try to make your judgment as quickly as possible.</p><p>Select your answer by tapping one of the keys <b>1/Q/A/Z</b> for <b>grammatical</b> or one of the keys <b>0/P/L/M</b> for <b>ungrammatical</b>.</p>"
                },
                {
                    "id": "instruction3",
                    "string": "<p>Following are some practice items. Remember to use the <b>[space]</b> bar on your keyboard to read through the words in each sentence, and then use one of the <b>1/Q/A/Z</b> or <b>0/P/L/M</b> keys for indicating whether the sentence is grammatical or ungrammatical.</p>"
                }
            ],
            "practice-stimuli": {
                "order": "fixed",
                "items": [
                    {
                        "item": {
                            "id": "practice01",
                            "string": "The|robbers|stole|all|the|paintings|while|the|guard|slept.",
                            "prompt": "Is the sentence grammatical or ungrammatical?",
                            "options": [
                                {
                                    "string": "grammatical",
                                    "feedback-option": "correct"
                                },
                                {
                                    "string": "ungrammatical",
                                    "feedback": "<p>That's not correct</p><p>The sentence was:</p><p><i>The robbers stole all the paintings while the guard slept.</i></p><p>This sentence is GRAMMATICAL.</p>",
                                    "text-color": "red"
                                }
                            ]
                        }
                    },
                    {
                        "item": {
                            "id": "practice02",
                            "string": "The|kids|played|all|the|albums|they|went|to|bed.",
                            "prompt": "Is the sentence grammatical or ungrammatical?",
                            "options": [
                                {
                                    "string": "grammatical",
                                    "feedback": "<p>That's not correct</p><p>The sentence was:</p><p><i>The kids played all the albums they went to bed.</i></p><p>This sentence is UNGRAMMATICAL: It is missing an adverb, for example, <i>*before* they went to bed.</i></p>",
                                    "text-color": "red"
                                },
                                {
                                    "string": "ungrammatical",
                                    "feedback-option": "correct"
                                }
                            ]
                        }
                    },
                    {
                        "item": {
                            "id": "practice03",
                            "string": "The|executive|called|people|uh|because|he|was|very|worried.",
                            "prompt": "Is the sentence grammatical or ungrammatical?",
                            "options": [
                                {
                                    "string": "grammatical",
                                    "feedback-option": "correct"
                                },
                                {
                                    "string": "ungrammatical",
                                    "feedback": "<p>That's not correct</p><p>The sentence was:</p><p><i>The executive called people uh because he was very worried.</i></p><p>This sentence is completely GRAMMATICAL.  It does contain a filler word, <i>uh</i>, but that does not make it ungrammatical.</p>",
                                    "text-color": "red"
                                }
                            ]
                        }
                    },
                    {
                        "item": {
                            "id": "practice04",
                            "string": "Jane|finally|studied|the|books|that|her|math|test|on|Tuesday.",
                            "prompt": "Is the sentence grammatical or ungrammatical?",
                            "options": [
                                {
                                    "string": "grammatical",
                                    "feedback": "<p>That's not correct</p><p>The sentence was:</p><p><i>Jane finally studied the books that her math test on Tuesday.</i></p><p>This sentence is UNGRAMMATICAL: The <i>that</i>-clause is only a sentence fragment (no verb).</p>",
                                    "text-color": "red"
                                },
                                {
                                    "string": "ungrammatical",
                                    "feedback-option": "correct"
                                }
                            ]
                        }
                    },
                    {
                        "item": {
                            "id": "practice05",
                            "string": "Alexa|had|been|really|lazy|managed|to|uh|finish|her|job.",
                            "prompt": "Is the sentence grammatical or ungrammatical?",
                            "options": [
                                {
                                    "string": "grammatical",
                                    "feedback": "<p>That's not correct</p><p>The sentence was:</p><p><i>Alexa had been really lazy managed to uh finish her job.</i></p><p>This sentence is UNGRAMMATICAL: The middle of the sentence needs a connector like <i>but</i>.</p>",
                                    "text-color": "red"
                                },
                                {
                                    "string": "ungrammatical",
                                    "feedback-option": "correct"
                                }
                            ]
                        }
                    },
                    {
                        "item": {
                            "id": "practice06",
                            "string": "If|the|weather|stays|nice|a|picnic|in|the|park.",
                            "prompt": "Is the sentence grammatical or ungrammatical?",
                            "options": [
                                {
                                    "string": "grammatical",
                                    "feedback": "<p>That's not correct</p><p>The sentence was:</p><p><i>If the weather stays nice, a picnic in the park.</i></p><p>This sentence is UNGRAMMATICAL: The second part is only a noun phrase (no verb).</p>",
                                    "text-color": "red"
                                },
                                {
                                    "string": "ungrammatical",
                                    "feedback-option": "correct"
                                }
                            ]
                        }
                    },
                    {
                        "item": {
                            "id": "practice07",
                            "string": "After|three|months|the|building|didn't|look|like|it|would|be|completed.",
                            "prompt": "Is the sentence grammatical or ungrammatical?",
                            "options": [
                                {
                                    "string": "grammatical",
                                    "feedback-option": "correct"
                                },
                                {
                                    "string": "ungrammatical",
                                    "feedback": "<p>That's not correct</p><p>The sentence was:</p><p><i>After three months, the building didn't look like it would be completed.</i></p><p>This sentence is GRAMMATICAL.</p>",
                                    "text-color": "red"
                                }
                            ]
                        }
                    },
                    {
                        "item": {
                            "id": "practice08",
                            "string": "Helen|got|through|to|the|second|stage|of|the|interview.",
                            "prompt": "Is the sentence grammatical or ungrammatical?",
                            "options": [
                                {
                                    "string": "grammatical",
                                    "feedback-option": "correct"
                                },
                                {
                                    "string": "ungrammatical",
                                    "feedback": "<p>That's not correct</p><p>The sentence was:</p><p><i>Helen got through to the second stage of the interview.</i></p><p>This sentence is GRAMMATICAL.</p>",
                                    "text-color": "red"
                                }
                            ]
                        }
                    },
                    {
                        "item": {
                            "id": "practice09",
                            "string": "While|the|newspapers|are|full|of|shocking|stories|are|interesting|to|read.",
                            "prompt": "Is the sentence grammatical or ungrammatical?",
                            "options": [
                                {
                                    "string": "grammatical",
                                    "feedback": "<p>That's not correct</p><p>The sentence was:</p><p><i>While the newspapers are full of shocking stories are interesting to read.</i></p><p>This sentence is UNGRAMMATICAL: <i>shocking stories</i> can't be both an OBJECT and a SUBJECT.</p>",
                                    "text-color": "red"
                                },
                                {
                                    "string": "ungrammatical",
                                    "feedback-option": "correct"
                                }
                            ]
                        }
                    },
                    {
                        "item": {
                            "id": "practice10",
                            "string": "Kirsty|put|on|the|headset|but|she|uh|couldn't|hear|the|producer's|voice.",
                            "prompt": "Is the sentence grammatical or ungrammatical?",
                            "options": [
                                {
                                    "string": "grammatical",
                                    "feedback-option": "correct"
                                },
                                {
                                    "string": "ungrammatical",
                                    "feedback": "<p>That's not correct</p><p>The sentence was:</p><p><i>Kirsty put on the headset but she uh couldn't hear the producer's voice.</i></p><p>This sentence is GRAMMATICAL.</p>",
                                    "text-color": "red"
                                }
                            ]
                        }
                    }
                ]
            },
            "post-practice-instruction-screens": [
                {
                    "id": "instruction4",
                    "string": "<p>That is the end of the practice items. From now on, there will not be any feedback (correct/incorrect) after you answer each question.</p><p>When ready, press the <b>[space]</b> bar to begin the actual experiment.</p><p>There are 190 sentences to read. Be sure to read all of the sentences closely for comprehension. If you feel tired, feel free to take a short break anytime. However, please do NOT pause in the middle of a sentence or question. Instead, please take a break when you see the fixation symbol: <b>+</b>.</p><p>Finally, note that there is a thin black progress bar at the bottom of the screen that will show how far through the experiment you have progressed.</p>"
                }
            ],
            "experiment-stimuli": {
                "order": "fixed",
                "merge": "true",
                "stimuli-sets": [
                    {
                        "stimuli-set": {
                            "name": "subordination",
                            "order": "random",
                            "merge": "true",
                            "groups": [
                                {
                                    "group": {
                                        "name": "boundary",
                                        "order": "random",
                                        "items": [
                                            {"item": {"id": "subordination_01", "string": "While|the|man|hunted|{uh}|the|deer|ran|into|the|woods.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_02", "string": "While|the|soldiers|fought|{uh}|the|battle|ended|in|defeat.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_03", "string": "After|the|clown|tripped|{uh}|the|woman|clapped|loudly.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_04", "string": "While|the|girl|watched|{uh}|the|television|caught|on|fire.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_05", "string": "After|the|manager|finished|{uh}|the|meeting|became|interesting.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_06", "string": "After|the|fire|burned|{uh}|the|ranger|checked|the|damage.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_07", "string": "After|the|kidnappers|returned|{uh}|the|princess|canceled|the|party.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_08", "string": "While|the|ballplayer|scratched|{uh}|the|coach|shouted|directions.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_09", "string": "After|the|cargo|ship|sank|{uh}|the|lifeboat|called|for|help.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_10", "string": "After|the|agents|stopped|{uh}|the|car|disappeared|into|the|darkness.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_11", "string": "After|the|teacher|left|{uh}|the|class|broke|a|window.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_12", "string": "While|the|president|prepared|{uh}|the|speech|was|read|without|him.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_13", "string": "After|the|enemy|attacked|{uh}|the|town|was|destroyed|immediately.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_14", "string": "After|the|janitor|dusted|{uh}|the|clock|fell|off|the|shelf.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_15", "string": "While|the|couple|hugged|{uh}|the|guests|drank|some|wine.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_16", "string": "While|the|farmer|shaved|{uh}|the|sheep|trampled|the|garden.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}}
//                                            {"item": {"id": "subordination_17", "string": "After|the|lawyer|moved|{uh}|the|box|was|still|in|the|closet.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_18", "string": "After|the|students|protested|{uh}|the|convention|moved|to|another|location.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_19", "string": "While|the|general|saluted|{uh}|the|flag|waved|in|the|breeze.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_20", "string": "While|the|child|studied|{uh}|the|book|stayed|in|the|waiting|room.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_21", "string": "Although|the|cashier|understood|{uh}|the|woman|explained|again|anyway.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_22", "string": "While|the|secretary|answered|{uh}|the|door|closed|silently.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_23", "string": "While|the|police|investigated|{uh}|the|family|prepared|their|dinner.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_24", "string": "While|the|father|lectured|{uh}|the|children|punched|each|other.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_25", "string": "While|the|customer|ordered|{uh}|the|burger|cooked|under|the|heat|lamp.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_26", "string": "While|the|artist|painted|{uh}|the|king|watched|nervously.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_27", "string": "While|the|passengers|pushed|{uh}|the|bus|driver|told|them|to|sit|down.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_28", "string": "While|the|boy|bathed|{uh}|the|cat|caught|a|mouse.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_29", "string": "While|the|chef|cooked|{uh}|the|chicken|tried|to|eat|some|grain.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_30", "string": "While|the|priest|hid|{uh}|the|fugitive|emptied|the|fridge.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_31", "string": "Although|the|runner|finished|{uh}|the|race|continued|for|another|hour.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_32", "string": "Although|the|patient|smelled|{uh}|the|mess|was|cleaned|up|later.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_33", "string": "Although|the|doctor|asked|{uh}|the|family|refused|to|sign|the|papers.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_34", "string": "Although|the|nurse|washed|{uh}|the|patient|got|a|dangerous|virus.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_35", "string": "Although|the|builder|negotiated|{uh}|the|contract|finished|last|week.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_36", "string": "Although|the|captain|navigated|{uh}|the|canal|was|too|small|for|the|ship.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_37", "string": "Although|the|engineer|stopped|{uh}|the|train|traveled|to|the|next|station.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_38", "string": "While|the|parents|kissed|{uh}|the|children|fought|over|the|candy.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_39", "string": "After|the|soldiers|fought|{uh}|the|enemy|attacked|the|base|camp.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_40", "string": "While|the|gentleman|gambled|{uh}|the|money|was|stolen|from|the|safe.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_41", "string": "Because|the|shepherd|drove|{uh}|the|sheep|grew|afraid|of|the|car.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_42", "string": "Because|the|programmer|forgot|{uh}|the|computer|was|left|on|all|night.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_43", "string": "Because|the|adults|gathered|{uh}|the|children|stayed|in|their|homes.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_44", "string": "After|the|stuntman|jumped|{uh}|the|canal|became|filled|with|water.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_45", "string": "While|the|astronaut|landed|{uh}|the|spaceship|remained|in|orbit.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_46", "string": "Because|the|boy|lost|{uh}|the|token|was|taken|from|the|game|board.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_47", "string": "Because|the|player|misunderstood|{uh}|the|referee|flipped|the|coin|again.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_48", "string": "Because|the|coach|pushed|{uh}|the|student|decided|to|join|the|team.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_49", "string": "Because|the|client|argued|{uh}|the|case|was|rejected|by|the|judge.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_50", "string": "Because|the|prisoner|escaped|{uh}|the|guard|{uh}|was|held|responsible.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}}
                                        ]
                                    }
                                },
                                {
                                    "group": {
                                        "name": "nonboundary",
                                        "order": "random",
                                        "items": [
//                                            {"item": {"id": "subordination_01", "string": "While|the|man|hunted|the|deer|{uh}|ran|into|the|woods.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_02", "string": "While|the|soldiers|fought|the|battle|{uh}|ended|in|defeat.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_03", "string": "After|the|clown|tripped|the|woman|{uh}|clapped|loudly.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_04", "string": "While|the|girl|watched|the|television|{uh}|caught|on|fire.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_05", "string": "After|the|manager|finished|the|meeting|{uh}|became|interesting.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_06", "string": "After|the|fire|burned|the|ranger|{uh}|checked|the|damage.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_07", "string": "After|the|kidnappers|returned|the|princess|{uh}|canceled|the|party.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_08", "string": "While|the|ballplayer|scratched|the|coach|{uh}|shouted|directions.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_09", "string": "After|the|cargo|ship|sank|the|lifeboat|{uh}|called|for|help.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_10", "string": "After|the|agents|stopped|the|car|{uh}|disappeared|into|the|darkness.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_11", "string": "After|the|teacher|left|the|class|{uh}|broke|a|window.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_12", "string": "While|the|president|prepared|the|speech|{uh}|was|read|without|him.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_13", "string": "After|the|enemy|attacked|the|town|{uh}|was|destroyed|immediately.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_14", "string": "After|the|janitor|dusted|the|clock|{uh}|fell|off|the|shelf.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_15", "string": "While|the|couple|hugged|the|guests|{uh}|drank|some|wine.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_16", "string": "While|the|farmer|shaved|the|sheep|{uh}|trampled|the|garden.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_17", "string": "After|the|lawyer|moved|the|box|{uh}|was|still|in|the|closet.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_18", "string": "After|the|students|protested|the|convention|{uh}|moved|to|another|location.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_19", "string": "While|the|general|saluted|the|flag|{uh}|waved|in|the|breeze.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_20", "string": "While|the|child|studied|the|book|{uh}|stayed|in|the|waiting|room.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_21", "string": "Although|the|cashier|understood|the|woman|{uh}|explained|again|anyway.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_22", "string": "While|the|secretary|answered|the|door|{uh}|closed|silently.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_23", "string": "While|the|police|investigated|the|family|{uh}|prepared|their|dinner.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_24", "string": "While|the|father|lectured|the|children|{uh}|punched|each|other.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_25", "string": "While|the|customer|ordered|the|burger|{uh}|cooked|under|the|heat|lamp.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_26", "string": "While|the|artist|painted|the|king|{uh}|watched|nervously.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_27", "string": "While|the|passengers|pushed|the|bus|driver|{uh}|told|them|to|sit|down.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_28", "string": "While|the|boy|bathed|the|cat|{uh}|caught|a|mouse.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_29", "string": "While|the|chef|cooked|the|chicken|{uh}|tried|to|eat|some|grain.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_30", "string": "While|the|priest|hid|the|fugitive|{uh}|emptied|the|fridge.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_31", "string": "Although|the|runner|finished|the|race|{uh}|continued|for|another|hour.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_32", "string": "Although|the|patient|smelled|the|mess|{uh}|was|cleaned|up|later.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}}
//                                            {"item": {"id": "subordination_33", "string": "Although|the|doctor|asked|the|family|{uh}|refused|to|sign|the|papers.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_34", "string": "Although|the|nurse|washed|the|patient|{uh}|got|a|dangerous|virus.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_35", "string": "Although|the|builder|negotiated|the|contract|{uh}|finished|last|week.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_36", "string": "Although|the|captain|navigated|the|canal|{uh}|was|too|small|for|the|ship.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_37", "string": "Although|the|engineer|stopped|the|train|{uh}|traveled|to|the|next|station.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_38", "string": "While|the|parents|kissed|the|children|{uh}|fought|over|the|candy.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_39", "string": "After|the|soldiers|fought|the|enemy|{uh}|attacked|the|base|camp.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_40", "string": "While|the|gentleman|gambled|the|money|{uh}|was|stolen|from|the|safe.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_41", "string": "Because|the|shepherd|drove|the|sheep|{uh}|grew|afraid|of|the|car.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_42", "string": "Because|the|programmer|forgot|the|computer|{uh}|was|left|on|all|night.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_43", "string": "Because|the|adults|gathered|the|children|{uh}|stayed|in|their|homes.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_44", "string": "After|the|stuntman|jumped|the|canal|{uh}|became|filled|with|water.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_45", "string": "While|the|astronaut|landed|the|spaceship|{uh}|remained|in|orbit.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_46", "string": "Because|the|boy|lost|the|token|{uh}|was|taken|from|the|game|board.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_47", "string": "Because|the|player|misunderstood|the|referee|{uh}|flipped|the|coin|again.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_48", "string": "Because|the|coach|pushed|the|student|{uh}|decided|to|join|the|team.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_49", "string": "Because|the|client|argued|the|case|{uh}|was|rejected|by|the|judge.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_50", "string": "Because|the|prisoner|escaped|the|guard|was|held|responsible.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}}
                                        ]
                                    }
                                },
                                {
                                    "group": {
                                        "name": "no pause",
                                        "order": "random",
                                        "items": [
//                                            {"item": {"id": "subordination_01", "string": "While|the|man|hunted|the|deer|ran|into|the|woods.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_02", "string": "While|the|soldiers|fought|the|battle|ended|in|defeat.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_03", "string": "After|the|clown|tripped|the|woman|clapped|loudly.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_04", "string": "While|the|girl|watched|the|television|caught|on|fire.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_05", "string": "After|the|manager|finished|the|meeting|became|interesting.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_06", "string": "After|the|fire|burned|the|ranger|checked|the|damage.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_07", "string": "After|the|kidnappers|returned|the|princess|canceled|the|party.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_08", "string": "While|the|ballplayer|scratched|the|coach|shouted|directions.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_09", "string": "After|the|cargo|ship|sank|the|lifeboat|called|for|help.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_10", "string": "After|the|agents|stopped|the|car|disappeared|into|the|darkness.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_11", "string": "After|the|teacher|left|the|class|broke|a|window.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_12", "string": "While|the|president|prepared|the|speech|was|read|without|him.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_13", "string": "After|the|enemy|attacked|the|town|was|destroyed|immediately.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_14", "string": "After|the|janitor|dusted|the|clock|fell|off|the|shelf.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_15", "string": "While|the|couple|hugged|the|guests|drank|some|wine.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_16", "string": "While|the|farmer|shaved|the|sheep|trampled|the|garden.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_17", "string": "After|the|lawyer|moved|the|box|was|still|in|the|closet.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_18", "string": "After|the|students|protested|the|convention|moved|to|another|location.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_19", "string": "While|the|general|saluted|the|flag|waved|in|the|breeze.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_20", "string": "While|the|child|studied|the|book|stayed|in|the|waiting|room.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_21", "string": "Although|the|cashier|understood|the|woman|explained|again|anyway.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_22", "string": "While|the|secretary|answered|the|door|closed|silently.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_23", "string": "While|the|police|investigated|the|family|prepared|their|dinner.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_24", "string": "While|the|father|lectured|the|children|punched|each|other.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_25", "string": "While|the|customer|ordered|the|burger|cooked|under|the|heat|lamp.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_26", "string": "While|the|artist|painted|the|king|watched|nervously.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_27", "string": "While|the|passengers|pushed|the|bus|driver|told|them|to|sit|down.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_28", "string": "While|the|boy|bathed|the|cat|caught|a|mouse.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_29", "string": "While|the|chef|cooked|the|chicken|tried|to|eat|some|grain.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_30", "string": "While|the|priest|hid|the|fugitive|emptied|the|fridge.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_31", "string": "Although|the|runner|finished|the|race|continued|for|another|hour.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_32", "string": "Although|the|patient|smelled|the|mess|was|cleaned|up|later.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_33", "string": "Although|the|doctor|asked|the|family|refused|to|sign|the|papers.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_34", "string": "Although|the|nurse|washed|the|patient|got|a|dangerous|virus.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_35", "string": "Although|the|builder|negotiated|the|contract|finished|last|week.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_36", "string": "Although|the|captain|navigated|the|canal|was|too|small|for|the|ship.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_37", "string": "Although|the|engineer|stopped|the|train|traveled|to|the|next|station.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_38", "string": "While|the|parents|kissed|the|children|fought|over|the|candy.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_39", "string": "After|the|soldiers|fought|the|enemy|attacked|the|base|camp.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_40", "string": "While|the|gentleman|gambled|the|money|was|stolen|from|the|safe.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_41", "string": "Because|the|shepherd|drove|the|sheep|grew|afraid|of|the|car.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_42", "string": "Because|the|programmer|forgot|the|computer|was|left|on|all|night.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_43", "string": "Because|the|adults|gathered|the|children|stayed|in|their|homes.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_44", "string": "After|the|stuntman|jumped|the|canal|became|filled|with|water.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_45", "string": "While|the|astronaut|landed|the|spaceship|remained|in|orbit.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_46", "string": "Because|the|boy|lost|the|token|was|taken|from|the|game|board.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_47", "string": "Because|the|player|misunderstood|the|referee|flipped|the|coin|again.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "subordination_48", "string": "Because|the|coach|pushed|the|student|decided|to|join|the|team.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}}
//                                            {"item": {"id": "subordination_49", "string": "Because|the|client|argued|the|case|was|rejected|by|the|judge.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "subordination_50", "string": "Because|the|prisoner|escaped|the|guard|was|held|responsible.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}}
                                        ]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "stimuli-set": {
                            "name": "coordination",
                            "order": "random",
                            "merge": "true",
                            "groups": [
                                {
                                    "group": {
                                        "name": "boundary",
                                        "order": "random",
                                        "items": [
{ "item": { "id": "coordination_01", "string": "Sandra|bumped|into|the|busboy|and|{uh}|the|waiter|told|her|to|be|careful.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
{ "item": { "id": "coordination_02", "string": "Susan|punched|the|musician|and|{uh}|the|conductor|chased|after|her.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
{ "item": { "id": "coordination_03", "string": "Wayne|defended|the|secretary|and|{uh}|the|boss|thought|they|were|guilty.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
{ "item": { "id": "coordination_04", "string": "Phyllis|talked|to|the|mailman|and|{uh}|the|neighbors|began|to|gossip.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
{ "item": { "id": "coordination_05", "string": "The|owner|negotiated|with|the|coach|and|{uh}|the|players|received|big|raises.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
{ "item": { "id": "coordination_06", "string": "Ken|trusted|the|builder|and|{uh}|his|workers|did|good|work.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
{ "item": { "id": "coordination_07", "string": "The|actress|winked|at|the|photographer|and|{uh}|the|writer|got|angry.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
{ "item": { "id": "coordination_08", "string": "Oscar|argued|with|the|owners|and|{uh}|the|real|estate|agent|got|upset.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
{ "item": { "id": "coordination_09", "string": "James|respected|the|scientist|and|{uh}|the|astronaut|was|very|impressed.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
{ "item": { "id": "coordination_10", "string": "Madonna|joked|with|the|players|and|{uh}|the|media|were|all|over|the|place.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
{ "item": { "id": "coordination_11", "string": "Pamela|hit|the|fireman|and|{uh}|the|policeman|had|to|hold|her|back.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
{ "item": { "id": "coordination_12", "string": "Dennis|kicked|the|politician|and|{uh}|the|clerk|ran|to|get|the|police.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } }
//{ "item": { "id": "coordination_13", "string": "Bob|debated|with|the|host|and|{uh}|the|movie|critic|called|for|a|break.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
//{ "item": { "id": "coordination_14", "string": "Audrey|scratched|the|accountant|and|{uh}|the|lawyer|advised|him|to|complain.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
//{ "item": { "id": "coordination_15", "string": "Jason|murdered|the|teenager|and|{uh}|his|parents|became|crazy.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
//{ "item": { "id": "coordination_16", "string": "Samuel|kissed|the|model|and|{uh}|the|actress|ran|outside|in|anger.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
//{ "item": { "id": "coordination_17", "string": "Harriet|missed|her|mother|and|{uh}|her|brother|had|to|calm|her|down.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
//{ "item": { "id": "coordination_18", "string": "Axel|envied|the|athlete|and|{uh}|the|singer|suspected|something|wrong.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
//{ "item": { "id": "coordination_19", "string": "Andrea|telephoned|the|travel|agent|and|{uh}|the|assistant|called|her|back.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
//{ "item": { "id": "coordination_20", "string": "Kevin|fed|the|cat|and|{uh}|the|labrador|began|to|bark|loudly.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
//{ "item": { "id": "coordination_21", "string": "Alan|corrected|the|reporter|and|{uh}|the|editor|rewrote|the|news|article.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
//{ "item": { "id": "coordination_22", "string": "Helen|bowed|before|the|king|and|{uh}|the|queen|gave|her|a|compliment.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
//{ "item": { "id": "coordination_23", "string": "Philip|tripped|the|player|and|{uh}|the|goalie|complained|to|the|referee.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
//{ "item": { "id": "coordination_24", "string": "Barbara|followed|the|girls|and|{uh}|the|boys|teased|her|about|it.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
//{ "item": { "id": "coordination_25", "string": "Donna|studied|the|books|and|{uh}|the|documents|were|found|in|a|safe.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
//{ "item": { "id": "coordination_26", "string": "Greg|prepared|the|main|dish|and|{uh}|the|dessert|came|from|the|store.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
//{ "item": { "id": "coordination_27", "string": "Lucy|turned|on|the|television|and|{uh}|the|radio|began|to|spark.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
//{ "item": { "id": "coordination_28", "string": "Robert|paid|the|carpenter|and|{uh}|the|plumber|asked|for|his|money,|too.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
//{ "item": { "id": "coordination_29", "string": "Laura|fought|the|protester|and|{uh}|the|police|tried|to|keep|the|peace.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
//{ "item": { "id": "coordination_30", "string": "Marcus|opened|the|door|and|{uh}|the|window|slammed|shut|suddenly.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
//{ "item": { "id": "coordination_31", "string": "Denise|argued|with|her|mother|and|{uh}|her|father|listened|quietly.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
//{ "item": { "id": "coordination_32", "string": "Carter|touched|the|desk|and|{uh}|the|chair|began|to|spin|around.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
//{ "item": { "id": "coordination_33", "string": "Lana|chose|the|winner|and|{uh}|the|loser|reacted|very|angrily.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
//{ "item": { "id": "coordination_34", "string": "Milton|searched|for|the|pen|and|{uh}|the|phone|began|to|ring.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
//{ "item": { "id": "coordination_35", "string": "The|professor|wrote|the|book|and|{uh}|the|article|was|published|later.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
//{ "item": { "id": "coordination_36", "string": "The|fireman|carried|the|ladder|and|{uh}|the|hose|was|still|in|the|truck", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
//{ "item": { "id": "coordination_37", "string": "The|athlete|picked|up|the|ball|and|{uh}|the|racket|fell|on|the|ground.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
//{ "item": { "id": "coordination_38", "string": "The|postal|worker|delivered|the|letter|and|{uh}|the|package|came|the|next|day.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
//{ "item": { "id": "coordination_39", "string": "The|worker|put|away|the|documents|and|{uh}|the|plans|were|stolen|overnight.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } },
//{ "item": { "id": "coordination_40", "string": "The|engineer|fixed|the|door|and|{uh}|the|lights|turned|on|automatically", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [ { "string": "grammatical" }, { "string": "ungrammatical"} ] } }
                                        ]
                                    }
                                },
                                {
                                    "group": {
                                        "name": "nonboundary",
                                        "order": "random",
                                        "items": [
//                                            {"item": {"id": "coordination_01", "string": "Sandra|bumped|into|the|busboy|and|the|waiter|{uh}|told|her|to|be|careful.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_02", "string": "Susan|punched|the|musician|and|the|conductor|{uh}|chased|after|her.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_03", "string": "Wayne|defended|the|secretary|and|the|boss|{uh}|thought|they|were|guilty.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_04", "string": "Phyllis|talked|to|the|mailman|and|the|neighbors|{uh}|began|to|gossip.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_05", "string": "The|owner|negotiated|with|the|coach|and|the|players|{uh}|received|big|raises.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_06", "string": "Ken|trusted|the|builder|and|his|workers|{uh}|did|good|work.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_07", "string": "The|actress|winked|at|the|photographer|and|the|writer|{uh}|got|angry.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_08", "string": "Oscar|argued|with|the|owners|and|the|real|estate|agent|{uh}|got|upset.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_09", "string": "James|respected|the|scientist|and|the|astronaut|{uh}|was|very|impressed.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_10", "string": "Madonna|joked|with|the|players|and|the|media|{uh}|were|all|over|the|place.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_11", "string": "Pamela|hit|the|fireman|and|the|policeman|{uh}|had|to|hold|her|back.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_12", "string": "Dennis|kicked|the|politician|and|the|clerk|{uh}|ran|to|get|the|police.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "coordination_13", "string": "Bob|debated|with|the|host|and|the|movie|critic|{uh}|called|for|a|break.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "coordination_14", "string": "Audrey|scratched|the|accountant|and|the|lawyer|{uh}|advised|him|to|complain.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "coordination_15", "string": "Jason|murdered|the|teenager|and|his|parents|{uh}|became|crazy.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "coordination_16", "string": "Samuel|kissed|the|model|and|the|actress|{uh}|ran|outside|in|anger.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "coordination_17", "string": "Harriet|missed|her|mother|and|her|brother|{uh}|had|to|calm|her|down.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "coordination_18", "string": "Axel|envied|the|athlete|and|the|singer|{uh}|suspected|something|wrong.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "coordination_19", "string": "Andrea|telephoned|the|travel|agent|and|the|assistant|{uh}|called|her|back.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "coordination_20", "string": "Kevin|fed|the|cat|and|the|labrador|{uh}|began|to|bark|loudly.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "coordination_21", "string": "Alan|corrected|the|reporter|and|the|editor|{uh}|rewrote|the|news|article.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "coordination_22", "string": "Helen|bowed|before|the|king|and|the|queen|{uh}|gave|her|a|compliment.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "coordination_23", "string": "Philip|tripped|the|player|and|the|goalie|{uh}|complained|to|the|referee.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "coordination_24", "string": "Barbara|followed|the|girls|and|the|boys|{uh}|teased|her|about|it.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}}
//                                            {"item": {"id": "coordination_25", "string": "Donna|studied|the|books|and|the|documents|{uh}|were|found|in|a|safe.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_26", "string": "Greg|prepared|the|main|dish|and|the|dessert|{uh}|came|from|the|store.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_27", "string": "Lucy|turned|on|the|television|and|the|radio|{uh}|began|to|spark.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_28", "string": "Robert|paid|the|carpenter|and|the|plumber|{uh}|asked|for|his|money,|too.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_29", "string": "Laura|fought|the|protester|and|the|police|{uh}|tried|to|keep|the|peace.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_30", "string": "Marcus|opened|the|door|and|the|window|{uh}|slammed|shut|suddenly.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_31", "string": "Denise|argued|with|her|mother|and|her|father|{uh}|listened|quietly.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_32", "string": "Carter|touched|the|desk|and|the|chair|{uh}|began|to|spin|around.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_33", "string": "Lana|chose|the|winner|and|the|loser|{uh}|reacted|very|angrily.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_34", "string": "Milton|searched|for|the|pen|and|the|phone|{uh}|began|to|ring.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_35", "string": "The|professor|wrote|the|book|and|the|article|{uh}|was|published|later.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_36", "string": "The|fireman|carried|the|ladder|and|the|hose|{uh}|was|still|in|the|truck", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_37", "string": "The|athlete|picked|up|the|ball|and|the|racket|{uh}|fell|on|the|ground.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_38", "string": "The|postal|worker|delivered|the|letter|and|the|package|{uh}|came|the|next|day.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_39", "string": "The|worker|put|away|the|documents|and|the|plans|{uh}|were|stolen|overnight.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_40", "string": "The|engineer|fixed|the|door|and|the|lights|{uh}|turned|on|automatically", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}}
                                        ]
                                    }
                                },
                                {
                                    "group": {
                                        "name": "no pause",
                                        "order": "random",
                                        "items": [
//                                            {"item": {"id": "coordination_01", "string": "Sandra|bumped|into|the|busboy|and|the|waiter|told|her|to|be|careful.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_02", "string": "Susan|punched|the|musician|and|the|conductor|chased|after|her.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_03", "string": "Wayne|defended|the|secretary|and|the|boss|thought|they|were|guilty.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_04", "string": "Phyllis|talked|to|the|mailman|and|the|neighbors|began|to|gossip.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_05", "string": "The|owner|negotiated|with|the|coach|and|the|players|received|big|raises.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_06", "string": "Ken|trusted|the|builder|and|his|workers|did|good|work.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_07", "string": "The|actress|winked|at|the|photographer|and|the|writer|got|angry.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_08", "string": "Oscar|argued|with|the|owners|and|the|real|estate|agent|got|upset.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_09", "string": "James|respected|the|scientist|and|the|astronaut|was|very|impressed.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_10", "string": "Madonna|joked|with|the|players|and|the|media|were|all|over|the|place.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_11", "string": "Pamela|hit|the|fireman|and|the|policeman|had|to|hold|her|back.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_12", "string": "Dennis|kicked|the|politician|and|the|clerk|ran|to|get|the|police.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_13", "string": "Bob|debated|with|the|host|and|the|movie|critic|called|for|a|break.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_14", "string": "Audrey|scratched|the|accountant|and|the|lawyer|advised|him|to|complain.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_15", "string": "Jason|murdered|the|teenager|and|his|parents|became|crazy.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_16", "string": "Samuel|kissed|the|model|and|the|actress|ran|outside|in|anger.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_17", "string": "Harriet|missed|her|mother|and|her|brother|had|to|calm|her|down.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_18", "string": "Axel|envied|the|athlete|and|the|singer|suspected|something|wrong.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_19", "string": "Andrea|telephoned|the|travel|agent|and|the|assistant|called|her|back.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_20", "string": "Kevin|fed|the|cat|and|the|labrador|began|to|bark|loudly.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_21", "string": "Alan|corrected|the|reporter|and|the|editor|rewrote|the|news|article.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_22", "string": "Helen|bowed|before|the|king|and|the|queen|gave|her|a|compliment.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_23", "string": "Philip|tripped|the|player|and|the|goalie|complained|to|the|referee.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_24", "string": "Barbara|followed|the|girls|and|the|boys|teased|her|about|it.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "coordination_25", "string": "Donna|studied|the|books|and|the|documents|were|found|in|a|safe.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "coordination_26", "string": "Greg|prepared|the|main|dish|and|the|dessert|came|from|the|store.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "coordination_27", "string": "Lucy|turned|on|the|television|and|the|radio|began|to|spark.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "coordination_28", "string": "Robert|paid|the|carpenter|and|the|plumber|asked|for|his|money,|too.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "coordination_29", "string": "Laura|fought|the|protester|and|the|police|tried|to|keep|the|peace.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "coordination_30", "string": "Marcus|opened|the|door|and|the|window|slammed|shut|suddenly.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "coordination_31", "string": "Denise|argued|with|her|mother|and|her|father|listened|quietly.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "coordination_32", "string": "Carter|touched|the|desk|and|the|chair|began|to|spin|around.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "coordination_33", "string": "Lana|chose|the|winner|and|the|loser|reacted|very|angrily.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "coordination_34", "string": "Milton|searched|for|the|pen|and|the|phone|began|to|ring.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "coordination_35", "string": "The|professor|wrote|the|book|and|the|article|was|published|later.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "coordination_36", "string": "The|fireman|carried|the|ladder|and|the|hose|was|still|in|the|truck", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}}
//                                            {"item": {"id": "coordination_37", "string": "The|athlete|picked|up|the|ball|and|the|racket|fell|on|the|ground.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_38", "string": "The|postal|worker|delivered|the|letter|and|the|package|came|the|next|day.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_39", "string": "The|worker|put|away|the|documents|and|the|plans|were|stolen|overnight.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
//                                            {"item": {"id": "coordination_40", "string": "The|engineer|fixed|the|door|and|the|lights|turned|on|automatically", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}}
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
                                            {"item": {"id": "filler_001", "string": "After|the|man|mailed|the|letter|he|went|to|the|market.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_002", "string": "After|the|soccer|star|kicked|the|ball|the|fans|cheered.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_003", "string": "After|the|wizard|closed|the|book|he|put|his|hat|onto|the|table.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_004", "string": "After|the|sculptor|rented|the|apartment|she|began|to|work|uh|on|her|masterpiece.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_005", "string": "After|the|farmer|welcomed|the|visitors|he|was|given|the|secrets|of|time|travel.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_006", "string": "After|the|commander|nodded|the|soldiers|began|to|creep|through|the|jungle.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_007", "string": "After|the|gardener|squashed|the|tomato|she|cleaned|off|her|boot.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_008", "string": "After|the|girl|opened|the|window|uh|a|bird|flew|in.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_009", "string": "After|the|man|sneezed|the|cat|hid|under|the|couch.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_010", "string": "After|the|intern|cried|the|senator|apologized.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_011", "string": "Although|the|spy|erased|the|message|he|didn't|notice|the|hidden|microphone.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_012", "string": "Although|the|engineer|squinted|the|symbols|uh|were|still|blurry.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_013", "string": "Although|the|lion|listened|the|mouse|did|not|make|a|sound.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_014", "string": "Because|the|newspaper|edited|the|essay|the|journalist|was|angry.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_015", "string": "Before|the|boy|washed|the|jeep|he|rolled|up|the|windows.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_016", "string": "When|the|superhero|uh|blinked|the|villain|fired|the|distortion|ray.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_017", "string": "When|the|carpenter|built|the|shed|she|used|expensive|materials.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_018", "string": "When|the|woman|looked|the|containers|had|vanished.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_019", "string": "While|the|gladiator|polished|the|swords|the|lions|were|released.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_020", "string": "While|the|professor|examined|uh|the|stone|the|cave|began|to|collapse.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_021", "string": "While|the|millionaire|trimmed|the|hedge|he|talked|to|his|neighbor.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_022", "string": "While|the|mascot|skated|the|band|played|loudly.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_023", "string": "While|the|salesman|talked|the|customer|stared|off|into|space.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_024", "string": "While|the|mayor|uh|gargled|his|assistant|spoke|to|the|press.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_025", "string": "While|Larry|sprinted|Marcel|plodded|along|slowly.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_026", "string": "While|the|hiker|grimaced|the|nurse|removed|the|porcupine|quill.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_027", "string": "While|the|child|drew|the|picture|he|sang|a|song.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_028", "string": "While|the|scientist|shivered|the|snow|began|uh|to|fall|again.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_029", "string": "While|the|referee|waited|the|players|ran|onto|the|field.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_030", "string": "While|the|astronauts|slept|the|spaceship|orbited|Mars.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_031", "string": "Doug|suggested|that|they|take|either|the|car|or|the|jeep|to|the|beach|tomorrow.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_032", "string": "Madelaine|wants|either|a|cordless|uh|telephone|or|a|CD|for|her|birthday.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_033", "string": "Oliver|asked|whether|the|lasagna|or|the|pesto|came|with|a|dinner|salad.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_034", "string": "Sherry|will|take|her|mother|or|her|father|to|the|Bahamas|with|her|next|winter.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_035", "string": "Dan|would|like|to|marry|either|the|actress|or|the|dancer|because|of|their|looks.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_036", "string": "Sandra|suggested|we|see|either|the|Shakespeare|or|uh|the|Shaw|play|this|season.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_037", "string": "Murray|demanded|higher|pay|or|longer|vacations|during|his|recent|contract|fight.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_038", "string": "Betty|will|go|to|medical|school|or|graduate|school|next|year|her|parents|said.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_039", "string": "Andy|runs|or|does|step|aerobics|3|times|a|week|during|the|school|year.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_040", "string": "Molly|calls|me|or|uh|sends|me|an|e-mail|message|at|least|once|a|day.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_041", "string": "Jackie|pledged|fifty|dollars|to|public|radio|but|Barbara|gave|twice|that|amount.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_042", "string": "Rodney|baked|a|big|chocolate|cake|but|Alvin|could|only|make|Rice|Krispie|treats.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_043", "string": "Denise|went|to|the|film|festival|at|Cannes|but|Linda|had|to|stay|home.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_044", "string": "Maurice|renovated|his|bathroom|but|Fred|uh|decided|to|invest|all|his|spare|cash.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_045", "string": "Yvonne|has|a|really|dark|suntan|but|Nancy|uses|sunblock|all|the|time.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_046", "string": "Edgar|rented|a|video|for|this|evening|but|Phillip|wanted|to|go|out|to|a|movie.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_047", "string": "Connie|entered|the|science|competition|but|Susie|was|more|interested|in|fashion.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_048", "string": "Max|can|bench|press|one|hundred|uh|pounds|but|Brad|can|barely|lift|an|ounce.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_049", "string": "Fiona|listens|to|Celtic|music|but|Brenda|only|listens|to|grunge|rock.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_050", "string": "Ian|drove|to|the|mall|to|buy|a|new|pair|of|Nikes|but|Ted|stayed|in|to|study.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}}
                                        ]
                                    }
                                },
                                {
                                    "group": {
                                        "name": "ungrammatical",
                                        "order": "random",
                                        "items": [
                                            {"item": {"id": "filler_051", "string": "While|the|cereal|that|was|on|the|table|before|the|juice.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_052", "string": "The|couple|walked|down|the|pier|the|boat|beside|the|yacht.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_053", "string": "Without|the|tires|or|the|steering|wheel|the|car|which|drove|around|the|bend.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_054", "string": "While|Eddie|hit|the|ball|the|man|uh|who|saw|it.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_055", "string": "Around|the|building|and|down|the|steps|were|helping|the|workmen.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_056", "string": "While|the|man|put|the|garbage|on|the|corner|the|lady|knitting|the|scarf.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_057", "string": "The|boy|cleaned|all|of|the|coffee|cups|on|the|counter|can|barely|be|seen.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_058", "string": "The|editor|wrote|the|second|report|uh|before|the|deadline|was|three|weeks|ago.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_059", "string": "The|people|formed|a|single|line|than|the|artist|between|the|committee|and|the|board.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_060", "string": "While|the|boy|who|was|the|leader|on|the|porch|next|to|the|stove.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_061", "string": "The|painters|next|door|to|the|apartment|without|the|windows|because|it|is|raining.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_062", "string": "Although|the|masked|man|the|fire|in|the|fireplace|uh|flickered|brightly.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_063", "string": "The|ugly|old|birds|on|the|roof|before|the|party|very|quickly.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_064", "string": "The|next|store|in|the|mall|beside|the|Chinese|restaurant|at|five|o'clock|daily.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_065", "string": "The|politicians|who|made|the|decision|governing|the|election|with|great|care.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_066", "string": "While|the|record|that|had|the|hit|song|uh|last|week|on|the|radio.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_067", "string": "Under|the|name|of|the|king|was|going|to|the|market|on|the|corner.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_068", "string": "The|well-loaded|car|driving|down|the|highway|last|night|with|anti-lock|brakes.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_069", "string": "While|the|toad|with|the|bumpy|warts|on|the|log.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_070", "string": "After|Bill|abandoned|near|the|stadium|uh|last|Tuesday.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_071", "string": "Under|the|bridge|the|cat|with|no|tail.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_072", "string": "While|the|unconcerned|cheerleader|next|to|the|stadium.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_073", "string": "Once|in|a|while|in|a|store|downtown|the|gangster.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_074", "string": "Late|for|a|meeting|uh|the|pizza|delivery|guy|with|a|broken|leg.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_075", "string": "Place|the|second|half|of|the|man|who|ordered|the|milkshake.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_076", "string": "While|the|boy|the|hat|fell|off|the|stand.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_077", "string": "Although|the|rotten|mean|uncle|the|teacher|graded|the|children's|work.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_078", "string": "Because|Jenny|went|alone|to|the|park|the|man|uh|who|opened|the|umbrellas.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_079", "string": "The|exam|was|finished|without|help|the|student|said|the|first|question.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_080", "string": "There|were|fourteen|more|lakes|under|the|kids|jumped|all|afternoon.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_081", "string": "Although|Bill|got|down|from|the|counter|is|the|dog|that|followed|him|home.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_082", "string": "Susan|demanded|that|the|refund|check|in|uh|the|mailbox|near|the|store|she|works.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_083", "string": "Because|the|secretary|answered|the|phone|the|ringing|which|never|stops.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_084", "string": "After|the|flowers|that|the|artist|ate|the|pie|at|the|table.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_085", "string": "The|men|who|made|the|house|near|the|ocean|because|of|the|hurricane.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_086", "string": "While|the|girl|the|car|on|the|curb|uh|hit|yesterday.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_087", "string": "After|the|names|of|the|parents|that|the|awards|on|the|stage.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_088", "string": "The|cleaners|found|the|stain|the|inspectors|from|the|hotel|early|this|morning.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_089", "string": "The|next|movie|the|survivors|made|on|the|beach|very|poorly.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_090", "string": "The|reptiles|or|the|mammals|while|the|zookeeper|uh|was|gone.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_091", "string": "The|bus|driver|on|this|route|the|policeman|arrested|the|burglar.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_092", "string": "All|of|the|bees|cannot|above|the|house|the|hive|is|in.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_093", "string": "The|submarine|followed|the|squid|the|cave|was|dark.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_094", "string": "Mary|ordered|uh|the|salad|with|the|tomatoes|were|ripening|on|the|vine.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_095", "string": "Pat|wore|his|red|and|purple|kilt|to|work|went|well|that|morning.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_096", "string": "Whether|or|not|the|rain|will|last|Sunday.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_097", "string": "Because|the|weeds|Frank|and|Joe|in|the|vacant|lot.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_098", "string": "The|long|discussion|the|supervisor|uh|bought|some|speakers.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_099", "string": "The|cook|brought|back|the|small|knife|and|the|fork|were|in|the|box.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}},
                                            {"item": {"id": "filler_100", "string": "While|the|alligator|in|the|swamp|and|the|actress|last|week.", "prompt": "Is the sentence grammatical or ungrammatical?", "options": [{"string": "grammatical"}, {"string": "ungrammatical"}]}}
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
