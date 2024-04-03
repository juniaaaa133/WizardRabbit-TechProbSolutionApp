import TagX from '@/ELEMENTX/Ui/Tag/TagX'
import Link from 'next/link'
import React from 'react'

const Question = ({tag,question,answer,date,link_url,id} : {
  id: number,
  tag? : string, 
  question : string,
  answer : string,
  date : string,
  link_url? : string
}) => {
  return (
    <Link href={`/questions/${link_url}/${id}`} className='q bg-sec mega-trans'>
        <TagX text={tag} />
        <div className="q-title main-f fontcl">{
        question.length > 60 ? question.substring(0,60) + '...' : question
        }</div>
        <div className="nv-ans main-f fontcl3">
    {
        answer.length > 100 ? answer.substring(0,100) + '...See More' : answer
    }
</div>
<div className="q-date main-f fontcl2 text-[12px]">{date}</div>
    </Link>
  )
}

export default Question