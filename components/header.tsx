import React from 'react';

const Header = () => {
    return (
        <header className={"fixed top-0 w-full z-10 bg-white/90 shadow-md flex items-center justify-between h-14 px-10"}>
            <div className={"flex items-center justify-center"}>
                <img src="/assets/images/logo.png" alt="eksekon" className={'w-48'}/>
            </div>
            <div>
                Menu
            </div>
            <div>
                Contacts
            </div>

        </header>
    );
};

export default Header;