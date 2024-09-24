import AuthModal from '@/components/shared/auth/auth-modal'
import React from 'react'

const SignInPageModal = () => {
  return (
    <AuthModal
      isModal={true}
      pageType='sign-in'
      subtitle='Welcome back! Please sign in to continue'
      title='Sign in to GetJob.com'
    />
  )
}

export default SignInPageModal