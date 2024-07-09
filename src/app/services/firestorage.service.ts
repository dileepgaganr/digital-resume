import { Injectable, inject } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment'
import { BehaviorSubject, from, Observable, forkJoin } from 'rxjs';
import { getFirestore, collection, getDocs, addDoc, Firestore } from 'firebase/firestore/lite';

const app = initializeApp(environment.firebaseConfig);


@Injectable({
  providedIn: 'root'
})
export class FirestorageService {
  // private firestore: Firestore = inject(Firestore);
  db = getFirestore(app);
  constructor() {
  }


  updateContact(contact) {
    const collectionRef = collection(
      this.db,
      `contact`
    );
    return from(addDoc(collectionRef, { contact }));
  }

}


