import "./About.css";
export default function About() {
  return (
    <div className="content-container">
      <h1>關於我</h1>
      <p>
        我是Willy <br />
      </p>
      <p>
         我經歷了多次的比賽，雖然我抗壓性很低，但我都努力撐過了！<br />
      </p>
      <div style={{ height: "40px" }} />
      <h1>經歷</h1>
      <div style={{ height: "20px" }} />
      <h2 style={{ padding: "20px 0" }}>證照</h2>
      <div className="marginLeft">
        <li>
          2026&nbsp;&nbsp;CCST 資安證照 通過 
        </li>
        <li>
          2026&nbsp;&nbsp;APCS 學科4 術科2 
        </li>
        <li>
          2025&nbsp;&nbsp;電腦硬體裝修 丙級 通過
        </li>
        <li>
          2025&nbsp;&nbsp;電腦軟體設計 丙級 通過
        </li>
      </div>
      <br />
      <br />
      <h2 style={{ padding: "10px 0" }}>競賽</h2>
      <div className="marginLeft">
        <li style={{listStyleType:"circle"}}><h3>技能競賽</h3></li>
        <div className="marginLeft">
          <li>
            2026 第56屆 全國技能競賽 全國賽 08行動應用開發 <span style={{color:"#C0C0C0"}}>第二名</span>
          </li>
          <li>
            2026 第56屆 全國技能競賽 分區賽 08行動應用開發 <span style={{color:"#C0C0C0"}}>第二名</span>
          </li>
          <li>
            2024 第54屆 全國技能競賽 全國賽 J23 自主移動機器人 <span style={{color:"#CD7F32"}}>第三名</span>
          </li>
          <li>
            2024 第54屆 全國技能競賽 分區賽 J23 自主移動機器人 <span style={{color:"#C0C0C0"}}>第二名</span>
          </li>
          <li>
            2023 第53屆 全國技能競賽 全國賽 J23 自主移動機器人 <span style={{color:"#708090"}}>佳作</span>
          </li>
          <li>
            2023 第53屆 全國技能競賽 分區賽 J23 自主移動機器人 <span style={{color:"#C0C0C0"}}>第二名</span>
          </li>
        </div>
      </div>
      <div className="marginLeft">
        <li style={{listStyleType:"circle"}}><h3>PowerTech</h3></li>
        <div className="marginLeft">
          <li>
            2022 i-STEAM PowerTech 青少年科技創作競賽新北市賽 國中全能組四道競走獎 <span style={{color:"#FFD700"}}>金牌</span>
          </li>
          <li>
            2022 i-STEAM PowerTech 青少年科技創作競賽新北市賽暨北區區賽 <span style={{color:"#C0C0C0"}}>銀牌</span>
          </li>
          <li>
            2022 i-STEAM PowerTech 青少年科技創作競賽 全國賽 <span style={{color:"#CD7F32"}}>季軍</span>
          </li>
          <li>
            2021 i-STEAM PowerTech 青少年科技創作競賽新北市賽暨北區區賽 <span style={{color:"#C0C0C0"}}>銀牌</span>
          </li>
        </div>
      </div>
      <div className="marginLeft">
        <li style={{listStyleType:"circle"}}><h3>能源小鐵人</h3></li>
        <div className="marginLeft">
          <li>
            112年 北北基能源小鐵人競賽 國中組 <span style={{color:"#FFD700"}}>第一名</span>
          </li>
          <li>
            111年 北北基能源小鐵人競賽 國中組 <span style={{color:"#FFD700"}}>第一名</span>
          </li>
        </div>
      </div>
      <div className="marginLeft">
        <li style={{listStyleType:"circle"}}><h3>生活科技競賽</h3></li>
        <div className="marginLeft">
          <li>
            新北市111學年度公私立中學學生生活科技創作競賽 創作競賽組 <span style={{color:"#708090"}}>最佳創意獎</span>
          </li>
        </div>
      </div>
      <br />
      <br />
      <h2 style={{ padding: "10px 0" }}>研習/課程</h2>
      <div className="marginLeft">
        <li>
          雷德科技有限公司 硬碟資料救援初階培訓課程 研習5小時
        </li>
        <li>
          參加 大安高工跨科領域特色課程 「3D 列印與雷射雕刻製作」 修課證明
        </li>
        <li>
          參加 大安高工跨科領域特色課程 「資安實務進階雲端挑戰」 修課證明
        </li>
        <li>
          參加「國科會科普活動：數位探究做競賽營」 團體組 <span style={{color:"#FFD700"}}>第一名</span>
        </li>
        <li>
          參加「SecurityFocus Online2-程式安全入門」 線上課程12小時
        </li>
      </div>

    </div>
    
  );
}

