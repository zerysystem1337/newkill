body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: url('main_menu.png') no-repeat center center fixed;
    background-size: cover;
    color: white;
    opacity: 0;
    animation: fadeIn 1s ease forwards;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

.logo {
    display: flex;
    align-items: center;
}

.logo img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
}

.logo span:first-child {
    font-size: 26px;
    font-weight: bold;
}

.nextgen {
    margin-left: 10px;
    padding: 2px 5px;
    background-color: green;
    border-radius: 3px;
    font-size: 12px;
    font-weight: bold;
    user-select: none;
    transition: background-color 0.3s ease;
}

.nextgen:hover {
    background-color: darkgreen;
}

.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 100px;
}

.download-btn {
    background-color: green;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
    border-radius: 5px;
}

.download-btn:hover {
    background-color: darkgreen;
}

@media (max-width: 600px) {
    header {
        flex-direction: column;
    }

    .logo span:first-child {
        font-size: 20px;
    }

    .nextgen {
        font-size: 10px;
    }

    .main {
        margin-top: 50px;
    }
}

.header-discord-icon {
    max-width: 41px; /* Меньший размер аватарки дискорда */
    max-height: 41px; /* Меньший размер аватарки дискорда */
    transition: transform 0.3s ease;
}

.header-discord-icon:hover {
    transform: scale(1.2);
}
