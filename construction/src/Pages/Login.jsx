import React from 'react'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
  return (
    <div className='flex'>
        <div className="w-full md:w-1/2 flex-col jusitfy-center 
        items-center p-8 md:p-12">
            <form action="/" className="w-full max-w-md bg-gray-100 p-8 rounded-lg border shadow-sm">
                <div className="flex justify-center mb-6">
                    <h2 className="text-xl font-medium">Rabbit</h2>
                </div>
                <h2 className='text-2xl font-bold text-center mb-6'>
                    Hey there!
                </h2>
            </form>
        </div>
    </div>
  )
}

export default Login
