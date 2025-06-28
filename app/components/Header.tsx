import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Search from './Search'
import FileUploader from './FileUploader'
import { signOutUser } from '@/lib/actions/user.actions'

const Header = ({ userId, accountId }: { userId: string; accountId: string }) => {
  return (
    <header className='header'>
      <div className='header-wrapper'>
        <Search />
      </div>

      <div className='header-wrapper'>
        <FileUploader ownerId={userId} accountId={accountId} />
        <Button onClick={signOutUser} className='sign-out-button'>
          <Image src='/assets/icons/logout.svg' alt='logout' width={24} height={24} />
        </Button>
      </div>
    </header>
  )
}

export default Header
