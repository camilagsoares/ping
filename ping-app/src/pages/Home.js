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
import { Animated, FadeAnimations } from 'animated-styled-components'
import useForm from '../hooks/useForm'

const Home = () => {

    const [form, onChange, clear] = useForm({email: ""})


    const onSubmitForm = (event) => {
        event.preventDefault()
        clear()

        alert("Registered successfully!")
    }


    return (
        <div>

            <Animated
                animation={{
                    in: FadeAnimations.FadeInTop,
                    duration_in: 1
                }}
            >

                <Logo>
                    <img src={logo} />
                </Logo>

            </Animated>


            <Animated
                animation={{
                    // delay_in: 6,
                    in: FadeAnimations.FadeInBottom,
                    duration_in: 1
                }}
            >

                <Title>
                    <h1>We are lauching</h1> <h1 className='soonBlack'> soon!</h1>
                </Title>

            </Animated>

            <Description>
                <p>Subscribe and get notified</p>
            </Description>


            <Animated
                animation={{
                    in: FadeAnimations.FadeInLeft,
                    duration_in: 2
                }}
            >
            <ContainerInput>
                <form onSubmit={onSubmitForm}>
             
                <input placeholder='Your email address' 
                name={'email'}
                value={form.email}
                onChange={onChange}
                required
                type={"email"}
                />

                <button type={'submit'}>Notify me</button>

                </form>
            </ContainerInput>

        

                <ContainerPicture>
                    <img src={dashboard} />
                </ContainerPicture>

            </Animated>

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