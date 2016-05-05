import { Record, Map, List } from 'immutable';

export class Annotation extends Record({ key: null, name: null, checked: false }) {
}

// sj  = 主語
// ssj = 順動詞の主語（I like a book published yeasterday.）
// v   = 動詞
// not = 否定語
// av  = 助動詞（Do, will, must...）
// cp  = 現在分詞（xxing, 原型）
// pp  = 過去分詞（I was killed）
// fp  = 未来分詞 (to help)
//
// 等位接続詞
// s   = センテンス
// con = 接続詞（and, not, but...）
//
// I went first and you went second.
// <s><sj>I</sj> <v>went</v> first</s> <con>and</con> <s><sj>you</sj> <v>went</v> second</s>.
//
// 関係詞 単純型
//  s   = 主節
//  ss  = サブセンテンス
//  rel = 関係詞（which, who...）
//
// This is the book which is selling well now.
// <sj>This</sj> <v>is</v> the book <ss><rel><sj>which</sj></rel> <v>is</v> <cp>selling</cp> well now.</ss>

const AnnotationMap = new Map({
  sj:  new Annotation({ key: 'sj',  checked: false }),
  ssj: new Annotation({ key: 'ssj', checked: false }),
  v:   new Annotation({ key: 'v',   checked: false }),
  not: new Annotation({ key: 'not', checked: false }),
  av:  new Annotation({ key: 'av',  checked: false }),
  cp:  new Annotation({ key: 'cp',  checked: false }),
  pp:  new Annotation({ key: 'pp',  checked: false }),
  fp:  new Annotation({ key: 'fp',  checked: false }),
  s:   new Annotation({ key: 's',   checked: false }),
  con: new Annotation({ key: 'con', checked: false }),
  ss:  new Annotation({ key: 'ss',  checked: false }),
  rel: new Annotation({ key: 'rel', checked: false }),
});

const AnnotationKeysList = new List([
  'sj', 'ssj', 'v', 'not', 'av', 'cp', 'pp', 'fp', 's', 'con', 'ss', 'rel'
].map((k) => AnnotationMap.get(k)));

export { AnnotationMap, AnnotationKeysList };
