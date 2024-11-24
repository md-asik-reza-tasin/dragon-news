import BreakingNews from "../Components/BreakingNews";
import Header from "../Components/Header";
import MainContent from "../Components/MainContent";
import Navbar from "../Components/Navbar";

export default function Home () {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <MainContent></MainContent>
        </div>
    )
}