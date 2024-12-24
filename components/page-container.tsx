import React from 'react';
import {cn} from "@/lib/utils";

interface Props {
    className?: string;
}

export const PageContainer: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
    return <div className={cn('mx-auto max-w-[1400px] w-full px-1 sm:px-2 md:px-7', className)}>{children}</div>;
};