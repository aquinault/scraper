var sjs = require('scraperjs');
/*
 Scrape the news in Hacker News.
 */
sjs.StaticScraper
	.create('https://fr.news.yahoo.com/top-articles/')
	.scrape(function($) {
	    

		var a =  $('div.story').map(function() {
		    return {
		        a : $(this).find('div.txt > cite').text(), 
		        b: $(this).find('div.txt > p').text(),
		        c: $(this).find('div.txt > h4 > a').attr('href')
		        
		    }
			//return $(this).text();
		}).get();
	    
	    var obj = {
	        cite : a
	    };
	    console.log(obj.a);
	    return obj;
	    
	    
	    /*
		return $('div.txt').map(function() {
			return $(this).html();
		}).get();
        */
	    
	    /*
		return $('li>.story').map(function() {
			return $(this).text();
		}).get().filter(function(elm) {
			return elm != 'More';
		});*/
	}, function(news) {
		news.cite.forEach(function(elm) {
			console.log(elm);
		});
	});