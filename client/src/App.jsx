import React, { useEffect, useMemo, useState } from "react";
import { useWeb3 } from "@3rdweb/hooks";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { UnsupportedChainIdError } from "@web3-react/core";
import "./App.css";

const App = () => {
  const sdk = new ThirdwebSDK("rinkeby");
  const { connectWallet, address, error, provider } = useWeb3();
  console.log("👋 Address:", address);
  const signer = provider ? provider.getSigner() : undefined;
  const [isBooking, setIsBooking] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [isMember, setIsMember] = useState(false);

  const cokeModule = sdk.getBundleDropModule("0xB0403DB21E82587D3E40341577bcA250C9F7bE82");
  const pepsiModule = sdk.getBundleDropModule("0x537832F32280Bb8d49fA2De874c845929b3920d2");

  useEffect(() => {
    if (!address) {
      return;
    }
    
    cokeModule
    .balanceOf(address, "0")
    .then((balance) => {
      if (balance.gt(0)) {
        setIsMember(true);
      } else {
        setIsMember(false);
      }
    })
    .catch((error) => {
      setIsMember(false);
    });
  }, [address]);

  if (error instanceof UnsupportedChainIdError ) {
    return (
      <div className="unsupported-network">
        <h2>Please connect to Rinkeby</h2>
        <p>
          The room booking service is only available in the Rinkeby network for now, please switch networks
          in your connected wallet.
        </p>
      </div>
    );
  }

  if (!address) {
    return (
      <div className="landing">
        <h1>It's COLA Day!</h1>
        <button onClick={() => connectWallet("injected")} className="btn-hero">
          Connect Wallet
        </button>
      </div>
    );
  }

  if (isMember) {
    return (
    <div className="member-page">
      <h1>It's COLA Day</h1>
      <div>
        <div>
            <h2>Room List</h2>
            <table className="card">
              <thead>
                <tr>
                  <th>Room #</th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((room) => {
                  return (
                    <tr key={room.address}>
                      <td>{room}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
      </div>
    </div>
    );
  }

  return (
    <div className="needs-nft">
      <h2>Looks like you're not an employee!</h2>
      <p>
        Only employees of PepsiCo and The Coca-Cola Company are allowed to book rooms. If you are an employee, ask your manager to airdrop you
        a membership NFT to prove your employment status.
      </p>
    </div>
  );
};

export default App;
