import { useState } from "react";
import useFetch from "./useFetch";

const MemeGenerator = () => {
    const [topText, setTopText] = useState('');
    const [buttonText, setButtonText] = useState('');
    const [randomImg, setRandomImg] = useState('http://i.imgflip.com/1bij.jpg');
    const { data: allMeme, isPending, error } = useFetch('https://api.imgflip.com/get_memes');

    // console.log("images", allMeme.memes[1].url)

    const handleSubmit = (e) => {
        console.log("clicked")
        e.preventDefault()
        // method to get a ramdon number
        const randNum = Math.floor(Math.random() * allMeme.memes.length);
        const randMemeImg = allMeme.memes[randNum].url;
        setRandomImg(randMemeImg);
    }
    return (
        <div>
            <form className="meme-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="topText"
                    placeholder="Top Text"
                    value={topText}
                    onChange={(e) => setTopText(e.target.value)}
                />
                <input
                    type="text"
                    name="bottomText"
                    placeholder="Bottom Text"
                    value={buttonText}
                    onChange={(e) => setButtonText(e.target.value)}
                />

                <button>Gen</button>
            </form>
            <div className="meme">
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                <img src={randomImg} alt="" />
                <h2 className="top">{topText}</h2>
                <h2 className="bottom">{buttonText}</h2>
            </div>
        </div>);
}

export default MemeGenerator;
