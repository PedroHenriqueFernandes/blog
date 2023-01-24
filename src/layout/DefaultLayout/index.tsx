import { Header } from "../../components/Header";
import { Outlet } from "react-router-dom";
import { LayoutContainer, LayoutOutlet } from "./styles";

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header />
            <LayoutOutlet>
                <Outlet />
            </LayoutOutlet>
        </LayoutContainer>
    )
}