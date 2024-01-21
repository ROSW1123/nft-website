// import { ConnectWallet } from "@thirdweb-dev/react";
import { ThirdwebNftMedia, useContract, useContractMetadata, useNFTs,
  usePrimarySaleRecipient,useOwnedNFTs } from "@thirdweb-dev/react";
import "./styles/Home.css";

export default function Home() {
  const { contract } = useContract('0x09b52851735d76615BcA080e8c7ed64F561D54c3');
  const { data: nfts, isLoading } = useNFTs(contract);
  const { data: metadata, isLoading: loadingMetadata } = useContractMetadata(contract);
  const { data: primarySaleRecipient, error } = usePrimarySaleRecipient(contract);
  const { data: ownedNFTs } = useOwnedNFTs(contract, "0xFEc795EC001d1B0E76aaF85589dA52Ce0a4daafe", { start: 0, count: 100 });
  console.log(ownedNFTs);
  console.log(metadata)
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

      <div>{primarySaleRecipient}</div>
      <div>{ownedNFTs?.map(ee=>
        <div>
          <p>{ownedNFTs[0].owner}</p>
        </div>)}</div>

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
