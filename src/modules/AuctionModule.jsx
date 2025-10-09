import { useMemo, useState } from 'react';
import { auctionLots } from '../data/mockData.js';

const AuctionModule = () => {
  const [selectedLotId, setSelectedLotId] = useState(auctionLots[0]?.id ?? null);
  const selectedLot = useMemo(
    () => auctionLots.find((lot) => lot.id === selectedLotId) ?? auctionLots[0],
    [selectedLotId]
  );

  return (
    <div className="d-flex flex-column gap-4 gap-lg-5">
      <section className="surface-card">
        <div className="surface-card-header flex-wrap gap-3 align-items-start">
          <div>
            <div className="tag tag-live">Новая фича</div>
            <h2 className="section-title mt-2">Аукционная система</h2>
            <p className="text-muted mb-0">
              Открытые торги с таймером, историей ставок и защищённым минимальным шагом. Игроки соревнуются за редкие
              активы, а клановые модераторы могут выставлять особые лоты.
            </p>
          </div>
          <div className="d-flex gap-2 flex-wrap">
            <span className="progress-pill">3 live-аукциона</span>
            <span className="progress-pill" style={{ background: 'rgba(0,196,140,0.12)', color: 'var(--success)' }}>
              +18% участия за неделю
            </span>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-12 col-lg-5 d-flex flex-column gap-3">
            {auctionLots.map((lot) => (
              <button
                key={lot.id}
                className={`text-start w-100 p-3 rounded-4 border-0 ${
                  lot.id === selectedLotId ? 'shadow-lg' : ''
                }`}
                style={{
                  background: lot.id === selectedLotId ? 'rgba(124,92,255,0.12)' : 'var(--bg-panel)',
                  border: '1px solid rgba(18,23,29,0.08)',
                  transition: 'transform 0.2s ease',
                }}
                onClick={() => setSelectedLotId(lot.id)}
              >
                <div className="d-flex gap-3 align-items-center">
                  <img src={lot.image} alt={lot.title} className="rounded-4" width="72" height="72" />
                  <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-start gap-2">
                      <div>
                        <h6 className="fw-bold mb-1">{lot.title}</h6>
                        <span className="tag tag-live">{lot.rarity}</span>
                      </div>
                      <div className="text-end">
                        <div className="fw-bold">{lot.currentBid}c</div>
                        <small className="text-muted">Шаг +{lot.minIncrement}c</small>
                      </div>
                    </div>
                    <div className="text-muted small mt-2">
                      {lot.bids.length} ставок · {lot.watchers} наблюдателей · Таймер {lot.timeLeft}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
          <div className="col-12 col-lg-7">
            {selectedLot && (
              <div className="d-flex flex-column gap-4">
                <div className="surface-card" style={{ boxShadow: 'none' }}>
                  <div className="d-flex flex-column flex-md-row gap-4 align-items-start">
                    <img src={selectedLot.image} alt={selectedLot.title} className="rounded-4" width="180" height="180" />
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between flex-wrap gap-2">
                        <div>
                          <h3 className="fw-bold mb-1">{selectedLot.title}</h3>
                          <div className="d-flex gap-2 align-items-center flex-wrap">
                            <span className="tag tag-live">{selectedLot.rarity}</span>
                            <span className="tag tag-success">Clan exclusive</span>
                            <span className="tag tag-warning">Live</span>
                          </div>
                        </div>
                        <div className="text-end">
                          <div className="fw-bold display-6">{selectedLot.currentBid}c</div>
                          <div className="text-muted">Текущая ставка</div>
                          <small className="text-muted">Минимальный шаг: +{selectedLot.minIncrement}c</small>
                        </div>
                      </div>
                      <div className="mt-3 row g-3">
                        <div className="col-6 col-md-4">
                          <div className="stat-card">
                            <h4>{selectedLot.watchers}</h4>
                            <span>Наблюдателей</span>
                          </div>
                        </div>
                        <div className="col-6 col-md-4">
                          <div className="stat-card">
                            <h4>{selectedLot.bids.length}</h4>
                            <span>Ставок</span>
                          </div>
                        </div>
                        <div className="col-12 col-md-4">
                          <div className="stat-card">
                            <h4>{selectedLot.timeLeft}</h4>
                            <span>До завершения</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="surface-card">
                  <div className="surface-card-header">
                    <h5>История ставок</h5>
                    <div className="text-muted small">Обновлено 5 секунд назад</div>
                  </div>
                  <div className="trade-timeline">
                    {selectedLot.bids.map((bid, index) => (
                      <div key={index} className="trade-timeline-item">
                        <strong>{bid.bidder}</strong>
                        <div className="text-muted">Поставил {bid.amount}c · {bid.time}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="surface-card">
                  <div className="surface-card-header">
                    <h5>Сделать ставку</h5>
                    <span className="text-muted small">Введите сумму с учётом шага</span>
                  </div>
                  <form className="row g-3">
                    <div className="col-12 col-sm-6">
                      <label className="form-label fw-semibold">Сумма ставки</label>
                      <div className="input-group">
                        <span className="input-group-text">c</span>
                        <input type="number" className="form-control" placeholder={selectedLot.currentBid + selectedLot.minIncrement} min={selectedLot.currentBid + selectedLot.minIncrement} />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <label className="form-label fw-semibold">Авто-перекрытие</label>
                      <select className="form-select">
                        <option>+10c к максимуму</option>
                        <option>+25c к максимуму</option>
                        <option>Без авто-перекрытия</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold">Комментарий</label>
                      <textarea className="form-control" rows="2" placeholder="Оставьте сообщение для продавца"></textarea>
                    </div>
                    <div className="col-12 d-flex gap-2">
                      <button type="button" className="btn btn-mega">Подтвердить ставку</button>
                      <button type="button" className="btn btn-outline-mega">Добавить в закладки</button>
                    </div>
                  </form>
                </div>

                <div className="surface-card">
                  <div className="surface-card-header">
                    <h5>Создать новый лот</h5>
                    <span className="text-muted small">Доступно владельцам карточек уровня Rare+</span>
                  </div>
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <label className="form-label fw-semibold">Выбор предмета</label>
                      <select className="form-select">
                        <option>Mythic Streamer Pack</option>
                        <option>Neon Creator Coin #07</option>
                        <option>Pixel Siren card</option>
                      </select>
                    </div>
                    <div className="col-6 col-md-3">
                      <label className="form-label fw-semibold">Стартовая цена</label>
                      <div className="input-group">
                        <span className="input-group-text">c</span>
                        <input className="form-control" type="number" defaultValue={50} />
                      </div>
                    </div>
                    <div className="col-6 col-md-3">
                      <label className="form-label fw-semibold">Шаг торгов</label>
                      <div className="input-group">
                        <span className="input-group-text">c</span>
                        <input className="form-control" type="number" defaultValue={5} />
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <label className="form-label fw-semibold">Режим</label>
                      <div className="btn-group w-100" role="group">
                        <button type="button" className="btn btn-outline-mega active">
                          Публичный
                        </button>
                        <button type="button" className="btn btn-outline-mega">
                          Клановый
                        </button>
                      </div>
                    </div>
                    <div className="col-12 col-md-8">
                      <label className="form-label fw-semibold">Длительность</label>
                      <div className="d-flex gap-2 flex-wrap">
                        <button type="button" className="btn btn-outline-mega active">2 часа</button>
                        <button type="button" className="btn btn-outline-mega">12 часов</button>
                        <button type="button" className="btn btn-outline-mega">24 часа</button>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-mega">Выставить лот</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuctionModule;
