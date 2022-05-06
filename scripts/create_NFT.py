from brownie import NFTCollection
from scripts.helpful_scripts import get_account, OPENSEA_URL

classes_to_uri = {
    "KING": "ipfs://QmfM3skLkRH1UrWAEus8WwAK5dAzVwWhoKPPZ97zMbewRz?filename=0-KING.json",
    "KNIGHT": "ipfs://QmTjaBd61Xb9jjQ2F5UiaXgxERbY9y8VJwkMefzKPW35HB?filename=1-KNIGHT.json",
    "PRINCESS": "ipfs://QmP2Jt1JoTtFNurxnqpaBE5DgEe9umxiwh5sAj6zWhs2N6?filename=2-PRINCESS.json",
}

nft_classes = ["KING", "KNIGHT", "PRINCESS"]

lottery_id = 1  # The lottery_id is defined every time the lottery starts. Frist lottery id = 1,  # second lottery id = 2... etc

prize_id = lottery_id

tokenURI = classes_to_uri[nft_classes[prize_id]]


def get_class(id):
    nft_class = nft_classes[id]
    print(nft_class)


def main():
    account = get_account()
    NFT_Collection = NFTCollection[-1]
    print(NFT_Collection)
    print(classes_to_uri[nft_classes[prize_id]])
    transaction = NFT_Collection.safeMint(
        account,
        tokenURI,
        {"from": account},
    )
    transaction.wait(1)
    print(
        f"Awesome! You can view your NFT at {OPENSEA_URL.format(NFT_Collection.address, NFT_Collection.retrieveTokenId())}"
    )
