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
        }
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
        }
    ]
}