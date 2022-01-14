# Control Flow

a = 10

if a < 5:
		print("number too small")
else:
		print("number is greater than 5")

# if (a < 5) {             # In JavaScript
# 	console.log('small')
# } else {
# 	console.log('big')
# }

if a < 5:
		print("number too small")
elif a > 10:
		print("number is greater than 10")
else:
		print("number is just right")

name = "mau"
age = 40

# using and to check if one condition is true
if name == "Mau" or name == "mau" :
		print("hello Mau")
else:
		print("hello stranger")

# using and to check two conditions are true
if name == "mau" and age == 40:
		print("hello Mau")
else:
		print("hello stranger")

if name == "Mau" or age == 40 :
		print("hello Mau")
else:
		print("hello stranger")

# If name is falsey
if not name:           # In JS it is, if(!name) return null
		print("hello Mau")
else:
		print("hello stranger")

# ternary equivalent

first_num = 10
second_num = 5 if first_num < 10 else 20   # JS equivalent is, secondNum = first_num < 10 ? 5 : 20

# using a prompt
user_input = input("Enter a number")
print("USER INPUT IS", user_input)



