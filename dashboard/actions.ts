'use server'

export async function signin (formData: FormData){
    try{
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/users/login', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body:JSON.stringify({
                email: formData.get('email'),
                password: formData.get('password')
            })
        })
        return {data : await res.json()}
    }
    catch (err)
    {
        return {
            error: 'Internal Server Error'
        }
    }
}