var theBeatlesPlay = function(musicians, instruments) {
  var plays = [];
  for (let i = 0; i < musicians.length; i++) {
    plays = musicians[i] + ' plays ' + instruments[i];
  }
  return plays;
};
