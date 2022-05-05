from brownie import NFTCollection
from scripts.helpful_scripts import get_account


def main():
    account = get_account()
    NFT_Collection = NFTCollection[-1]
    transaction = NFTCollection.mint({"from": account})
    transaction.wait(1)
