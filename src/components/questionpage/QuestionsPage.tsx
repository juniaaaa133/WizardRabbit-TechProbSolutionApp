'use client';
import React, { useEffect, useState } from 'react'
import Question from '../question/Question'
import { dummy_data } from '@/data'
import LoaderS from '@/ELEMENTX/Ui/Loader/LoaderS';
import { DummyCategoryType, DummyQuestionType } from '@/types/dummy_types';

const QuestionsPage = () => {

let [dataSet,setDataSet] = useState<DummyQuestionType[]>();

//Fetch api data in real time;
let FetchData = () => {
  //api fetch instead of dummy_data;
  setDataSet(dummy_data.questions)
}

useEffect(()=>{
  FetchData();
},[])


  return (
   dataSet == undefined ? 
   <LoaderS />
   :
   <div className='qt-main'>
   <div className="qt-title main-f ">All Questions</div>
   <div className="q-ctn">
{
dataSet.map((data,index: number) => (
<Question key={index} tag={data.category} id={data.id} link_url={data.category_path} date={data.date} answer={data.answer} question={data.title} />
))
}
   </div>
</div>
  )
}

export default QuestionsPage