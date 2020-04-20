
export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name :'asmaa .',
        logo:'/logo.ico',
        headerTagline: [//Line 1 For Header
                        'I am Asmaa.',
                        //Line 2 For Header
                        'R&D Developer, UX Designer, ',
                        'and Java Developer ',
                        //Line 3 For Header
                        'from Malaysia.'
    ],
        //Contact Email
        contactEmail:'asmaa.elzayyadi@gmail.com',
        // Add Your About Text Here
        abouttext: "I am a passionate learner and explorer.",
        abouttext2: "I recently graduated with a Bachelor's Degree in Computer Science with Honors from HELP University.",
        abouttext3: "I worked in projects involving game design and development, chatbot development to facilitate student's FAQs at my university, as well as web development. In addition to that, I am currently a R&D Developer and trainer intern at KidoCode, a company that teached children programming. ",
        aboutImage:'https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        resume: 'https://docs.google.com/document/d/1z9xZNh-3vhRagP_NH1b70935O93SSpe3YcOghF2DwSg/edit?usp=sharing',
        //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:false,//true or false (Change Here)
       // Change Projects Here 
       projects:[
           {
            id: 1,//DO NOT CHANGE THIS (Please)😅
            title:'SindraBot Student Chatbot', //Project Title - Add Your Project Title Here
             service:'Final Year Project. SindraBot: The Student Chatbot', // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
            imageSrc: "/sindra.jpeg",
            //Project URL - Add Your Project Url Here
             //url:'http://chetanverma.com/'
            },
            {
                id: 2,//DO NOT CHANGE THIS (Please)😅
                title: 'GIS',
                service: 'Research and Development. Collection, cleaning, and analysis of data.',
                imageSrc: "/project2.png",
                url: 'https://github.com/asmaa1596/data_reading_from_colab_and_clustering'
            }
            /*{ 
                id: 3,//DO NOT CHANGE THIS (Please)😅
                title: 'Project Three',
                service: 'Web App',
                imageSrc: "https://images.unsplash.com/photo-1511500118080-275313ec90a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                url: 'http://chetanverma.com/'
            },
            {
                id: 4,//DO NOT CHANGE THIS (Please)😅
                title: 'Project Four',
                service: 'Branding',
                imageSrc: "https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                url: 'http://chetanverma.com/'
           }

                    /*

                    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
                ,{
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
        ],
        social: [
            // Add Or Remove The Link Accordingly
            {   name:'Github',
                url:'https://github.com/asmaa1596'},
            /**{
                name: 'Behance',
                url: 'https://www.behance.net/chetanverma'
            },**/
            /**{
                name: 'Dribbble',
                url: 'https://dribbble.com/chetanverma'
            },**/
            /**{
                name: 'Instagram',
                url: 'https://www.instagram.com/cv.uidesign/'
            }**/
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/asmaa-el-zayyadi-8a3655191/'
            },
            {
                name: 'Facebook',
                url: 'https://www.facebook.com/asmaaMIKEL'
            }


        ]
    }