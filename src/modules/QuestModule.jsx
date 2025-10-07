import React, { useState } from 'https://esm.sh/react@18.3.1';
import { questTracks, achievementShowcase, spotlightCards } from '../data/mockData.js';

const QuestModule = () => {
  const [activeTrackId, setActiveTrackId] = useState(questTracks[0]?.id ?? 'daily');
  const activeTrack = questTracks.find((track) => track.id === activeTrackId) ?? questTracks[0];

  const progressPercent = Math.min(100, Math.round((activeTrack.progress / activeTrack.total) * 100));

  return (
    <div className="d-flex flex-column gap-4 gap-lg-5">
      <section className="surface-card">
        <div className="surface-card-header flex-wrap gap-3 align-items-start">
          <div>
            <div className="tag tag-success">Гейміфікація</div>
            <h2 className="section-title mt-2">Квести та досягнення</h2>
            <p className="text-muted mb-0">
              Додаємо щоденні, тижневі та сезонні задачі з прогресом і трофеями. Всі нагороди синхронізуються з інвентарем
              та рейтингом колекціонерів.
            </p>
          </div>
          <div className="d-flex flex-wrap gap-2">
            {questTracks.map((track) => (
              <button
                key={track.id}
                className={`btn btn-outline-mega ${track.id === activeTrackId ? 'active' : ''}`}
                onClick={() => setActiveTrackId(track.id)}
              >
                {track.title}
              </button>
            ))}
          </div>
        </div>
        <div className="row g-4 align-items-start">
          <div className="col-12 col-xl-7 d-flex flex-column gap-3">
            <div className="p-4 rounded-4" style={{ background: 'linear-gradient(135deg, rgba(124,92,255,0.16), rgba(37,99,235,0.12))' }}>
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
                <div>
                  <h3 className="fw-bold mb-1">{activeTrack.title}</h3>
                  <div className="text-muted">Нагорода: {activeTrack.reward}</div>
                </div>
                <div className="text-end">
                  <div className="progress" style={{ height: '12px', borderRadius: '999px', width: '220px' }}>
                    <div className="progress-bar" role="progressbar" style={{ width: `${progressPercent}%`, background: 'linear-gradient(135deg, var(--accent), var(--accent-strong))' }} aria-valuenow={progressPercent} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <small className="text-muted d-block mt-2">{activeTrack.progress} / {activeTrack.total} виконано</small>
                </div>
              </div>
            </div>
            {activeTrack.quests.map((quest, index) => {
              const questProgress = Math.round((quest.progress / quest.total) * 100);
              return (
                <div key={index} className={`quest-card ${quest.completed ? 'completed' : ''}`}>
                  <div className="d-flex justify-content-between flex-wrap gap-2">
                    <div>
                      <h6 className="mb-1">{quest.title}</h6>
                      <small>{quest.reward}</small>
                    </div>
                    <span className="progress-pill">{quest.progress} / {quest.total}</span>
                  </div>
                  <div className="progress mt-3" style={{ height: '10px', borderRadius: '999px' }}>
                    <div className="progress-bar" role="progressbar" style={{ width: `${questProgress}%`, background: quest.completed ? 'linear-gradient(135deg, #34d399, #059669)' : 'linear-gradient(135deg, var(--accent), var(--accent-strong))' }} aria-valuenow={questProgress} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-12 col-xl-5 d-flex flex-column gap-4">
            <div className="surface-card" style={{ background: 'rgba(255,255,255,0.9)' }}>
              <div className="surface-card-header">
                <h5>Досягнення</h5>
                <span className="text-muted small">Вітрина нагород</span>
              </div>
              <div className="d-flex flex-column gap-3">
                {achievementShowcase.map((achievement) => (
                  <div key={achievement.id} className="p-3 rounded-4" style={{ background: 'rgba(124,92,255,0.08)' }}>
                    <div className="d-flex justify-content-between align-items-start gap-2">
                      <div>
                        <h6 className="fw-bold mb-1">{achievement.name}</h6>
                        <small className="text-muted">{achievement.description}</small>
                      </div>
                      <div className="text-end">
                        <div className="fw-bold">{achievement.points} pts</div>
                        <span className="tag tag-live">{achievement.rarity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-card">
              <div className="surface-card-header">
                <h5>Карта дня</h5>
                <span className="text-muted small">Отримайте +30% XP</span>
              </div>
              <div className="inventory-grid">
                {spotlightCards.map((card) => (
                  <div key={card.id} className="inventory-card">
                    <img src={card.image} alt={card.name} />
                    <div className="fw-semibold">{card.name}</div>
                    <small className="text-muted">{card.rarity}</small>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-card">
              <div className="surface-card-header">
                <h5>Щоденний бустер</h5>
                <span className="text-muted small">Активуйте до 23:59</span>
              </div>
              <div className="d-flex flex-column gap-3">
                <div className="p-3 rounded-4" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(249,115,22,0.1))' }}>
                  <div className="fw-bold">x2 XP за трейди</div>
                  <small className="text-muted">Діє 1 годину після активації</small>
                </div>
                <button className="btn btn-mega">Активувати бустер</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuestModule;
