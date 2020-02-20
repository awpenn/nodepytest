import sys
import json

def run():
    with open('woswers.json', "w+") as outfile:
        data = {"msg": "wow"}
        json.dump(data, outfile)
    msg = 'action complete'
    # print(data)
    return msg

if __name__ == "__main__":
    print(run())