import AuthModal from '@/components/shared/auth/auth-modal'
import React from 'react'

const SignUpPage = () => {
  return (
    <AuthModal
      isModal={false}
      pageType='sign-up'
      subtitle='Welcome! Please fill in the details to get started.

'
      title='Create your account '
    />
  )
}

export default SignUpPage