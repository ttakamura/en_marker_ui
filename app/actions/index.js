export function initApp(message) {
  return {
    type: 'INIT_APP',
    message,
  };
}

export function changeOriginalText(newText) {
  return {
    type: 'UPDATE_ORIGINAL',
    text: newText,
  };
}

export function addAnnotation(annot, token) {
  return {
    type: 'ADD_ANNOTATION',
    annot_key: annot.key,
    token_id: token.id,
  };
}

export function removeAnnotation(annot, token) {
  return {
    type: 'REMOVE_ANNOTATION',
    annot_key: annot.key,
    token_id: token.id,
  };
}

export function exportToFile(sentence) {

}
