import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";

export const signUp = async (email, password) => {
  const auth = getAuth();

  const credentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  sendEmailVerification(auth.currentUser);

  return credentials;
};

export const signIn = async (email, password) => {
  const auth = getAuth();
  const credentials = await signInWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  return credentials;
};

export const signOut = async () => {
  const auth = getAuth();
  const response = await auth.signOut();
  return response;
};

export const user = async () => {
  const auth = getAuth();
  const firebaseUser = useFirebaseUser();

  firebaseUser.value = auth.currentUser;

  onAuthStateChanged(auth, (user) => {
    firebaseUser.value = user;
    if (!firebaseUser.value?.uid) {
      return navigateTo("/");
    }
  });
};
