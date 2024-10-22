import React from 'react'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className='aboutUs-container'>
      <header>
        <div className='leanKata-backdrop'>
          <h1>Educa <span>T</span>ech</h1>
        </div>
      </header>
      <main>
        <section>
        <h3>¡Transforma el <span>aprendizaje</span> , potencia cada habilidad!</h3>
        <p>"Aprendemos en la diversidad,donde cada estilo brilla y cada voz cuenta."</p>
        <p>"Aprende a tu ritmo,celebra cada logro, sin límites."</p>
        </section>


  <div className='cardsContainer'>
        <div className="card">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="card-inner">
        <img src=""/>
                <h4>Motrices</h4>
                <p>Controles simples para una navegación accesible a estudiantes con limitaciones motoras.</p>
        </div>
        </div>

        <div className="card">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="card-inner">
        <img src=""/>
                <h4>Auditivas</h4>
                <p>Subtítulos y opciones visuales que facilitan el aprendizaje sin barreras auditivas.</p>
        </div>
        </div>

        <div className="card">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="card-inner">
        <img src=""/>
                <h4> Visuales </h4>
                <p>Incluye ajustes de contraste y soporte auditivo para estudiantes con dificultades visuales.</p>
        </div>
        </div>
    </div>
        <hr></hr>
        
        <iframe width="560" height="315" src="https://www.youtube.com/embed/-2-F0KK1C_k?si=1YJqrww_1_mdSHjJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>        <div className='leankataDescription'>
        <p className='shortDescription'>Nuestra app ayuda a estudiantes con necesidades educativas especiales a alcanzar su máximo potencial, brindando herramientas personalizadas para el aprendizaje y el desarrollo. Facilita la participación de educadores y familias en el progreso del estudiante.</p>
        <p className='shortDescription'>La app combina tecnología accesible con métodos pedagógicos especializados, permitiendo un enfoque individualizado. A diferencia de otras, se adapta dinámicamente al ritmo y estilo de aprendizaje de cada estudiante, promoviendo la inclusión efectiva.</p>
        </div>
        </main>
    </div>
  )
}

export default AboutUs