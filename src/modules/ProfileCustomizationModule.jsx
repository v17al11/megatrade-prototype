import React, { useMemo, useState } from 'https://esm.sh/react@18.3.1';
import { avatarFrames, profileThemes, spotlightCards } from '../data/mockData.js';

const ProfileCustomizationModule = () => {
  const [selectedTheme, setSelectedTheme] = useState(profileThemes[0]?.id ?? 'neo-nebula');
  const [selectedFrame, setSelectedFrame] = useState(avatarFrames[0]?.id ?? 'glow-purple');
  const [highlightCard, setHighlightCard] = useState(spotlightCards[0]?.id ?? null);

  const theme = useMemo(() => profileThemes.find((item) => item.id === selectedTheme) ?? profileThemes[0], [selectedTheme]);
  const frame = useMemo(() => avatarFrames.find((item) => item.id === selectedFrame) ?? avatarFrames[0], [selectedFrame]);
  const card = useMemo(() => spotlightCards.find((item) => item.id === highlightCard) ?? spotlightCards[0], [highlightCard]);

  return (
    <div className="d-flex flex-column gap-4 gap-lg-5">
      <section className="surface-card">
        <div className="surface-card-header flex-wrap gap-3 align-items-start">
          <div>
            <div className="tag tag-live">Профілі</div>
            <h2 className="section-title mt-2">Кастомізація гравця</h2>
            <p className="text-muted mb-0">
              Дозволяємо колекціонерам персоналізувати сторінку профілю: динамічні фони, анімовані рамки та вибір улюблених
              карток. Усе синхронізується з рейтингами і кланами.
            </p>
          </div>
          <div className="d-flex gap-2 flex-wrap">
            <span className="progress-pill">Нові теми сезону</span>
            <span className="progress-pill" style={{ background: 'rgba(255,184,0,0.15)', color: 'var(--warning)' }}>
              Glow frames
            </span>
          </div>
        </div>

        <div className="row g-4 align-items-start">
          <div className="col-12 col-xl-7">
            <div
              className="profile-hero"
              style={{
                backgroundImage: theme.preview,
              }}
            >
              <div className="profile-hero-content">
                <div className={`avatar-frame ${frame.className}`}>
                  <img src="https://i.pravatar.cc/160?img=52" alt="Player avatar" />
                </div>
                <div className="profile-meta">
                  <h2>fanredcat2</h2>
                  <div className="d-flex flex-wrap gap-2 align-items-center">
                    <span className="tag">Mythic Collector</span>
                    <span className="tag">Clan: Alpha Forge</span>
                  </div>
                  <div className="d-flex flex-wrap gap-3 mt-3">
                    <div>
                      <div className="fw-bold">446</div>
                      <small>Cards</small>
                    </div>
                    <div>
                      <div className="fw-bold">148</div>
                      <small>Trades</small>
                    </div>
                    <div>
                      <div className="fw-bold">Season 3</div>
                      <small>Since Aug 18, 2025</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile-hero-content">
                <div className="surface-card" style={{ background: 'rgba(255,255,255,0.12)', color: '#fff' }}>
                  <div className="surface-card-header">
                    <h5>Вітрина карток</h5>
                    <span className="text-muted small" style={{ color: 'rgba(255,255,255,0.75) !important' }}>
                      Обрано {card.name}
                    </span>
                  </div>
                  <div className="inventory-grid">
                    {spotlightCards.map((item) => (
                      <button
                        key={item.id}
                        className={`inventory-card ${item.id === highlightCard ? 'border border-3 border-light' : ''}`}
                        style={{ background: 'rgba(0,0,0,0.25)', color: '#fff' }}
                        onClick={() => setHighlightCard(item.id)}
                      >
                        <img src={item.image} alt={item.name} />
                        <div className="fw-semibold">{item.name}</div>
                        <small>{item.rarity}</small>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-xl-5 d-flex flex-column gap-4">
            <div className="surface-card">
              <div className="surface-card-header">
                <h5>Обрати тему</h5>
                <span className="text-muted small">Анімовані задні плани</span>
              </div>
              <div className="customization-grid">
                {profileThemes.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`customization-option ${item.id === selectedTheme ? 'active' : ''}`}
                    style={{ background: item.preview }}
                    onClick={() => setSelectedTheme(item.id)}
                  >
                    <h6>{item.name}</h6>
                    <small>{item.description}</small>
                  </button>
                ))}
              </div>
            </div>

            <div className="surface-card">
              <div className="surface-card-header">
                <h5>Рамки для аватару</h5>
                <span className="text-muted small">Glow + particle ефекти</span>
              </div>
              <div className="customization-grid">
                {avatarFrames.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`customization-option ${item.id === selectedFrame ? 'active' : ''}`}
                    onClick={() => setSelectedFrame(item.id)}
                  >
                    <div className={`avatar-frame ${item.className}`} style={{ width: '80px', height: '80px', margin: '0 auto 0.5rem' }}>
                      <img src="https://i.pravatar.cc/120?img=52" alt="preview" style={{ width: '52px', height: '52px' }} />
                    </div>
                    <h6 className="text-center">{item.name}</h6>
                    <small>{item.description}</small>
                  </button>
                ))}
              </div>
            </div>

            <div className="surface-card">
              <div className="surface-card-header">
                <h5>Профільні бейджі</h5>
                <span className="text-muted small">Показуються в live трейдах</span>
              </div>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge-soft">Top 1%</span>
                <span className="badge-soft">Clan MVP</span>
                <span className="badge-soft">Auction Shark</span>
                <span className="badge-soft">Season Winner</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileCustomizationModule;
