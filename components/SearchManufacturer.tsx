'use client'
import React, { Fragment, useState } from "react";
import { Combobox } from '@headlessui/react'
import Image from "next/image";
import { Transition } from '@headlessui/react'
import { manufacturers } from "@/constants";

interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}


const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {

const [query,setQuery]=useState('')

const filteredManufacturers =
    query === ''
      ? manufacturers
      : manufacturers.filter((item) => {
          return item.toLowerCase().includes(query.toLowerCase())
        })


  return( 
  <div className="search-manufacturer">
    <Combobox>
        <div className="relative w-full">
        <Combobox.Button className='absolute top-[14px]'>
         <Image src='/car-logo.svg'
         width ={20}
         height={20}
         className="ml-4"
         alt='logo'
         />
        </Combobox.Button>
        <Combobox.Input className='search-manufacturer__input'
        placeholder="Volkswagen"
        displayValue={(manufacturer:string)=>manufacturer}
        onChange={(event)=>setQuery(event.target.value)}
        />
        <Transition
        as={Fragment}
        leave="transition ease-in duration 100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        afterLeave={()=>setQuery('')}
        >
            <Combobox.Options>
               {filteredManufacturers.map((item)=>{
                return(
                        <Combobox.Option
                        key={item}
                        value={item}
                        className={({active})=>`relative search-manufacturer__option ${active ? 'bg-primary-blue text-white':'text-gray-900'}`} >
                            {item}
                            </Combobox.Option>
                )
               })} 
            </Combobox.Options>



           
        </Transition>
        </div>
    </Combobox>
  </div>
  )
};

export default SearchManufacturer;
