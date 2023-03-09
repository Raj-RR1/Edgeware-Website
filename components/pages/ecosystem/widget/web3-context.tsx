import React, { createContext, useState } from 'react';
import Web3 from 'web3';
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';
import { initPolkadotAPI } from 'lib/crypto/polkadot';

export type Account = {
  address: string;
  networkAddress?: string;
  label: string;
};

type Web3ContextType = {
  connectToEthereum: () => Promise<boolean>;
  connectToPolkadot: () => Promise<boolean>;
  ethereumAccounts: Account[];
  polkadotAccounts: Account[];
};

const Web3Context = createContext<Web3ContextType | null>(null);

const EDG_EVM_NETWORK_ID = 2021;

export const Web3ContextProvider = ({ children }) => {
  const [ethereumAccounts, setEthereumAccounts] = useState<Account[]>([]);
  const [polkadotAccounts, setPolkadotAccounts] = useState<Account[]>([]);

  const connectToEthereum = async () => {
    try {
      if ('ethereum' in window) {
        await (window as any).ethereum?.enable();
        const web3 = new Web3(Web3.givenProvider);

        // check for network
        const networkId = await web3.eth.net.getId();

        if (networkId !== EDG_EVM_NETWORK_ID) {
          alert('Please select the Edgeware EVM network in Metamask');
          throw new Error('Please select the Edgeware EVM network in Metamask');
        }

        const accounts = await web3.eth.getAccounts();
        setEthereumAccounts(
          accounts.map((a, index) => ({
            address: a,
            label: `Metamask account #${index + 1}`,
          }))
        );
        return true;
      } else {
        throw new Error('No Ethereum wallet detected');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const connectToPolkadot = async () => {
    try {
      if ((window as any).injectedWeb3) {
        const extensions = await web3Enable('Polkadot-JS Apps');
        if (extensions.length === 0) {
          throw new Error('No Polkadot wallet detected');
        }

        const api = await initPolkadotAPI();
        const allAccounts = await web3Accounts();
        const accounts = allAccounts
          .map((a) => ({
            address: a.address,
            networkAddress: api.createType('Address', a.address).toString(),
            label: a.meta.name,
          }))
          .reverse();

        setPolkadotAccounts(accounts);
        return true;
      }
    } catch (err) {
      console.error(err);
    }
  };

  const contextValue = {
    connectToEthereum,
    connectToPolkadot,
    ethereumAccounts,
    polkadotAccounts,
  };

  return <Web3Context.Provider value={contextValue}>{children}</Web3Context.Provider>;
};

export const useWeb3Context = () => {
  const context = React.useContext(Web3Context);
  if (context === undefined) {
    throw new Error('useWeb3Context must be used within a Web3ContextProvider');
  }
  return context;
};
