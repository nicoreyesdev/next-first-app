import {useRouter} from 'next/router';
import Link from 'next/link';
import { FC } from 'react';

const style = {
    color: '#0070f3',
    textDecoration: 'underline'
}

type Props ={
    text: string,
    href: string
}

export const ActiveLink: FC<Props> = ({text, href}) => {
  
    const {asPath} = useRouter(); 
  
    return (
        <Link href={href}>
            <a style={ asPath === href ? style : undefined}>{text}</a>
        </Link> 
  )
}
