import Link from "next/link";
import {cn} from "@/lib/utils";

const items = [
    {
        title: 'Главная',
        href: '/'
    },
    {
        title: 'Каталог',
        href: 'catalog'
    },
    {
        title: 'О нас',
        href: 'about'
    },
]

type Props = {
    variant: 'mobile' | 'desktop'
}

export const Menu = ({variant}: Props) => {
    return <nav >
        <ul className={cn(variant === 'desktop' && 'flex justify-center gap-8', variant === 'mobile' && 'flex flex-col justify-center items-center gap-8')}>
            {items.map((item, i) => {
                return <li key={i}>
                    <Link href={item.href}
                    >
                        {item.title}
                    </Link>
                </li>
            })}
        </ul>
    </nav>
}