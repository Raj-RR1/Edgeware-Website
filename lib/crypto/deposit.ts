import { evmConvert } from 'lib/keygen';
import { initPolkadotAPI, requestTransfer } from './polkadot';

type DepositResult = {
  success: boolean;
  message?: string;
  data?: any;
};

export const processEVMDeposit = async (
  inputAddress: string,
  inputAmount: string
): Promise<DepositResult> => {
  const mainnetAddress = evmConvert(inputAddress);

  if (mainnetAddress === 'error') {
    return {
      success: false,
      message: 'Invalid address format! Please check if your address is an EVM address.',
    };
  }

  if (isNaN(Number(inputAmount))) {
    return {
      success: false,
      message: 'Invalid amount format! Please check if your amount is a number.',
    };
  }
  const amount = Number(inputAmount);

  // Initialize API
  const api = await initPolkadotAPI();
  if (!api) {
    return {
      success: false,
      message: 'Failed to connect to the network. Please try again later.',
    };
  }

  // Request transfer
  try {
    const tx = await requestTransfer(api, mainnetAddress, amount);

    if (tx) {
      return {
        success: true,
        message: `Successfully sent ${amount} EDG to ${mainnetAddress}.`,
        data: {
          tx,
        },
      };
    } else {
      return {
        success: false,
        message: 'Failed to send transaction. Please try again later.',
      };
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: error?.message || 'Failed to request transfer. Please try again later.',
    };
  }

  return {
    success: true,
  };
};
