import React,{useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import {AiOutlineSearch} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'

import MicIcon from '../assets/mic.svg'
import ImageIcon from '../assets/image.svg'





const SearchInput = () => {

  const [searchQuery, setSearchQuery] = useState("");




  return (
    <div
      className="h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5]
    rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0"
      id="searchBox"
    >
      <AiOutlineSearch size={18} color="#9aa0a6" />
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={(e) => console.log(e.target.value)}
        value={searchQuery}
        autoFocus
        className="grow outline-none text-black/[0.87]"
        type="text"
        placeholder="Search Google or type a URL"
      />

      <div className="flex items-center gap-3">
        {searchQuery && (
          <IoMdClose
            size={24}
            color="#707578"
            className="cursor-pointer"
            onClick={() => setSearchQuery("")}
          />
        )}
        <img className="h-6 w-6 cursor-pointer" src={MicIcon} alt="mic" />
        <img className="h-6 w-6 cursor-pointer" src={ImageIcon} alt="mic" />
      </div>
    </div>
  );
}

export default SearchInput