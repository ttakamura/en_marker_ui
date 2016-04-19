export function initApp(message) {
    return {
        type: 'INIT_APP',
        message: message
    };
}

export function changeOriginalText(newText) {
    return {
        type: 'UPDATE_ORIGINAL',
        text: newText
    };
}
