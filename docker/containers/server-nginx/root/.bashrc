# set a fancy prompt (non-color, unless we know we "want" color)
case "$TERM" in
    xterm-color|*-256color) color_prompt=yes;;
esac

force_color_prompt=yes
color_prompt=yes

if [ "$color_prompt" = yes ]; then
    PS1='🐳 ${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@vue-symfony-scaffolding-server-nginx\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
else
    PS1='🐳 ${debian_chroot:+($debian_chroot)}\u@vue-symfony-scaffolding-server-nginx:\w\$ '
fi
unset color_prompt force_color_prompt

# If this is an xterm set the title to user@host:dir
case "$TERM" in
xterm*|rxvt*)
    PS1="\[\e]0;${debian_chroot:+($debian_chroot)}\u@vue-symfony-scaffolding-server-nginx: \w\a\]$PS1"
    ;;
*)
    ;;
esac

# enable color support of ls and also add handy aliases
alias ls='ls --color=auto'
alias grep='grep --color=auto'
alias fgrep='fgrep --color=auto'
alias egrep='egrep --color=auto'

# colored GCC warnings and errors
#export GCC_COLORS='error=01;31:warning=01;35:note=01;36:caret=01;32:locus=01:quote=01'

# some more ls aliases
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'
