var sprExperimentDesign =
{
    "title": "My self-paced reading experiment",
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
    "min-instruction-time": "5000",
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
            "instruction-screen": "blah1 blah1 blah1"
        },
        {
            "instruction-screen": "blah2 blah2 blah2"
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
            "instruction-screen": "blah3 blah3 blah3"
        }
    ],
    "experiment-stimuli": {
        "order": "fixed",
        "merge": "true",
        "stimuli-sets": [
            {
                "stimuli-set": {
                    "name": "my stimuli",
                    "order": "random",
                    "merge": "true",
                    "groups": [
                        {
                            "group": {
                                "name": "my test group",
                                "order": "random",
                                "items": [
                                    {
                                        "item": {
                                            "id": "item01",
                                            "tags": [ "tag_a", "tag_x" ],
                                            "string": "The|quick|brown|fox|jumped|{over}|the|lazy|dogs."
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "item02",
                                            "tags": [ "tag_a", "tag_y" ],
                                            "string": "Those|who|believe|in|telekinetics,|{raise}|my|hand."
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "item03",
                                            "tags": [ "tag_b", "tag_x" ],
                                            "string": "I'd|rather|{live}|with|a|good|question|than|a|bad|answer."
                                        }
                                    },
                                    {
                                        "item": {
                                            "id": "item04",
                                            "tags": [ "tag_b", "tag_y" ],
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
            }
        ]
    },
    "ending-screens": [
        {
            "instruction-screen": "This is the end of the self-paced-reading experiment. Thank you for participating!"
        }
    ]
};
