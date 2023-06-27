import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AppBar from '../layout/AppBar';

const RoutesComponent = () => {
    return (
        <div>
            <AppBar />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    )
}

export default RoutesComponent;