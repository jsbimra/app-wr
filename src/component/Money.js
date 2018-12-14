import React, { Component } from 'react';
import $ from 'jquery';

import './Money.css';

function getRandomTop(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
const MoneyTray = (props) => {
    console.log(props);
    const coin = props.coins ? props.coins.map((coin, idx) => (<span key={idx} onClick={(e) => { props.onCoinClick(coin, e) }} className="coin">{coin}</span>)) : (<span className="no-coins">No coins</span>);
    const bill = props.coins ? props.bills.map((bill, idx) => (<span key={idx} onClick={(e) => { props.onBillClick(bill, e) }} className="bill">{bill}</span>)) : (<span className="no-bills">No coins</span>);
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
    console.log(props);
    return (
        <div className={`money-pot ${props.revealPotFlag ? 'reveal-pot' : ''} ${props.breakedFlag ? 'reveal-pot breaked' : ''} `}></div>
    )
}

class Money extends Component {
    moneyState = {
        breakedFlag: false,
        revealPotChecked: false,
        coins: [1, 2, 5, 10, 20],
        bills: [1, 2, 5, 10, 20, 50, 100, 200, 500, 2000],
        collectMoney: [],
        totalSavings: 0
    }
    constructor(props) {
        super(props);
        this.state = this.moneyState;
        this.onCoinClick = this.onCoinClick.bind(this);
        this.onBillClick = this.onBillClick.bind(this);
        this.onRevealPotHandler = this.onRevealPotHandler.bind(this);
        this.breakPotKnowSavings = this.breakPotKnowSavings.bind(this);
        this.onReBuildSavings = this.onReBuildSavings.bind(this);
    }
    componentDidMount() {
        this.setState({
            coins: this.state.coins.reverse()
        })
    }
    componentWillUnMount() {

    }
    calculateTotalSavings(collectMoney) {
        console.clear();
        console.log(collectMoney);

        if (collectMoney.length) {
            let totalSavings = collectMoney.reduce((acc, curval) => acc + curval);
            console.log(totalSavings);
            console.log('Your total saving in the pot is: ', totalSavings);

            this.setState({
                totalSavings
            });

            return totalSavings;
        }
    }
    breakPotKnowSavings() {

        this.calculateTotalSavings(this.state.collectMoney);

        this.setState({
            revealPotChecked: true,
            breakedFlag: true
        });
    }
    addToPot(money, event) {
        const $elCoin = $(event.target);
        let $cloneCoinEl;

        console.log('Clicked whichCoin ', money);

        $elCoin.css({ top: `${getRandomTop(320)}px`, left: `${getRandomTop(240)}px` });
        $cloneCoinEl = $elCoin.clone(false);
        $('.money-pot').append($cloneCoinEl);

        let collectMoney = [...this.state.collectMoney, money];
        console.log('adding money to savings ', collectMoney);

        $cloneCoinEl.css({ transform: `rotateZ( ${getRandomTop(360)}deg) ` });

        this.setState({
            collectMoney
        });
    }
    onCoinClick(which, event) {
        if (which) {
            // console.log('Clicked which coin ', which);
            this.addToPot(which, event);
        }
    }
    onBillClick(which, event) {
        console.log(event);
        if (which) {
            // console.log('Clicked which bill ', which);
            this.addToPot(which, event);
        }
    }
    onRevealPotHandler() {
        this.setState({
            revealPotChecked: !this.state.revealPotChecked
        });
    }
    onReBuildSavings() {
        console.log('test');

        this.setState({
            breakedFlag: false,
            revealPotChecked: false,
            collectMoney: [],
            totalSavings: 0
        });
        $('.money-pot').html('');
    }
    render() {
        const RevealPotAction = (props) => {
            if (this.state.collectMoney.length) {
                return (
                    <label>
                        <input type="checkbox" checked={this.state.revealPotChecked}
                            name="chkRevealPot"
                            value={this.state.revealPotChecked}
                            onChange={this.onRevealPotHandler} /> Reveal Pot</label>)
            }
            return '';
        }
        const BreakButtonAction = () => {
            if (!this.state.breakedFlag) {
                if (this.state.collectMoney.length) {
                    return (
                        <label className="text-right">You want to know you savings ?<br />  <button className=" btn-small" onClick={this.breakPotKnowSavings}>Break Now</button>
                        </label>)
                }
            }
            return '';
        }

        const TotalSavings = () => {
            if (this.state.totalSavings) {
                return (
                    <div className="total-savings text-center">Your total saving till now: {this.state.totalSavings}</div>
                )
            }
            return '';
        }

        const ReBuildSavingsAction = () => {
            if (this.state.totalSavings) {
                return (
                    <div className="rebuild-savings text-center">
                        <button className=" btn-small" onClick={this.onReBuildSavings}>Rebuild Savings from Zero</button>
                    </div>
                )
            }
            return '';
        }

        const layTray = () => {
            if (!this.state.breakedFlag) {
                return (
                    <div className="clearfix">
                        <MoneyTray
                            coins={this.state.coins}
                            bills={this.state.bills}
                            onCoinClick={this.onCoinClick}
                            onBillClick={this.onBillClick} />

                        <div className="float-right text-right">
                            <RevealPotAction />
                            <BreakButtonAction />
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="clearfix">
                        <TotalSavings />
                    </div>
                )
            }
        }

        return (
            <div className="money-container">
                <h1>Your daily money saver</h1>
                {layTray()}
                <MoneyPot takeMoney="0" revealPotFlag={this.state.revealPotChecked} breakedFlag={this.state.breakedFlag} />
                <ReBuildSavingsAction />
            </div>
        )
    }
}

export default Money;
