app.controller('HomeController', ['$scope', function($scope) {
	
	
	/* THESE ARE YOUR LIST OF MOVIES AND ACCOMPANYING METADATA
	//	
	// 	They are in the following format:
	// 	title (String): the name of the movie
	// 	iscore (Number): the IMDB score
	// 	rating (String): the movie's MPAA rating 
	// 	released (Date): the release date
	// 	country (String): the country of production
	// 	posters (Array): an array of String values with the URL to movie posters
	// 	imdb (String): the URL to the corresponding IMDB website
	// 	website (String): the URL to the corresponding official website
	// 	likes (Number): a fictitious number of user likes
	// 	dislikes (Number): a fictitious number of user dislikes
	// 	posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
	//
	// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THIS LIST
	*/
	$scope.movies = [
    { 
      title:	'The Shawshank Redemption', 
      iscore:	9.3,
      rating:	'R',
      runtime:	142,
      released:	new Date('1994', '10', '14'),
      country:	'USA',
      posters:	['img/shawshank.jpg','img/shawshank2.jpg','img/shawshank3.jpg'],
      imdb:		'http://www.imdb.com/title/tt0111161',
      website:	'https://www.facebook.com/ShawshankRedemptionFilm',
      likes:	1021,
      dislikes:	122,
      posterindex: 0
	},
    { 
      title:	'The Godfather', 
      iscore:	9.2,
      rating:	'R',
      runtime:	175,
      released:	new Date('1972', '03', '24'),
      country:	'USA',
      posters:	['img/godfather.jpg','img/godfather_2.jpg','img/godfather_3.jpg'],
      imdb:		'[http://www.imdb.com/title/tt0068646',
      website:	'https://www.facebook.com/thegodfather',
      likes:	928,
      dislikes:	109,
      posterindex: 0
	},
    { 
      title:	'The Godfather: Part II', 
      iscore:	9.0,
      rating:	'R',
      runtime:	202,
      released:	new Date('1974', '12', '20'),
      country:	'USA',
      posters:	['img/godfather2.jpg','img/godfather2_2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0071562',
      website:	'https://www.facebook.com/thegodfather',
      likes:	855,
      dislikes:	99,
      posterindex: 0
	},
    { 
      title:	'The Dark Knight', 
      iscore:	8.9,
      rating:	'PG-13',
      runtime:	152,
      released:	new Date('2008', '07', '18'),
      country:	'USA',
      posters:	['img/darkknight.jpg','img/darkknight2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0468569',
      website:	'http://www.42entertainment.com/work/whysoserious',
      likes:	828,
      dislikes:	127,
      posterindex: 0
	},
    { 
      title:	'Schindler\'s List', 
      iscore:	8.9,
      rating:	'R',
      runtime:	195,
      released:	new Date('1993', '11', '30'),
      country:	'USA',
      posters:	['img/schindlerslist.jpg'],
      imdb:		'http://www.imdb.com/title/tt0108052',
      website:	'https://www.uphe.com/schindlers-list',
      likes:	812,
      dislikes:	101,
      posterindex: 0
	},

      { 
      title:      'The Sound of Music', 
      iscore:     8.0,
      rating:     'G',
      runtime:    165,
      released:   new Date('1965', '03', '29'),
      country:    'UK',
      posters:    ['img/som1.jpg','img/som2.jpg'],
      imdb:       'http://www.imdb.com/title/tt0059742/',
      website:    'http://www.sound-of-music.com/',
      likes:      402,
      dislikes:   119,
      posterindex: 0
      },

            { 
      title:      'Hotel Rwanda', 
      iscore:     8.1,
      rating:     'PG-13',
      runtime:    121,
      released:   new Date('2004', '02', '04'),
      country:    'USA',
      posters:    ['img/hotel_rwanda.jpg','img/hotel_rwanda2.jpg'],
      imdb:       'http://www.imdb.com/title/tt0395169/?ref_=ttmd_md_nm',
      website:    'http://www.mgm.com/#/our-titles/900/Hotel-Rwanda/',
      likes:      603,
      dislikes:   187,
      posterindex: 0
      },

            { 
      title:      'Pride & Prejudice', 
      iscore:     7.8,
      rating:     'PG',
      runtime:    129,
      released:   new Date('2005', '11', '23'),
      country:    'USA',
      posters:    ['img/pandp1.jpg','img/pandp2.jpg'],
      imdb:       'http://www.imdb.com/title/tt0414387/?ref_=nv_sr_2',
      website:    'http://www.focusfeatures.com/pride_and_prejudice',
      likes:      1053,
      dislikes:   176,
      posterindex: 0
      }

	
	
  ];
	
	

	
	/* ADD VARIABLES FOR STEP 3 HERE */
                  $scope.title = "IMDB + Adaoha's Top 8 Movies";
                  $scope.owner = "Adaoha";
                  $scope.github = "https://github.com/adaohauzoho";
    
	
	
	
	
	
	/* ADD FUNCTIONS FOR STEP 7 HERE */
      /* Create funtions .like, .dislike, .posterClick, & .timeText*/

           $scope.like = function(index){
             $scope.movies[index].likes += 1;
       };
 
       $scope.dislike = function(index){
             $scope.movies[index].dislikes += 1;
       };
 
       $scope.posterClick = function(index){
             console.log($scope.movies[index].posterindex);
             if ($scope.movies[index].posterindex < $scope.movies[index].posters.length-1) {
                   $scope.movies[index].posterindex += 1;
             }
             else{
                   $scope.movies[index].posterindex = 0;
             }
       };
 
       $scope.timeText = function(minutes){
             return (Math.floor(minutes/60) + "h " + minutes % 60 + "m");
       };
		
	
}]);
