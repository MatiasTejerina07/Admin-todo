'use client'
import React from 'react';
import { CiBookmarkCheck } from 'react-icons/ci';
import style from "./SidebarActive.module.css";
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function SidebarItem() {
    const pathName = usePathname();
    console.log(pathName)

    return (
        <ul className="space-y-2 tracking-wide mt-8">

            <li>
                <Link href={'/dashboard'} className={pathName === '/dashboard' ? style['active-link'] : style['disable-link']}>
                    <CiBookmarkCheck size={30} />
                    <span className="-mr-1 font-medium">
                        Dashboard
                    </span>
                </Link>
            </li>
            <li>
                <Link href={'/dashboard/rest-todos'} className={pathName === '/dashboard/rest-todos' ? style['active-link'] : style['disable-link']}>
                    <CiBookmarkCheck size={30} />
                    <span className="group-hover:text-gray-700">
                        Rest Todos
                    </span>
                </Link>
            </li>
            <li>
                <Link href={'/dashboard/server-action'} className={pathName === '/dashboard/server-action' ? style['active-link'] : style['disable-link']}>
                    <CiBookmarkCheck size={30} />
                    <span className="group-hover:text-gray-700">
                        Server Actions
                    </span>
                </Link>
            </li>
        </ul>
    )
}
