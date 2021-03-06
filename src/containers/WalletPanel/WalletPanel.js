import React, { Component } from 'react'
import WalletDisplay from '../../components/WalletDisplay/WalletDisplay'
import { getWalletErrors } from '../../utils/validation'

import './WalletPanel.css'

class WalletPanel extends Component {
  render () {
    const { a: assetA, b: assetB } = this.props.assets
    const { a: walletA, b: walletB } = this.props.wallets
    const errors = this.props.showErrors ? getWalletErrors(this.props.wallets, this.props.isPartyB) : {}

    return <div className='WalletPanel'>
      <div className='row justify-content-between no-gutters'>
        <div className='col WalletPanel_left'>
          <WalletDisplay
            currency={assetA.currency}
            type={walletA.type}
            balance={walletA.balance}
            address={walletA.addresses[0]}
            connected={walletA.connected}
            error={errors.walletA}
            onButtonClick={() => this.props.onToggleWalletConnect('a')} />
        </div>
        <div className='col WalletPanel_right'>
          <WalletDisplay
            currency={assetB.currency}
            type={walletB.type}
            balance={walletB.balance}
            address={walletB.addresses[0]}
            connected={walletB.connected}
            error={errors.walletB}
            onButtonClick={() => this.props.onToggleWalletConnect('b')} />
        </div>
      </div>
    </div>
  }
}

export default WalletPanel
