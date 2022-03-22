const state = {
    profilePage: {
        postsData: [
            { id: 1, message: 'Hello World!!', likeCount: '2' },
            { id: 2, message: 'My name is Stas', likeCount: '3' },
            { id: 3, message: 'I like React', likeCount: '4' },
            { id: 4, message: 'I also like Node.js', likeCount: '5' },
            { id: 5, message: 'the end', likeCount: '6' },
        ],
    },

    messagesPage: {
        dialogData: [
            { id: 1, name: 'Eren' },
            { id: 2, name: 'Mikassa' },
            { id: 3, name: 'Levi' },
            { id: 4, name: 'Ervin' },
            { id: 5, name: 'Rayner' },
        ],
        messagesData: [
            { message: 'Hello!!' },
            { message: 'How are your?' },
            { message: 'Where do you live?' },
            { message: 'Who lives with you?' },
            { message: 'How much does it cost?' },
        ],
    },
};

export default state;
