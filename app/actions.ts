'use server'

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const login = async (formData: FormData) => {

    if (formData.get('email') === '' || formData.get('password') === '') {
        return

    }

    const body = {
        email: formData.get('email'),
        senha: formData.get('password')
    }

    const res = await fetch('http://localhost:3003/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    if (!res.ok) {
        return
    }

    const {token} = await res.json()

    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

    cookies().set('token', token, {
      httpOnly:true,
      expires:expiresAt,
    })

    redirect("/feed")
}

export const signup = async (formData: FormData) => {

    if (formData.get('apelido') === '' || formData.get('email') === '' || formData.get('senha') === '') {
        return

    }

    const body = {
        apelido: formData.get('apelido'), 
        email: formData.get('email'),
        senha: formData.get('senha')
    }

    const res = await fetch('http://localhost:3003/users/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    if (!res.ok) {
        return
    }

    const {token} = await res.json()

    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

    cookies().set('token', token, {
      httpOnly:true,
      expires:expiresAt,
    })

    redirect("/feed")
}

export const createPost = async (formData: FormData) => {

    const token = cookies().get('token')?.value

    if (formData.get('conteudo') === '') {
        return

    }

    console.log(token)
    const body = {
        conteudo: formData.get('conteudo'), 
    }
    
    console.log(body)
    const res = await fetch('http://localhost:3003/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token!
        },
        body: JSON.stringify(body)
    })
    if (!res.ok) {
        return
    }

    redirect('/feed')
}