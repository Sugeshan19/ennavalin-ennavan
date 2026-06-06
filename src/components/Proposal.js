import { useEffect, useState } from "react";
import "../styles/Proposal.css";
import { GridScan } from "./GridScan";

export default function Proposal() {
  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.png",
    "/images/8.png",
    "/images/9.png",
    "/images/10.png",
    "/images/11.png",
    "/images/12.png",
    "/images/13.png",
    "/images/14.png",
    "/images/15.png",
    "/images/16.png",
    "/images/17.png",
    "/images/18.png",
    "/images/19.png",
    "/images/20.png"

  ];

  const [showProposal, setShowProposal] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [index, setIndex] = useState(0);

 useEffect(() => {
  if (!showGallery) return;
    const t = setInterval(() => {
      setIndex(i => (i + 1) % images.length);
    }, 2500);
    return () => clearInterval(t);
  }, [showGallery, images.length]);

  return (
    <div className="page">

      <div className="hearts-bg">
        {[...Array(18)].map((_, i) => (
          <span key={i} />
        ))}
      </div>

      <div className="hero">
        <h1>என்னவளுக்காக</h1>
        <p>என்னவளின் என்னவனிடமிருந்து</p>

        <div className="hero-buttons">
          <button onClick={() => setShowProposal(true)}>
            சிறிய காதல் கடிதம் 💌
          </button>

          <button className="secondary"
                  onClick={() => setShowGallery(true)}>
            நம் நினைவுகள்
          </button>
        </div>
      </div>

      {showProposal && (
        <div className="glass-card">
          <h2>oii செல்ல pondatti.... ஒரு விஷயம் சொல்லணும்…</h2>
          <p>மத்தவங்க சொல்வாங்க இது நம்ம first காதலர் தினம் என்று… ஆனா உண்மையில நம்ம காதல் எப்போ ஆரம்பிச்சது என்று நமக்கே தெரியாது. Just ஒரு random “Hi”ல ஆரம்பிச்சது — இப்போ என் வாழ்க்கையே நீ இல்லாம imagine பண்ண முடியாத அளவுக்கு வந்துடுச்சு.
            ஒரு second யோசிச்சுப் பார்… அந்த நாள் message அனுப்பலன்னா இவ்வளவு close ஆகி இருப்போமா? இவ்வளவு care, இவ்வளவு love, இவ்வளவு attachment வந்திருக்கும்? நீ என் life-ல வந்தது coincidence இல்ல டி… அது என் blessing.
            <br></br><br></br>எல்லாருக்கும் நீ என் lover. ஆனா எனக்கு நீ இன்னும் ஒரு சின்ன குழந்தைதான்… என் செல்லக் குழந்தை. உன் சிரிப்பு பாத்தா calm ஆகிடுவேன். நீ sadனா எனக்கு உள்ள oru வலி.
            நம்மக்குள்ள சண்டை வரும் — sometimes semma stupid reason காக கூட 😄
            ஆனா சண்டைக்கு அப்புறம் patch up ஆகும் அந்த feel… அந்த silence… அந்த “seri vidu” moment… அதுக்காகவே sometimes sanda venum போல இருக்கும்.
            ஒரு உண்மை சொல்லட்டா — என் வாழ்க்கையை ரொம்ப அழகா மாற்றிட்டே. நான் இவ்வளவு emotionally attach ஆகுவேன் என்று நினைக்கவே இல்ல. என்னைப் பார்த்துக்கறதுக்கும், tolerate பண்ணறதுக்கும், love பண்ணறதுக்கும் thanks da.
            நீ என்னை எப்படி paathukura — அதே level நான் pannrenaa தெரியல… ஆனா உனக்காக full heart, full effort, full loyalty — always ready.
            ஒரே request — eppovum en kooda iru. Nee illa na naan romba odanjiduven.
            இனிய காதலர் தின நல்வாழ்த்துகள் டி என் தங்கமே ❤️
            Love you so so much.
          </p>

          
        </div>
      )}

      {showGallery && (
        <div className="modal" onClick={() => setShowGallery(false)}>
          <div className="gridscan-background">
            <GridScan
              lineThickness={1.5}
              linesColor="#FF9FFC"
              scanColor="#FF9FFC"
              scanOpacity={0.3}
              gridScale={0.12}
              lineStyle="solid"
              lineJitter={0.05}
              scanDirection="pingpong"
              bloomIntensity={0.2}
              scanGlow={0.6}
              scanSoftness={1.5}
            />
          </div>
          <div className="carousel" onClick={e => e.stopPropagation()}>
            <img src={images[index]} alt="memory" />
            <div className="dots">
              {images.map((_, i) => (
                <span key={i}
                  className={i === index ? "dot active" : "dot"} />
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
