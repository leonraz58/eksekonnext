import {PageContainer} from "@/components/page-container";
import * as React from "react";
import {instance} from "@/lib/instance";
import {Item} from "@/lib/types";
import {CardItem} from "@/components/card-item";

export default async function CatalogPage() {

    const { data } = await instance.get<Array<Item>>('/items');


    return (
        <section className={'text-9xl'}>
            <PageContainer>
                <CardItem item={data[0]}/>
            </PageContainer>
        </section>

    );
}
