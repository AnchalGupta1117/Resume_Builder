

// PROFILE INFO CARDS
export const ProfileInfoCard = () => {
    const navigate = useNavigate();
    const { user,clearUser } = useContext(UserContext);

    const handleLogout = () => {
        localStorage.clear();
        clearUser();
        navigate('/');
    }

    return (
        user && (
            <div className={cardStyles.profileCard}>
                <div className={cardStyles.profileInitialContainer}>
                    <span className={cardStyles.profileInitialsText}>
                        {user.name ? user.name.charAt(0).toUpperCase() : ""}  
                    </span>
                </div>
                <div className={cardStyles.profileName}>
                    {user.name || ""}
                </div>
                <button className={cardStyles.logoutButton} 
                    onClick={handleLogout}>
                    Logout
                </button>
            </div>
        )
    );
}
