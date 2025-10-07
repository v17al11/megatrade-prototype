import { Routes, Route } from 'react-router-dom';
import TopNav from './components/TopNav.jsx';
import Dashboard from './modules/Dashboard.jsx';
import AuctionModule from './modules/AuctionModule.jsx';
import QuestModule from './modules/QuestModule.jsx';
import ProfileCustomizationModule from './modules/ProfileCustomizationModule.jsx';
import ClanModule from './modules/ClanModule.jsx';

const App = () => {
  return (
    <div className="app-shell">
      <TopNav />
      <main className="container py-4 py-md-5">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/auction" element={<AuctionModule />} />
          <Route path="/quests" element={<QuestModule />} />
          <Route path="/profile-customization" element={<ProfileCustomizationModule />} />
          <Route path="/clans" element={<ClanModule />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
