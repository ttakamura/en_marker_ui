const Immutable = require('immutable');
const repl      = require('babel-repl');
const sentence  = require('./app/models/sentence');

const session = repl.start({
  prompt: '> ',
  useColor: true,
});

session.context.Immutable = Immutable;
session.context.Map       = Immutable.Map;
session.context.List      = Immutable.List;
session.context.Record    = Immutable.Record;

session.context.Sentence = sentence.Sentence;
session.context.Token    = sentence.Token;
