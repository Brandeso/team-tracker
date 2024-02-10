import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { CollectionReference, DocumentData, Firestore, QuerySnapshot, addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, onSnapshot, updateDoc } from 'firebase/firestore';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environments';
import { Match } from '../interfaces/match';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {
  db: Firestore;
  matchesCol: CollectionReference<DocumentData>;
  private updatedSnapshot = new Subject<QuerySnapshot<DocumentData>>;
  _updatedSnapshot = this.updatedSnapshot.asObservable();

  constructor() {
    initializeApp(environment.firebaseConfig);
    this.db = getFirestore();
    this.matchesCol = collection(this.db, 'matches');

    // Realtime Data
    onSnapshot(this.matchesCol, (snapshot) => {
      this.updatedSnapshot.next(snapshot);
    }, (err) => {
      console.log(err);
    })
  }

  async getMatches(seasonId: string) {
    const snapshot = await getDocs(collection(this.db, 'seasons/' + seasonId + '/matches'));
    return snapshot;
  }

  async addMatch(match: Match) {
    await addDoc(this.matchesCol, match.data)
    return;
  }

  async deleteMatch(docId: string) {
    const docRef = doc(this.db, 'matches', docId);
    await deleteDoc(docRef);
    return;
  }

  async updateMatch(docId: string, match: Match) {
    const docRef = doc(this.db, 'matches', docId);
    await updateDoc(docRef, match.data);
    return;
  }

  async logicalDelete(docId: string) {
    const docRef = doc(this.db, 'matches', docId);
    await updateDoc(docRef, { deleted: true });
    return;
  }

  async getSingleMatch(docId: string) {
  }
}
