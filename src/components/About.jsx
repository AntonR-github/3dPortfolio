import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from './../utils/motion';
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
       variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
       className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card' 
      >
        <div
         options={{
            max: 45,
            scale: 1,
            speed: 450
         }}
         className='bg-tertiary rounded-[20px] py-5 px-12 ,om-h-[280] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}
       className='align-center flex flex-col items-center justify-center'
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About</h2>
      </motion.div>
      <motion.p variants={fadeIn('', '', 0.1, 1)}
      className='mt-4 text-secondary text-[24px] font-bold max-w-3x1 leader-[30px]
      items-center justify-center flex flex-col
      '
      >
    Hey!👋 My name is Anton,<br />
    I am a Fullstack developer with a passion for building beautiful and functional web apps.<br />
    I am a fast learner and always looking for new challenges to improve my skills and knowledge.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 items-center justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')