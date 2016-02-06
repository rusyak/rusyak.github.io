$(function(){

  'use strict';

// test is our object
var test = [
{
  title: 'How to write an IF statement in JavaScript?',
  points: 1,
  answers: [{
    answer: 'if (i == 5)',
    right: true
  },
  {
    answer: 'if i = 5 then',
    right: false
  },
  {
    answer: 'if i == 5 then',
    right: false
  }]
},
{
  title: 'How do you round the number 7.25, to the nearest integer?',
  points: 1,
  answers: [{
    answer: 'round(7.25)',
    right: false
  },
  {
    answer: 'rnd(7.25)',
    right: false
  },
  {
    answer: 'Math.round(7.25)',
    right: true
  }]
},
{
  title: 'How do you declare a JavaScript variable?',
  points: 1,
  answers: [{
    answer: 'v carName',
    right: false
  },
  {
    answer: 'var carName',
    right: true
  },
  {
    answer: 'variable carName',
    right: false
  }]
},
{
  title: 'What will the following code return: Boolean(10 > 9)',
  points: 1,
  answers: [{
    answer: 'NaN',
    right: false
  },
  {
    answer: 'true',
    right: true
  },
  {
    answer: 'false',
    right: false
  }]
}
];

// sending object to local storage
var localTest = JSON.stringify( test );
localStorage.setItem( "test", localTest );

// and retrieving it
var recievedTest = localStorage.getItem( "test" );
var readyTest = JSON.parse( recievedTest );

// preparing template
var $html = $( '#template' ).html();
var content = tmpl($html, {
  data: readyTest
});

// inserting template into DOM
$( '#formId' ).prepend( content );

// test check section
var $inputs = $('input:checkbox');
$inputs.on( 'click', function() {
  $(this).parent().siblings().children().each(function(){
    if ( $(this).attr('disabled') ) {
      $(this).attr('disabled', false);
    } else {
      $(this).attr('disabled', true);
    }
  });
});

var checkResults = function(e) {
  e.preventDefault();
  var rightAnswers = [];
  var getRightAnswers = function() {
    for ( var i = 0; i < readyTest.length; i++ ) {
      var testAnswers = readyTest[i].answers;
      for (var j = 0; j < testAnswers.length; j++) {
        var currentAnswer = readyTest[i].answers[j].right;
        rightAnswers.push(currentAnswer);
      }
    }
  };

  var givenAnswers = [];
  var getGivenAnswers = function() {
    $inputs.each(function () {
      if ( $(this).prop('checked') ) {
        givenAnswers.push(true);
      } else {
        givenAnswers.push(false);
      }
    });
  };

  var answered = 0;
  var check = function () {
    for (var i = 0; i < rightAnswers.length; i++) {
      if ( rightAnswers[i] === true ) {
        if ( rightAnswers[i] === givenAnswers[i] ) {
          answered++;
        }
      }
    }
  };

  var questionsQuantity = 0;
  var sumQuestions = function () {
    for (var i = 0; i < readyTest.length; i++) {
      questionsQuantity++;
    }
  };

  var passed = 0;
  var testOK= false;
  var testPassed = function () {
    passed = answered /questionsQuantity;
    if ( passed > 0.5 ) {
      testOK = true;
    }
  };

  getRightAnswers();
  console.log('rightAnswers = ', rightAnswers);

  getGivenAnswers();
  console.log('givenAnswers = ', givenAnswers);

  check();
  console.log('answered = ', answered);

  sumQuestions();

  testPassed();
  console.log('passed = ', passed);

  console.log('testOK = ', testOK);


// building modal with test results
  var $modal;
  var $body = $( 'body' );
  if ( testOK ){
    $modal = ('<div class="mymodal"><div class="mymodal-inner"><h1 class="text-center">You passed the test!</h1><h1 class="text-center">Right is '+
     answered +', from '+ questionsQuantity +'</h1><p class="text-center"><img src="icon-good.png"></p><a class="center-block btn btn-primary" id="exit">Exit</a></div></div>');
  } else {
    $modal = ('<div class="mymodal"><div class="mymodal-inner"><h1 class="text-center">You didn\'t pass the test!</h1><h1 class="text-center">Right is '+
     answered +', from '+ questionsQuantity +'</h1><p class="text-center"><img src="icon-bad.png"></p><a class="center-block btn btn-primary" id="exit">Exit</a></div></div>');
  }

  $body.append($modal);
  var $exit = $( '#exit' );
  var reset = function() {
    $inputs.prop( 'checked', false ).prop( 'disabled', false );
    $( '.mymodal' ).remove();
    return false;
  };

  $exit.on( 'click', reset );
};

$( '#check-results' ).on( 'click', checkResults );

});