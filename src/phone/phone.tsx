import { useEffect, useState } from "react";
import Calculator from "../calculator/calculator";
import TicTacToe from "../TicTacToe/tictactoe";
import Gmail from "../gmail/gmail";
import { startStarFieldAnimation } from '../canvas/canvas';
import { InstagramIcon } from "../assets/InstagramIcon";

const Phone = () => {
    const [showApp, setShowApp] = useState(false);
    const [showCalc, setShowCalc] = useState(false);
    const [showGmail, setShowGmail] = useState(false);
    const [showTicTacToe, setShowTicTacToe] = useState(false);

    const toggleShowApp = (value: boolean) => {
        setShowApp(value);
    };

    useEffect(
        () => {
            startStarFieldAnimation('canvas');
        }, []
    );

    return (
        <>
        <div className="phone-container">
            <div className="space-background"></div>
            <canvas id="canvas"></canvas>
            <div className="top-segment">
                <div className="sound-div"></div>
                <div className="camera-div"></div>
            </div>
            {!showApp ? 
            (
                <div className="apps-container hidden-scroll">
                    <div className="app-cont">
                        <a href="https://www.youtube.com/" className="app" target="_blank" rel="noopener noreferrer">
                            <img id="youtube-phone" src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="" />
                        </a>
                        <span>YouTube</span>
                    </div>
                    <div className="app-cont">
                        <a href="https://github.com/IvanShterev" className="app" target="_blank" rel="noopener noreferrer">
                            <img id="github-phone" src="https://skillicons.dev/icons?i=github"/>
                        </a>
                        <span>GitHub</span>
                    </div>
                    <div className="app-cont">
                        <a href="https://www.instagram.com/ivan_shterevv/" className="app" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon/>
                        </a>
                        <span>Instagram</span>
                    </div>
                    <div className="app-cont">
                        <a href="https://t.me/ivanshterev" className="app" target="_blank" rel="noopener noreferrer">
                            <img id="telegram-phone" src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="" />
                        </a>
                        <span>Telegram</span>
                    </div>
                    <div className="app-cont">
                        <a href="https://www.linkedin.com/in/ivan-shterev/" className="app" target="_blank" rel="noopener noreferrer">
                            <img id="linkedin-phone" src="https://upload.wikimedia.org/wikipedia/commons/f/f8/LinkedIn_icon_circle.svg" alt="" />
                        </a>
                        <span>LinkedIn</span>
                    </div>
                    <div className="app-cont">
                        <a href="#" className="app">
                            <img id="appstore-phone" src="icon_appstore__ev0z770zyxoy_large_2x.png" alt="" />
                        </a>
                        <span>App Store</span>
                    </div>
                    <div className="app-cont">
                        <a href="#gmail" className="app" onClick={() => {setShowApp(true); setShowGmail(true)}}>
                            <img id="gmail-phone" src="gmail_icon.png" alt="" />
                        </a>
                        <span>Gmail</span>
                    </div>
                    <div className="app-cont">
                        <a href="#calculator" className="app" onClick={() => {setShowApp(true); setShowCalc(true)}}>
                            <img id="calc-phone" src="calculator-icon.png" alt="" />
                        </a>
                        <span>Calculator</span>
                    </div>
                    <div className="app-cont">
                        <a href="#" className="app" onClick={() => {setShowApp(true); setShowTicTacToe(true)}}>
                            <img id="ticTacToe-icon-phone" src="ticttactoe-icon.png" alt="" />
                        </a>
                        <span>TicTacToe</span>
                    </div>
                    <div className="app-cont">
                        <a href="#" className="app" id="settings-a-phone">
                            <img id="settings-phone" src="settings-icon.png" alt="" />
                        </a>
                        <span>Settings</span>
                    </div>
                </div> 
            ) : showCalc ? (
                    <Calculator show={toggleShowApp} setShowCalc={setShowCalc} />
                ) : showGmail ? (
                    <Gmail show={toggleShowApp} />
                ) : showTicTacToe ? (
                    <TicTacToe show={toggleShowApp} />
                ) : null}
            </div>
        </>
    );
}

export default Phone;