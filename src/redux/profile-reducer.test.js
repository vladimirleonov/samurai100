//1. data
//2. action
//3. expectation

import profileReducer, {addPostActionCreator, deletePostActionCreator, setStatusActionCreator} from "./profile-reducer";

test('length of the postsData should be incremented', () => {

    let state = {
        postsData: [
            { id: "1", text: 'fsreggx fgh fhgfhf', likeCount: '12'},
            { id: "2", text: 'gjgjgh fhg', likeCount: '9'},
            { id: "3", text: 'qwerty', likeCount: '11'}
        ]
    }

    const addPost = addPostActionCreator('it');

    const newState = profileReducer(state, addPost);
    expect(newState.postsData.length).toBe(4);
})

test('postsData value should be written by me', () => {
    let state = {
        postsData: [
            { id: "1", text: 'fsreggx fgh fhgfhf', likeCount: '12'},
            { id: "2", text: 'gjgjgh fhg', likeCount: '9'},
            { id: "3", text: 'qwerty', likeCount: '11'}
        ]
    }

    const addPost = addPostActionCreator('it');

    const newState = profileReducer(state, addPost)

    expect(newState.postsData[3].text).toBe('it');

})

test('length should be decremented', () => {
    let state = {
        postsData: [
            { id: "1", text: 'fsreggx fgh fhgfhf', likeCount: '12'},
            { id: "2", text: 'gjgjgh fhg', likeCount: '9'},
            { id: "3", text: 'qwerty', likeCount: '11'}
        ]
    }

    const deletePost = deletePostActionCreator(2);

    const newState = profileReducer(state, deletePost);

    expect(newState.postsData.length).toBe(2);
})

test('length shouldnt be changed', () => {
    const state = {
        postsData: [
            { id: "1", text: 'fsreggx fgh fhgfhf', likeCount: '12'},
            { id: "2", text: 'gjgjgh fhg', likeCount: '9'},
            { id: "3", text: 'qwerty', likeCount: '11'}
        ]
    }

    const deletePost = deletePostActionCreator(111);

    const newState = profileReducer(state, deletePost);

    expect(newState.postsData.length).toBe(3);
})

test('status should be written by me', () => {
    const state = {
        state: ''
    }

    const setStatus = setStatusActionCreator('my status');

    const newState = profileReducer(state, setStatus);

    expect(newState.status).toBe("my status");
})