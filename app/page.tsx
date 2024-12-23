import React from "react";
import Header from "@/components/header";
import {SliderMain} from "@/components/slider-main";
import {PageContainer} from "@/components/page-container";

export default function Home() {
    return (
        <div className={'mt-16'}>
            <Header/>
            <PageContainer>
                <div className={'flex items-center justify-center'}>
                    <SliderMain/>
                </div>
            </PageContainer>
        </div>
    );
}
