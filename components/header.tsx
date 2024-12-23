import React from 'react';
import {PageContainer} from "@/components/page-container";

const Header = () => {
    return (
        <header
            className={"fixed top-0 w-full z-10 bg-white/90 shadow-md h-14"}>
            <PageContainer className={'flex items-center justify-between h-full'}>
                <div className={"flex items-center justify-center"}>
                    <img src="/assets/images/logo.png" alt="eksekon" className={'w-48'}/>
                </div>
                <div>
                    Menu
                </div>
                <div>
                    Contacts
                </div>
            </PageContainer>
        </header>
    );
};

export default Header;