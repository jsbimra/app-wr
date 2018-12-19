import React, { Component } from 'react'
// import './ArrayCardio.css';
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const peoples = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

class ArrayCardio extends Component {

    componentDidMount() {
        // answer to question 1 Filter the list of inventors for those who were born in the 1500's
        const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
        document.querySelector('#answer1').innerText = `Answer: ${JSON.stringify(fifteen)}`;


        // answer to question 2 Give us an array of the inventors' first and last names
        const firstLast = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
        document.querySelector('#answer2').innerText = `Answer: ${JSON.stringify(firstLast)}`;


        // answer to question 3 Sort the inventors by birthdate, oldest to youngest
        const sortByBirth = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
        // console.table(sortByBirth);
        document.querySelector('#answer3').innerText = `Answer: ${JSON.stringify(sortByBirth)}`;

        //answer to question 4 How many years did all the inventors live?
        const lived = inventors.reduce((total, inventor) => {
            return total + (inventor.passed - inventor.year);
        }, 0)
        // console.log(lived);
        document.querySelector('#answer4').innerText = `Answer: ${lived}`;

        //answer to question 5 Sort the inventors by years lived?
        const sortYearslived = inventors.sort((a, b) => {
            const lastInventor = a.passed - a.year;
            const nextInventor = b.passed - b.year;
            return lastInventor > nextInventor ? -1 : 1;
        });
        // console.table(sortYearslived);
        document.querySelector('#answer3').innerText = `Answer: ${JSON.stringify(sortYearslived)}`;

        //answer to question 6 create a list of Boulevards in Paris that contain 'de' anywhere in the name
        // using promise for learning
        // const fetchWiki = fetch('https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris',{
        //     mode: 'cors',
        //     // headers:{
        //     //     'Access-Control-Allow-Origin':'*'
        //     // }
        // }).then((resp) => {
        //     return resp.text()
        // }).then((data) => {
        //    console.log(data);
        // }).catch( (err) => {
        //     console.error(new Error(err));
        // })
        // console.log(fetchWiki);
        // REASON: we can't use api with that url because CORS is not enable at wikipedia site to access its page. :()
        // let catergory = document.querySelector('.cm-category');
        //     catergory = document.querySelector('.mw-category');
        // let de = catergory.querySelectorAll('a');
        //     de.map( de => de.textContent).filter( de => de.includes('de'));
        // console.log(de);
        
        // answer to question 7 Sort the people alphabetically by last name
        // console.table(peoples);
        const lastNameSort = peoples.sort( (a, b) => {
            const [aLast] = a.split(', ');
            const [bLast] = b.split(', ');
            return aLast > bLast ? 1 : -1
        });
        // console.table(lastNameSort);
        document.querySelector('#answer7').innerText = `Answer: ${JSON.stringify(lastNameSort)}`;
       
        // answer to question  8. Sum up the instances of each of these
        const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
        
        const sumUp = data.reduce( (obj, item) => {
            if(!obj[item]){
                obj[item] = 0;
            }
            obj[item]++;
            return obj;
        },{});
        // console.log(sumUp);
        document.querySelector('#answer8').innerText = `Answer: ${JSON.stringify(sumUp)}`;

    }
    render() {

        return (
            <div className="arraycardio-wrapper">

                <div>
                    <p> Get your shorts on - this is an array workout!<br /><br />
                        <br />## Array Cardio Day 1
                    </p>
                    <p> Some data we can work with
                    <br /><br />
                        {`const inventors = [
                            {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
                            {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
                            {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
                            {first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
                            {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
                            {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
                            {first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
                            {first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
                            {first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
                            {first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
                            {first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
                            {first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
                  ];`}
                    </p>
                    <p>
                        {`const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];`}
                    </p>
                    <h3>Array.prototype.filter()</h3>
                    <p>
                        1. Filter the list of inventors for those who were born in the 1500's
                     <span id="answer1" className="clearfix"></span>
                    </p>
                    <h3>Array.prototype.map()</h3>
                    <p>
                        2. Give us an array of the inventors' first and last names
                        <span id="answer2" className="clearfix"></span>
                    </p>
                    <h3>Array.prototype.sort()</h3>
                    <p>
                        3. Sort the inventors by birthdate, oldest to youngest
                        <span id="answer3" className="clearfix"></span>
                    </p>
                    <h3>Array.prototype.reduce()</h3>
                    <p>
                         4. How many years did all the inventors live?
                        <span id="answer4" className="clearfix"></span>
                    </p>
                    <p>
                        5. Sort the inventors by years lived
                        <span id="answer5" className="clearfix"></span>
                    </p>
                    <p>
                        6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
                        <br/> <a target="" href="https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris">
                                https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris</a>
                        <span id="answer6" className="clearfix"></span>
                    </p>
                    <h3>Sort Exercise</h3>
                    <p>  
                        7. Sort the people alphabetically by last name
                        <span id="answer7" className="clearfix"></span>
                    </p>
                    <h3>Reduce Exercise</h3>
                    <p>
                        8. Sum up the instances of each of these
                        <br />
                        {`const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];`}
                        <span id="answer8" className="clearfix"></span>
                    </p>
                </div>
            </div>
        )
    }
}

export default ArrayCardio;