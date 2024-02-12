import { useRef, useState } from "react";
import "./App.css";

function App() {
    const modalRef = useRef(null);

    const [isOpen, setIsOpen] = useState(false);

    const openHendler = () => {
        modalRef.current.showModal();
    };
    const closeHendler = () => {
        modalRef.current.close();
    };

    return (
        <div onClick={closeHendler}>
            <div className="envlope-wrapper">
                <div
                    className={`envelope ${isOpen ? "open" : "close"}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        isOpen && openHendler();
                    }}
                >
                    <div className="front flap"></div>
                    <div className="front pocket"></div>
                    <div className="letter">
                        <div className="words line1"></div>
                        <div className="words line2">click to read</div>
                        <div className="words line3"></div>
                        <div className="words line4"></div>
                    </div>
                    <div className="hearts">
                        <div className="heart a1"></div>
                        <div className="heart a2"></div>
                        <div className="heart a3"></div>
                    </div>
                </div>
            </div>
            <div className="reset">
                <button onClick={() => setIsOpen(true)}>Open</button>
                <button onClick={() => setIsOpen(false)}>Reset</button>
            </div>
            <dialog ref={modalRef}>
                <div onClick={(e) => e.stopPropagation()}>
                    <div className="text_cont">
                        <div>&nbsp; Любимая моя Камиллочка,</div>
                        <div>
                            &nbsp; С Днем Святого Валентина! В этот день мне
                            конечно же хотелось бы быть рядом с тобой, но даже
                            на расстоянии мое сердце наполняется теплом и
                            любовью, зная, что ты есть в моей жизни. <p />
                            &nbsp; Ты – мое солнце, моя радость, моя надежда.
                            Каждый день я просыпаюсь и засыпаю с мыслями о тебе.
                            В этот день я хочу напомнить тебе, как я ценю твою
                            нежность, ум, поддержку и красоту. Я благодарен
                            каждому мгновению, проведенному с тобой, и с
                            нетерпением жду момента, когда мы, наконец-то,
                            сможем быть вместе. Спасибо тебе за то, что ты есть.
                            Ты делаешь мою жизнь прекрасной)
                        </div>
                        <div>С любовью, твой котик &#10084;</div>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

export default App;
