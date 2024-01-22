import { ThirdwebNftMedia, useNFT, useContract } from "@thirdweb-dev/react";

export default function Single() {
    const { contract } = useContract('0x09b52851735d76615BcA080e8c7ed64F561D54c3');
    const tokenId = 0; // the tokenId to look up
    const { data: nft, isLoading, error } = useNFT(contract, tokenId);
    return (
        <div>
        </div>
    )
}