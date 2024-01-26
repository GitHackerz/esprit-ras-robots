'use server'

import { z } from 'zod'
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()

console.log(process.env.SERVER_URL)

const optionalTextInput = schema =>
    z
        .union([z.string(), z.undefined()])
        .refine(val => !val || schema.safeParse(val).success)

const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    challenge: z.string().min(1, 'Challenge is required'),
    establishment: z.string().min(1, 'Establishment is required'),
    club: z.string().min(1, 'Club is required'),
    'team1.email': z.string().email('Invalid email address'),
    'team1.name': z.string().min(1, 'Name is required'),
    'team1.phone': z.string().min(1, 'Phone is required'),
    'team2.email': optionalTextInput(z.string().email('Invalid email address')),
    'team2.name': z.string().optional(),
    'team2.phone': z.string().optional(),
    'team3.email': optionalTextInput(z.string().email('Invalid email address')),
    'team3.name': z.string().optional(),
    'team3.phone': z.string().optional()
})

const resetForm = formData => {
    for (const pair of formData.entries()) {
        formData.delete(pair[0])
    }
}

const contactSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    phone: z.string().min(1, 'Phone is required'),
    email: z.string().email('Invalid email address'),
    subject: z.string().min(1, 'Subject is required'),
    message: z.string().min(1, 'Message is required')
})

export async function createTeam(prevState, formData) {
    const parsedData = schema.safeParse({
        name: formData.get('name'),
        challenge: formData.get('challenge'),
        establishment: formData.get('establishment'),
        club: formData.get('club'),
        'team1.email': formData.get('team1.email'),
        'team1.name': formData.get('team1.name'),
        'team1.phone': formData.get('team1.phone'),
        'team2.email': formData.get('team2.email'),
        'team2.name': formData.get('team2.name'),
        'team2.phone': formData.get('team2.phone'),
        'team3.email': formData.get('team3.email'),
        'team3.name': formData.get('team3.name'),
        'team3.phone': formData.get('team3.phone')
    })
    if (!parsedData.success) {
        const fieldErrors = parsedData.error.flatten().fieldErrors

        const teamErrors = {}
        for (const fieldName in fieldErrors) {
            if (fieldErrors[fieldName].length > 1) {
                teamErrors[fieldName] = fieldErrors[fieldName]
            } else {
                teamErrors[fieldName] = fieldErrors[fieldName][0]
            }
        }

        return {
            errors: teamErrors
        }
    }
    const data = {
        ...parsedData.data,
        teams: []
    }

    if (parsedData.data['team1.email']) {
        data.teams.push({
            email: parsedData.data['team1.email'],
            name: parsedData.data['team1.name'],
            phone: parsedData.data['team1.phone']
        })
    }
    if (parsedData.data['team2.email']) {
        data.teams.push({
            email: parsedData.data['team2.email'],
            name: parsedData.data['team2.name'],
            phone: parsedData.data['team2.phone']
        })
    }
    if (parsedData.data['team3.email']) {
        data.teams.push({
            email: parsedData.data['team3.email'],
            name: parsedData.data['team3.name'],
            phone: parsedData.data['team3.phone']
        })
    }

    for (let i = 1; i <= 3; i++) {
        delete data[`team${i}.email`]
        delete data[`team${i}.name`]
        delete data[`team${i}.phone`]
    }

    try {
        await axios.post(`${process.env.SERVER_URL}/api/teams`, {
            ...data,
            email: data.teams[0].email
        })
        resetForm(formData)

        return {
            message: 'Team created successfully',
            success: true
        }
    } catch (err) {
        console.log(err)
        return {
            success: false,
            error: "Couldn't create team"
        }
    }
}

export async function sendMail(prevState, formData) {
    const parsedData = contactSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        phone: formData.get('phone')
    })

    if (!parsedData.success) {
        const fieldErrors = parsedData.error.flatten().fieldErrors

        const teamErrors = {}
        for (const fieldName in fieldErrors) {
            if (fieldErrors[fieldName].length > 1) {
                teamErrors[fieldName] = fieldErrors[fieldName]
            } else {
                teamErrors[fieldName] = fieldErrors[fieldName][0]
            }
        }

        return {
            errors: teamErrors
        }
    }

    const data = parsedData.data

    try {
        await axios.post(`${process.env.SERVER_URL}/api/users/contact`, {
            ...data
        })
        resetForm(formData)
        return {
            success: true
        }
    } catch (err) {
        console.log(err)
    }
}
