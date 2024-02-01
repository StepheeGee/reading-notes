# Bash Cheat Sheet

1. **Navigation:**
   - `cd`: Change directory.
   - `pwd`: Print the current working directory.
   - `ls`: List files and directories in the current directory.
   - `ls -l`: List files in long format, providing detailed information.

2. **File and Directory Manipulation:**
   - `touch <filename>`: Create an empty file.
   - `mkdir <dirname>`: Create a new directory.
   - `cp <source> <destination>`: Copy files or directories.
   - `mv <source> <destination>`: Move or rename files or directories.
   - `rm <filename>`: Remove (delete) a file.
   - `rmdir <dirname>`: Remove an empty directory.
   - `rm -r <dirname>`: Remove a directory and its contents recursively.

3. **File Viewing and Editing:**
   - `cat <filename>`: Display the content of a file.
   - `less <filename>`: View a file interactively.
   - `nano <filename>` or `vim <filename>`: Open a text editor to edit a file.

4. **File Permissions:**
   - `chmod <permissions> <filename>`: Change file permissions.
   - `chown <user>:<group> <filename>`: Change file owner and group.

5. **Searching and Finding:**
   - `grep <pattern> <filename>`: Search for a pattern in a file.
   - `find <directory> -name <filename>`: Find files by name.

6. **Archives and Compression:**
   - `tar -czvf <archive.tar.gz> <directory>`: Create a compressed archive.
   - `tar -xzvf <archive.tar.gz>`: Extract files from a compressed archive.

7. **Process Management:**
   - `ps`: List currently running processes.
   - `kill <process_id>`: Terminate a process.
   - `killall <process_name>`: Terminate all processes with a specific name.

8. **System Information:**
   - `uname -a`: Display system information.
   - `df -h`: Show disk space usage.
   - `free -h`: Display free and used memory.

9. **Network Commands:**
   - `ping <hostname>`: Send ICMP echo request to a host.
   - `nslookup <hostname>`: Look up the IP address of a domain.
   - `ifconfig` or `ip a`: Display network interface information.

10. **Python and Virtual Environment:**

   - `python3 -m venv .venv`: Create a virtual environment named `.venv` using Python 3.
   - `source .venv/bin/activate`: Activate the virtual environment.
   - `pip freeze > requirements.txt`: Save the current environment's package list to a `requirements.txt` file.
   - `pip install -r requirements.txt`: Install the dependencies specified in the `requirements.txt` file, recreating the virtual environment with the same packages and versions.

11. **Other:**
   - `clear`: Clear the terminal screen.
   - `exit`: Exit the shell. or `Ctrl+C`: Cancel the current command.
   - `help <command>`: Get help for a command.
   - `man <command>`: Get help for a command in the manual.
   - `history`: View the command history.
   - `date`: Display the current date and time.
   - `cal`: Display a calendar for the current month.
   - `echo <text>`: Print a message to the console.


