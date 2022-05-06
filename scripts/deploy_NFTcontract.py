from brownie import NFTCollection, network, accounts, config
from scripts.helpful_scripts import get_account


def main():
    account = get_account()
    print(network.show_active())
    NFT_Collection = NFTCollection.deploy(
        {"from": account},
        publish_source=True,
    )
    return NFT_Collection
