import React from 'react'
import IconSearch from '@/assets/icon-search.svg'
import Image from 'next/image'

type Props = {}

export default function Search({}: Props) {
  return (
    <div className="flex items-center gap-4">
      <Image src={IconSearch} alt="search" />
      <input
        type="text"
        className="bg-transparent outline-none pr-5 text-white placeholder:text-white"
        placeholder="Buscar"
      />
    </div>
  )
}
