import Link from 'next/link'; 
import Image from 'next/image';
import Head from 'next/head';

export default function nextPost(){
    return <> 
        <Head>
            <title> This is the last Post </title>
        </Head>
        This is the next Post <Link href='/posts/first-post'>Back to first Post</Link>
        
        <br/> 

        <Image src='/images/test.jpeg' height={160} width={164} alt='Your Name'></Image>
    </>
}