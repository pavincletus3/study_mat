"use server";
import { admindb } from "@/firebase-admin";
import { auth } from "@clerk/nextjs/server";

export async function createNewDocument() {
  auth.protect();
  const { userId, redirectToSignIn } = await auth();
  if (!userId) return redirectToSignIn();
  const { sessionClaims } = await auth();
  //creating document collection in firestore
  const docCollectionRef = admindb.collection("Documents");
  const docRef = await docCollectionRef.add({
    title: "New Tab",
  });
  await admindb
    //creating user collection in firestore
    .collection("users")
    .doc(sessionClaims?.email!)
    //creating room collection in firestore
    .collection("rooms")
    .doc(docRef.id)
    .set({
      userId: sessionClaims?.email!,
      role: "owner",
      createdAt: new Date(),
      roomId: docRef.id,
    });
  return { docId: docRef.id };
}
