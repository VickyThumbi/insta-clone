import React from 'react'
import Header from "../components/Header"
import {getProviders,signIn as SignIntoProvider} from "next-auth/react";

function signin({providers}) {
  return (
    <>
    {/* <Header/> */}
    {/* <div className='mt-40'> */}
   {Object.values(providers).map((provider)=>(
    <div key={provider.name}>
        <button 
        // className='p-3 bg-blue-500 rounded-lg text-white' 
        onClick={() => SignIntoProvider(provider.id, 
            // { callbackUrl: '/'}
            )}>
            sign In with {provider.name}
        </button>
    </div>
   ))}
   {/* </div> */}
   </>
  );
}
// function signin({ providers }) {
//     const checkProviders = (
//        providers &&
//        providers.length
//     );

//     return (
//         <>
//             {checkProviders && Object.values(providers).map((provider) => (
//                 <div key={provider.name}>
//                     <button onClick={() => SignIntoProvider(provider.id)}>
//                         Sign in with {provider.name}
//                     </button>
//                 </div>
//             ))}
//         </>
//     )
// }

export async function getServerSideProps(){
    const providers= await getProviders();
    

    return{
        props:{
            providers
        },
    };
}
export default signin