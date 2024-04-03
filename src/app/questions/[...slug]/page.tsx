import CategoryDetailPage from '@/components/categoryPage/CategoryDetailPage'
import QuestionDetailPage from '@/components/questionpage/QuestionDetail'
import React from 'react'

const QuestionCategory = ({params} : {
    params  : {
        slug: string[],
    }
}) => {
  return (
    
    params.slug.length == 1 ? 
    <CategoryDetailPage id={params.slug[0]}/>
    :
    <QuestionDetailPage id={params.slug[1]}/>
  )
}

export default QuestionCategory