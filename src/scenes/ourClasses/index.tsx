import { SelectedPage } from "@/shared/types";
import { motion } from 'framer-motion';
import { Htext } from "@/shared/Htext";
import { classes } from "@/data";
import ClassWidget from "./classWidget";
import { useEffect } from "react";

type Props = {
  setSelectedPage:(value:SelectedPage)=> void;
}

const ourClasses = ({setSelectedPage}: Props) => {
  return (
    <section id='ourclasses' className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{once: true, amount: 0.5}}
          transition={{delay: 0.2, duration: 0.5}}
          variants={{
              hidden: {opacity: 0 , x:-50},
              visible: {opacity: 1, x: 0}
          }}
          className="mx-auto w-5/6"
        >
            <div className="md:w-3/5">
              <h1 className={`${Htext}`}>OUR CLASSES</h1>
              <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
              </p>
            </div>

        </motion.div>
        {/*side scrolling*/}
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
            <ul className="w-[2800px] whitespace-nowrap">
               {classes.map((item,index)=>(
                  <ClassWidget
                  key={`${item.name}-${index}`}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                  />
               ))}
            </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default ourClasses