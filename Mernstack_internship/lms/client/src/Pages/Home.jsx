import React from 'react'
import './css/Home.css'
import SplitText from './SplitText/SplitText'

const Home = () => {
  const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
  return (
    <div className='home'>
      <div className='title'>
        <h1 class='head'>
         <SplitText
            text="Welcome to Olympics"
            className="text-6xl font-semibold text-black text-center p-2 "
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          /> 
        </h1>
        <p className='para'>Faster   Higher   Stronger</p>
        <div className='card'>
          <img src="https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/gqw0qujfqaa0gexpwckx" alt="" className='image1' />

          <p className='text'>The Olympics is a global multi-sport event held every four years, where athletes from around the world come together to compete at the highest level. It is divided into the Summer and Winter Games, each showcasing a wide range of sports and celebrating excellence, teamwork, and sportsmanship. The Olympics promotes peace and unity among nations, encouraging cultural exchange and mutual respect. Athletes train for years to represent their countries, making the event a symbol of dedication and human potential. Overall, the Olympics is one of the most prestigious and inspiring sporting events in the world.<br>
          
          
          </br>


            
<br></br>
The Olympics began in ancient Greece over 2,700 years ago, where athletes competed in events like running and wrestling to honor the Greek gods. The modern Olympic Games started in 1896, inspired by this ancient tradition, and have grown into the world’s biggest sporting festival. Today, the Olympics feature thousands of athletes from more than 200 countries, participating in a wide variety of sports. The Olympic values—**Excellence, Friendship, and Respect**—guide the spirit of the Games. The event also includes the **Olympic Torch Relay**, the **opening and closing ceremonies**, and the awarding of **gold, silver, and bronze medals** to the top athletes. The Olympics not only celebrate sports, but also promote peace, unity, and cultural exchange across the world.

          </p>

        </div>
      </div>
    </div >
  )
}

export default Home