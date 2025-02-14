//classes/calendar/page.tsx
'use client'
import React from 'react'
import Calendar from '@/components/Calendar'
import MainWrapper from '@/components/MainWarpper'

const ClassesPage: React.FC = () => {
  return (
    <div className='max-md:mt-10'>
      <MainWrapper>
        <div className='flex'>
          <Calendar />
        </div>
      </MainWrapper>
    </div>
  )
}

export default ClassesPage
