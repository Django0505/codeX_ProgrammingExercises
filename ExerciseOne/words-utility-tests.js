QUnit.test( "test if words are counted correctly", function( assert ) {
  	var wordsUtility = new WordsUtility("ola yeah yoyo");
	assert.equal(wordsUtility.countWords(), 3);
});

QUnit.test( "find the longest word", function( assert ) {
  	var wordsUtility = new WordsUtility("ola yeah yoyoyo yoda");
	assert.equal(wordsUtility.longestWord(), "yoyoyo");
});

QUnit.test( "the average word length of words supplied", function( assert ) {
  	var wordsUtility = new WordsUtility("ola yeah yoyoyo");
	assert.equal(wordsUtility.averageWordLength(), "ola");
});

QUnit.test( "find words with the same length", function( assert ) {

  	var wordsUtility = new WordsUtility("ola yeah yoyoyo yoda");
  	var words = wordsUtility.wordsWithTheSameLength();
});


QUnit.test( "no words with the same length return nothing", function( assert ) {
  	var wordsUtility = new WordsUtility("ola yeah yoyoyo yoda");

  	assert.equal(0, wordsUtility.wordsWithTheSameLength().length);

});

QUnit.test( "find the shortest word", function( assert ) {
  	var wordsUtility = new WordsUtility("ola yeah yoyoyo");
	assert.equal(wordsUtility.shortestWord(), "ola");
});

QUnit.jUnitReport = function(report) {
    console.log(report.xml);
};

//create a test for What letter does the most words start with

//create a test for What letter does the most words end with
 
