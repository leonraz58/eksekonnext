'use client'
import {PageContainer} from "@/components/page-container";
import * as React from "react";
import {CardItem} from "@/components/card-item";
import {useGetItemsQuery} from "@/lib/items-api";


export default function CatalogPage() {

    // const { data } = await instance.get<Array<Item>>('/items');

    const { data, isLoading } = useGetItemsQuery()

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <section className={'text-9xl'}>
            <PageContainer>
                {data && <CardItem item={data[0]}/>}
            </PageContainer>
        </section>

    );
}
