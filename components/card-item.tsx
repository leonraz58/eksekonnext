import React from 'react';
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/carousel";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Item} from "@/lib/types";

type Props = {
    item: Item
}

export const CardItem = ({item}:Props) => {

    return (
        <div className={'w-1/3 p-2'}>
            <div className={'flex flex-col justify-between h-full w-full p-5 rounded-2xl bg-white shadow'}>
                <Carousel className={'w-full'}>
                    <CarouselContent>
                        {item.images.map((image, index) => (
                            <CarouselItem key={index}>
                                <Card>
                                    <CardContent className="flex items-center justify-center">
                                        <img src={image} alt="" className={'aspect-square object-cover'}/>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                </Carousel>
                <h3 className={'text-sm md:text-xl font-bold mt-1 mb-1 md:mt-2 md:mb-3'}>{item.title}</h3>
                <p className={'text-xs md:text-base'}>{item.description}</p>
                <div className={'flex flex-col justify-end flex-grow'}>
                    <div className={'text-xs md:text-base mt-1 mb-2 md:mt-3 md:mb-3'}>
                        <span>{item.currentPrice}</span>
                        <span className={'line-through text-gray-400 ml-1'}>{item.price}</span>
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