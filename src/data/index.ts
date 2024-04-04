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
                    title : 'What is HTML ?' ,
                    answer :
                     `
 HyperText Markup Language or standard markup language designed to be displayed in a web browser.
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
                    category_path : 'css',
                    date : 'February 31,2023',
                    title : 'What is CSS ?' ,
                    answer :
                     `
 Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document
                     `
                }
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
            category_path : 'css',
            category : "CSS",
            title : 'What is CSS ?' ,
            date : 'February 31,2023',
            answer :
             `
Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document
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
        }
    ]
}