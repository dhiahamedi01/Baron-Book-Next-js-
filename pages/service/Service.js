import Nav from "@/Components/Header/Nav"
import Navi from "@/Components/Header/Navi"
import Footer from "@/Components/Footer/Footer"
import Back from "@/Components/Back"
import Serviceinfo from "@/Components/service/Serviceinfo"
import style from "../../styles/service.module.css";
export default function Service() {
    return (
      <>
      <div>
       <Navi></Navi>
       <Nav></Nav>
       <Back></Back>
      <div className={style.container}>
        <h3 className={style.text}>NOUS FOURNISSONS <span className={style.span}>LES MEILLEURS</span><br></br> SERVICES DE CONSTRUCTION</h3>
        <div  className={style.card}>
          <Serviceinfo></Serviceinfo>
        </div>
      </div>
      <Footer></Footer>
      </div>
      </>
    )
  }
  