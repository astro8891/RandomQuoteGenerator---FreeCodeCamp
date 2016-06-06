$(document).ready(function() {

    var quotes = ["It's not about the content we are creating but how much content our customers are creating for us", "You miss 100 percent of the shots you never take",
    "Flow is not just about what you hold on to; it is also about what you let go of.", "Unlearn your knowledge about what WAS working to understand what is working NOW",
    "Its easier to start a global business than a local one, make your business one where you can work from anywhere in the world", "Think it, ink it: Do it, review it.",
    "What you see is always what you get.", "Sustainable wealth follows a rhythm.", "You are the result of your choices.", "You settle for your standards.",
    "Your well (of wealth) is in your words."]
   
    var button = document.getElementById('but');
    
    button.addEventListener('click', randomQuote);

    function randomQuote(){
    	var quote = document.getElementById("Quote");
    	var random = Math.floor(Math.random() * quotes.length);
    	quote.innerHTML = quotes[random];
    	var twitterButton = document.getElementById("twitter")
    	// twitterButton.innerHTML = quotes[random];
    }    
});
