import { Record, Map } from 'immutable';

export class Annotation extends Record({ key: null, name: null }) {
}

const AnnotationMap = new Map({
  sj: new Annotation({ key: 'sj', name: 'subject' }),
   v: new Annotation({ key: 'v',  name: 'verb'    }),
});

export { AnnotationMap };
