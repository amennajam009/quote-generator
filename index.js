function generate(){
    var quotes = {
        "-Mother Teresa" : '"Spread love everywhere you go. Let no one ever come to you without leaving happier."',
        "-Margaret Mead" :  '"Always remember that you are absolutely unique. Just like everyone else."',
        "-Robert Louis Stevenson" : '"Don not judge each day by the harvest you reap but by the seeds that you plant"',
        "-Eleanor Roosevelt" : '"The future belongs to those who believe in the beauty of their dreams."',
        "-Benjamin Franklin"  : '"Tell me and I forget. Teach me and I remember. Involve me and I learn."',
        "-Helen Keller" : '"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart"'}

        var authors = Object.keys(quotes);
        var author = authors[Math.floor(Math.random()*authors.length)];

        var quote = quotes[author];
        document.getElementById("quote").innerHTML=quote;
        document.getElementById("author").innerHTML=author;
        
            
}