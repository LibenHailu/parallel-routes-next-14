export type User = {
    name: string,
    email: string,
    role: string
}

export type Activity = {
    user: string,
    action: string,
    timestamp: string
}