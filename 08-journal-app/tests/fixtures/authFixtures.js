export const initialState = {
    status: 'checking', // checking, no-authenticated, authenticated
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
}
export const authenticatedState = {
    status: 'authenticated', // checking, no-authenticated, authenticated
    uid: '123ABC',
    email: 'demo@google.com',
    displayName: 'Demo User',
    photoURL: 'https://demo.jpg',
    errorMessage: null
}
export const notAuthenticatedState = {
    status: 'no-authenticated',  // checking, no-authenticated, authenticated
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
}
export const demoUser = {
    uid: 'ABC123',
    email: 'demo@google.com',
    displayName: 'Demo User',
    photoURL: 'https://demo.jpg',
}