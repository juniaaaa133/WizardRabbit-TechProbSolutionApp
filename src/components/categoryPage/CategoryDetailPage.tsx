'use client'
import React, { useEffect, useState } from 'react'
import Question from '../question/Question';
import { dummy_data } from '@/data';
import { DummyCategoryType } from '@/types/dummy_types';

const CategoryDetailPage = ({id} : {
  id :string,
}) => 
{

  let [category,setCategory] = useState<DummyCategoryType>()

//To fetch api in real time.
let FetchData = () => {
  let filteredData = dummy_data.categories.filter((data) => (
    data.type == id 
  ))[0];
  setCategory(filteredData);
}

useEffect(()=>{
  FetchData();
},[])

  return (
category == undefined ? 
<div>Loading....</div>
: 
<div className='qt-main'>
<div className="qt-title main-f ">{category.name} Questions</div>
<div className="q-ctn">
{
  category.questions.map((data,index: number) => (
    <Question key={index} id={data.id} date={data.date} link_url={data.category_path} tag={category?.name} answer={data.answer} question={data.title} />
  ) )
}
</div>
</div>
  )
}

export default CategoryDetailPage