'use client'
import { dummy_data } from '@/data';
import { HandleEmail } from '@/features/emailjs/sendEmail';
import { DummyCategoryType, DummyQuestionType } from '@/types/dummy_types';
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import Category from '../category/Category';
import Question from '../question/Question';
import LoaderS from '@/ELEMENTX/Ui/Loader/LoaderS';

const Homepage = () => {

let route = useRouter();
let emailMessageRef = useRef<HTMLFormElement>(null)
let [isMessaged,setIsMessaged] = useState<boolean>(false);

let [categoryData,setcategoryData] = useState<DummyCategoryType[]>();
let [questionData,setQuestionData] = useState<DummyQuestionType[]>()

//Fetch api data in real time;
let FetchData = () => {
  //api fetch instead of dummy_data;
  
  let filteredCategoryArr = dummy_data.categories.sort((a,b) => b.id-a.id);
  let filteredQuestionArr = dummy_data.questions.sort((a,b) => b.id - a.id);
  setcategoryData(filteredCategoryArr);
  setQuestionData(filteredQuestionArr);
}

useEffect(()=>{
  FetchData();
},[])

//Made a function that send submitted data to emailjs using useRef.
let HandleSubmit = (e :ChangeEvent<HTMLFormElement>) => {
  e.preventDefault();
   if(emailMessageRef.current !== null){
    HandleEmail(emailMessageRef.current);
    setIsMessaged(true);
   }
}

  return (
    questionData == undefined || categoryData == undefined ?
    <LoaderS />
    :
    <div className='hm-main'>
      <div className="hm-hero-ctn">
        <div className="hm-hero-info-ctn">
<div className="hm-hero-head-ctn">
  <div className="hhh-layout"></div>
<div className="hm-hero-header main-f fontcl2">Welcome to WizardRabbit</div>
</div>
<div className="hm-hero-title main-f fontcl">Place where every developers , designers and programmers can learn anything</div>
<div className="flex hm-btn-main flex-wrap items-center gap-[15px]">
  <div onClick={()=>route.push('/questions')} className="hm-btn-ctn">
    <button className="btn1 main-f fontcl ">Explore Questions</button>
  </div>
  <div onClick={()=>route.push('/category')} className="hm-btn-ctn">
    <button className="btn2 mega-trans main-f fontcl ">Explore Categories</button>
  </div>
</div>
        </div>
        <div className="hm-hero-layout "></div>
      </div>
      <div className="hm-form-ctn bg-ter">
<form ref={emailMessageRef} onSubmit={HandleSubmit} className="hm-form">
<div className="hm-inp-ctn">
<input name='message' placeholder='Share question' type="text" className="inp main-f fontcl text-[14px]" />
</div>
  <div className="hm-btn-ctn">
    <button className="btn1">{isMessaged == true ? ' Shared' : 'Share Now' }</button>
  </div>
</form>
<div className="hm-form-title main-f fontcl">If you have question to ask, feel free to share us.</div>
      </div>
    <div className="hm-cate-ctn bar">
    <div className="qt-title main-f ">Leatest Categories</div>
      <div className="cat-ctn">
{
  categoryData.map((data,index: number) => {
    if(index <= 3){
      return(
        <Category title={data.name} questions_count={data.questions.length} link_path={data.type}  key={index}/>
      )
    }
  })
}
      </div>
    </div>
    <div className="hm-q-ctn bar">
    <div className="qt-title main-f ">Leatest Categories</div>
      <div className="q-ctn">
{
questionData.map((data,index: number) => {
  if(index <= 3){
    return(
      <Question key={index} tag={data.category} id={data.id} link_url={data.category_path} date={data.date} answer={data.answer} question={data.title} />
      )
  }
})
}
   </div>
    </div>
    </div>
  )
}

export default Homepage