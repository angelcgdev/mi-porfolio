import React from 'react'

export const SectionTools = ({tools}) => {
  return (
    <div className='gap-2 flex flex-wrap mt-5'>
      {
        tools.map((tool)=><div key={tool} className='py-2 px-3 cursor-pointer rounded-lg bg-slate-100 dark:bg-slate-900'>{tool}</div>)
      }
    </div>
  )
}
