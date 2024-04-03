'use client'
import TagX from '@/ELEMENTX/Ui/Tag/TagX'
import React, { useEffect, useState } from 'react'
import Question from '../question/Question'
import Category from '../category/Category';
import { DummyQuestionType } from '@/types/dummy_types';
import { dummy_data } from '@/data';

const QuestionDetailPage = ({id} : {
    id : string,
}) =>
 {

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
    <div className="">Loading...</div>
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
            <div className="qd-form-ctn">
                <textarea className='qd-txt fontcl main-f ' placeholder='Share question here'></textarea>
                <div className="qd-btn-ctn">
                <button className='btn1 main-f fontcl' >Share my question</button>

                </div>
            </div>
        </div>
        <div className="bar"></div>
        <div className="qd-rlt-ctn">
        <div className="qt-title main-f ">Other Categories</div>
<div className="qd-cate-ctn">
    {
        dummy_data.categories.map((data,index: number) => (
            <Category title={data.name} link_path={data.type} questions_count={data.questions.length} key={index} />
        ))
    }


</div>
        </div>
    </div>
  )
}

export default QuestionDetailPage