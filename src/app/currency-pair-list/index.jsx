import React from 'react'
import { observable, computed } from 'mobx'
import { inject, observer } from 'mobx-react'

import List from 'kui-virtual-list'

import CurrencyPairListItem from './currency-pair-list-item'

@observer
export default class CurrencyPairList extends React.PureComponent {
  render() {
    return (
      <List items={this.props.currencyPairs} renderItem={this.renderItem} itemHeight={320} />
    )
  }

  renderItem = currencyPair => <CurrencyPairListItem key={currencyPair.name} currencyPair={currencyPair} />
}
