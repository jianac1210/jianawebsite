import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "陳嘉娜｜顧問師",
  description: "專業、認真的顧問師陳嘉娜，歡迎透過 Facebook、LINE 或電子郵件聯絡。",
};

const Arrow = () => <span aria-hidden="true" className="arrow">↗</span>;

export default function Home() {
  return (
    <main>
      <div className="ambient ambientOne" />
      <div className="ambient ambientTwo" />

      <header className="topbar">
        <a className="brand" href="#profile" aria-label="回到陳嘉娜電子名片首頁">
          <span className="brandDot">J</span>
          <span>JIANA</span>
        </a>
        <a className="miniContact" href="mailto:jiana1210@gmail.com">
          聯絡我 <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="profile">
        <div className="badge" aria-label="OOO">
          <span className="badgeSpark">✦</span>
          <span>OOO</span>
          <span className="badgeSmile">⌣</span>
        </div>

        <div className="profileGrid">
          <div className="portraitWrap">
            <div className="portraitHalo" />
            <div className="portraitFrame">
              <img
                src="/jiana-cartoon.png"
                alt="陳嘉娜的卡通風格大頭貼"
                width="900"
                height="900"
              />
            </div>
            <span className="portraitTag">Professional consultant</span>
          </div>

          <div className="intro">
            <p className="eyebrow"><span /> Consultant · Taipei</p>
            <h1>陳嘉娜</h1>
            <p className="role">顧問師</p>
            <p className="statement">
              以專業梳理複雜，<br />
              用認真成就<span>每一次合作。</span>
            </p>
            <p className="bio">
              專業、認真。傾聽需求，聚焦關鍵，陪你把想法走成清晰可行的下一步。
            </p>
            <div className="actions">
              <a className="primaryAction" href="mailto:jiana1210@gmail.com">
                開始合作 <Arrow />
              </a>
              <a className="secondaryAction" href="/jiana-chen.vcf" download>
                ＋ 儲存名片
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="connect" aria-labelledby="connect-title">
        <div className="sectionLead">
          <p className="sectionKicker">LET’S CONNECT</p>
          <h2 id="connect-title">保持聯繫，<br />從一聲你好開始。</h2>
        </div>

        <div className="linkList">
          <a href="https://www.facebook.com/jiana1210/" target="_blank" rel="noreferrer">
            <span className="linkIcon facebook">f</span>
            <span className="linkText"><small>Facebook 專頁</small><strong>https://www.facebook.com/jiana1210/</strong></span>
            <Arrow />
          </a>
          <a href="https://line.me/ti/p/~jiana1210" target="_blank" rel="noreferrer">
            <span className="linkIcon line">L</span>
            <span className="linkText"><small>LINE 官方帳號</small><strong>jiana1210</strong></span>
            <Arrow />
          </a>
          <a href="mailto:jiana1210@gmail.com">
            <span className="linkIcon email">@</span>
            <span className="linkText"><small>合作電子郵件</small><strong>jiana1210@gmail.com</strong></span>
            <Arrow />
          </a>
        </div>
      </section>

      <footer>
        <span>© 2026 CHEN JIANA</span>
        <span className="footerMark">專業 × 認真 <i>♥</i></span>
      </footer>
    </main>
  );
}
