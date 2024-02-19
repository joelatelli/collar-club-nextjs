import Head from 'next/head'

export default function Register() {
  return (
        <div className="flex">
            <Head>
                <title>Register</title>
                <link rel="icon" href="/favicon.icon" />
            </Head>

            <p className="logo-1">Collar</p>
            <div 
                className="flex flex-col justify-center pl-6"
                style={{ backgroundImage: "url('/images/gold.jpg')" }}
            ></div>
        </div>
    
  );
}
