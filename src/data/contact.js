import getRandomMessage from "../utils/getRandomSentence";
import * as profilePics from "../component/Images/Images"
const user = [
    {
        id: 1,
        telegram_name: "Adigun",
        username: "alliendeveloper",
        bio: "i move where the flow takes me",
        profile_picture: profilePics.profile,
        messges:{
            "20/12/2021":[
                {
                    message_content: getRandomMessage(),
                    sender: 1,
                    time: "07:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "07:10:21",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 1,
                    time: "07:10:22",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "07:10:23",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 1,
                    time: "07:10:24",
                    status: "read"
                }
            ],
            YESTERDAY:[
                {
                    message_content: getRandomMessage(),
                    sender: 1,
                    time: "08:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "08:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 1,
                    time: "08:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "08:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 1,
                    time: "08:10:20",
                    status: "read"
                }
            ],
            TODAY:[
                {
                    message_content: getRandomMessage(),
                    sender: 1,
                    time: "09:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 1,
                    time: "09:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "09:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 1,
                    time: "09:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "mesasge_receiver",
                    time: "09:10:20",
                    status: "read"
                }
            ]
        }
    },
    {
        id: 2,
        telegram_name: "George",
        username: "wizkid",
        bio: "i dont give a fuck",
        profile_picture: profilePics.profile,
        messges:{
            "20/12/2021":[
                {
                    message_content: getRandomMessage(),
                    sender: 2,
                    time: "07:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "07:10:21",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 2,
                    time: "07:10:22",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "07:10:23",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 2,
                    time: "07:10:24",
                    status: "read"
                }
            ],
            YESTERDAY:[
                {
                    message_content: getRandomMessage(),
                    sender: 2,
                    time: "08:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "08:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 2,
                    time: "08:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "08:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 2,
                    time: "08:10:20",
                    status: "read"
                }
            ],
            TODAY:[
                {
                    message_content: getRandomMessage(),
                    sender: 2,
                    time: "09:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 2,
                    time: "09:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "09:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 2,
                    time: "09:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "09:10:20",
                    status: "read"
                }
            ]
        }
    },
    {
        id: 3,
        telegram_name: "Poco Daniel",
        username: "Poco Lee",
        bio: "I dance for living",
        profile_picture: profilePics.profile,
        messges:{
            "20/12/2021":[
                {
                    message_content: getRandomMessage(),
                    sender: 3,
                    time: "07:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "07:10:21",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 3,
                    time: "07:10:22",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "07:10:23",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "07:10:24",
                    status: "read"
                }
            ],
            YESTERDAY:[
                {
                    message_content: getRandomMessage(),
                    sender: 3,
                    time: "08:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 3,
                    time: "08:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "08:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 3,
                    time: "08:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "08:10:20",
                    status: "read"
                }
            ],
            TODAY:[
                {
                    message_content: getRandomMessage(),
                    sender: 3,
                    time: "09:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "09:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 3,
                    time: "09:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "09:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 3,
                    time: "09:10:20",
                    status: "read"
                }
            ]
        }
    },
    {
        id: 4,
        telegram_name: "Davido",
        username: "Davido",
        bio: "i move where the flow takes me",
        profile_picture: profilePics.profile,
        messges:{
            "20/12/2021":[
                {
                    message_content: getRandomMessage(),
                    sender: 4,
                    time: "07:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "07:10:21",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 4,
                    time: "07:10:22",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "07:10:23",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 4,
                    time: "07:10:24",
                    status: "read"
                }
            ],
            YESTERDAY:[
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "08:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 4,
                    time: "08:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 4,
                    time: "08:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "08:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 4,
                    time: "08:10:20",
                    status: "read"
                }
            ],
            TODAY:[
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "09:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "09:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 4,
                    time: "09:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "09:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 4,
                    time: "09:10:20",
                    status: "read"
                }
            ]
        }
    },
    {
        id: 5,
        telegram_name: "Burna Boy",
        username: "Fela Kuti",
        bio: "I dont Like Weed",
        profile_picture: profilePics.profile,
        messges:{
            "20/12/2021":[
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "07:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "07:10:21",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 5,
                    time: "07:10:22",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "07:10:23",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 5,
                    time: "07:10:24",
                    status: "read"
                }
            ],
            YESTERDAY:[
                {
                    message_content: getRandomMessage(),
                    sender: 5,
                    time: "08:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "08:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "08:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 5,
                    time: "08:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "08:10:20",
                    status: "read"
                }
            ],
            TODAY:[
                {
                    message_content: getRandomMessage(),
                    sender: 5,
                    time: "09:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "09:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 5,
                    time: "09:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "09:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "09:10:20",
                    status: "read"
                }
            ]
        }
    },
    {
        id: 6,
        telegram_name: "Ishola",
        username: "Osha osha",
        bio: "Stay away from woman",
        profile_picture: profilePics.profile,
        messges:{
            "20/12/2021":[
                {
                    message_content: getRandomMessage(),
                    sender: 6,
                    time: "07:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "07:10:21",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 6,
                    time: "07:10:22",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "07:10:23",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "07:10:24",
                    status: "read"
                }
            ],
            YESTERDAY:[
                {
                    message_content: getRandomMessage(),
                    sender: 6,
                    time: "08:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "08:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 6,
                    time: "08:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "08:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 6,
                    time: "08:10:20",
                    status: "read"
                }
            ],
            TODAY:[
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "09:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 6,
                    time: "09:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "09:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "09:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 6,
                    time: "09:10:20",
                    status: "read"
                }
            ]
        }
    },
    {
        id: 7,
        telegram_name: "Yinka",
        username: "davido",
        bio: "Holy boy",
        profile_picture: profilePics.profile,
        messages:{
            "20/12/2021":[
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "07:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "07:10:21",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 6,
                    time: "07:10:22",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "07:10:23",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 6,
                    time: "07:10:24",
                    status: "read"
                }
            ],
            YESTERDAY:[
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "08:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 7,
                    time: "08:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "08:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 7,
                    time: "08:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "08:10:20",
                    status: "read"
                }
            ],
            TODAY:[
                {
                    message_content: getRandomMessage(),
                    sender: 7,
                    time: "09:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "09:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 7,
                    time: "09:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: "message_receiver",
                    time: "09:10:20",
                    status: "read"
                },
                {
                    message_content: getRandomMessage(),
                    sender: 7,
                    time: "09:10:20",
                    status: "read"
                }
            ]
        }
    }
];
export default user;
