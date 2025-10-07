import React from 'https://esm.sh/react@18.3.1';
import { useNavigate } from 'https://esm.sh/react-router-dom@6.23.0';
import { liveTrades, topCollectors, onlineUsers, auctionLots, clanLeaderboard } from '../data/mockData.js';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column gap-4 gap-lg-5">
      <section className="surface-card">
        <div className="surface-card-header flex-wrap gap-3">
          <div>
            <div className="tag tag-live">Prototype Preview</div>
            <h2 className="section-title mt-2">MegaTrade Labs</h2>
            <p className="text-muted mb-0">
              Оберіть нову фічу, щоб переглянути інтерактивний прототип. Кожен модуль наслідує візуал MegaTrade.GG.
            </p>
          </div>
          <div className="d-flex flex-wrap gap-2">
            <button className="btn btn-outline-mega" onClick={() => navigate('/auction')}>
              Перейти до аукціонів
            </button>
            <button className="btn btn-mega" onClick={() => navigate('/quests')}>
              Подивитися квести
            </button>
          </div>
        </div>
        <div className="mega-grid mt-3">
          <div className="feature-card">
            <div>
              <div className="feature-icon auction">⚖️</div>
              <h3>Аукціони</h3>
              <p>Динамічні ставки, таймер завершення та історія учасників з миттєвим оновленням.</p>
            </div>
            <button className="btn btn-mega" onClick={() => navigate('/auction')}>
              Відкрити модуль
            </button>
          </div>
          <div className="feature-card">
            <div>
              <div className="feature-icon quests">🎯</div>
              <h3>Квести та досягнення</h3>
              <p>Лінії прогресу, нагороди та сезонні активності, що мотивують колекціонерів.</p>
            </div>
            <button className="btn btn-mega" onClick={() => navigate('/quests')}>
              До прогресу
            </button>
          </div>
          <div className="feature-card">
            <div>
              <div className="feature-icon profile">🌈</div>
              <h3>Кастомні профілі</h3>
              <p>Потужний редактор стилів з динамічними фонами, рамками та вітриною карток.</p>
            </div>
            <button className="btn btn-mega" onClick={() => navigate('/profile-customization')}>
              Налаштувати вигляд
            </button>
          </div>
          <div className="feature-card">
            <div>
              <div className="feature-icon clans">🛡️</div>
              <h3>Кланові кімнати</h3>
              <p>Елітні трейди в межах альянсів, рейтинг кланів та live-хроніка угод.</p>
            </div>
            <button className="btn btn-mega" onClick={() => navigate('/clans')}>
              Переглянути клан-хаби
            </button>
          </div>
        </div>
      </section>

      <section className="row g-4">
        <div className="col-12 col-lg-6 d-flex flex-column gap-4">
          <div className="surface-card">
            <div className="surface-card-header">
              <h5>Live trades</h5>
              <span className="badge-soft">+12% активність</span>
            </div>
            <div className="d-flex flex-column gap-3">
              {liveTrades.map((trade) => (
                <div key={trade.id} className="d-flex flex-column gap-3 p-3 rounded-4" style={{ background: 'rgba(124,92,255,0.05)' }}>
                  <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                    <div className="d-flex align-items-center gap-3">
                      <img src={trade.traderA.avatar} alt={trade.traderA.name} className="rounded-circle" width="48" height="48" />
                      <div>
                        <strong>{trade.traderA.name}</strong>
                        <div className="text-muted small">{trade.traderA.clan}</div>
                      </div>
                    </div>
                    <span className={`tag ${trade.type === 'clan' ? 'tag-warning' : 'tag-success'}`}>
                      {trade.type === 'clan' ? 'Clan trade' : 'Player trade'}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center gap-3 flex-wrap">
                    <div className="d-flex gap-2">
                      {trade.traderA.items.map((item, idx) => (
                        <div key={idx} className="inventory-card" style={{ minWidth: '100px' }}>
                          <img src={item.art} alt={item.name} />
                          <div className="fw-semibold small">{item.name}</div>
                          <small className="text-muted">{item.rarity}</small>
                        </div>
                      ))}
                    </div>
                    <span className="fw-bold text-muted">⇄</span>
                    <div className="d-flex gap-2">
                      {trade.traderB.items.map((item, idx) => (
                        <div key={idx} className="inventory-card" style={{ minWidth: '100px' }}>
                          <img src={item.art} alt={item.name} />
                          <div className="fw-semibold small">{item.name}</div>
                          <small className="text-muted">{item.rarity}</small>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="d-flex justify-content-between text-muted small">
                    <span>{trade.timestamp}</span>
                    <span>vs {trade.traderB.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card">
            <div className="surface-card-header">
              <h5>Кланові аукціони</h5>
              <a className="text-muted small" onClick={() => navigate('/clans')} role="button">
                Перейти до альянсів →
              </a>
            </div>
            <div className="d-flex flex-column gap-3">
              {auctionLots.slice(0, 2).map((lot) => (
                <div key={lot.id} className="d-flex gap-3 align-items-center p-3 rounded-4" style={{ background: 'rgba(56,189,248,0.08)' }}>
                  <img src={lot.image} alt={lot.title} className="rounded-4" width="88" height="88" />
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                      <div>
                        <h6 className="mb-1 fw-bold">{lot.title}</h6>
                        <span className="tag tag-live">{lot.rarity}</span>
                      </div>
                      <div className="text-end">
                        <div className="fw-bold">{lot.currentBid}c</div>
                        <small className="text-muted">Таймер: {lot.timeLeft}</small>
                      </div>
                    </div>
                    <div className="text-muted small mt-2">
                      {lot.bids[0].bidder} веде з {lot.bids[0].amount}c · {lot.watchers} спостерігачів
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6 d-flex flex-column gap-4">
          <div className="surface-card">
            <div className="surface-card-header">
              <h5>Топ колекціонери</h5>
              <button className="btn btn-outline-mega btn-sm" onClick={() => navigate('/profile-customization')}>
                Переглянути профілі
              </button>
            </div>
            <div className="d-flex flex-column gap-2">
              {topCollectors.map((collector) => (
                <div key={collector.rank} className="d-flex justify-content-between align-items-center p-3 rounded-4" style={{ background: 'rgba(18,23,29,0.03)' }}>
                  <div className="d-flex align-items-center gap-3">
                    <span className="fw-bold badge-soft">#{collector.rank}</span>
                    <div>
                      <div className="fw-semibold">{collector.name}</div>
                      <small className="text-muted">{collector.total} карток</small>
                    </div>
                  </div>
                  <span className="text-muted small">↑ У змаганні</span>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card">
            <div className="surface-card-header">
              <h5>Онлайн користувачі</h5>
              <span className="text-muted small">Режим live</span>
            </div>
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <h6 className="fw-bold mb-2">Активні</h6>
                <div className="d-flex flex-column gap-2">
                  {onlineUsers.active.map((user) => (
                    <div key={user.name} className="d-flex justify-content-between align-items-center p-2 rounded-3" style={{ background: 'rgba(124,92,255,0.06)' }}>
                      <span className="fw-semibold">{user.name}</span>
                      <span className="text-success small">● {user.status}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-12 col-md-6">
                <h6 className="fw-bold mb-2">Щойно були</h6>
                <div className="d-flex flex-column gap-2">
                  {onlineUsers.recent.map((user) => (
                    <div key={user.name} className="d-flex justify-content-between align-items-center p-2 rounded-3" style={{ background: 'rgba(18,23,29,0.03)' }}>
                      <span className="fw-semibold">{user.name}</span>
                      <span className="text-muted small">{user.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="surface-card">
            <div className="surface-card-header">
              <h5>Клановий рейтинг</h5>
              <button className="btn btn-outline-mega btn-sm" onClick={() => navigate('/clans')}>
                Повний рейтинг
              </button>
            </div>
            <div className="d-flex flex-column gap-2">
              {clanLeaderboard.slice(0, 3).map((clan) => (
                <div key={clan.rank} className="d-flex justify-content-between align-items-center p-3 rounded-4" style={{ background: 'rgba(37,99,235,0.06)' }}>
                  <div>
                    <div className="fw-bold">#{clan.rank} {clan.clan}</div>
                    <small className="text-muted">{clan.members} учасників · {clan.bonuses}</small>
                  </div>
                  <span className="fw-bold">{clan.rating}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
