import React from 'react'
import logo from '../img/logo.svg'
import { ContainerPicture, Logo } from '../styles/styled'
import { Title } from '../styles/styled'
import { Description } from '../styles/styled'
import { ContainerInput } from '../styles/styled'
import dashboard from '../img/dashboard.png'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { ButtonsSocials } from '../styles/styled'
import { Credits } from '../styles/styled'

const Home = () => {
    return (
        <div>
            <Logo>
                <img src={logo} />
            </Logo>

            <Title>
               <h1>We are lauching</h1> <h1 className="soonBlack"> soon!</h1>
            </Title>

            <Description>
                <p>Subscribe and get notified</p> 
            </Description>

            <ContainerInput>
                <input placeholder="Your email address" />
                <button>Notify me</button>
            </ContainerInput>

            <ContainerPicture>
            <img src={dashboard}/> 
            </ContainerPicture>
       
            <ButtonsSocials>
            <button>
                <FaFacebookF
                color={"#4E7DF2"}
                size={20}
                />
            </button>

            <button>
                <AiOutlineTwitter 
                size={24}
                color={"#4E7DF2"}
                />
            </button>

            <button>
                <AiOutlineInstagram 
                color={"#4E7DF2"}
                size={24}
                />
            </button>

            </ButtonsSocials>

            <Credits>
            <p>© Copyright Ping. All rights reserved.</p>
            </Credits>
        </div>
    )
}

export default Home