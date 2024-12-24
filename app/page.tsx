import React from "react";
import {SliderMain} from "@/components/slider-main";
import {PageContainer} from "@/components/page-container";
import {Header} from "@/components/header";

export default function Home() {
    return (
        <div className={'mt-16'}>
            <PageContainer>
                <div className={'flex items-center justify-center'}>
                    <SliderMain/>
                </div>
            </PageContainer>
        </div>
    );
}
