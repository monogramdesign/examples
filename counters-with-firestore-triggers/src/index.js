// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
import functions from 'firebase-functions'

// The Firebase Admin SDK to access Firestore.
import admin from 'firebase-admin'
admin.initializeApp()

const db = admin.firestore()

export const incrementResidentsCounterOnCreate = functions.firestore
	.document('/residents/{documentId}')
	.onCreate((residentSnapshot) => {
		const { cityId } = residentSnapshot.data()

		return db.doc(`/cities/${cityId}`).update({
			residentsCounter: admin.firestore.FieldValue.increment(1)
		})
	})

export const decrementResidentsCounterOnDelete = functions.firestore
	.document('/residents/{documentId}')
	.onDelete((residentSnapshot) => {
		const { cityId } = residentSnapshot.data()

		return db.doc(`/cities/${cityId}`).update({
			residentsCounter: admin.firestore.FieldValue.increment(-1)
		})
	})
