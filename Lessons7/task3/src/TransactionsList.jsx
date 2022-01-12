import React, { Component } from 'react';
import Transaction from './Transaction';

class TransactionsList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let transactionsList;
    transactionsList = this.props.transactions.slice();
    return (
      <ul className="transactions">
        {transactionsList.map(transactionList => (
          <Transaction key={transactionList.id} {...transactionList} />
        ))}
      </ul>
    );
  }
}

export default TransactionsList;
