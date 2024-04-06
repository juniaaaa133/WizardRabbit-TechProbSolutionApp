'use client'
import React, { useEffect, useState } from 'react'
import Category from '../category/Category'
import { dummy_data } from '@/data'
import LoaderS from '@/ELEMENTX/Ui/Loader/LoaderS'
import { DummyCategoryType } from '@/types/dummy_types'

const CategoryPage = () => {

let [dataSet,setDataSet] = useState<DummyCategoryType[]>();

//Fetch api data in real time;
let FetchData = () => {
  //api fetch instead of dummy_data;
  setDataSet(dummy_data.categories)
}

useEffect(()=>{
  FetchData();
},[])

  return (
dataSet == undefined ? 
<LoaderS />
: 
<div className='cat-main mt-[40px]'>
<div className="qt-title main-f ">All Categories</div>
<div className="cat-ctn">
{
dataSet.map((data,index: number) => (
 <Category title={data.name} questions_count={data.questions.length} link_path={data.type}  key={index}/>
))
}

</div>

</div>
  )
}

export default CategoryPage