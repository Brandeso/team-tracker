import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { CollectionReference, DocumentData, Firestore, QuerySnapshot, addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, onSnapshot, updateDoc } from 'firebase/firestore';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environments';
import { Season } from '../interfaces/season';

@Injectable({
  providedIn: 'root'
})
export class SeasonsService {
  db: Firestore;
  seasonsCol: CollectionReference<DocumentData>;
  private updatedSnapshot = new Subject<QuerySnapshot<DocumentData>>;
  _updatedSnapshot = this.updatedSnapshot.asObservable();

  constructor() {
    initializeApp(environment.firebaseConfig);
    this.db = getFirestore();
    this.seasonsCol = collection(this.db, 'seasons');

    // Realtime Data
    onSnapshot(this.seasonsCol, (snapshot) => {
      this.updatedSnapshot.next(snapshot);
    }, (err) => {
      console.log(err);
    })
  }

  async getSeasons() {
    const snapshot = await getDocs(this.seasonsCol);
    return snapshot;
  }

  async addSeason(season: Season) {
    await addDoc(this.seasonsCol, season.data)
    return;
  }

  async deleteSeason(docId: string) {
    const docRef = doc(this.db, 'seasons', docId);
    await deleteDoc(docRef);
    return;
  }

  async updateSeason(docId: string, season: Season) {
    const docRef = doc(this.db, 'seasons', docId);
    await updateDoc(docRef, season.data);
    return;
  }

  async logicalDelete(docId: string) {
    const docRef = doc(this.db, 'seasons', docId);
    await updateDoc(docRef, { deleted: true });
    return;
  }

  async getSingleSeason(docId: string) {
  }
}
