import React from 'react'
import Question from '../question/Question'
import { dummy_data } from '@/data'

const QuestionsPage = () => {

  return (
    <div className='qt-main'>
        <div className="qt-title main-f ">All Questions</div>
        <div className="q-ctn">
{
  dummy_data.questions.map((data,index: number) => (
    <Question key={index} tag={data.category} id={data.id} link_url={data.category_path} date={data.date} answer={data.answer} question={data.title} />
  ))
}
        </div>
    </div>
  )
}

export default QuestionsPage