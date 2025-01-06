'use client'
import React from 'react';
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/carousel";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

const CardItem = () => {

    const images = [
        'https://i6.imageban.ru/out/2025/01/06/8a15f0878cb707292385992306be2d86.jpg',
        'https://i6.imageban.ru/out/2025/01/06/2e28e1b1c125c1b57c50128bb0fe9e7a.jpg',
        'https://i8.imageban.ru/out/2025/01/06/c18155a9f499293f532bf759b986162a.jpg',
        'https://i2.imageban.ru/out/2025/01/06/43a90d2ac62297f28619dfed3c7eeec7.jpg'
    ]

    return (
        <div className={'w-1/3 p-2'}>
            <div className={'flex flex-col justify-between h-full w-full p-5 rounded-2xl bg-white shadow'}>
                <Carousel className={'w-full'}>
                    <CarouselContent>
                        {images.map((_, index) => (
                            <CarouselItem key={index}>
                                <Card>
                                    <CardContent className="flex items-center justify-center">
                                        <img src={images[index]} alt="" className={'aspect-square object-cover'}/>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                </Carousel>
                <h3 className={'text-sm md:text-xl font-bold mt-1 mb-1 md:mt-2 md:mb-3'}>Title</h3>
                <p className={'text-xs md:text-base'}>Description</p>
                <div className={'flex flex-col justify-end flex-grow'}>
                    <div className={'text-xs md:text-base mt-1 mb-2 md:mt-3 md:mb-3'}>
                        <span>Price1</span>
                        <span className={'line-through text-gray-400 ml-1'}>Price2</span>
                    </div>
                    <div className={'flex justify-between'}>
                        <Button variant={'outline'}>Подробнее</Button>
                        <Button variant={'default'}>Купить</Button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CardItem;