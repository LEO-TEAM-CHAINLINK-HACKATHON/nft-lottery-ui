from scripts.helpful_scripts import get_account
from brownie import NFTCollection


def main():
    tokenId = 3
    burn(tokenId)


def burn(tokenId):
    account = get_account()
    NFT_collection = NFTCollection[1]
    transaction = NFT_collection.burn(tokenId, {"from": account})
    transaction.wait(1)
    print(f"You burned the NFT number {tokenId}")
