import { clanLeaderboard, clanTrades, clanRooms } from '../data/mockData.js';

const ClanModule = () => {
  return (
    <div className="d-flex flex-column gap-4 gap-lg-5">
      <section className="surface-card">
        <div className="surface-card-header flex-wrap gap-3 align-items-start">
          <div>
            <div className="tag tag-warning">Альянси</div>
            <h2 className="section-title mt-2">Кланові кімнати та рейтинги</h2>
            <p className="text-muted mb-0">
              Користувачі об’єднуються у кланові кімнати з ексклюзивними трейдами, внутрішніми аукціонами та власним рейтингом.
              Система показує live-хроніку угод і бонуси, які отримують топ-групи.
            </p>
          </div>
          <div className="d-flex flex-wrap gap-2">
            <span className="progress-pill">8 кланів у сезоні</span>
            <span className="progress-pill" style={{ background: 'rgba(56,189,248,0.15)', color: '#2563eb' }}>
              Нові кімнати live
            </span>
          </div>
        </div>

        <div className="row g-4 align-items-start">
          <div className="col-12 col-xl-7 d-flex flex-column gap-4">
            <div className="surface-card">
              <div className="surface-card-header">
                <h5>Рейтинг кланів</h5>
                <span className="text-muted small">Оновлення щогодини</span>
              </div>
              <div className="d-flex flex-column gap-2">
                {clanLeaderboard.map((item) => (
                  <div key={item.rank} className="clan-card">
                    <div className="d-flex justify-content-between flex-wrap gap-2">
                      <div>
                        <h5 className="mb-1">#{item.rank} {item.clan}</h5>
                        <div className="clan-meta">
                          <span>👥 {item.members} учасників</span>
                          <span>⭐ {item.bonuses}</span>
                        </div>
                      </div>
                      <div className="text-end">
                        <div className="fw-bold display-6">{item.rating}</div>
                        <small className="text-muted">Clan power</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-card">
              <div className="surface-card-header">
                <h5>Live трейди кланів</h5>
                <span className="text-muted small">Синхронізовано з live-feed</span>
              </div>
              <div className="trade-timeline">
                {clanTrades.map((trade) => (
                  <div key={trade.id} className="trade-timeline-item">
                    <strong>{trade.clan}</strong>
                    <div className="text-muted">{trade.summary}</div>
                    <small className="text-muted">{trade.time} · {trade.impact}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-12 col-xl-5 d-flex flex-column gap-4">
            <div className="surface-card">
              <div className="surface-card-header">
                <h5>Кімнати торгівлі</h5>
                <span className="text-muted small">Створюйте та модеруйтe</span>
              </div>
              <div className="d-flex flex-column gap-3">
                {clanRooms.map((room) => (
                  <div key={room.id} className="p-3 rounded-4" style={{ background: 'rgba(56,189,248,0.08)' }}>
                    <div className="d-flex justify-content-between align-items-start gap-2">
                      <div>
                        <h6 className="fw-bold mb-1">{room.name}</h6>
                        <small className="text-muted">{room.description}</small>
                        <div className="clan-meta mt-2">
                          <span>🟢 {room.onlineMembers} онлайн</span>
                          <span>🎁 {room.featuredItem}</span>
                        </div>
                      </div>
                      <span className="tag tag-live">{room.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-card">
              <div className="surface-card-header">
                <h5>Заявка на клан</h5>
                <span className="text-muted small">Розширений флоу</span>
              </div>
              <form className="row g-3">
                <div className="col-12">
                  <label className="form-label fw-semibold">Назва клану</label>
                  <input type="text" className="form-control" placeholder="Введіть назву" />
                </div>
                <div className="col-12">
                  <label className="form-label fw-semibold">Фокус</label>
                  <select className="form-select">
                    <option>Аукціони</option>
                    <option>Крафтинг</option>
                    <option>Live-трейди</option>
                  </select>
                </div>
                <div className="col-12">
                  <label className="form-label fw-semibold">Опис / правила</label>
                  <textarea className="form-control" rows="3" placeholder="Опишіть цілі та вимоги"></textarea>
                </div>
                <div className="col-12">
                  <label className="form-label fw-semibold">Іконка кімнати</label>
                  <div className="d-flex gap-2 flex-wrap">
                    <button type="button" className="btn btn-outline-mega active">⚔️ Forge</button>
                    <button type="button" className="btn btn-outline-mega">🌀 Syndicate</button>
                    <button type="button" className="btn btn-outline-mega">🌊 Waves</button>
                  </div>
                </div>
                <div className="col-12">
                  <button type="button" className="btn btn-mega">Надіслати заявку</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClanModule;
