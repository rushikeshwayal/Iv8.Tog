function Nav() {
    return (
        <div className=""> {/* Add a background color to the navbar */}
            <ul className="flex flex-col sm:flex-row justify-around items-center p-5 text-white space-y-4 sm:space-y-0 sm:space-x-96 flex-wrap">
                {/* Logo */}
                <div className="flex justify-center sm:justify-start w-full sm:w-auto">
                    <li className="font-bold text-3xl">
                        <a href="/home">Iv8.Tog</a>
                    </li>
                </div>

                {/* Navigation Links */}
                <div className="flex justify-around flex-wrap w-full sm:w-auto space-x-5 sm:space-x-10">
                    <li>
                        <a href="/projects">Projects</a>
                    </li>
                    {/* <li>
                        <a href="/mentors">Mentor</a>
                    </li> */}
                    <li>
                        <a href="/topics">Topics</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/profile">Profile</a>
                    </li>
                </div>
            </ul>
        </div>
    );
}

export default Nav;
