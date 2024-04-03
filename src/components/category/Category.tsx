import Link from 'next/link'
import React from 'react'

const Category = ({title,questions_count,link_path} : {
  title : string,
  questions_count : number,
  link_path : string,
}) => {
  return (
    <Link href={`/questions/${link_path}`} className='cate-main bg-sec mega-trans '>
        <div className="cate-title main-f fontcl2 ">{title}</div>
        <div className="cate-desc fontcl3 main-f">{questions_count} Questions</div>
    </Link>
  )
}

export default Category