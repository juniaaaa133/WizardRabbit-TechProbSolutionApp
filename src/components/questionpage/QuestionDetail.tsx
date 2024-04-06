'use client'
import TagX from '@/ELEMENTX/Ui/Tag/TagX'
import React, { ChangeEvent, ChangeEventHandler, useEffect, useRef, useState } from 'react'
import Question from '../question/Question'
import Category from '../category/Category';
import { DummyQuestionType } from '@/types/dummy_types';
import { dummy_data } from '@/data';
import emailjs from 'emailjs-com';
import { HandleEmail } from '@/features/emailjs/sendEmail';
import LoaderS from '@/ELEMENTX/Ui/Loader/LoaderS';

const QuestionDetailPage = ({id} : {
    id : string,
}) =>
 {

let emailMessageRef = useRef<HTMLFormElement>(null)
let [isMessaged,setIsMessaged] = useState<boolean>(false);

//Made a function that send submitted data to emailjs using useRef.
let HandleSubmit = (e :ChangeEvent<HTMLFormElement>) => {
  e.preventDefault();
   if(emailMessageRef.current !== null){
    HandleEmail(emailMessageRef.current);
    setIsMessaged(true);
    
   }
}

let [question,setQuestion] = useState<DummyQuestionType>();

//To fetch api in real time
let FetchData =  () => {
 let fetchedData = dummy_data.questions.filter((data) => (
    data.id == parseInt(id)
 ))[0];
 console.log(fetchedData);
 setQuestion(fetchedData);
}

useEffect(()=>{
    FetchData();
},[])

    return (
    question == undefined ? 
    <LoaderS />
    : 
    <div className='qd-main'>
        <div className="qd-ctn">
            <TagX text={question.category}/>
            <div className="qd-title fontcl main-f">{question.title}</div>
            <div className="qd-date fontcl2 main-f text-[12px]">{question.date}</div>
            <pre className="qd-ans fontcl3 main-f bg-sec">{question.answer}</pre>
        </div>
        <div className="big-bar"></div>
        <div className="qd-rlt-ctn">
        <div className="qt-title main-f ">Related Questions</div>
        <div className="qd-ctn">
            {
                dummy_data.questions.map((data,index: number) => {
                    if(data.id !== parseInt(id)){
                        return(
                            <Question date={data.date} id={data.id} link_url={data.category_path} key={index} tag={data.category} answer={data.title} question={data.answer} />
                        )
                    }
                })
            }
        </div>
        </div>
        <div className="bar"></div>
        <div className="qd-sug-ctn">
            <div className="qd-sug-title fontcl main-f ">
                {
                    `
                    Can't find your answer anywhere ? Share your question to us.
                    `
                }
            </div>
            <form ref={emailMessageRef} onSubmit={HandleSubmit}  className="qd-form-ctn">
                <textarea className='qd-txt fontcl main-f ' placeholder='Share question here'></textarea>
                <div className="qd-btn-ctn">
                <button className='btn1 main-f fontcl' >{isMessaged == true ? 'Successfully Shared' : 'Share My Question' }</button>

                </div>
            </form>
        </div>
        <div className="bar"></div>
        <div className="qd-rlt-ctn">
        <div className="qt-title main-f ">Other Categories</div>
<div className="qd-cate-ctn">
    {
        dummy_data.categories.map((data,index: number) => {
            if(question?.category_path !== data.type){
                return(
                    <Category title={data.name} link_path={data.type} questions_count={data.questions.length} key={index} />
                )
            }
        })
    }


</div>
        </div>
    </div>
  )
}

export default QuestionDetailPage