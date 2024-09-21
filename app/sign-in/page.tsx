import AuthModal from '@/components/shared/auth/auth-modal'
import React from 'react'

const SignInPage = () => {
  return (
    <AuthModal
      isModal={false}
      pageType='sign-in'
      subtitle='Welcome back! Please sign in to continue'
      title='Sign in to GetJob.com'
    />
  )
}

export default SignInPage