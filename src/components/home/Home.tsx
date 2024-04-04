'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Homepage = () => {

let route = useRouter();

  return (
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
<form action="POST" className="hm-form">
<div className="hm-inp-ctn">
<input placeholder='Share question' type="text" className="inp main-f fontcl text-[14px]" />
</div>
  <div className="hm-btn-ctn">
    <button className="btn1">Share Now</button>
  </div>
</form>
<div className="hm-form-title main-f fontcl">If you have question to ask, feel free to share us.</div>
      </div>
    </div>
  )
}

export default Homepage