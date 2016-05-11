import { appendLine } from '../exporter';

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

export function addAllAnnotation(annot, tokens) {
  return {
    type: 'ADD_ALL_ANNOTATION',
    annot_key: annot.key,
    token_ids: tokens.map((t) => t.id),
  };
}

export function removeAllAnnotation(annot, tokens) {
  return {
    type: 'REMOVE_ALL_ANNOTATION',
    annot_key: annot.key,
    token_ids: tokens.map((t) => t.id),
  };
}

export function exportToFile(sentence) {
  const text = sentence.toAnnotatedText();
  return (dispatch) => {
    dispatch({
      type: 'START_EXPORT_FILE',
    });
    appendLine(text)
      .then(() => {
        dispatch({
          type: 'SUCCESS_EXPORT_FILE',
        });
      })
      .catch(() => {
        dispatch({
          type: 'ERROR_EXPORT_FILE',
        });
      });
  };
}

export function closeExportedMessage() {
  return {
    type: 'CLOSE_EXPORTED_MESSAGE',
  };
}
