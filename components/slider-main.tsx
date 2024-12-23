'use client'
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/carousel";
import Fade from "embla-carousel-fade";

export const SliderMain = () => {
    return (
        <Carousel className="w-full"
                  opts={{loop: true}}
                  plugins={[
            Autoplay({ playOnInit: true, stopOnMouseEnter: true, delay: 3000 }),
            Fade({active: true}),
        ]}>
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="group">
                            <Card>
                                <CardContent className="flex items-center justify-center relative cursor-pointer aspect-[2/1]">
                                    <img src="/assets/images/main.jpeg"
                                         alt=""
                                         className={'w-full h-full object-cover hover:scale-110 duration-1000'}
                                    />
                                    <span className="absolute top-[50%] text-5xl font-semibold text-white group-hover:opacity-0 -translate-y-[50%]">slide {index + 1}</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
