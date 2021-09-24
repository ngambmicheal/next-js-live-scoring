import Link from 'next/link';

export default function firstPost(){
    return <> 
        This is the first Page <Link href='/posts/next-post'><a>Click here to continue</a></Link>
    </>
}