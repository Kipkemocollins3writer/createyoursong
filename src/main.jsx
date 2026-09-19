import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'

function BrandMark() {
  return (
    <div className="brand-mark" aria-label="CreateYourSong logo">
      <div className="brand-icon">
        <span className="brand-core" />
        <span className="brand-dot" />
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="page-shell">
      <div className="top-accent top-accent-left" />
      <div className="top-accent top-accent-right" />

      <main className="app-container">
        <header className="brand-row">
          <BrandMark />
          <div className="brand-name">CreateYourSong</div>
        </header>

        <h1 className="page-title">DS代理合作方案</h1>

        <section className="panel panel-highlight">
          <div className="panel-left">
            <div className="section-heading">
              <span className="bullet" />
              <h2>成为DS代理</h2>
            </div>

            <div className="lead-line">
              条件：DS年卡或DS任意卡+话筒
            </div>

            <p>
              保持注册DS账号在会员有效期内，方可继续享受分佣政策；
              禁止额外加价，客户投诉核实后，取消代理资格。<br />
              禁止额外加价，客户投诉核实后，取消代理资格。
            </p>
          </div>

          <div className="headset-illustration" aria-hidden="true">
            <div className="headband" />
            <div className="earcup left" />
            <div className="earcup right" />
            <div className="sound-wave wave-1" />
            <div className="sound-wave wave-2" />
            <div className="sound-wave wave-3" />
          </div>
        </section>

        <section className="panel panel-table">
          <div className="section-heading soft">
            <span className="bullet" />
            <h2>软件</h2>
          </div>

          <div className="pricing-table">
            <div className="table-head">
              <div className="table-cell label"> </div>
              <div className="table-cell">月卡</div>
              <div className="table-cell">季卡</div>
              <div className="table-cell">年卡</div>
              <div className="table-cell">永久</div>
            </div>

            <div className="table-row">
              <div className="table-cell label">DS手机端软件</div>
              <div className="table-cell">128元</div>
              <div className="table-cell">358元</div>
              <div className="table-cell">998元</div>
              <div className="table-cell"> </div>
            </div>

            <div className="table-row">
              <div className="table-cell label">音立方手机软件</div>
              <div className="table-cell">198元</div>
              <div className="table-cell">528元</div>
              <div className="table-cell">1998元</div>
              <div className="table-cell"> </div>
            </div>

            <div className="table-row">
              <div className="table-cell label">音立方电脑端软件</div>
              <div className="table-cell">298元</div>
              <div className="table-cell">798元</div>
              <div className="table-cell">2998元</div>
              <div className="table-cell">5998元</div>
            </div>
          </div>

          <div className="promo-banner">
            所有卡项代理均享受40%佣金
          </div>
        </section>

        <section className="panel panel-mic">
          <div className="section-heading soft">
            <span className="bullet" />
            <h2>声卡</h2>
          </div>

          <div className="mic-grid">
            <div className="mic-card">
              <div className="card-title">定制AI声卡话筒</div>
              <div className="price-line">
                <span className="price">498元</span>
                <span className="discount">，佣金50%</span>
              </div>
            </div>

            <div className="mic-card">
              <div className="card-title">艾肯电脑声卡话筒套装</div>
              <div className="price-line">
                <span className="price">1138元</span>
                <span className="discount">，佣金249元</span>
              </div>
            </div>

            <div className="mic-card">
              <div className="card-title">艾肯go live电脑手机通用声卡</div>
              <div className="price-line">
                <span className="price">1300元</span>
                <span className="discount">，佣金300元</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
