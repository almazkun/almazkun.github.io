"""Some usefull python code snippets"""

def create_json_file_from_dict(file_name: str, some_dict: dict) -> None:
    """Creates a json file of the given name and populates it with the given dict

    Args:
        file_name (str): desired file name
        some_dict (dict): dict to be jsoned
    """
    if isinstance(some_dict, dict):
        with open(f"{file_name}.json", "w+") as f:
            json.dump(some_dict, f)
