'use server'

import { prisma } from "@/lib/prisma"

export async function saveToNeon(data: {
    name: string
    email: string
    message: string
}) {
    try {
        await prisma.projectRequest.create({
            data,
        })

        return { success: true }
    } catch (error) {
        console.error("Prisma Error:", error)

        return {
            success: false,
            error: "DB error",
        }
    }
}