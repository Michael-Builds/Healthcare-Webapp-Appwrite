import * as sdk from "node-appwrite"

export const {
    PROJECT_ID,
    API_KEY,
    DATABASE_ID,
    PATIENT_COLLECTION_ID,
    DOCTOR_COLLECTION_ID,
    APPOINTMENT_COLLECTION_ID,
    BUCKET_ID,
    ENDPOINT
} = process.env

const client = new sdk.Client()

client
    .setEndpoint(ENDPOINT!)
    .setProject(PROJECT_ID!)
    .setKey(API_KEY!)

export const databases = new sdk.Databases(client)
export const storages = new sdk.Storage(client)
export const users = new sdk.Users(client)
export const messaging = new sdk.Messaging(client)