"use client";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
interface buttonSearch {
  otherClasses: string;
}

const SearchButton = ({ otherClasses }: buttonSearch) => {
  return (
    <button className={`ml-3 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model,setModel]=useState('');
  const router = useRouter()
 
  const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(manufacturer === '' && model===''){
      return alert("Type something in the search bar")
    }
    updateSearchParams(model.toLowerCase(),manufacturer.toLowerCase())
  };

  const updateSearchParams =(model:string,manufacturer:string)=>{
      const searchParams = new URLSearchParams(window.location.search)
      if(model){
        searchParams.set('model',model)
      }
      else{
        searchParams.delete('model')
      }
      // if you erase the data from the input field or set it to an empty string, the model parameter becomes falsy, and the 'model' query parameter will be removed from the URL when the updateSearchParams function is called. 
      if(manufacturer){
        searchParams.set('manufacturer',manufacturer)
      }
      else{
        searchParams.delete('manufacturer')
      }
      const newPathname =  `${window.location.pathname}?${searchParams.toString()}`

      router.push(newPathname)
  }

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className='searchbar__item'>
        <Image
          src='/model-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='car model'
        />
        <input
          type='text'
          name='model'
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder='Polo'
          className='searchbar__input'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />

    </form>
  );
};

export default SearchBar;
/*
// Using window.location.pathname to get the path
const path = window.location.pathname;
console.log(path); // Output: "/products/electronics"

// Using URLSearchParams to get and manipulate query parameters
const searchParams = new URLSearchParams(window.location.search);

// Get individual query parameters
const category = searchParams.get('category');
const brand = searchParams.get('brand');

console.log(category); // Output: "laptops"
console.log(brand);    // Output: "hp"

// Add or update a query parameter
searchParams.set('price', '500');
console.log(searchParams.toString()); // Output: "category=laptops&brand=hp&price=500"

// Remove a query parameter
searchParams.delete('brand');
console.log(searchParams.toString()); // Output: "category=laptops&price=500"


*/