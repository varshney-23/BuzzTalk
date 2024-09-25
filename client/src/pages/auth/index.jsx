import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import smiley from '@/assets/smiley.jpeg';
import background from '@/assets/background.jpeg';
import { toast } from 'sonner';

const Auth = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setconfirmPass] = useState("");

    const validateSignup = ()=>{
        if (!email.length) {
            toast.error("Email is Required", {
                position: "top-right",  // Set the position to top-right
            });
            return false;
            }
            return true;
        };

    const handleLogin = async () =>{

    }
    const handleSignUp = async () =>{
        if(validateSignup()){
            alert("Registeration is Successful");
        }
    }

  return (
    <div className='h-[100vh] w-[100vw] flex items-center justify-center bg-cover bg-center relative' style={{ backgroundImage: `url(${background})` }}>
        <div className='h-[80vh] bg-white border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2' >
            <div className='flex flex-col gap-10 items-center justify-center'>
                <div className='flex items-center justify-center flex-col'>
                    <div className='flex items-center justify-center'>
                        <h1 className='text-5xl font-bold md:text-6xl'>
                            Welcome!!       
                        </h1>
                        <img src = {smiley} className='h-[58px]' />
                    </div>
                    <p className='font-medium text-center'>
                        Let's get started with BUZZTALK!!
                    </p>
                </div>
                <div className='flex items-center justify-center w-full' >
                    <Tabs className='w-3/4'>
                        <TabsList className='bg-transparent rounded-none w-full'>
                            <TabsTrigger value='login' className='data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-green-500 p-3 transition-all duration-3'>Login</TabsTrigger>
                            <TabsTrigger value='signup' className='data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-green-500 p-3 transition-all duration-3'>Sign Up</TabsTrigger>
                        </TabsList>
                        <TabsContent value='login' className='flex flex-col gap-5 mt-5'>
                            <Input 
                                placeholder="Email" 
                                type="email" 
                                className="rounded-full p-6" 
                                value={email} 
                                onChange = {(e) => setEmail(e.target.value)} 
                            />
                            <Input 
                                placeholder="Password" 
                                type="password" 
                                className="rounded-full p-6" 
                                value={password} 
                                onChange = {(e) => setPassword(e.target.value)} 
                            />
                            <Button className='rounded-full p-6' onClick={handleLogin}>Login</Button>
                        </TabsContent>
                        <TabsContent  value='signup' className='flex flex-col gap-5 mt-5'>
                            <Input 
                                placeholder="Email" 
                                type="email" 
                                className="rounded-full p-6" 
                                value={email} 
                                onChange = {(e) => setEmail(e.target.value)} 
                            />
                            <Input 
                                placeholder="Password" 
                                type="password" 
                                className="rounded-full p-6" 
                                value={password} 
                                onChange = {(e) => setPassword(e.target.value)} 
                            />
                            <Input 
                                placeholder="Confirm Password" 
                                type="password" 
                                className="rounded-full p-6" 
                                value={confirmPass} 
                                onChange = {(e) => setconfirmPass(e.target.value)} 
                            />
                            <Button className='rounded-full p-6' onClick={handleSignUp}>Sign Up</Button>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
            <div className="hidden xl:flex justify-center items-center">
                <img src={background} className='h-[540px]'/>
            </div>
        </div>
    </div>
  )
}

export default Auth