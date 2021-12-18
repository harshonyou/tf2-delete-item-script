# with open('bigDataAllItems.txt') as f:
#     lines = f.readlines()
#     print(len(lines))

# bigDataAllItems
# smallTestBigData

from html.parser import HTMLParser
import json


class MyHTMLParser(HTMLParser):
    def handle_starttag(self, tag, attrs):
        data = attrs[3][1].split(
        )[2:] if attrs[3][1][0] == "Q" else attrs[3][1].split()[3:]
        if len(data) == 1:
            self.data = ["Unkown", data[0][1:-1]]
        else:
            self.data = [' '.join(data[:-1]), data[-1][1:-1]]


parser = MyHTMLParser()
parsed = {}

with open('bigDataAllItems.txt') as f:
    lines = f.readlines()
    index = 1
    while index < len(lines):
        # print(lines[index])
        parser.feed(lines[index])
        _data = parser.data
        parsed[_data[1]] = _data[0]
        index += 3

with open('data.json', 'w') as f:
    json.dump(parsed, f, ensure_ascii=False, indent=4)
