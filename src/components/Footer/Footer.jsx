import React from 'react'
import { useThemeHook } from '../../GlobalComponants/ThemeContextProvider'
import styled from"./footer.module.scss"
function Footer() {

  const theme = useThemeHook();
  return (
    <>
                <section className={ theme ?`${styled.credit} fixed-bottom` :`${styled.credit_not} border-top fixed-bottom`}>
            Created by<span className='text-warning'> Abdallah-Hesham</span> 2022 | all rights reserved!
            </section>
    </>
  )
}

export default Footer