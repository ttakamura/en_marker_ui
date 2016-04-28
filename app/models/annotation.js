import { Record, Map } from 'immutable';

export class Annotation extends Record({ key: null, name: null, checked: false }) {
}

const AnnotationMap = new Map({
  sj: new Annotation({ key: 'sj', name: 'subject', checked: false }),
  v: new Annotation({ key: 'v',  name: 'verb',    checked: false }),
});

export { AnnotationMap };
