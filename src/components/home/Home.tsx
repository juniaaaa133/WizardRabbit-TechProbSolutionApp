'use client'
import { HandleEmail } from '@/features/emailjs/sendEmail';
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, useRef, useState } from 'react'

const Homepage = () => {

let route = useRouter();
let emailMessageRef = useRef<HTMLFormElement>(null)
let [isMessaged,setIsMessaged] = useState<boolean>(false);

//Made a function that send submitted data to emailjs using useRef.
let HandleSubmit = (e :ChangeEvent<HTMLFormElement>) => {
  e.preventDefault();
   if(emailMessageRef.current !== null){
    HandleEmail(emailMessageRef.current);
    setIsMessaged(true);
   }
}

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
    </div>
  )
}

export default Homepage