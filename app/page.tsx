import {Button} from "@/components/ui/button";
import React from "react";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className={'mt-16'}>
        <Header/>
      <Button>123</Button>
      <Button variant={'outline'}>123</Button>
      <Button variant={'secondary'}>123</Button>
        {/*<img src="/assets/images/logo.png" alt="123" />*/}
        {/*<Image src="/assets/images/logo.png" alt="123" width={100} height={100} />*/}
    </div>
  );
}
