import {motion} from 'framer-motion';
import Logo from '@/assets/Logo.png'

type Props = {}

const footer = (props: Props) => {
  return (

    <motion.div 
          className='px-10'
          initial='hidden'
          whileInView='visible'
          viewport={{once: true, amount: 0.5}}
          transition={{delay: 0.2, duration: 0.5}}
          variants={{
              hidden: {opacity: 0 , x:-50},
              visible: {opacity: 1, x: 0}
          }}>
          <div className='border-t-[1px] border-t-primary-500/40 w-full h-[100px] md:justify-between flex items-center justify-center'>
            <div>
              <img alt='logo' src={Logo} className='md:w-[160px] md:h-[50px] w-[100px] h-[40px] xs:gap-2 xs:mr-0 mr-10'/>
            </div>
            <div>
                <p className='md:text-[15px] text-[10px] m-1'>Copyright EVOFIT 2023©</p>
            </div>
            <div>
              <p className='md:text-[15px] text-[10px] m-1'>+44 448 28338 228</p>
            </div>
          </div>
      </motion.div>
  )
}

export default footer