import React from 'react'



const Testimonio = (props) => {
    return (
        <div >
            <h2>{props.persona}</h2>
            <img src={props.imagen} alt="" />
            <p>{props.texto}</p>

        </div>
    )

}
const Testimonios = () => {
    return (
        <div id = "testimonios">
            <h1> Testimonios</h1>
            <div className="testimonios-div">
            <Testimonio persona = "Miguel Ospina" texto = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit modi exercitationem, delectus impedit tempora ipsam voluptatibus? Ducimus at unde ex repudiandae accusantium dignissimos dolore, praesentium, nemo, ut id nostrum nesciunt." imagen ="https://res.cloudinary.com/dobboq5dt/image/upload/v1630416949/samples/people/smiling-man.jpg" />
            <Testimonio persona = "Juan Carlos" texto = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit modi exercitationem, delectus impedit tempora ipsam voluptatibus? Ducimus at unde ex repudiandae accusantium dignissimos dolore, praesentium, nemo, ut id nostrum nesciunt."imagen ="https://res.cloudinary.com/dobboq5dt/image/upload/v1630416947/samples/people/kitchen-bar.jpg" />

            </div>
            
        </div>
    )
    
    
}
export default Testimonios;