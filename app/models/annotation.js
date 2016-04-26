import { Record } from 'immutable';

export class Annotation extends Record({ key: null, name: null }) {
}

const AnnotationMap = {
  sj: new Annotation({ key: 'sj', name: 'subject' }),
   v: new Annotation({ key: 'v',  name: 'verb'    }),
};

export { AnnotationMap };
