# Data Structures and Algorithms

## Prework (late) 1.12.24

## Statement

This assignment covers the complexities of Data Structures.

## Questions

1. **Consideration for Data Structures:**
   One of the crucial factors to consider when choosing a data structure is the **nature of the operations** that will be performed on the data. Different data structures excel at different types of operations. For example:
   - If the primary operation is searching, a hash table or a binary search tree might be efficient.
   - If the primary operation is inserting and deleting elements frequently, a linked list or a dynamic array may be more suitable.
   - If there is a need for efficient retrieval of the minimum or maximum element, a heap might be appropriate.



2. **Avoiding Infinite Recursive Call Stack:**
   To prevent an infinite recursive call stack, you can take the following precautions:

   - **Base Case:** Always include a proper base case in your recursive function. The base case is the condition under which the function stops calling itself and returns a result. Ensuring a well-defined base case is crucial to prevent infinite recursion.

   - **Check Inputs:** Before making a recursive call, verify that the input parameters satisfy the conditions for the base case or are within acceptable limits. This helps prevent unnecessary recursive calls that could lead to a stack overflow.

   - **Tail Recursion:** If your programming language supports it, consider using tail recursion. Tail recursion is a specific form of recursion where the recursive call is the last operation in the function. Some languages optimize tail recursion, converting it into an iterative process, which avoids stack overflow.

   - **Iteration or Stack:** In some cases, you might consider converting the recursive algorithm into an iterative one or using an explicit stack to manage the recursion manually. This can help control the depth of recursion and prevent stack overflow.


## Resources

ChatGPT

[Big Data Structures](https://towardsdatascience.com/8-common-data-structures-every-programmer-must-know-171acf6a1a42)

[Why Big O](https://web.archive.org/web/20230207075759/https://triplebyte.com/blog/why-you-should-learn-big-o-and-stop-hacking-your-way-through-algorithms)

## Bookmark

## Things I want to know more about

Big O. I'm having trouble grasping the difference between the time and space complexity.