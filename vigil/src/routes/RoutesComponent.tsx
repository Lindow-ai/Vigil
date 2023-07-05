import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AppBar from '../layout/AppBar';
import AppBarMenu from '../layout/AppBarMenu';

const RoutesComponent = () => {
    return (
        <div>
            <AppBar />
            <AppBarMenu />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    )
}

export default RoutesComponent;