from curses import meta
from brownie import network
from metadata.SampleMetadata import metadata_template
from pathlib import Path
import json
import os
import requests

classes = ["KING", "KNIGHT", "PRINCESS"]
number_of_classes = len(classes)
classes_mapping = {0: "KING", 1: "KNIGHT", 2: "PRINCESS"}
attribution = {
    0: "Designed by macrovector / Freepik",
    1: "Knight vector created by catalyststuff - www.freepik.com",
    2: "Princess cartoon vector created by brgfx - www.freepik.com",
}


def main():
    createMetadata()
    print(classes[1])


def createMetadata():
    for class_id in range(number_of_classes):
        metadata_file_name = f"./metadata/{network.show_active()}/{class_id}-{classes_mapping[class_id]}.json"
        NFT_metadata = metadata_template
        if Path(metadata_file_name).exists():
            print(f"{metadata_file_name} already exists! Delete it to overwrite")
        else:
            print(f"Creating metadata file:{metadata_file_name}")
            NFT_metadata["name"] = classes_mapping[class_id]
            NFT_metadata[
                "description"
            ] = f"This is a {classes_mapping[class_id]} class. {attribution[class_id]}."
            image_path = "./img/" + classes_mapping[class_id].lower() + ".png"

            image_uri = None
            if os.getenv("UPLOAD_IPFS") == "true":
                image_uri = upload_to_ipfs(image_path)
            image_uri = image_uri if image_uri else None

            NFT_metadata["image"] = image_uri
            with open(metadata_file_name, "w") as file:
                json.dump(NFT_metadata, file)
            if os.getenv("UPLOAD_IPFS") == "true":
                upload_to_ipfs(metadata_file_name)


def upload_to_ipfs(filepath):
    with Path(filepath).open("rb") as fp:
        binary_file = fp.read()
        ipfs_url = "http://127.0.0.1:5001"
        endpoint = "/api/v0/add"
        response = requests.post(ipfs_url + endpoint, files={"file": binary_file})
        ipfs_hash = response.json()["Hash"]
        # with the following command, we will make:
        # ./metadata/rinkeby/0-KING.json => 0-KING.json will be the file name
        filename = filepath.split("/")[-1:][0]
        data_uri = f"ipfs://{ipfs_hash}?filename={filename}"
        print(data_uri)
        return data_uri
