import css from './home.module.css'
import CTA from './modules/cta/cta'
import Representer from './modules/representer/representer'
import Startpart from './modules/startpart/startpart'

export default function Home(){
    return(
        <div id={css.homeContainer}>
            <Startpart/>
            <Representer/>
            <CTA/>
        </div>
    )
}