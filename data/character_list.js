import bio from "./character_bio.js"
const characters = [

        {
            code: "eric",
            notWip: true,
            image: "./img/char_img/eric_thb.png",
            full_image:"./img/char_img/eric.png",
            refsheet:"",
            page: "./characters/char_eric.html",
            color: "#3d8ad8",

            name: {"first":"Eric", "last":"Stryke" },
            age: "21",
            gender: "Male",
            species: "Grey Wolf / Bloodhound",
            occupation: "Artist, Student",
            hobbies: "Video games, Drawing, Collecting toys",

            likes:["Drawing", "Video Games", "Small animals", "Burgers"],
            dislikes:["Overcrowded places", "Exercise", "The army", "Veggies"],

            accessories:[],

            bio: bio[0],

            extras:[
                ["Refsheet", "./img/char_img/refsheet/eric_ref.png"],
                ["Commission by Furballarts (@furgustoni)", "./img/char_extra/eric furball.png"],
                ["Commission by Wonivero (@Wonivero)", "./img/char_extra/woni comm.png"],
                ["Gift from Tech2772 (@Tech2772)", "./img/char_extra/bday.png"],
                ["Old design: v3.0 (6 mar 2020)", "./img/char_extra/eric early design 3 (6 mar 2020).png"],
                ["Old design: v2.0 (20 jan 2020)", "./img/char_extra/eric early design 2 (20 jan 2020).png"],
                ["Old design: v1.0 (11 nov 2019)", "./img/char_extra/eric early design 1 (11 nov 2019).png"]
            ]
            
        },

        {
            code: "zack",
            notWip: true,
            image: "./img/char_img/zack_thb.png",
            full_image:"./img/char_img/zack.png",
            refsheet:"zack_ref.png",
            page: "./characters/char_zack.html",
            color: "#af8e5f",

            name: {"first":"Zack", "last":"Lockheart" },
            age: "20",
            gender: "Male",
            species: "Red Fox",
            occupation: "Student, Fast-Food Worker",
            hobbies: "Road trips, Band Guitarist, Video Games",

            likes:["Playing music", "Road trips", "Making new friends", "Eric"],
            dislikes:["Big Cities", "Conflict", "Negativity"],

            accessories:[],

            bio: bio[1],

            extras:[
                ["Refsheet", "./img/char_img/refsheet/Zack_ref.png"],
                ["v3.0 (10 jul 2020)", "./img/char_extra/zack early design 3 (10 jul 2020).png"],
                ["v2.0 (24 mar 2020)", "./img/char_extra/zack early design 2 (24 mar 2020).png"],
                ["v1.0 (28 feb 2020)", "./img/char_extra/zack early design 1 (28 feb 2020).png"]
            ]
        },

        {
            code: "andy",
            notWip: true,
            image: "./img/char_img/andy_thb.png",
            full_image:"./img/char_img/andy.png",
            refsheet:"",
            page: "./characters/char_andy.html",
            color: "#101b2f",

            name: {"first":"Andromeda", "last":"'Andy'" },
            age: "31",
            gender: "Male",
            species: "Protogen",
            occupation: "DJ",
            hobbies: "Singing, Making music, Video games",
            
            likes:["Music", "Staying in bed all day", "DJing", "Being cute"],
            dislikes:["Big Corpos", "Tea", "Being reminded of his former lab life"],

            accessories:[],

            bio: bio[2],

            extras:[
                ["v3.5 (8 jun 2020)", "./img/char_extra/andy early design 4 (8 jun 2020).png"],
                ["v3.0 (28 jan 2020)", "../img/char_extra/andy early design 3 (28 jan 2020).png"],
                ["v2.0 (13 dec 2019)", "./img/char_extra/andy early design 2 (13 dec 2019).png"],
                ["v1.0 (12 dec 2019)", "/img/char_extra/andy early design 1 (12 dec 2019).png"]
            ]
        },

        {
            code: "meihal",
            notWip: true,
            image: "./img/char_img/meihal_thb.png",
            full_image:"./img/char_img/meihal.png",
            refsheet:"meihal_ref.png",
            page: "./characters/char_meihal.html",
            color: "#1e98a2",

            name: {"first":"Meihal", "last":"" },
            age: "23",
            gender: "Female",
            species: "Furred dragon",
            occupation: "Car mechanic, Racer",
            hobbies: "Crafting gadgets, Car modification, Video games",

            likes:["Cars", "Mechanics", "Racing", "Spicy noodles", "Video games", "Eric"],
            dislikes:["Dragonkind", "Seafood", "Damaging her car(s)", "Pickles"],

            accessories:[],

            bio: bio[3],

            extras:[
                ["Refsheet", "./img/char_img/refsheet/meihal_ref.png"]
            ]
        },

        {
            code: "mia",
            notWip: true,
            image: "./img/char_img/mia_thb.png",
            full_image:"./img/char_img/mia.png",
            refsheet:"mia_ref.png",
            page: "./characters/char_mia.html",
            color: "#55331e",

            name: {"first":"Mia", "last":"Tayl" },
            age: "22",
            gender: "Female",
            species: "Cat",
            occupation: "Car mechanic, Assistant, Copilot",
            hobbies: "Sleeping, Street racing, Collecting miniature cars",

            likes:["Cars", "Sleeping", "Pizza", "Pats"],
            dislikes:["Vegetables","Cucumbers", "Going to bed late", "Rain"],

            accessories:[],

            bio: bio[4],

            extras:[
                ["Refsheet", "./img/char_img/refsheet/mia_ref.png"]
            ]
        },

        {
            code: "kain",
            notWip: true,
            image: "./img/char_img/kain_thb.png",
            full_image:"./img/char_img/kain.png",
            refsheet:"kain_ref.png",
            page: "./characters/char_kain.html",
            color: "#909090",

            name: {"first":"Kain", "last":"Mortesprit" },
            age: "24",
            gender: "Male",
            species: "Wolf",
            occupation: "Biology student",
            hobbies: "Chess club president, Plantkeeping",

            likes:["Biology", "Plants", "strategy games"],
            dislikes:["Fast foods", "Horror movies", "Losing"],

            accessories:[],

            bio: bio[5],

            extras:[
                ["Refsheet", "./img/char_img/refsheet/kain_ref.png"]
            ]
        },

        {
            code: "juvia",
            notWip: true,
            image: "./img/char_img/juvia_thb.png",
            full_image:"./img/char_img/juvia.png",
            refsheet:"",
            page: "./characters/char_juvia.html",
            color: "#1d5db0",

            name: {"first":"Juvia", "last":"Valedryn" },
            age: "23",
            gender: "Female",
            species: "Maned wolf",
            occupation: "Princess, heir to the throne",
            hobbies: "Pole dancing, walks in nature",

            likes:["Performming in strip clubs", "Doing magic tricks", "Junk food", "Nature", "Magic"],
            dislikes:["Her status", "Royal guests", "Alcohol", "Dragons"],

            accessories:[],

            bio: bio[6],

            extras:[
                ["Earlier design (10 jul 2020)", "./img/char_extra/juvia early design (11 jul 2020).png"]
            ]
            
        },


        {
            code: "rokka",
            notWip: true,
            image: "./img/char_img/rokka_thb.png",
            full_image:"./img/char_img/rokka.png",
            refsheet:"rokka_ref.png",
            page: "./characters/char_rokka.html",
            color: "#9e590d",

            name: {"first":"Rokka", "last":"" },
            age: "21 in human years",
            gender: "Male",
            species: "Avali",
            occupation: "Scout",
            hobbies: "Tinkering, creating gadgets with spare parts",

            likes:["Music", "Making gadgets", "The thrill of exploring unknown and dangerous territories", "Hanging around with Ruki", "'Primitive' technologies"],
            dislikes:["War", "Hot summers", "Coffee"],

            accessories:[
                {name:"Aerogel sword", "img":"../img/char_accessories/aerogelsword.png"},
                {name:"Hip bag", "img":"../img/char_accessories/laptop.png"},
                {name:"Scout helmet", "img":"../img/char_accessories/pillow.png"},
                {name:"Spy drone", "img":"../img/char_accessories/spydrone.png"},
            ],

            bio: bio[7],

            extras:[
                ["Refsheet", "./img/char_img/refsheet/rokka_ref.png"],
                ["Meet the pack!", "./img/char_img/refsheet/avali pack.png"],
                ["Brothers and best friends", "./img/char_extra/rokka n ruki.png"],
            ]
        },

        {
            code: "ruki",
            notWip: true,
            image: "./img/char_img/ruki_thb.png",
            full_image:"./img/char_img/ruki.png",
            refsheet:"",
            page: "./characters/char_ruki.html",
            color: "#3a7a1f",

            name: {"first":"Ruki", "last":"" },
            age: "22 in human years",
            gender: "Male",
            species: "Avali",
            occupation: "Drone specialist",
            hobbies: "Singing, Piloting drones",

            likes:["Flying drones", "Tacos", "Snuggles", "Big drones"],
            dislikes:["Being left out", "Snowstorms", "Horror movies"],

            accessories:[
                {name:"Drone control interface", "img":""},
                {name:"Pistol", "img":""},

            ],

            bio: bio[8],

            extras:[
                ["Meet the pack!", "./img/char_img/refsheet/rokka_ref.png"],
                ["Brothers and best friends", "./img/char_extra/rokka n ruki.png"],
            ]
        },

        {
            code: "skript",
            notWip: true,
            image: "./img/char_img/skript_thb.png",
            full_image:"./img/char_img/skript.png",
            refsheet:"skript_ref.png",
            page: "./characters/char_skript.html",
            color: "#c28000",

            name: {"first":"Skript", "last":"" },
            age: "Unconfirmed. mental age of 20",
            gender: "Male",
            species: "Protogen",
            occupation: "Programmer",
            hobbies: "Coding, making web pages, lamenting his compilation errors",

            likes:["Programming", "Boasting about his skills", "Coffee"],
            dislikes:["php", "Compilation errors", "Modern web design"],

            accessories:[
                {name:"Coffee mug", "img":"../img/char_accessories/mug.png"},
                {name:"Laptop", "img":"../img/char_accessories/laptop.png"},
                {name:"Pillow", "img":"../img/char_accessories/pillow.png"},
            ],

            bio: bio[9],

            extras:[
                ["Refsheet", "./img/char_img/refsheet/skript_ref.png"],
                ["Oops! Skript dropped his coffee!", "./img/char_extra/Skript ded.png"],
                ["Skript is lost", "./img/char_extra/skript lost.png"],
            ]
            
        },
];


var character_list = {
    "character": [

        {
            code: "eric",
            notWip: true,
            image: "./img/char_img/eric_thb.png",
            full_image:"./img/char_img/eric.png",
            refsheet:"",
            page: "./characters/char_eric.html",
            color: "#e2a03e",

            name: {"first":"Eric", "last":"Stryke" },
            age: "21",
            gender: "Male",
            species: "Grey Wolf / Bloodhound",
            occupation: "Artist, Student",
            hobbies: "Video games, Drawing, Collecting toys",

            likes:["Drawing", "Video Games", "Small animals", "Burgers"],
            dislikes:["Overcrowded places", "Exercise", "The army", "Veggies"],

            accessories:[]
        },

        {
            code: "zack",
            notWip: true,
            image: "./img/char_img/zack_thb.png",
            full_image:"./img/char_img/zack.png",
            refsheet:"zack_ref.png",
            page: "./characters/char_zack.html",
            color: "#e2a03e",

            name: {"first":"Zack", "last":"Lockheart" },
            age: "20",
            gender: "Male",
            species: "Red Fox",
            occupation: "Student, Fast-Food Worker",
            hobbies: "Road trips, Band Guitarist, Video Games",

            likes:["Playing music", "Road trips", "Making new friends", "Eric"],
            dislikes:["Big Cities", "Conflict", "Negativity"],

            accessories:[]
        },

        {
            code: "andy",
            notWip: true,
            image: "./img/char_img/andy_thb.png",
            full_image:"./img/char_img/andy.png",
            refsheet:"",
            page: "./characters/char_andy.html",
            color: "#e2a03e",

            name: {"first":"Andromeda", "last":"'Andy'" },
            age: "31",
            gender: "Male",
            species: "Protogen",
            occupation: "DJ",
            hobbies: "Singing, Making music, Video games",
            
            likes:["Music", "Staying in bed all day", "DJing", "Being cute"],
            dislikes:["Big Corpos", "Tea", "Being reminded of his former lab life"],

            accessories:[]
        },

        {
            code: "meihal",
            notWip: true,
            image: "./img/char_img/meihal_thb.png",
            full_image:"./img/char_img/meihal.png",
            refsheet:"meihal_ref.png",
            page: "./characters/char_meihal.html",
            color: "#e2a03e",

            name: {"first":"Meihal", "last":"" },
            age: "23",
            gender: "Female",
            species: "Furred dragon",
            occupation: "Car mechanic, Racer",
            hobbies: "Crafting gadgets, Car modification, Video games",

            likes:["Cars", "Mechanics", "Racing", "Spicy noodles", "Video games", "Eric"],
            dislikes:["Dragonkind", "Seafood", "Damaging her car(s)", "Pickles"],

            accessories:[]
        },

        {
            code: "mia",
            notWip: true,
            image: "./img/char_img/mia_thb.png",
            full_image:"./img/char_img/mia.png",
            refsheet:"mia_ref.png",
            page: "./characters/char_mia.html",
            color: "#e2a03e",

            name: {"first":"Mia", "last":"Tayl" },
            age: "22",
            gender: "Female",
            species: "Cat",
            occupation: "Car mechanic, Assistant, Copilot",
            hobbies: "Sleeping, Street racing, Collecting miniature cars",

            likes:["Cars", "Sleeping", "Pizza", "Pats"],
            dislikes:["Vegetables","Cucumbers", "Going to bed late", "Rain"],

            accessories:[]
        },

        {
            code: "kain",
            notWip: false,
            image: "./img/char_img/kain_thb.png",
            full_image:"./img/char_img/kain.png",
            refsheet:"kain_ref.png",
            page: "./characters/char_kain.html",
            color: "#bfbfbf",

            name: {"first":"Kain", "last":"Mortesprit" },
            age: "24",
            gender: "Male",
            species: "Wolf",
            occupation: "Biology student",
            hobbies: "Chess club president, Plantkeeping",

            likes:["Biology", "Plants", "strategy games"],
            dislikes:["Fast foods", "Horror movies", "Losing"],

            accessories:[]
        },

        {
            code: "juvia",
            notWip: true,
            image: "./img/char_img/juvia_thb.png",
            full_image:"./img/char_img/juvia.png",
            refsheet:"",
            page: "./characters/char_juvia.html",
            color: "#53ba4f",

            name: {"first":"Juvia", "last":"Valedryn" },
            age: "23",
            gender: "Female",
            species: "Maned wolf",
            occupation: "Princess, heir to the throne",
            hobbies: "Pole dancing, walks in nature",

            likes:["Performming in strip clubs", "Doing magic tricks", "Junk food", "Nature", "Magic"],
            dislikes:["Her status", "Royal guests", "Alcohol", "Dragons"],

            accessories:[]
            
        },


        {
            code: "rokka",
            notWip: true,
            image: "./img/char_img/rokka_thb.png",
            full_image:"./img/char_img/rokka.png",
            refsheet:"rokka_ref.png",
            page: "./characters/char_rokka.html",
            color: "#bfbfbf",

            name: {"first":"Rokka", "last":"" },
            age: "21 in human years",
            gender: "Male",
            species: "Avali",
            occupation: "Scout",
            hobbies: "Tinkering, creating gadgets with spare parts",

            likes:["Music", "Making gadgets", "The thrill of exploring unknown and dangerous territories", "Hanging around with Ruki", "'Primitive' technologies"],
            dislikes:["War", "Hot summers", "Coffee"],

            accessories:[
                {name:"Aerogel sword", "img":"../img/char_accessories/aerogelsword.png"},
                {name:"Hip bag", "img":"../img/char_accessories/laptop.png"},
                {name:"Scout helmet", "img":"../img/char_accessories/pillow.png"},
                {name:"Spy drone", "img":"../img/char_accessories/spydrone.png"},
            ]
        },

        {
            code: "ruki",
            notWip: true,
            image: "./img/char_img/ruki_thb.png",
            full_image:"./img/char_img/ruki.png",
            refsheet:"",
            page: "./characters/char_ruki.html",
            color: "#e2a03e",

            name: {"first":"Ruki", "last":"" },
            age: "22 in human years",
            gender: "Male",
            species: "Avali",
            occupation: "Drone specialist",
            hobbies: "Singing, Piloting drones",

            likes:["Flying drones", "Tacos", "Snuggles", "Big drones"],
            dislikes:["Being left out", "Snowstorms", "Horror movies"],

            accessories:[
                {name:"Drone control interface", "img":""},
                {name:"Pistol", "img":""},

            ]
        },

        {
            code: "skript",
            notWip: true,
            image: "./img/char_img/skript_thb.png",
            full_image:"./img/char_img/skript.png",
            refsheet:"skript_ref.png",
            page: "./characters/char_skript.html",
            color: "#977d43",

            name: {"first":"Skript", "last":"" },
            age: "Unconfirmed. mental age of 20",
            gender: "Male",
            species: "Protogen",
            occupation: "Programmer",
            hobbies: "Coding, making web pages, lamenting his compilation errors",

            likes:["Programming", "Boasting about his skills", "Coffee"],
            dislikes:["php", "Compilation errors", "Modern web design"],

            accessories:[
                {name:"Coffee mug", "img":"../img/char_accessories/mug.png"},
                {name:"Laptop", "img":"../img/char_accessories/laptop.png"},
                {name:"Pillow", "img":"../img/char_accessories/pillow.png"},
            ]
            
        },
    ],

    "miscCharacter":[
        {
            code: "haku",
            image:"./img/char_img/misc/haku.png",
            name: {"first":"Haku", "last":"Laban"},
            age: "27",
            gender: "Female",
            species: "Shark",
            occupation:"Coast guard"
        },
        {
            code: "syx",
            image:"./img/char_img/misc/sylaxis.png",
            name: {"first":"Sylaxis", "last":"'Syx'"},
            age: "Unknown",
            gender: "Male",
            species: "Demon goat",
            occupation:"Unknown"
        },
        {
            code: "fluffy",
            image:"",
            name: {"first":"Fluffy", "last":""},
            age: "6",
            gender: "Male",
            species: "Drakit",
            occupation:"Eric's pet"
        },
        {
            code: "kodi",
            image:"./img/char_img/misc/kodi.png",
            name: {"first":"Kodi", "last":"Vangar"},
            age: "25",
            gender: "Male",
            species: "Wolf",
            occupation:"Music producer"
        },
        {
            code: "jester",
            image:"",
            name: {"first":"Jester", "last":"Vangar"},
            age: "25",
            gender: "Male",
            species: "Wolf",
            occupation:"Drummer"
        },
        {
            code: "sha",
            image:"",
            name: {"first":"Sha", "last":"Vangar"},
            age: "24",
            gender: "Female",
            species: "Wolf",
            occupation:"Singer"
        },
        {
            code: "syko",
            image:"./img/char_img/misc/syko.png",
            name: {"first":"Syko", "last":""},
            age: "24",
            gender: "Male",
            species: "Jackal",
            occupation:"Mentally unstable killer"
        }
    ]
}

export default characters;




