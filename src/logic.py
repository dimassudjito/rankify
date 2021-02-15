from random import choice
numbers = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]
indofood = [
    "ketoprak",
    "nasi goreng",
    "mie aceh",
    "sate kambing",
    "mie ayam",
    "pempek",
    "martabak",
    "indomie",
    "siomay",
    "bakwan",
    "ayam pop",
    "gurame asam manis"
]

def deck(items):
    num = int(input("Choose number of top candidate: "))
    while (num <= 0 or num >= len(items)):
        num = int(input("Please choose the appropriate number: "))
    better = []
    worse = []
    while True:
        pivot = choice(items)
        # move pivot from items to better
        items.remove(pivot)
        better.append(pivot)
        # compare each item with pivot
        for item in items:
            print("is the following item better than "+str(pivot)+"?")
            print(item)
            answer = input("y/n: ")
            if answer == "y":
                better.append(item)
            if answer == "n":
                worse.append(item)
        if len(better) == num:
            # all contenders have been found
            break
        elif len(better) < num:
            # there are less contender than needed,
            # need to look at the worse list
            # better is kept because it's the answer
            items = worse
            worse = []
        elif len(better) > num:
            # there are more contender than needed
            # need to look at the better list
            items = better
            better = []
            worse = []
    print(better)
        
deck(numbers)