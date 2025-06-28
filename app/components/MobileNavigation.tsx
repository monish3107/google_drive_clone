'use client'

import React, { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from '../../components/ui/sheet'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Separator } from '../../components/ui/separator'
import { navItems, avatarPlaceholderUrl } from '../../constants'
import Link from 'next/link'
import { cn } from '../../lib/utils'
import { Button } from '@/components/ui/button'
import FileUploader from './FileUploader'
import { signOutUser } from '../../lib/actions/user.actions'

interface Props {
  $id: string,
  accountId: string,
  fullName: string,
  avatar: string,
  email: string,
}

const MobileNavigation = ({ $id: ownerId, accountId, fullName, avatar, email }: Props) => {
  const [open, setopen] = useState(false)
  const pathName = usePathname()

  return (
    <header className="mobile-header">
      <div className="text-bold font-3xl flex items-center gap-2">
          <Image
            src="/assets/icons/logo-brand.svg"
            alt="Cloudora Logo"
            width={32}
            height={32}
          />
          Cloudora
        </div>
      <Sheet open={open} onOpenChange={setopen}>
        <SheetTrigger asChild>
          <button className="flex items-center justify-center p-2">
            <Image src="/assets/icons/menu.svg" alt="menu" width={30} height={30}/>
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="shad-sheet h-screen px-3 w-[280px]">
            <SheetTitle>
              <div className="header-user">
                <Image
                  src={avatar && avatar.trim() !== '' ? avatar : avatarPlaceholderUrl} 
                  alt="avatar"
                  width={44}
                  height={44}
                  className="header-user-avatar"
                />
                <div className="flex flex-col">
                  <p className="subtitle-2 capitalize">{fullName}</p>
                  <p className="caption">{email}</p>
                </div>
              </div>
              <Separator className="mb-4 bg-light-200/20"/>
            </SheetTitle>

            <nav className="mobile-nav">
              <ul className="mobile-nav-list">
                {navItems.map(({ url, name, icon }) => (
                  <Link key={name} href={url} className="w-full" onClick={() => setopen(false)}>
                    <li
                      className={cn(
                        'mobile-nav-item',
                        pathName === url && 'shad-active'
                      )}
                    >
                      <Image
                        src={icon}
                        alt={name}
                        width={24}
                        height={24}
                        className={cn(
                          'nav-icon',
                          pathName === url && 'nav-icon-active'
                        )}
                      />
                      <p>{name}</p>
                    </li>
                  </Link>
                ))}
              </ul>
            </nav>

            <Separator className="my-5 bg-light-200/20" />
            <div className="flex flex-col justify-between gap-5 pb-5">
              <FileUploader ownerId={ownerId} accountId={accountId}/>
              <Button
                type='button'
                className='mobile-sign-out-button'
                onClick={async () => await signOutUser()}
              >
                <Image src='/assets/icons/logout.svg' alt='logout' width={24} height={24}/>
                <p>Logout</p>
              </Button>
            </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}

export default MobileNavigation
