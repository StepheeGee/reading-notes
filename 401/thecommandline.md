# The Command Line Tutorial - Linux

## Learnings and Observations

### Pre-work 1.6.24

### Resource - [Bash Command Line Tutorials](https://ryanstutorials.net/linuxtutorial/)

## The Command Line

### Overview

A command line, or terminal, is a text based interface to the system. You are able to enter commands by typing them on the keyboard and feedback will be given to you similarly as text.

### Stuff We Learned
- How to access the Command Line interface
- Basic commands to navigate and perform actions

### Important Concepts
- Understanding the Command Line structure
- How commands are executed in a terminal

### My Opinion

I learned the command echo $SHELL to determine what shell my terminal is using. I thought it would be bash. But it's actually zsh. And that's apparently an extended Bourne shell (bash).

---

## Basic Navigation

### Overview

Basic Navigation covers how to move around the system.

### Stuff We Learned
- `pwd`: Print Working Directory - i.e., where are we currently.
- `ls`: List the contents of a directory.
- `cd`: Change Directories - i.e., move to another directory.

### Important Concepts

- Relative path: A file or directory location relative to where we currently are in the file system.
- Absolute path: A file or directory location in relation to the root of the file system.

### Remember this, Steph

~ (tilde) - This is a shortcut for your home directory. eg, if your home directory is /home/ryan then you could refer to the directory Documents with the path /home/ryan/Documents or ~/Documents

. (dot) - This is a reference to your current directory. eg in the example above we referred to Documents on line 4 with a relative path. It could also be written as ./Documents 

.. (dotdot)- This is a reference to the parent directory. You can use this several times in a path to keep going up the hierarchy. eg if you were in the path /home/ryan you could run the command ls ../../ and this would do a listing of the root directory.


---

## More About Files

### Overview

First rule of linux is that deep down, everything is actually a file.

### Stuff We Learned
- file
obtain information about what type of file a file or directory is.
- ls -a
List the contents of a directory, including hidden files.

### Important Concepts

- Everything is a file under Linux
Even directories.
- Linux is an extensionless system
Files can have any extension they like or none at all.
- Linux is case sensitive

### My Opinion

How am I supposed to know which characters have special meanings and require a backslash to nullify?

---

## Manual Pages

### Overview
The manual pages are a set of pages that explain every command available on your system including what they do, the specifics of how you run them and what command line arguments they accept. 

### Stuff We Learned
- man <command>
Look up the manual page for a particular command.

- man -k <search term>
Do a keyword search for all manual pages containing the given search term.

- /<term>
Within a manual page, perform a search for 'term'

- n
After performing a search within a manual page, select the next found item.

### Important Concepts

- The man pages are your friend.
Instead of trying to remember everything, instead remember you can easily look stuff up in the man pages.

### My Opinion
Well, I didn't know the CLI had a manual. I explored it and noticed that you have to enter the command man followed by a keyword. If you just enter man, to see the entire manual, it will yield only results with the command 'man'. It's weird. But I guess as I learn, I'll become more equipped to know what keywords to search in the manual to make navigating the CLI easier.

---

## File Manipulation

### Overview
File Manipulation involves appreciating the hierarchical structure of Linux. Why? Because Linux organizes it's file system in a hierarchical way. 

### Stuff We Learned

- mkdir
Make Directory - ie. Create a directory.

- rmdir
Remove Directory - ie. Delete a directory.

- touch
Create a blank file.

- cp
Copy - ie. Copy a file or directory.

- mv
Move - ie. Move a file or directory (can also be used to rename).

- rm
Remove - ie. Delete a file.

### Important Concepts
- No undo
The Linux command line does not have an undo feature. Perform destructive actions carefully.
- Command line options
Most commands have many useful command line options. Make sure you skim the man page for new commands so you are familiar with what they can do and what is available.

### My Opinion

I wish I had a heart rate monitor on when I read the section that explained that Linux does not have an undo feature. Like why not? I do appreciate that they included a section on removing non empty directories. Because I tried to do that in 301. 

    "A good option to use in combination with r is i which stands for interactive. This option will prompt you before removing each file and directory and give you the option to cancel the command."

## Cheat Sheet

### Bookmark

[Linux Cheatsheet](https://ryanstutorials.net/linuxtutorial/cheatsheet.php)

