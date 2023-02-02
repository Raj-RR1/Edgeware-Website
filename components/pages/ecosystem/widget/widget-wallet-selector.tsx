import React from 'react';
import type { Account } from './web3-context';
import IconArrow from 'remixicon/icons/System/arrow-down-s-line.svg';
import { Listbox } from '@headlessui/react';

type WidgetWalletSelectorProps = {
  accounts?: Account[];
  selectedAccount?: string;
  setSelectedAccount?: (account: string) => void;
  connected: boolean;
  type: 'polkadot' | 'ethereum';
  onConnect: (type: 'polkadot' | 'ethereum') => void;
};

export const WidgetWalletSelector = ({
  connected,
  type,
  onConnect,
  accounts,
  selectedAccount,
  setSelectedAccount,
}: WidgetWalletSelectorProps) => {
  if (!connected) {
    const handleConnect = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      onConnect(type);
    };

    return (
      <button
        className="flex w-full flex-row items-center rounded border border-grey-700 p-4"
        onClick={handleConnect}
      >
        <span className="mr-2 h-2 w-2 rounded-full bg-grey-500"></span>
        Connect {type === 'polkadot' ? 'Polkadot' : 'Ethereum'} Wallet
      </button>
    );
  }

  if (!accounts || accounts.length === 0) {
    return (
      <div className="w-full rounded border border-grey-700 p-4">
        <span>No accounts found</span>
      </div>
    );
  }

  if (!selectedAccount) {
    return null;
  }

  return (
    <div className="relative flex w-full items-center">
      <Listbox value={selectedAccount} onChange={setSelectedAccount}>
        <Listbox.Button className="flex w-full grow flex-row items-center justify-between rounded border border-grey-700 p-4">
          <span className="mr-2 h-2 w-2 shrink-0 rounded-full bg-green-500" />
          <span className="block w-60 truncate">{selectedAccount}</span>
          <IconArrow className={`ml-2 h-6 w-6 shrink-0 fill-grey-600`} />
        </Listbox.Button>
        <Listbox.Options className="absolute top-14 z-10 mt-1 max-h-60 w-full overflow-auto rounded border border-grey-700 bg-grey-900">
          {accounts.map((account) => (
            <Listbox.Option
              key={account.address}
              value={account.address}
              className="flex cursor-pointer flex-row items-center p-4 text-left hover:bg-grey-800"
            >
              <span
                className={`mr-2 h-2 w-2 shrink-0 rounded-full ${
                  account.address === selectedAccount ? 'bg-green-500' : ''
                }`}
              />
              <span className="block w-60 truncate">{account.address}</span>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};
