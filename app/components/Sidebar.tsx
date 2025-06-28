"use client";

import { avatarPlaceholderUrl, navItems } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  fullName: string;
  avatar: string;
  email: string;
}

const Sidebar = ({ fullName, avatar, email }: Props) => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <Link href="/dashboard">
        <div className="text-bold font-3xl flex items-center gap-2">
          <Image
            src="/assets/icons/logo-brand.svg"
            alt="Cloudora Logo"
            width={32}
            height={32}
          />
          Cloudora
        </div>
        {/* <Image src="/assets/icons/logo-full-brand.svg" alt='logo' width={160} height={50} className='hidden h-auto lg:block'/>

      <Image src="/assets/icons/logo-brand.svg" alt='logo' width={52} height={52} className='lg:hidden'></Image> */}
      </Link>

      <nav className="sidebar-nav">
        <ul className="flex flex-1 flex-col gap-6">
          {navItems.map(({ url, name, icon }) => {
            const linkUrl = name === "Dashboard" ? url : `/dashboard${url}`;
            return (
              <Link key={name} href={linkUrl} className="w-full" onClick={() => setopen(false)}>
                <li
                  className={cn(
                    "sidebar-nav-item",
                    pathname === linkUrl && "shad-active"
                  )}
                >
                  <Image
                    src={icon}
                    alt={name}
                    width={24}
                    height={24}
                    className={cn(
                      "nav-icon",
                      pathname === linkUrl && "nav-icon-active"
                    )}
                  />
                  <p className="hidden lg:block">{name}</p>
                </li>
              </Link>
            )
          })}
        </ul>
      </nav>

      {/* <Image src="/assets/images/files-2.png" alt='logo' width={506} height={418} className='w-full'/> */}
      <div className="sidebar-user-info">
        <Image
          src={avatar && avatar.trim() !== '' ? avatar : avatarPlaceholderUrl}
          alt="avatar"
          width={44}
          height={44}
          className="sidebar-user-avatar"
        />

        <div className="hidden lg:block">
          <p className="subtitle-2 capitalize">{fullName} </p>
          <p className="caption">{email} </p>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
