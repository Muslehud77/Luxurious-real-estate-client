
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Shared/Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <h1>Hello</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;