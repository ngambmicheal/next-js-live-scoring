import Link from 'next/link';
import Layout from '../components/layout';

export default function firstPost(){
    return <> 
        <Layout>
            <style jsx>
                {`a{
                    color:red
                }`}
            </style>
            This is the first Page <Link href='/posts/next-post'><a>Click here to continue</a></Link>
        </Layout>
    </>
}