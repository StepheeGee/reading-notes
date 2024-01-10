# Test Driven Development 

## Notes from Class - 1/9/24

![setup](fizz/fizzbuzzterminal.png)
![setup](fizz/fizzbuzzterminal2.png)

__pycache__ is a directory that is created when you run python and it is used to store the compiled python files.

touch tests/__init__.py

Header for test_fizz_buzz.py:

from fizz_buzz.fizz import fizz_buzz


def test_fizz_buzz_one():
  actual = fizz_buzz(1)
  expected = "1"

To make this an official test you have to use the keyword assert

def test_fizz_buzz_one():
  actual = fizz_buzz(1)
  expected = "1"
  assert actual == expected

def fizz_buzz(num):
  return str(num)

![tests](fizz/fizzbuzztest.png)

Code for 3 and 5:

def fizz_buzz(num):
  if num % 3 == 0 and num % 5 == 0:
    return "FizzBuzz"

  if num % 3 == 0:
    return "Fizz"

  if num % 5 == 0:
    return "Buzz"
  return str(num)

Test for four

def test_fizz_buzz_four():
  actual = fizz_buzz(4)
  expected = "4"
  assert actual == expected

def test_fizz_buzz_five():
  actual = fizz_buzz(5)
  expected = "Buzz"
  assert actual == expected

def test_fizz_buzz_fifteen():
  actual = fizz_buzz(15)
  expected = "FizzBuzz"
  assert actual == expected

### Recursion

touch fact.py - module
mkdir tests
touch tests/test_fact.py

- In test_fact.py
from fact import factorial

def test_factorial_one():
  actual = factorial(1)
  expected = 1
  assert actual == expected

def test_factorial_three():
  actual = factorial(3)
  expected = 6 
  assert actual == expected

- In fact.py

def factorial(n):
  return 1 if n == 1 else n * factorial(n-1)


#### Explanation:

factorial(n) is a function that calculates the factorial of a number n.
It uses recursion, which is a process where a function calls itself directly or indirectly.
The base case for this recursive function is if n == 1, in which case it returns 1.
For any other value of n, it multiplies n by the factorial of n-1 (n * factorial(n-1)).
This recursive process continues until it reaches the base case, which prevents infinite recursion.
In essence, the function keeps calling itself with smaller values of n until it reaches 1, at which point it starts multiplying those values to compute the factorial.



#### Explanation using the factorial of 3


```python
def factorial(n):
    return 1 if n == 1 else n * factorial(n-1)

# Calculate factorial(3)
factorial(3)
```

Step 1: `factorial(3)` calls `factorial(2)` because `n` is not 1.
Step 2: `factorial(2)` calls `factorial(1)` because `n` is not 1.
Step 3: `factorial(1)` returns 1 because the base case is met (`n` is 1).
Step 4: `factorial(2)` receives the return value (1) and returns `2 * 1 = 2`.
Step 5: `factorial(3)` receives the return value (2) and returns `3 * 2 = 6`.

So, each step involves calling the `factorial` function with decreasing values until it reaches the base case (where `n` equals 1), then computes the results back up the chain.

Install packages
pip3 install pytest


- Pipenv: Install pipenv using the command 'pip install pipenv'.

- Pipenv: To install dependencies, run the command 'pipenv install'.

Add to a file 
echo pytest >> requirements.txt