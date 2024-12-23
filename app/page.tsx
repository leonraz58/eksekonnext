import React from "react";
import Header from "@/components/header";
import {SliderMain} from "@/components/slider-main";

export default function Home() {
    return (
        <div className={'mt-16'}>
            <Header/>
            <div className={'flex items-center justify-center'}>
                <SliderMain/>
            </div>
        </div>
    );
}
