// import { ConnectWallet } from "@thirdweb-dev/react";
import { ThirdwebNftMedia, useContract, useContractMetadata, useNFTs,
  usePrimarySaleRecipient,useOwnedNFTs } from "@thirdweb-dev/react";
import "./styles/Home.css";

export default function Home() {
  const { contract } = useContract('0x09b52851735d76615BcA080e8c7ed64F561D54c3');
  const { data: nfts, isLoading } = useNFTs(contract);
  const { data: metadata, isLoading: loadingMetadata } = useContractMetadata(contract);
  console.log(nfts)
  return (
    <main className="container">
      {!loadingMetadata &&
        <header className="heading">
          <div>
            <img src={metadata?.image} alt="NFT Collection Thumbnail" />
            <h1>{metadata?.name}</h1>
          </div>
        </header>
      }

      {!isLoading ?
      (<div className="gallery">
        {nfts?.map(e =>
          <div className="card">
            <ThirdwebNftMedia metadata={e.metadata} />
          </div>
        )}
      </div>)
      : (<p className="loading">Loading...</p>) }
    </main>
  );
}
