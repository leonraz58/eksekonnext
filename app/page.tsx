import React from "react";
import {SliderMain} from "@/components/slider-main";
import {PageContainer} from "@/components/page-container";

export default function Home() {
    return (
        <div>
            <PageContainer>
                <div className={'flex items-center justify-center'}>
                    <SliderMain/>
                </div>
            </PageContainer>
        </div>
    );
}
