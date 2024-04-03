'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { TbZoomCancel } from "react-icons/tb";
import { CiMenuBurger } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import TagX from '@/ELEMENTX/Ui/Tag/TagX'

const Nav = () => {

let [isOpenedSearch,setIsOpenedSearch] = useState(false);
let [isOpenedMenu,setIsOpenedMenu] = useState(false);
let txt = '    Hydration is when using something like table inside div or using client staff inside server in nextjs.To fix this , just be aware of using wrong html tag and placing conditional statement in server client section.';

  return (
    <>
    <div className='nv-main'>
        <div className="nv-ctn">
            <div className="nv-logo-ctn bcu">
                 <img src="/image/logo.png" alt="" className="nv-logo pic" />
                 <div className="nv-logo-txt text-[18px] sys-f fontcl2">WizardRabbit</div>
            </div>
            <div className="nvs-ctn">
                <Link className='nvs fontclH mega-trans sys-f text-[13px] ' href='/' >Home</Link>
                <Link className='nvs fontclH mega-trans sys-f text-[13px] ' href='/questions' >Questions</Link>
                <Link className='nvs fontclH mega-trans sys-f text-[13px] ' href='/category' >Category</Link>
                <CiSearch onClick={()=>setIsOpenedSearch(true)} className={isOpenedSearch == false ? 'bcu nv-srh-icn fontcl' : 'hidden'} />
                <TbZoomCancel onClick={()=>setIsOpenedSearch(false)} className={isOpenedSearch == true ? 'bcu nv-srh-icn fontcl' : 'hidden'} />
                <CiMenuBurger onClick={()=>setIsOpenedMenu(true)} className={'bcu nv-srh-icn fontcl' } />
            </div>
            
            <div className="nv-srh">
                <input placeholder='Search ' type="text" className="inp main-f text-[14px]" />
            </div>
        </div>
    <div className="nvmb-srh-ctn">
    <div className={`${isOpenedSearch == true ? "nvmb-srh" : 'hidden'}`}>
        <input placeholder='Search ' type="text" className="inp main-f text-[14px]" />
        </div>
    </div>
    <div className="nv-srh-res-main">
    <div className="nv-srh-res-ctn">
        <div className="nv-res bg-ter mega-trans bcu">
<TagX text='JavaScript'/>
<div className="nv-title main-f">
    What is hydration and how to fix that error?
</div>
<div className="nv-ans main-f fontcl3">
    {
        txt.length > 90 ? txt.substring(0,90) + '...See More' : txt
    }
</div>
        </div>
    
        </div>
    </div>
    </div>
    <div className={isOpenedMenu == true ? "nvs-ctn-mb mega-trans top-0" : "nvs-ctn-mb mega-trans top-[-100%]"}>
    <Link className={ 'nvs-mb fontclH mega-trans sys-f text-[13px] '} href='/' >Home</Link>
                <Link className='nvs-mb fontclH mega-trans sys-f text-[13px] ' href='/questions' >Questions</Link>
                <Link className='nvs-mb fontclH mega-trans sys-f text-[13px] ' href='/category' >Category</Link>
                <FaPlus onClick={()=>setIsOpenedMenu(false)} className={'transform rotate-[45deg] bcu nv-cancel-icn fontcl' } />
          
            </div>
 
    </>
  )
}

export default Nav
