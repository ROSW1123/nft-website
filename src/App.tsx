// import { ConnectWallet } from "@thirdweb-dev/react";
import { ThirdwebNftMedia, useContract, useContractMetadata, useNFTs } from "@thirdweb-dev/react";
import "./styles/Home.css";
import React from "react";

export default function Home() {
  const { contract } = useContract('0x09b52851735d76615BcA080e8c7ed64F561D54c3');
  const { data: nfts, isLoading } = useNFTs(contract);
  const { data: metadata, isLoading: loadingMetadata } = useContractMetadata(contract);
  console.log(nfts)
  console.log(metadata)

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
            <a href={e.metadata.image? e.metadata.image : '#'} target="_blank"><ThirdwebNftMedia metadata={e.metadata} /></a>
            <p>{e.metadata.name}</p>
          </div>
        )}
      </div>)
      : (<p className="loading">Loading...</p>) }
    </main>
  );
}
