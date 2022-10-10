import logo from '../Logo.svg';
// import './NavBar.css';

// function NavBar() {
//     return (
//         <nav class='menu-container'>
//             <input type="checkbox" aria-label="Toggle menu" />
//             <span></span>
//             <span></span>
//             <span></span>
//             <a href='#' class='menu-logo'>
//                 <img src={logo} className="App-logo" alt="logo" />
//             </a>
//             <div class="menu">
//                 <ul>
//                     <li><a href="#home">Home</a></li>
//                     <li><a href="#about">About Me</a></li>
//                     <li><a href="#project">My Project</a></li>
//                     <li><a href="#contact">Contact</a></li>
//                 </ul>
//             </div>
//         </nav>
//     )
// }

function NavBar() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">
                    <img src={logo} width="60" height="45" class="d-inline-block align-top" alt="logo" />
                    Bootstrap
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">My Project</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Contact</a>
                    </li>
                    </ul>
                </div>
             </nav>
        )
    }


export default NavBar;