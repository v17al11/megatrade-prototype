import { useState } from 'react';
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
            <div className="tag tag-success">Геймификация</div>
            <h2 className="section-title mt-2">Квесты и достижения</h2>
            <p className="text-muted mb-0">
              Добавляем ежедневные, еженедельные и сезонные задания с прогрессом и трофеями. Все награды синхронизируются с
              инвентарём и рейтингом коллекционеров.
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
                  <div className="text-muted">Награда: {activeTrack.reward}</div>
                </div>
                <div className="text-end">
                  <div className="progress" style={{ height: '12px', borderRadius: '999px', width: '220px' }}>
                    <div className="progress-bar" role="progressbar" style={{ width: `${progressPercent}%`, background: 'linear-gradient(135deg, var(--accent), var(--accent-strong))' }} aria-valuenow={progressPercent} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <small className="text-muted d-block mt-2">{activeTrack.progress} / {activeTrack.total} выполнено</small>
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
                <h5>Достижения</h5>
                <span className="text-muted small">Витрина наград</span>
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
                <span className="text-muted small">Получите +30% XP</span>
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
                <h5>Ежедневный бустер</h5>
                <span className="text-muted small">Активируйте до 23:59</span>
              </div>
              <div className="d-flex flex-column gap-3">
                <div className="p-3 rounded-4" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(249,115,22,0.1))' }}>
                  <div className="fw-bold">x2 XP за трейды</div>
                  <small className="text-muted">Действует 1 час после активации</small>
                </div>
                <button className="btn btn-mega">Активировать бустер</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuestModule;
