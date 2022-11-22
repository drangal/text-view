import { Link, useNavigate, Outlet } from "react-router-dom";

export const Layout = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <>
        <header>
            <Link to={"/"}>На главную</Link>&nbsp;
            <Link to={"/wallet"}>Счёт</Link>&nbsp;
            <Link to={"/opers"}>Пополнить/Снять</Link>&nbsp;
            <Link to={"/about"}>О нас</Link>&nbsp;
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <button onClick={goBack}>Вернуться на прошлую страницу</button>
        </footer>
        </>
    );
}