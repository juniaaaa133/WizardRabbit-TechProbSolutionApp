import React from 'react'
import Category from '../category/Category'
import { dummy_data } from '@/data'

const CategoryPage = () => {
  return (
    <div className='cat-main mt-[40px]'>
       <div className="qt-title main-f ">All Categories</div>
    <div className="cat-ctn">
     {
      dummy_data.categories.map((data,index: number) => (
        <Category title={data.name} questions_count={data.questions.length} link_path={data.type}  key={index}/>
      ))
     }

    </div>
      
    </div>
  )
}

export default CategoryPage