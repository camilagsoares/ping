import styled from 'styled-components'

export const Logo = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;
top: 4vw;

@media screen and (max-width: 600px){
    img{
        position: relative;
          top: 20vw;
    }
}
`

export const Title = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;
top: 5vw;

h1{
    color: #969696;
    font-family: 'Libre Franklin', sans-serif;
    font-weight: 300;
    font-size: 45px;

&.soonBlack{
 color: #141E28;   
 font-weight: 700;
 margin: 7px;
}
}

@media screen and (max-width: 600px){
    h1{
       font-size: 30px; 
       position: relative;
       top: 20vw;
    }
}

@media screen and (max-width: 280px) and (max-width: 653px){
h1{
font-size: 24px;

    &.soonBlack{
    margin: 2px;
}}
}

@media screen and (max-width: 320px) and (max-width: 653px){
h1{
font-size: 24px;

    &.soonBlack{
    margin: 4px;
}}
}
`

export const Description = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;

p{
    color: #404142;
    font-family: 'Libre Franklin', sans-serif;
    font-size: 20px;
    font-weight: 200;
    position: relative;
    top: 3vw;
}

@media screen and (max-width: 600px){
    p{
       position: relative;
       top: 20vw;
    }
}
`

export const ContainerInput = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;
top: 4vw;

input{
    width: 400px;
    height: 44px;
    border-radius: 24px;
    border: 1px solid #969696;
    outline: none;
    text-indent: 1vw;
    font-family: 'Libre Franklin', sans-serif;
    font-weight: 200;
    color: #141E28;
::placeholder{
    text-indent: 1vw;
    
}

}

button{
    background-color: hsl(223, 87%, 63%);
    color: white;
    width: 200px;
    height: 47px;
    border-radius: 25px;
    border: none;
    cursor: pointer;
    font-family: 'Libre Franklin', sans-serif;
    font-weight: 200;
    margin: 10px;
:hover{
    background-color: #3459B7;
}
}

@media screen and (max-width: 600px){
    position: relative;
    top: 25vw;
    display: flex;
    flex-wrap: wrap;
    input,button{
        width: 100%;
    }
}
`

export const ContainerPicture = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;
top: 7vw;

img{
    width: 40%;
}

@media screen and (max-width: 600px){

 

   img{
       width: 90%;
       position: relative;
    top: 25vw;
   }
}
`
export const ButtonsSocials = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
top: 10vw;

button{
    border-radius: 40px;
    border: 1px solid #DEDFDF;
    margin: 13px;
    width: 50px;
    height: 40px;
    background-color: transparent;
    cursor: pointer;


}

@media screen and (max-width: 600px){
    position: relative;
    top: 75vw;
}

`

export const Credits = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
top: 10vw;
p{
   color: #969696;
   font-family: 'Libre Franklin', sans-serif;
   font-weight: 300;

}

@media screen and (max-width: 600px){
    position: relative;
    top: 80vw;
}


`