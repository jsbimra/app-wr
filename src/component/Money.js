import React, { Component } from 'react';
import $ from 'jquery';

import './Money.css';

function getRandomTop(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
const MoneyTray = (props) => {
    console.log(props);
    const coin = props.coins ? props.coins.map((coin, idx) => (<span key={idx} onClick={(e)=> { props.onCoinClick(coin, e) } } className="coin">{coin}</span>)) : (<span className="no-coins">No coins</span>);
    const bill = props.coins ? props.bills.map((bill, idx) => (<span key={idx} onClick={(e)=> { props.onBillClick(bill, e) } } className="bill">{bill}</span>)) : (<span className="no-bills">No coins</span>);
    return (
        <div className="money-tray">
            <div className="coins-wrapper">
                <h4>Coins</h4>
                {coin}
            </div>
            <div className="bills-wrapper">
                <h4 className="text-right">Bills</h4>
                {bill}
            </div>
        </div>
    );
}


const MoneyPot = (props) => {
    return (
        <div className={`money-pot ${props.revealPotFlag ? 'reveal-pot' : ''}`}></div>
    )
}


class Money extends Component {
    constructor(props) {
        super(props);
        this.state = this.moneyState;
        this.onCoinClick = this.onCoinClick.bind(this);
        this.onBillClick = this.onBillClick.bind(this);
        this.onRevealPotHandler = this.onRevealPotHandler.bind(this);
        this.breakPotKnowSavings = this.breakPotKnowSavings.bind(this);
    }
    componentDidMount() {
        this.setState({
            coins: this.state.coins.reverse()
        })
    }
    
    moneyState = {
        revealPotChecked: false,
        coins: [1, 2, 5, 10, 20],
        bills: [1, 2, 5, 10, 20, 50, 100, 200, 500, 2000],
        totalSavings: []
    }
    breakPotKnowSavings() {
        let totalSavings = this.state.totalSavings;
        if(totalSavings.length) {
            totalSavings = totalSavings.reduce((acc, curval) => acc + curval);
            console.log(this.state.totalSavings);
            console.log('Your total saving in the pot is: ', totalSavings);
            
            this.setState({
                revealPotChecked: true
            });

            $('.money-pot').css({width: '100%' });
            $('.money-pot .coin, .money-pot .bill').css({position: 'relative', bottom: 0, top: 'auto'});
        }
    }
    addToPot(money, event){
        const $elCoin = $(event.target);
        let $cloneCoinEl;

        console.log('Clicked whichCoin ', money);
        
        $elCoin.css({top: `${getRandomTop(320)}px`, left: `${getRandomTop(240)}px`});
        $cloneCoinEl = $elCoin.clone(false);
        $('.money-pot').append($cloneCoinEl);

        let totalSavings = [...this.state.totalSavings, money];
        console.log('adding money to savings ', totalSavings);
        this.setState({
            totalSavings
        });
    }
    onCoinClick(which, event) {
        if(which) {
            // console.log('Clicked which coin ', which);
            this.addToPot(which, event);
        }
    }
    onBillClick(which, event) {
        console.log(event);
        if(which) {
            // console.log('Clicked which bill ', which);
            this.addToPot(which, event);
        }
    }
    onRevealPotHandler(){
        this.setState({
            revealPotChecked: !this.state.revealPotChecked
        });
    }
    render() {
        return (
            <div className="money-container">
                <h1>Money</h1>
                <MoneyTray coins={this.state.coins} bills={this.state.bills} 
                    onCoinClick={this.onCoinClick }
                    onBillClick={this.onBillClick } />

                <label className="float-left"><input type="checkbox" name="chkRevealPot" value={this.state.revealPotChecked} onChange={this.onRevealPotHandler} /> Reveal Pot</label>
                {this.state.totalSavings.length ? (<label className="float-right">You want to break your pot now ? <button className=" btn-small" onClick={this.breakPotKnowSavings}>Break the pot</button></label>) : ''}
                
                <div className="clearfix"></div>
                
                <MoneyPot takeMoney="0" revealPotFlag={this.state.revealPotChecked} />
            </div>
        )
    }
}

export default Money;
