import {Email, Phone, Whatsapp } from "./icons"

export const Contacts = () => {
    return <div>
        <ul className={'flex items-center justify-center gap-2'}>
            <li className='hover:-translate-y-0.5'><a href="tel:+79869369848"><Phone/></a></li>
            <li className='hover:-translate-y-0.5'><a href="mailto:EKSEKON.RU@YANDEX.RU"><Email/></a></li>
            <li className='hover:-translate-y-0.5'><a
                href="https://wa.me/79869369848?text=%D0%9F%D0%B8%D1%88%D1%83%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20Eksekon.ru"><Whatsapp/></a>
            </li>
        </ul>
    </div>
}