import React from "react";

const data = [
    {
        id:1,
        name:"Roosevelt Ansa- Asare (lovaboi)",
        profile:require("assets/img/lovaboi1.jpeg"),
        music_type:" Afrobeats Recording Artist",
        user:"rapper, singer and songwriter",
        no_of_tracks:4,
        about:" I'm a simple but smart guy with an amazing voice, I rap, sing and also a songwriter.My mentor is wizkid. I love all genre of music.",
        contact:{
            facebook:"https://web.facebook.com/roosevelt.ansaasare",
            instagram:"https://www.instagram.com/_lovaboi_/",
            twitter:"https://twitter.com/_lovaboi_",
            email:"rooseveltansaasare.raa@gmail.com"
        },
        images:[
            {
                id:1,
                src:require("assets/img/lovaboi1.jpeg"),
                caption:"LovaBoi",
                altText:""
            },
            {
                id:2,
                src:require("assets/img/lovaboi2.jpeg"),
                caption:"LovaBoi",
                altText:""
            },
            {
                id:3,
                src:require("assets/img/head2.jpeg"),
                caption:"LovaBoi",
                altText:""
            }
        ],
        music:[{
            id:1,
            name:"BIEM!", 
            artists:"Kalipharma Ft Lovaboi x Nah-nah",
            link:[
                {
                    name:"Audiomack",
                    link:"https://audiomack.com/lucky-gent/song/biem",
                }
            ],
            cover:require("assets/img/ryan.jpg"),
            released:"30 August 2019"
        },
        {
            id:2,
            name:"Low Tempo",
            artists:"Lucky Gent",
            link:[
                {
                    name:"Audiomack",
                    link:"https://audiomack.com/lucky-gent/song/low-tempo"
                }
            ],
            cover:require("assets/img/ryan.jpg"),
            released:"30 August 2019"
        },
        {
            id:3,
            name:"Give me wine",
            artists:"Lucky Gent",
            link:[
                {
                    name:"Audiomack",
                    link:"https://audiomack.com/lucky-gent/song/give-me-wine",
                }
            ],
            cover:require("assets/img/ryan.jpg"),
            released:"30 August 2019"
        },
        {
            id:4,
            name:"To the club",
            artists:"Lovaboi",
            link:[
                {
                    name:"Sound Cloud",
                    link:"https://soundcloud.com/user-642014821/to-the-club",
                }
            ],
            cover:require("assets/img/ryan.jpg"),
            released:"30 August 2019"
        }]
    },
    {
        id:2,
        name:"Adolf C Pacman",
        profile:require("assets/img/julie.jpeg"),
        music_type:"Reggae",
        no_of_tracks:4,
        about:"Short info about artist: A simple Ghanaian youth brethren trying to make ends meet like everyone. One happy soul that finds fun in entertaining..",
        contact:[{
            facebook:"",
            instagram:"",
            twitter:"",
            email:""
        }],
        music_links:[
            "https://audiomack.com/lucky-gent/song/biem",
            "https://audiomack.com/lucky-gent/song/low-tempo",
            "https://audiomack.com/lucky-gent/song/give-me-wine",
            "https://soundcloud.com/user-642014821/to-the-club"

        ]
    },
    {
        id:3,
        name:"Khemy",
        profile:require("assets/img/julie.jpeg"),
        music_type:"Reggae"
    }
];
export default data;