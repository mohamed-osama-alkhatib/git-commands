const initialCodes = [
  {
    id: 1,
    title: "Change directory",
    code: "cd myFolder",
  },
  {
    id: 2,
    title: "Create a folder",
    code: "mkdir myFolder",
  },
  {
    id: 3,
    title: "Clone a repository",
    code: "git clone linkOfTheRepo",
  },
  {
    id: 4,
    title: "List files and directories",
    code: "dir",
  },
  {
    id: 5,
    title: "Check git status",
    code: "git status",
  },
  {
    id: 6,
    title: " Add files to staging area",
    code: "git add filesName",
  },
  {
    id: 7,
    title: " Undo changes in staging area",
    code: "git reset HEAD filesName",
  },
  {
    id: 8,
    title: "Comment changes",
    code: "git commit -m 'message'",
  },
  {
    id: 9,
    title: "Show branches",
    code: "git branch",
  },
  {
    id: 10,
    title: "Show remote repository",
    code: "git remote -v",
  },
  {
    id: 11,
    title: "Push changes to remote repository",
    code: "git push origin branchName",
  },
  {
    id: 12,
    title: "Pull changes from remote repository",
    code: "git pull origin",
  },
  {
    id: 13,
    title: "Show git configuration",
    code: "git config -l",
  },
  {
    id: 14,
    title: "Help with git config",
    code: "git help config",
  },
  {
    id: 15,
    title: "Set git configuration",
    code: "git config --global YourConfig 'value'",
  },
  {
    id: 16,
    title: "Show origin of git configuration",
    code: "git config -l --show-origin",
  },
  {
    id: 17,
    title: "Unset git configuration",
    code: "git config --global --unset YourConfig",
  },
  {
    id: 18,
    title: " Edit git configuration file manually in a text editor",
    code: "git config --global --edit",
  },
  {
    id: 19,
    title: " set color for git output",
    code: ` [color "status"]
	added = green
	changed = red bold
	untracked = magenta bold
[color "branch"]
	remote = yellow`,
  },
  {
    id: 20,
    title: " Generate SSH key",
    code: "ssh-keygen -t rsa -b 4096 -C 'email'",
  },
  {
    id: 21,
    title: " Start the ssh-agent in the background",
    code: "ssh -T git@github.com",
  },
  {
    id: 22,
    title: "Initialize a new git repository",
    code: "git init",
  },
  {
    id: 23,
    title: "Add remote repository",
    code: "git remote add origin linkOfTheRepo",
  },
  {
    id: 24,
    title: "Push changes and set upstream branch",
    code: "git push -u origin main",
  },
  {
    id: 25,
    title: "Create a git alias",
    code: "git config --global alias.YourAlias 'YourGitCommand'",
  },
  {
    id: 26,
    title: " Common git aliases",
    code: `[alias]
    br = branch
    cl = clone
    cm = commit -m
    co = checkout
    cn = clean -n
    cf = clean -f
    mg = merge
    rh = reset HEAD --
    rv = remote -v
    rs = restore --staged
    st = status
    sh = stash
    po = pull origin

    cfl = config -l
    cfg = config --global
    hcf = help config
    pom = push origin main
    prm = pull origin main --rebase

    sh-l = stash list
    sh-s = stash save
    sh-a = stash apply
    sh-p = stash pop
    sh-d = stash drop
    sh-w = stash show
    sh-c = stash clear
    sh-b = stash branch

    cflso = config -l --show-origin
`,
  },
  {
    id: 27,
    title: "Create a new branch",
    code: "git branch newBranchName",
  },
  {
    id: 28,
    title: "Switch to a branch",
    code: "git checkout branchName",
  },
  {
    id: 29,
    title: "Create and switch to a new branch",
    code: "git checkout -b newBranchName",
  },
  {
    id: 30,
    title: "Delete a branch",
    code: "git checkout -d branchName",
  },
  {
    id: 31,
    title: "Force delete a branch",
    code: "git checkout -D branchName",
  },
  {
    id: 32,
    title: "rename a branch",
    code: "git branch -m oldBranchName newBranchName",
  },
  {
    id: 33,
    title: "Merge a branch into the current branch",
    code: "git merge branchName",
  },
  {
    id: 34,
    title: "Stash changes",
    code: "git stash",
  },
  {
    id: 35,
    title: "Apply stashed changes",
    code: "git stash pop",
  },
  {
    id: 36,
    title: " Apply a specific stash and remove it from the stash list",
    code: "git stash pop stash@{ID}",
  },
  {
    id: 37,
    title: "List all stashes",
    code: "git stash list",
  },
  {
    id: 38,
    title:
      "Take copy of stashed changes without removing it from the stash list",
    code: "git stash apply",
  },
  {
    id: 39,
    title:
      "Take copy of a specific stashed changes without removing it from the stash list",
    code: "git stash apply stash@{ID}",
  },
  {
    id: 40,
    title: "Stash changes with a message",
    code: "git stash save 'message'",
  },
  {
    id: 41,
    title: "Delete The last stash",
    code: "git stash drop",
  },
  {
    id: 42,
    title: "Delete a specific stash",
    code: "git stash drop stash@{ID}",
  },
  {
    id: 43,
    title: "Show changes in the last stash",
    code: "git stash show",
  },
  {
    id: 44,
    title: "Show changes in a specific stash",
    code: "git stash show stash@{ID}",
  },
  {
    id: 45,
    title: "Clear all stashes",
    code: "git stash clear",
  },
  {
    id: 46,
    title: "Undo changes in staging area",
    code: "git restore --staged fileName",
  },
  {
    id: 47,
    title: "Preview which files will be removed",
    code: "git clean -n",
  },
  {
    id: 48,
    title: "Remove untracked files from working directory",
    code: "git clean -f",
  },
  {
    id: 49,
    title: "Show commit history",
    code: "git log",
  },
  {
    id: 50,
    title: " Reset to a specific commit and discard all changes",
    code: "git reset --hard commitID",
  },
  {
    id: 51,
    title: " Create a .gitignore file to ignore files and directories",
    code: "touch .gitignore",
  },
  {
    id: 52,
    title: "Force add files to staging area",
    code: "git add -f fileName",
  },
  {
    id: 53,
    title: "Create a tag",
    code: "git tag tagName",
  },
  {
    id: 54,
    title: "Push a tag to remote repository",
    code: "git push origin tagName",
  },
  {
    id: 55,
    title: "Create an annotated tag",
    code: "git tag -a tagName -m 'message'",
  },
  {
    id: 56,
    title: "Show details of a specific tag",
    code: "git tag -l 'pattern*'",
  },
  {
    id: 57,
    title: "Delete a tag",
    code: "git tag -d tagName",
  },
  {
    id: 58,
    title: "Delete a tag from remote repository",
    code: "git push origin --delete tagName",
  },
];

export default initialCodes;
