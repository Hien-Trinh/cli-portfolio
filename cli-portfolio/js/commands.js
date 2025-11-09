var linkedin = "https://www.linkedin.com/in/hien-trinh-b35a4a206/"
var github = "https://github.com/Hien-Trinh"
var resume =
    "https://docs.google.com/document/d/1GOZHo4YuVhwCTcy1ZD2uZjQ-Mw3Uko8eFv_o9spxLEI/edit?usp=sharing"
var email = "mailto:htrinh@macalester.edu"

var projects = {
    Compiler: "https://github.com/Hien-Trinh/self-compiling-compiler",
    Virtu: "https://github.com/Hien-Trinh/Virtu-journal",
    Virtu_web: "https://virtujournal.org",
    InterpreterGo: "https://github.com/Hien-Trinh/interpreter-go",
    Realtimetexteditor: "https://github.com/Hien-Trinh/realtime-text-editor",
    CLIPortfolio: "https://github.com/Hien-Trinh/cli-portfolio",
    OldPortfolio: "https://github.com/Hien-Trinh/portfolio",
    Pokedex: "https://github.com/Hien-Trinh/pokedex",
    TowerOfHanoi: "https://github.com/Hien-Trinh/tower-of-hanoi",
}

whois = [
    "<br>",
    "Hey, I'm David!",
    "I’m a full-time junior student at Macalester College in Minnesota. Most of my projects are special",
    "in-class projects, with some passion projects in between. I designed this website as a fun way to",
    "practice using Vim motions and commands. I quite enjoyed learning zsh and using it on the MacOS CLI,",
    "which the majority of the population may not find intuitive, to that I apologies. I hope all you Linux",
    "users and tech geeks enjoy it!",
    "<br>",
]

whoami = ["<br>", "An amazing person stumbling on an amazing website.", "<br>"]

social = [
    "<br>",
    'linkedin       <a href="' +
        linkedin +
        '" target="_blank">linkedin.com/hien-trinh' +
        "</a>",
    'github         <a href="' +
        github +
        '" target="_blank">github.com/Hien-Trinh' +
        "</a>",
    'resume         <a href="' +
        resume +
        '" target="_blank">Resume Google Doc' +
        "</a>",
    "<br>",
]

projects = [
    "<br>",
    '<span class="project"><a href="' +
        projects["Compiler"] +
        '" target=”_blank”>Self-hosted Compiler</a></span>          A self-hosted compiler for my own programming language.',
    '<span class="project"><a href="' +
        projects["Virtu"] +
        '" target=”_blank”>Virtu Journal       </a></span>          A front-end website for your typical student organization. Pay it a visit: <a href="' +
        projects["Virtu_web"] +
        '" target=”_blank”>virtujournal.org</a> ',
    '<span class="project"><a href="' +
        projects["InterpreterGo"] +
        '" target=”_blank”>Interpreter in Go   </a></span>          A language interpreter written in Go.',
    '<span class="project"><a href="' +
        projects["Realtimetexteditor"] +
        '" target=”_blank”>Realtime Text Editor</a></span>          Your run-of-the-mill text editor supporting real-time collaboration using JS and MongoDB.',
    '<span class="project"><a href="' +
        projects["CLIPortfolio"] +
        '" target=”_blank”>CLI Portfolio       </a></span>          You are here!',
    '<span class="project"><a href="' +
        projects["OldPortfolio"] +
        '" target=”_blank”>Old Portfolio       </a></span>          I flew too close to the sun with this one. Nextjs + Tailwind.',
    '<span class="project"><a href="' +
        projects["Pokedex"] +
        '" target=”_blank”>Pokedex CLI Game    </a></span>          Fun project to learn Go, error handling and safe backend practices.',
    '<span class="project"><a href="' +
        projects["TowerOfHanoi"] +
        '" target=”_blank”>Tower of Hanoi      </a></span>          COMP128 final project. Typical Java game but had a lot of fun collaborating with a partner.',
    "<br>",
]

help = [
    "<br>",
    '<span class="command">whois</span>          Who is David?',
    '<span class="command">whoami</span>         Who are you?',
    '<span class="command">social</span>         Display social networks',
    '<span class="command">projects</span>       View coding projects',
    '<span class="command">history</span>        View command history',
    '<span class="command">help</span>           You obviously already know what this does',
    '<span class="command">clear</span>          Clear terminal',
    '<span class="command">banner</span>         Display the header',
    "<br>",
]

banner = [
    '<span class="index"> Last login: Tue Jul  9 13:29:24 on ttys000</span>',
    "    ________  ________  ___      ___ ___  ________          __________",
    "   |\\   ___ \\|\\   __  \\|\\  \\    /  /|\\  \\|\\   ___ \\        |\\___   ___\\",
    "   \\ \\  \\_|\\ \\ \\  \\|\\  \\ \\  \\  /  / | \\  \\ \\  \\_|\\ \\       \\|___ \\  \\_|           /^--^\\     /^--^\\     /^--^\\",
    "    \\ \\  \\ \\\\ \\ \\   __  \\ \\  \\/  / / \\ \\  \\ \\  \\ \\\\ \\           \\ \\  \\            \\____/     \\____/     \\____/",
    "     \\ \\  \\_\\\\ \\ \\  \\ \\  \\ \\    / /   \\ \\  \\ \\  \\_\\\\ \\           \\ \\  \\ ___      /      \\   /      \\   /      \\",
    "      \\ \\_______\\ \\__\\ \\__\\ \\__/ /     \\ \\__\\ \\_______\\           \\ \\__\\\\__\\    |        | |        | |        |",
    "       \\|_______|\\|__|\\|__|\\|__|/       \\|__|\\|_______|            \\|__||__|     \\__  __/   \\__  __/   \\__  __/",
    "|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^\\ \\^|^|^|^/ /^|^|^|^|^\\ \\^|^|^|^|",
    "| | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |\\ \\| | |/ /| | | | | |\\ \\| | | |",
    "#####################################################################################/ /#####\\ \\###########/ /#######",
    "| | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | | |\\/ | | | \\/| | | | | |\\/ | | | | © 2024",
    "<br/>",
    '<span class="color2">Welcome to my interactive web terminal.</span>',
    '<span class="color2">For a list of available commands, type</span> <span class="command">\'help\'</span><span class="color2">.</span>',
]
