# LISTS

my_list = ["dog", "puppy", "cat", "kitten"]

print(my_list)
# access an item
print(my_list[0]) 

# get last item
print(my_list[-1])   # In JS it is [length -1]

# length of list
print(len(my_list))

# slice equivalent
print(my_list[1:3])
print(my_list[1:])
print(my_list[:2])
print(my_list[-2:])

# add to list
my_list.append("shark")
print(my_list)

# add something at specific index
my_list.insert(1, "snail")
print(my_list)

# extend a alist
list_one = ["apple", "pear", "pineapple"]
list_two = ["mango", "passionfruit", "banana"]
list_one.extend(list_two)
print(list_one)
print(list_two)
print(list_one[-3:])

# amend the list
my_list[2] = "tiger"
print(my_list)

my_list[1:3] = ["lizard", "pony"]
print(my_list)

# remove something
my_list.remove("pony")
print(my_list)

# remove last item
# my_list.pop()
my_list.pop(3)     # pop here uses index
print(my_list)

# make a copy
new_list = my_list.copy()
print("newlist", new_list)

another_list = list(my_list)
print("anotherlist", another_list)

another_list.append("goat")
print(another_list)

another_list.clear()
print("anotherlist cleared", another_list)

joined_list = my_list + new_list
print("joined", joined_list)
