## Revisions and the Cloud

###### 10.10.23

![Alt text](outdoor-shot-of-blue-sky-and-clouds-and-sun-behind-2022-08-18-06-04-31-utc.JPG)

### What is Version Control?'

#### Version control, also known as source control or revision control, is a system or software that tracks changes to files and directories over time. It helps manage and organize different versions of a project or set of files, enabling collaboration among multiple contributors and facilitating the tracking of changes, additions, and deletions made to the project.*

*Key features and purposes of version control systems (VCS) include:*

+ Tracking Changes: VCS tracks changes made to files and directories, recording modifications, additions, deletions, and even metadata changes (e.g., permissions, timestamps).

+ Collaboration: VCS allows multiple users to work on the same project simultaneously. It manages conflicts and merges contributions from different team members.

+ History and Audit Trail: VCS provides a complete history of changes made to the project, allowing users to review and compare versions, view who made specific changes, and understand the evolution of the project.

+ Reverting to Previous States: Users can revert to previous versions or states of the project, undoing changes and restoring the project to a specific point in time.

+ Branching and Merging: VCS enables branching to create separate lines of development. Branches can be used for experimentation, bug fixing, or feature development. Merging allows the integration of changes from one branch to another.

+ Collaborative Development: Version control fosters collaborative development by providing a structured environment for contributions from multiple developers, ensuring smooth integration of changes and minimizing conflicts.

+ Backup and Redundancy: VCS serves as a backup mechanism by storing project versions remotely or in distributed systems. This helps in disaster recovery and ensuring data integrity.

### What is cloning in Git?

In GitHub, "cloning" refers to the process of creating a local copy of a remote repository (a repository hosted on GitHub or a similar platform) onto your own computer. This copy includes all the files, commit history, branches, and other information related to the repository. Cloning is a fundamental action that allows you to work with the repository locally, make changes, and contribute to the project.

Here's how you typically clone a GitHub repository:

1. Find the Repository:
Navigate to the GitHub repository you want to clone. The repository will have a URL in the format https://github.com/username/repository-name.

2. Get the Repository URL:
Click on the "Code" button to get the repository URL. Choose either HTTPS or SSH, depending on your authentication method.

3. Open Terminal:
Open a terminal on your local machine.

4. Clone the Repository:
Use the git clone command followed by the repository URL to clone the repository. For example, to clone using HTTPS: git clone https://github.com/username/repository-name.git.
 This command creates a new directory with the name of the repository and downloads all the repository's contents into it.

5. Once the cloning process is complete, you'll have a local copy of the repository on your machine. You can now make changes, create new branches, push changes back to the remote repository, and collaborate with others on the project. Cloning is a crucial step in contributing to open-source projects and collaborating with teams using version control systems like Git and platforms like GitHub.

### What is the command to track and stage files?


To track and stage files in Git, you typically use the following Git commands:

To Track Files:
To start tracking a new file or track changes in an existing file, you use the git add command followed by the file(s) you want to track. This adds the files to the staging area, preparing them for the next commit.

git add filename   # Track a specific file

To track all changes in the current directory and its subdirectories, you can use a period (.):

git add .          # Track all changes in the current directory.

To Stage Files:
The files added using git add are staged, which means they are ready to be included in the next commit. To commit these changes to the repository and create a new version of your project, you use the git commit command.

To Stage Files:
The files added using git add are staged, which means they are ready to be included in the next commit. To commit these changes to the repository and create a new version of your project, you use the git commit command.

git commit -m "Your commit message"   # Commit staged changes with a message

This command stages all files previously added using git add and permanently saves them in the repository with the provided commit message.

By using these commands (git add and git commit), you can track new or modified files, stage them for the next commit, and then commit them to the Git repository, effectively saving a new version of your project. This process is fundamental in using Git for version control and collaborative development.

### What is the command to take a snapshot of your changed files?


In Git, the command to take a snapshot of your changed files and save it as a new commit is git commit. This command is used to permanently record the changes you've staged (using git add) into the Git repository, creating a new version of your project.

Here's the basic usage of the git commit command:

git commit -m "Your commit message"

-m stands for "message," and you provide a descriptive message in quotes summarizing the changes made in this commit.
When you run this command, Git creates a new commit with the files you've staged (using git add) and the commit message you provided. This commit becomes part of the project's history, allowing you to track changes, collaborate, and revert if needed.


After committing, you've effectively taken a snapshot of your project with the changes you staged and documented the changes in the commit message. This snapshot becomes a part of your project's history and can be referred to or reverted to at any time.

### What is the command to send your changed files to Github?

Sources: https://blog.udemy.com/git-tutorial-a-comprehensive-guide/


