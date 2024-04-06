import { DummyDataType } from "@/types/dummy_types";

export const dummy_data : DummyDataType = {
    categories : [
        {
            id: 1,
            name : 'HTML',
            type : 'html',
            questions : [
                {
                    id: 1,
                    category_path : 'html',
                    date : 'February 31,2023',
                    title : 'how to remove text line and font color in anchor tag <a> ?' ,
                    answer :
                     `
To remove a tag's style,
a {

}
                     `
                }
            ]
        },
        {
            id: 2,
            name : 'CSS',
            type : 'css',
            questions : [
                {
                    id: 2,
                    category : 'CSS',
                    category_path : 'css',
                    date : 'February 31,2023',
                    title : 'How to remove text line and font color in anchor tag <a> ?' ,
                    answer :
                     `
 To remove a tag's style,
 a {
    text-decoration : inherit;
    color : inherit;
 }
                     `
                },
                {
                    id: 5,
                    category: "CSS",
                    category_path : 'css',
                    date : 'February 31,2023',
                    title : 'How many ways to center element in css ?' ,
                    answer :
                     `
Using display and position are the most useful methods to center element.

--Using Display--

.parent {
    display : flex;
    justify-content : center;
    align-item : center;
}

--Using Position-- 

.parent {
    position : relative;
}
.child {
    position : absolute;
    top:0;
    bottom:0;
    left: 0;
    right:0;
    margin:auto;
}
                     `
                },
            ]
        },
        {
            id: 3,
            name : 'JavaScript',
            type : 'javascript',
            questions : [
                {
                    id: 3,
                    category_path : 'javascript',
                    date : 'February 31,2023',
                    title : 'What is JavaScript ?' ,
                    answer :
                     `
A programming language and core technology of the Web.`
                }
            ]
        },
        {
            id: 4,
            name : 'Ui/Ux',
            type : 'ui-ux',
            questions : [
                {
                    id: 4,
                    category_path : 'ui-ux',
                    date : 'February 31,2023',
                    title : 'How to understand rare basic method of Ui and Ux ? ' ,
                    answer :
                     `
I suggest you to learn these sections - Visual Communication,Composition,Typography,Grid and Layout.Those will develop your design skill.`
                }
            ]
        },
        {
            id: 5,
            name : 'React',
            type : 'reactjs',
            questions : [
                {
                    id: 6,
                    category: "React",
                    category_path : 'reactjs',
                    date : 'February 31,2023',
                    title : 'How to reference image from local path in ReactJS ? ' ,
                    answer :
                     `
For local path, required() method should be used.

<img src={require('./example.jpg')} />
                     `
                    }
            ]
        },
        {
            id: 6,
            name : 'NextJS',
            type : 'nextjs',
            questions : [
                {
                    id: 7,
                    category: "NextJS",
                    category_path : 'nextjs',
                    date : 'February 31,2023',
                    title : 'How to fix Hydration error in NextJS 14? ' ,
                    answer :
                     `
    There are some possible ways to solve this error.
    
    -Check html tags that might be nested incorrectly.
    -Use useEffect hook to run on the client only.
    -Use suppressHydrationWarning.
    
    Also be careful with tabel tags, using <Link> tag from other libraries.
                     `
                    },
            ]
        },
    ],
    questions : [
        {
            id: 1,
            category_path : 'html',
            category : 'HTML',
            title : 'What is HTML ?' ,
            date : 'February 31,2023',
            answer :
             `
HyperText Markup Language or standard markup language designed to be displayed in a web browser.
            `
        },
        {
            id: 2,
            category : 'CSS',
            category_path : 'css',
            date : 'February 31,2023',
            title : 'How to remove text line and font color in anchor tag <a> ?' ,
            answer :
             `
To remove a tag's style,
a {
text-decoration : inherit;
color : inherit;
}
             `
        },
        {
            id: 3,
            category_path : 'javascript',
            category : 'JavaScript' ,
            date : 'February 31,2023',
            title : 'What is JavaScript ?' ,
            answer :
             `
A programming language and core technology of the Web.`
        },
        {
            id: 4,
            category: "Ui/Ux",
            category_path : 'ui-ux',
            date : 'February 31,2023',
            title : 'How to understand rare basic method of Ui and Ux ? ' ,
            answer :
             `
I suggest you to learn these sections - Visual Communication,Composition,Typography,Grid and Layout.Those will develop your design skill.`
        },
        {
            id: 5,
            category: "CSS",
            category_path : 'css',
            date : 'February 31,2023',
            title : 'How many ways to center element in css ?' ,
            answer :
             `
Using display and position are the most useful methods to center element.

--Using Display--

.parent {
display : flex;
justify-content : center;
align-item : center;
}

--Using Position-- 

.parent {
position : relative;
}
.child {
position : absolute;
top:0;
bottom:0;
left: 0;
right:0;
margin:auto;
}
             `
        },
        {
            id: 6,
            category: "React",
            category_path : 'reactjs',
            date : 'February 31,2023',
            title : 'How to reference image from local path in ReactJS ? ' ,
            answer :
             `
For local path, required() method should be used.

<img src={require('./example.jpg')} />
             `
            },
            {
                id: 7,
                category: "NextJS",
                category_path : 'nextjs',
                date : 'February 31,2023',
                title : 'How to fix Hydration error in NextJS 14? ' ,
                answer :
                 `
There are some possible ways to solve this error.

-Check html tags that might be nested incorrectly.
-Use useEffect hook to run on the client only.
-Use suppressHydrationWarning.

Also be careful with tabel tags, using <Link> tag from other libraries.
                 `
                },
    ]
}