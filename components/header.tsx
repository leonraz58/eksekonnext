'use client'
import React, {useEffect, useState} from 'react';
import {PageContainer} from "@/components/page-container";
import Link from "next/link";
import {Contacts} from "@/components/contacts";
import {Menu} from "@/components/ui/menu";
import BurgerButton from "@/components/burger-button";


export const Header = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 768
    const isMobile = width < breakpoint

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    })

    return (
        <header
            className={"fixed z-10 top-0 w-full bg-white/90 shadow-md h-14"}>
            <PageContainer className={'flex items-center justify-between h-full'}>
                {isMobile && <BurgerButton/>}
                <Link href="/">
                    <div className={"flex items-center justify-center"}>
                        <img src="/assets/images/logo.png" alt="eksekon" className={'w-48'}/>
                    </div>
                </Link>
                {!isMobile && <Menu variant={'desktop'}/>}
                <div>
                    <Contacts/>
                </div>
            </PageContainer>
        </header>
    );
};