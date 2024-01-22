// import { ConnectWallet } from "@thirdweb-dev/react";
import { ThirdwebNftMedia, useContract, useContractMetadata, useNFTs } from "@thirdweb-dev/react";
import "./styles/Home.css";
import React from "react";

export default function Home() {
  const { contract } = useContract('0x09b52851735d76615BcA080e8c7ed64F561D54c3');
  const { data: nfts, isLoading } = useNFTs(contract);
  const { data: metadata, isLoading: loadingMetadata } = useContractMetadata(contract);
  const [splitString, setSplitString] = React.useState<string>("");
  console.log(nfts)
  console.log(metadata)

  const splitText = (str: string) => {
    var k:string = "";
    for (let i =0;i<str.length;i++) {
      if (str[i]=="i") {
        k+="I see You ";
      } else if (str[i]=="u") {
        k+="U are the best ";
      } else {
        k+="Good gracious."
      }
    }
    setSplitString(k);
  }

  return (
    <main className="container">
      {!loadingMetadata &&
        <header className="heading">
          <div>
            <img src={metadata?.image} alt="NFT Collection Thumbnail" />
            <h1>{metadata?.symbol}</h1>
          </div>
        </header>
      }

      {!isLoading ?
      (<div className="gallery">
        {nfts?.map(e =>
          <div className="card">
            <ThirdwebNftMedia metadata={e.metadata} />
            <p>{e.metadata.name}</p>
          </div>
        )}
      </div>)
      : (<p className="loading">Loading...</p>) }
    </main>
  );
}
