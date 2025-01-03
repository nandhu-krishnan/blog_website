import '../Style/SideMenu.css'

function SideMenu() {
    return(
        <>
            <div className="sideMenuDiv">
                <ul>
                    <a href="#"><li>Profile</li></a>
                    <a href="#"><li>Streak Menu</li></a>
                    <a href="#"><li>Logout</li></a>
                </ul>
            </div>
        </>
    );
}

export default SideMenu