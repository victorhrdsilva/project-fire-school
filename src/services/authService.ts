import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();


async function login (body: {password: string, email: string}) {
    await createUserWithEmailAndPassword(auth, body.email, body.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorCode, errorMessage)
            });
}

export {login}