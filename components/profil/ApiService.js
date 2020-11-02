import React from 'react';
import {Auth} from '../../Setup';

export const SignUpUser = (email, password) =>{
    return new Promise(function(resolve, reject){
        Auth()
        .createUserWithEmailAndPassword(email, password)
        .then(()=>{
            resolve("Votre compte est créé");
        })
        .catch(error =>{
            reject(error)
        })
    });
};

export const SignInUser = (email, password) =>{
    return new Promise(function(resolve, reject){
        Auth()
        .signInWithEmailAndPassword(email, password)
        .then(()=>{
            resolve("Connexion réussite");
        })
        .catch(error =>{
            reject(error)
        })
    });
};

export const SignOutUser = () =>{
    return new Promise(function(resolve, reject){
        Auth()
        .signOut()
        .then(()=>{
            resolve("Voue êtes deconnecté");
        })
        .catch(error =>{
            reject(error)
        })
    });
};