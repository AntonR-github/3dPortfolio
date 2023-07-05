import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'
    >
            <div className='absolute w-full h-screen'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='absolute w-full h-full'
        >
          <svg
            className='w-full h-full'
            viewBox='0 0 1440 320'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill='#915eff'
              fillOpacity='1'
              d='M0,192L48,176C96,160,192,128,288,117.3C384,107,480,117,576,144C672,171,768,213,864,208C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
            ></path>
          </svg>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} 
      absolute inset-0 top-[120px] max-w-7x1
      mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div className=''>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, i am <span className='text-[#ffffff]'>Anton</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          And i'm a fullstack developer
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10
      bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-full border-4
           border-secondary flex justify-center items-center p-2'
          >
            <motion.div
            animate={{
              y: [0, 24, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1'
            ></motion.div>
          </div>
        </a>
      </div>
    </section>

  )
}

export default Hero