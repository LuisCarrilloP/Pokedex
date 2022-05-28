import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { changeUser } from '../store/slices/user.slice';
import { useDispatch } from 'react-redux';
import pokedexName from "../../src/pokedex-banner.svg" /* ó .png */
import elipseBlack from "../../src/Ellipse_black.png"
import elipseWhite from "../../src/Ellipse_white.png"

const UserInput = () => {
    
    const [ userName, setUserName ] = useState("")

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getName = () => {
        /* console.log(userName); */
        dispatch(changeUser(userName))
        navigate("/pokedex")
    }
    
    return (
        <div className='user-page'>
            <div className='pokedex-img'>
                <img src={pokedexName} alt="pokedex banner"/>
            </div>
            <h2>Hello trainer!</h2>
            <p>To start enter your name</p>
            
            <div className='input-name-container'>
                <input 
                    type="text"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    className="input-name"
                    placeholder='Tu nombre...'
                />
                <button onClick={getName} className="go-button">Comenzar</button>
            </div>

            <div className='footer-main'>
                <div className='red-rectangle'></div>
                <div className="black-rectangle"></div>
                
                <div className='elipse-container'>
                    <div className='outside-elipse'>
                        <img src={elipseWhite} alt=""/>
                        <div className='inside-elipse'>
                            <img src={elipseBlack} alt=""/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UserInput;