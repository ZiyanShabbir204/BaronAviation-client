import FooterTwo from '@/components/layout/footers/FooterTwo'
import Header9 from '@/components/layout/header/Header9'
import Terms from '@/components/pages/helpCenter/Terms'
import TermsAndConditionContent from '@/components/pages/helpCenter/TermsAndConditionContent'
import TermsAndConditionHero from '@/components/pages/helpCenter/TermsAndConditionHero'
import React from 'react'

const TermConditionPage = () => {
  return (
    <div>
        <Header9/>
        <TermsAndConditionHero/>
        <TermsAndConditionContent/>
        <FooterTwo/>
    </div>
  )
}

export default TermConditionPage