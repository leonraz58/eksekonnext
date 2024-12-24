import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import {ComponentPropsWithoutRef} from "react";
import * as React from "react";
import {Menu} from "@/components/ui/menu";

type Props = ComponentPropsWithoutRef<typeof Sheet>

export function Sidebar({...props}:Props) {
    return (
        <>
            <Sheet {...props}>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Title</SheetTitle>
                        <SheetDescription>
                            Description
                        </SheetDescription>
                    </SheetHeader>
                    <div className="w-full h-full flex items-center justify-center">
                        <Menu variant={'mobile'}/>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
}
