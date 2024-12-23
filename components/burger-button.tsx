'use client'
import {useState} from "react";
import {cn} from "@/lib/utils";

export default function BurgerButton() {
    const [opened, setOpened] = useState(false);


    return (
        <div className={cn(`tham tham-e-squeeze tham-w-6`, { 'tham-active': opened })} onClick={() => setOpened(!opened)}>
            <div className="tham-box">
                <div className="tham-inner" />
            </div>
        </div>
    );
}