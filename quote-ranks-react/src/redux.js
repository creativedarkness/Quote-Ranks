import { createStore } from 'redux';

export const addNewAuthor = (author) => ({
    type: 'ADD_NEW_AUTHOR',
    author,
})
export const addNewQuote = (quote, authorId) => ({
    type: 'ADD_NEW_QUOTE',
    quote,
    authorId,
})
export const selectAuthorbyId = (author, selectedAuthorId) => ({
    type: 'SELECT_AUTHOR_BY_ID',
    author,
    selectedAuthorId,
})
export const selectQutoesById = (quotes, author) => ({
    type: 'SELECT_QUOTES_BY_ID',
    quotes,
    author,
})
export const updateAuthor = (author,) => ({
    type: 'UPDATE_AUTHOR',
    author,
})
export const upVoteQuote = (quoteId) => ({
    type: "UP_VOTE_QUOTE",
    quoteId,
})
export const downVoteQuote = (quoteId) => ({
    type: 'DOWN_VOTE_QUOTE',
    quoteId,
})

export const reducers = (state = initialState, action) => {
    // console.log("in reducer");
    switch (action.type) {
        case 'ADD_NEW_AUTHOR':
        // console.log("ADD_NEW_AUTHOR - action.author:", action.author);
        id++;
            return {
                ...state,
                authors: [
                    ...state.authors,
                    {id, name: action.author},
                ]
            }
            case 'ADD_NEW_QUOTE':
            // console.log("ADD_NEW_QUOTE - quote", action.quote);
            // console.log("ADD_NEW_QUOTE - authorId", action.authorId);
            
            quoteId++;
                return {
                    ...state,
                    quotes : [
                        ...state.quotes,
                        { quoteId, authorId: action.authorId, quote: action.quote, votes: 0 },
                    ]
                }

        case 'SELECT_AUTHOR_BY_ID':
            // console.log("select-author-by-id action.selectedAuthorId", action.selectedAuthorId);
            let selectedAuthorTemp;
            state.authors.map(author => {
                if (author.id === action.selectedAuthorId) {
                    // console.log("ID found", author);
                    selectedAuthorTemp = author;
                }
                return author
            })
            return {
                ...state,
                selectedAuthor: selectedAuthorTemp,
            }

        case 'SELECT_QUOTES_BY_ID':
            // console.log("select-quotes-by-id quotes", action.quotes);
            // console.log("select-quotes-by-id author", action.author);
            let selectedQuoteTemp = [];
            state.quotes.map(quote => {
                if (quote.authorId === action.author.id) {
                    // console.log("ID found", quote);
                    selectedQuoteTemp.push({...quote})
                }
                return quote
            })
            return {
                ...state,
                selectedQutoes: selectedQuoteTemp,
                selectedAuthor: action.author,
            }

        case 'UPDATE_AUTHOR':
            console.log("UPDATE_AUTHOR action", action.author);
            console.log("UPDATE_AUTHOR action.id", action.author.id);
            return {
                ...state,
                authors: state.authors.map(author => {
                    console.log("map", author)
                    if (author.id === action.author.id) {
                        console.log("ID found", action.author)
                        return {
                            ...author,
                            id: action.author.id,
                            name: action.author.author,
                        }
                    }
                        return author
                })
            }

        case 'UP_VOTE_QUOTE':
            console.log('UP_VOTE_QUOTE - action.quoteId', quoteId);
            return state
            

        default:
            return state
    }
}

//set Initial state and creat the store
let id=3;
let quoteId=6;

const initialState = {
    authors: [
        { id: 1, name: 'Edgar Allen Poe' },
        { id: 2, name: 'William Shakespear' },
        { id: 3, name: 'Laurell K Hamilton' },
    ],
    quotes: [
        { quoteId: 1, authorId: 1, quote: 'Nevermore', votes: 0 },
        { quoteId: 2, authorId: 1, quote: 'Elenore', votes: 0 },
        { quoteId: 3, authorId: 2, quote: 'To be or not to be', votes: 0 },
        { quoteId: 4, authorId: 2, quote: 'Where art thou, Romeo', votes: 0 },
        { quoteId: 5, authorId: 2, quote: 'Double, double toil and trouble', votes: 0 },
        { quoteId: 6, authorId: 3, quote: 'Ignoance is bliss', votes: 0 }
    ],
    selectedAuthor: null,
    selectedQutoes: [],
}
export function configureStore(initialState = initialState) {
    { }
    const store = createStore(reducers, initialState);
    return store;
}
export const store = configureStore();

