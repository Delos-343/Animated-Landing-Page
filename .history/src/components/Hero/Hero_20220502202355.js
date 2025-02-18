import React, { useEffect, useState } from 'react';
import { FiMail } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import { Modal } from '../index';

import {
  HeroSection, HeroButton,
  HeroText, HeroImage,
  HeroContent, Heading,
  ButtonWrapper,
  ButtonContainer,
  CharacterContainer,
  ImageCharacter,
} from './HeroStyles';


const Hero = () => {

  const [showModal, setShowModal] = useState(false);

  const dragConstraints = { top: 0, bottom: 0, right: 0, left: 0 };

  const toggleModal = () => {
    if(!showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    setShowModal(!showModal);
  };

  const variants = {

    hover: {

      y: 15,

      transition: {

        yoyo: Infinity,
        duration: 0.6,

      },
    },
  };

  const { ref, inView } = useInView({

    rootMargin: '-100px',

  });

  useEffect(() => {

    console.log(inView);
  
  }, [inView])

  return (
    <>
      <HeroSection id="hero">
        <HeroImage className='pattern' src="./images/hero-pattern-bg-lg.png" />
        <HeroImage className='guy' src="./images/hero-guy-1.png" />

        <CharacterContainer>
          <ImageCharacter
              dragConstraints={dragConstraints}
              className='one'
              src="./images/image 1.png"
          />
          
          <ImageCharacter
              dragConstraints={dragConstraints}
              className='two'
              src="./images/image 2.png"
          />
          
          <ImageCharacter
              variants={variants}
              whileHover="hover"
              drag
              dragConstraints={dragConstraints}
              className='three'
              src="./images/image 3.png"
          />

        </CharacterContainer>

        <HeroContent>

          <Heading> We are ATLAS </Heading>

          <HeroText>
            We are a team of passionate designers and developers with
            big dreams and the end goal to make unique and outstanding
            products &nbsp; — &nbsp; just for you !
          </HeroText>

          <ButtonContainer ref={ref}>
            <ButtonWrapper>
              <HeroButton onClick={toggleModal} className={inView ? '' : 'corner'}>
                { inView ? (
                    <> Chat with Us </>
                ) : (
                    <FiMail color="#fff" size="2.3rem" />
                )}
              </HeroButton>
            </ButtonWrapper>
          </ButtonContainer>

        </HeroContent>
      </HeroSection>
      
      <Modal showModal={showModal} toggleModal={toggleModal} />
    </>
  );
}

export default Hero;
