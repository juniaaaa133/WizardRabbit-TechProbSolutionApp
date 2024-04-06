'use client'
import Link from 'next/link'
import React, { ChangeEvent, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { TbZoomCancel } from "react-icons/tb";
import { CiMenuBurger } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import TagX from '@/ELEMENTX/Ui/Tag/TagX'
import { dummy_data } from '@/data';
import { DummyQuestionType } from '@/types/dummy_types';

const Nav = () => {

let [isOpenedSearch,setIsOpenedSearch] = useState(false);
let [isOpenedMenu,setIsOpenedMenu] = useState(false);
let [questionData,setQuestionData] = useState<DummyQuestionType[]>();

//Data are fetched from api in real time.
let FetchData = () => {
//api code instead of dummy_data;
}

let FilterData = (e : ChangeEvent<HTMLInputElement>) => {
  if(e.currentTarget.value == '') {
    setQuestionData([]);
  }else {
    let filteredData = dummy_data.questions.filter((data) => (
        data.title.toLocaleLowerCase().includes(e.currentTarget.value.toLocaleLowerCase())
    ));
setQuestionData(filteredData);
  }
}

let RemoveSearchedString = () => {
    setQuestionData([]);
}

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
                <input onChange={(e) => FilterData(e)} placeholder='Search ' type="text" className="inp main-f text-[14px]" />
            </div>
        </div>
    <div className="nvmb-srh-ctn">
    <div className={`${isOpenedSearch == true ? "nvmb-srh" : 'hidden'}`}>
        <input onChange={(e) => FilterData(e)} placeholder='Search ' type="text" className="inp main-f text-[14px]" />
        </div>
    </div>
    <div className="nv-srh-res-main">
    <div className={questionData?.length == 0 || questionData == undefined ? "nv-srh-res-ctn-closed" : "nv-srh-res-ctn"}>
       {
        questionData?.map((data,index: number) => (
            <Link onClick={RemoveSearchedString} href={`/questions/${data.category_path}/${data.id}`} key={index} className="nv-res bg-ter mega-trans bcu">
            <TagX text='JavaScript'/>
            <div className="nv-title main-f">
                {
                 data.title.length > 60 ? data.title.substring(0,60) + '...' : data.title
                }
                </div>
            <div className="nv-ans main-f fontcl3">
                {
                    data.answer.length > 90 ? data.answer.substring(0,90) + '...See More' : data.answer
                }
            </div>
                    </Link>
        ))
       }
    
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
