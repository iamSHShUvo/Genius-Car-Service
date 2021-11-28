import React from 'react';
import Expert from '../Expert/Expert';

import mechanic1 from '../../../images/mechanic/mechanic-1.jpg'
import mechanic2 from '../../../images/mechanic/mechanic-2.jpg'
import mechanic3 from '../../../images/mechanic/machanic-3.jpg'
import mechanic4 from '../../../images/mechanic/mechanic-4.png'
import mechanic5 from '../../../images/mechanic/mechanic-5.png'


const experts=[
    {img:mechanic1 ,name:"John Alex",expertise:"-Engine Expert-"},
    {img:mechanic2 ,name:"Andrew Smith",expertise:"-Polish Expert-"},
    {img: mechanic3 ,name:"Alen Barry",expertise:"-Color Expert-"},
    {img:mechanic4 ,name:"Fin Anderson",expertise:"-Break Department-"},
    {img:mechanic5 ,name:"Harry Potter",expertise:"-Chasis Builder-"}
]

const Experts = () => {
    return (
        <div className="container">
            <h2 className="text-primary mt-5">Our Experts</h2>
            <div className="row">
               {
                   experts.map(expert=><Expert key={expert.name}
                   expert={expert}>

                   </Expert>)
               }
            </div>
        </div>
    );
};

export default Experts;

// [{"img":"https://i.ibb.co/2dtv9z2/mechanic-1.jpg","name":"John Alex","expertise":"-Engine Expert-"},{"img":"https://i.ibb.co/qyRHg0X/mechanic-2.jpg","name":"Andrew Smith","expertise":"-Polish Expert-"},{"img":"https://i.ibb.co/D92bjcH/machanic-3.jpg","name":"Alen Barry","expertise":"-Color Expert-"},{"img":"https://i.ibb.co/X430n7y/mechanic-4.jpg","name":"Fin Anderson","expertise":"-Break Department-"},{"img":"https://i.ibb.co/cc3YDV8/mechanic-5.jpg","name":"Harry Potter","expertise":"-Chasis Builder-"}]