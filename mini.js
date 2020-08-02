var quotes=[
    'Life is like a game of cards. The hand you are dealt is determinism; the way you play it is free will. – Jawaharlal Nehru',
    'No one is wise by birth, for wisdom results from one own’s efforts. – T. Krishnamacharya',
    'By plucking her petals, you do not gather the beauty of the flower. – Rabindranath Tagore',
    'If you are wealthy, be humble. Plants bend when they bear fruit. – Sai Baba',
    'Wherever you go becomes a part of you somehow. – Anita Desai',
    'Be so busy improving your self that you have no time to criticize others. – Chetan Bhagat',
    'Do not blame God for having created the tiger, but thank him for not having given it wings. – Indian proverb',
    'An autobiography can distort, facts can be realigned. But fiction never lies. It reveals the writer totally. – V. S. Naipaul',
    'Remember, no one is stopping you from lighting a lamp in a dark night. – Harivansh Rai Bacchan',
    'To keep your mind and nature cleansed of impurities, make a hut for your critics in your backyard and keep them close. – Kabir'
]
function newQuote(){
    var randomNumber=Math.floor(Math.random()*(quotes.length));
    document.getElementById('quoteDisplay').innerHTML=quotes[randomNumber];
}